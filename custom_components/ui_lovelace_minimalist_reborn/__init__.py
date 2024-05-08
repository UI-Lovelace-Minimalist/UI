"""Custom Integration to setup UI Lovelace Minimalist."""
from __future__ import annotations

import logging
from typing import Any

from aiogithubapi import AIOGitHubAPIException, GitHubAPI
from homeassistant.components import frontend
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.core import Config, HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.loader import async_get_integration

from .base import UlmBase
from .const import DOMAIN, NAME
from .enums import ConfigurationType, UlmDisabledReason

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_initialize_integration(
    hass: HomeAssistant,
    *,
    config_entry: ConfigEntry | None = None,
    config: dict[str, Any] | None = None,
) -> bool:
    """Initialize the integration."""
    hass.data[DOMAIN] = ulm = UlmBase()
    ulm.enable_ulm()

    if config is not None:
        if DOMAIN not in config:
            return True
        if ulm.configuration.config_type == ConfigurationType.CONFIG_ENTRY:
            return True
        ulm.configuration.update_from_dict(
            {
                "config_type": ConfigurationType.YAML,
                **config[DOMAIN],
                "config": config[DOMAIN],
            }
        )

    if config_entry is not None:
        if config_entry.source == SOURCE_IMPORT:
            # not sure about this one
            hass.async_create_task(
                hass.config_entries.async_remove(config_entry.entry_id)
            )
            return False

        ulm.configuration.update_from_dict(
            {
                "config_entry": config_entry,
                "config_type": ConfigurationType.CONFIG_ENTRY,
                **config_entry.data,
                **config_entry.options,
            }
        )

    integration = await async_get_integration(hass, DOMAIN)

    clientsession = async_get_clientsession(hass)

    ulm.integration = integration
    ulm.version = integration.version
    ulm.session = clientsession
    ulm.hass = hass
    ulm.system.running = True
    ulm.githubapi = GitHubAPI(
        token=ulm.configuration.token,
        session=clientsession,
        **{"client_name": "ULM"},
    )

    async def async_startup():
        """ULM Startup tasks."""

        if (
            ulm.configuration.community_cards_enabled
            and ulm.configuration.token is None
        ):
            ulm.disable_ulm(UlmDisabledReason.INVALID_TOKEN)
            ulm.log.error(
                "Github token is not set up yet, please reconfigure the integration."
            )
            return False
        if ulm.configuration.community_cards_enabled:
            await ulm.fetch_cards()
            await ulm.configure_community_cards()

        if (
            not await ulm.configure_ulm()
            or not await ulm.configure_plugins()
            or not await ulm.configure_dashboard()
        ):
            return False

        ulm.enable_ulm()

        return not ulm.system.disabled

    try:
        startup_result = await async_startup()
    except AIOGitHubAPIException:
        startup_result = False
    if not startup_result:
        return False

    ulm.enable_ulm()

    return True


async def async_setup(hass: HomeAssistant, config: Config):
    """Set up this integration using UI."""
    return await async_initialize_integration(hass=hass, config=config)


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""

    config_entry.add_update_listener(async_reload_entry)
    return await async_initialize_integration(hass=hass, config_entry=config_entry)


async def async_remove_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    """Remove Integration."""
    _LOGGER.debug(f"{NAME} is now uninstalled")

    # TODO cleanup:
    #  - themes
    #  - blueprints
    frontend.async_remove_panel(hass, "ui-lovelace-minimalist")


async def async_reload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Reload Integration."""
    _LOGGER.debug("Reload the config entry")

    await async_setup_entry(hass, config_entry)
