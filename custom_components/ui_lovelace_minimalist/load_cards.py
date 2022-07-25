"""Load Plugins for UI Lovelace Minimalist Integration."""

from __future__ import annotations

import logging
import os

import aiofiles
import aiohttp
from homeassistant.core import HomeAssistant

from .base import UlmBase
from .const import COMMUNITY_CARDS_FOLDER, DOMAIN, GITHUB_REPO

_LOGGER: logging.Logger = logging.getLogger(__name__)


async def download_file(url: str, location: str):
    """Download file from github."""

    _LOGGER.debug(f"Downloading file: {location}")
    headers = {"Accept": "application/vnd.github+json"}
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers=headers) as resp:
            if resp.status == 200:
                os.makedirs(os.path.dirname(location), exist_ok=True)
                f = await aiofiles.open(location, mode="wb")
                await f.write(await resp.read())
                await f.close()


async def load_cards(hass: HomeAssistant, ulm: UlmBase):
    """Load Community Cards."""

    _LOGGER.debug("Configuring Community Cards")

    community_cards_dir = hass.config.path(
        f"custom_components/{DOMAIN}/__ui_minimalist__/ulm_templates/community_cards"
    )
    os.makedirs(community_cards_dir, exist_ok=True)
    if ulm.configuration.community_cards:
        headers = {"Accept": "application/vnd.github+json"}
        try:
            async with aiohttp.ClientSession() as session:
                # Clone repo
                # Copy files over to correct loc
                for card in ulm.configuration.community_cards:
                    async with session.get(
                        f"https://api.github.com/repos/{GITHUB_REPO}/contents/{COMMUNITY_CARDS_FOLDER}/{card}",
                        headers=headers,
                    ) as card_resp:
                        card_dir = await card_resp.json()
                        for f in card_dir:
                            file_name = f["name"]
                            file_type = f["type"]
                            if file_type == "file":
                                file_loc = f"{community_cards_dir}/{card}/{file_name}"
                                if os.path.exists(file_loc):
                                    file_size = os.path.getsize(file_loc)
                                    if file_size != f["size"]:
                                        await download_file(f["download_url"], file_loc)
                                else:
                                    await download_file(f["download_url"], file_loc)
                            # Only one dir deep supported for now
                            elif file_type == "dir":
                                async with session.get(
                                    f"https://api.github.com/repos/{GITHUB_REPO}/contents/{COMMUNITY_CARDS_FOLDER}/{card}/{file_name}",
                                    headers=headers,
                                ) as card_sub_dir_resp:
                                    card_sub_dir = await card_sub_dir_resp.json()
                                    for sf in card_sub_dir:
                                        sub_dir_file_name = sf["name"]
                                        sub_dir_file_type = sf["type"]
                                        if sub_dir_file_type == "file":
                                            file_loc = f"{community_cards_dir}/{card}/{file_name}/{sub_dir_file_name}"
                                            if os.path.exists(file_loc):
                                                file_size = os.path.getsize(file_loc)
                                                if file_size != sf["size"]:
                                                    await download_file(
                                                        f["download_url"], file_loc
                                                    )
                                            else:
                                                await download_file(
                                                    f["download_url"], file_loc
                                                )

        except Exception as e:
            _LOGGER.error(e)
