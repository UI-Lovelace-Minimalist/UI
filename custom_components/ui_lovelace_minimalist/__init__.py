"""Custom Integration to setup UI Lovelace Minimalist."""

from __future__ import annotations

import logging
from typing import Any

from aiogithubapi import AIOGitHubAPIException, GitHubAPI
from homeassistant.components.frontend import async_remove_panel
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.core import HomeAssistant
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

        ResponseConfigure = await ulm.configure_ulm()
        ResponsePlugins = await ulm.configure_plugins()
        ResponseDashboard = await ulm.configure_dashboard()
        if not ResponseConfigure or not ResponsePlugins or not ResponseDashboard:
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


async def async_setup(hass: HomeAssistant, config: dict):
    """Set up this integration using UI."""
    return await async_initialize_integration(hass=hass, config=config)


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""

    config_entry.add_update_listener(config_entry_update_listener)
    return await async_initialize_integration(hass=hass, config_entry=config_entry)


async def async_remove_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    """Remove Integration."""
    _LOGGER.debug(f"{NAME} is now uninstalled")

    # TODO cleanup:
    #  - themes
    #  - blueprints
    async_remove_panel(hass, "ui-lovelace-minimalist")


async def async_reload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Reload Integration."""
    _LOGGER.debug("Reload the config entry")

    await async_setup_entry(hass, config_entry)


async def config_entry_update_listener(
    hass: HomeAssistant, config_entry: ConfigEntry
) -> None:
    """Update listener, called when the config entry options are changed."""
    _LOGGER.debug("Start config_entry_update async_reload")

    await hass.config_entries.async_reload(config_entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    """Unload Integration."""
    _LOGGER.debug("Unload the config entry")

    return await async_initialize_integration(hass=hass, config_entry=config_entry)
