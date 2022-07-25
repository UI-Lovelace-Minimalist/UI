"""Load Plugins for UI Lovelace Minimalist Integration."""

from __future__ import annotations

import logging
import os
import shutil

import aiofiles
import aiohttp
from homeassistant.core import HomeAssistant

from .base import UlmBase
from .const import COMMUNITY_CARDS_FOLDER, DOMAIN, GITHUB_REPO

_LOGGER: logging.Logger = logging.getLogger(__name__)


async def download_file(ulm: UlmBase, url: str, location: str):
    """Download file from github."""
    _LOGGER.debug(f"Downloading file: {str(location)}")

    gh_token = ulm.configuration.token
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"token {gh_token}"
        }

    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers=headers) as resp:
                if resp.status == 200:
                    print(location)
                    os.makedirs(os.path.dirname(location), exist_ok=True)
                    f = await aiofiles.open(location, mode="wb")
                    await f.write(await resp.read())
                    await f.close()
    except Exception as e:
        _LOGGER.error(e)


async def fetch_cards(ulm: UlmBase):
    """Fetch all community cards from github"""

    _LOGGER.debug("Getting list from github to update all-cards data config item.")
    errors: dict[str, str] = {}
    gh_token = ulm.configuration.token
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"token {gh_token}"
    }
    try:
        async with aiohttp.ClientSession(raise_for_status=True) as session:
            gh_root_tree_sha = ""
            async with session.get(
                f"https://api.github.com/repos/{GITHUB_REPO}/git/trees/HEAD",
                headers=headers,
            ) as gh_root_tree_resp:
                gh_root_tree = await gh_root_tree_resp.json()
                for p in gh_root_tree["tree"]:
                    if p["path"] == COMMUNITY_CARDS_FOLDER:
                        gh_root_tree_sha = p["sha"]
                        break
            if gh_root_tree_sha:
                async with session.get(
                    f"https://api.github.com/repos/{GITHUB_REPO}/git/trees/{gh_root_tree_sha}",
                    headers=headers,
                ) as gh_cards_tree_resp:
                    gh_cards_tree = await gh_cards_tree_resp.json()
                    ulm.configuration.all_community_cards = [
                        p["path"]
                        for p in gh_cards_tree["tree"]
                        if p["type"] == "tree"
                    ]
            else:
                errors["base"] = "github_cards"
    except Exception as e:
        _LOGGER.error(f"ERROR: {e}")
        errors["base"] = "github_cards"

    return errors


async def load_cards(hass: HomeAssistant, ulm: UlmBase):
    """Load Community Cards."""

    _LOGGER.debug("Configuring Community Cards")

    await fetch_cards(ulm)

    community_cards_dir = hass.config.path(
        f"custom_components/{DOMAIN}/__ui_minimalist__/ulm_templates/community_cards"
    )
    os.makedirs(community_cards_dir, exist_ok=True)

    if not ulm.configuration.community_cards:
        # Clear out directory
        shutil.rmtree(f"{community_cards_dir}/", ignore_errors=True)
    else:
        existing_cards = [f.path for f in os.scandir(community_cards_dir) if f.is_dir()]
        for e in existing_cards:
            card_dir = os.path.basename(e)
            # Delete unselected folders
            if card_dir not in ulm.configuration.community_cards:
                _LOGGER.debug(
                    f"Deleting community card folder {card_dir}, not selected anymore."
                )
                shutil.rmtree(e, ignore_errors=True)
            if card_dir not in ulm.configuration.all_community_cards:
                _LOGGER.debug(
                    f"Deleting community card folder {card_dir}, that is not existing anymore on Github."
                )
                shutil.rmtree(e, ignore_errors=True)

    gh_token = ulm.configuration.token

    if ulm.configuration.community_cards:
        for card in ulm.configuration.community_cards:
            if card not in ulm.configuration.all_community_cards:
                print("joow " + card)
                ulm.configuration.community_cards.remove(card)
        headers = {
            "Accept": "application/vnd.github+json",
            "Authorization": f"token {gh_token}"
        }
        try:
            async with aiohttp.ClientSession(raise_for_status=True) as session:
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
                                        await download_file(ulm, f["download_url"], file_loc)
                                else:
                                    await download_file(ulm, f["download_url"], file_loc)
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
                                            sub_dir_file_loc = f"{community_cards_dir}/{card}/{file_name}/{sub_dir_file_name}"
                                            if os.path.exists(sub_dir_file_loc):
                                                file_size = os.path.getsize(sub_dir_file_loc)
                                                if file_size != sf["size"]:
                                                    await download_file(
                                                        ulm,
                                                        sf["download_url"],
                                                        sub_dir_file_loc
                                                    )
                                            else:
                                                await download_file(
                                                    ulm,
                                                    sf["download_url"],
                                                    sub_dir_file_loc
                                                )

        except Exception as e:
            _LOGGER.error(e)
