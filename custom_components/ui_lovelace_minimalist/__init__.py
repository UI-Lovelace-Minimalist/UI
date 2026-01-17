"""Custom Integration to setup UI Lovelace Minimalist."""

from __future__ import annotations

import logging
from pathlib import Path
import shutil
from typing import TYPE_CHECKING, Any, cast

from aiogithubapi import AIOGitHubAPIException, GitHubAPI, GitHubClientKwarg
from homeassistant.components.frontend import async_remove_panel
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.loader import async_get_integration
import voluptuous as vol

if TYPE_CHECKING:
    from homeassistant.core import HomeAssistant

from .base import UlmBase
from .const import DOMAIN, NAME
from .enums import ConfigurationType, UlmDisabledReason

_LOGGER: logging.Logger = logging.getLogger(__package__)

CONFIG_SCHEMA = vol.Schema({DOMAIN: vol.Schema({})}, extra=vol.ALLOW_EXTRA)


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
        **cast("dict[GitHubClientKwarg, Any]", {"client_name": "ULM"}),
    )

    async def async_startup() -> bool:
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

        response_configure = await ulm.configure_ulm()
        response_plugins = await ulm.configure_plugins()
        response_dashboard = await ulm.configure_dashboard()
        if not response_configure or not response_plugins or not response_dashboard:
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


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up this integration using UI."""
    return await async_initialize_integration(hass=hass, config=config)


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""
    config_entry.async_on_unload(
        config_entry.add_update_listener(config_entry_update_listener)
    )
    return await async_initialize_integration(hass=hass, config_entry=config_entry)


async def async_remove_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Remove Integration."""
    _LOGGER.debug("%s is now uninstalled", NAME)

    # Remove the Frontend Panels
    async_remove_panel(hass, "ui-lovelace-minimalist")

    dashboard_url = "ui-lovelace-minimalist"
    is_registered = dashboard_url in hass.data.get("frontend_panels", {})
    sidepanel_enabled = config_entry.options.get("sidepanel_enabled", False)

    # Check config entry options and if sidepanel is enabled
    if is_registered or sidepanel_enabled:
        _LOGGER.debug("Removing Minimalist dashboard panel: %s", dashboard_url)

        # Remove minimalist panel from the sidebar
        async_remove_panel(hass, dashboard_url)

        # Clean up the Lovelace YAML object if it exists in memory
        if (
            "lovelace" in hass.data
            and dashboard_url in hass.data["lovelace"].dashboards
        ):
            hass.data["lovelace"].dashboards.pop(dashboard_url)

    adaptive_url = "adaptive-dash"
    is_registered = adaptive_url in hass.data.get("frontend_panels", {})
    adaptive_enabled = config_entry.options.get("adaptive_ui_enabled", False)

    # Check config entry options and if sidepanel is enabled
    if is_registered or adaptive_enabled:
        _LOGGER.debug("Removing Minimalist adaptive panel: %s", adaptive_url)

        # Remove adaptive panel from the sidebar
        async_remove_panel(hass, adaptive_url)

        # Clean up the Lovelace YAML object if it exists in memory
        if "lovelace" in hass.data and adaptive_url in hass.data["lovelace"].dashboards:
            hass.data["lovelace"].dashboards.pop(adaptive_url)

    # Identify theme and blueprint paths for cleanup
    theme_path = config_entry.options.get("theme_path", "themes")

    paths_to_remove = [
        Path(hass.config.path(theme_path)) / "minimalist-desktop",
        Path(hass.config.path(theme_path)) / "minimalist-mobile",
        Path(hass.config.path(theme_path)) / "minimalist-ios-tapbar",
        Path(hass.config.path(theme_path)) / "minimalist-mobile-tapbar",
        Path(
            hass.config.path(
                "custom_components/ui_lovelace_minimalist/__ui_minimalist__"
            )
        ),
    ]

    def _cleanup_files(paths: list[Path]):
        """Sync cleanup task for the executor."""

        for path in paths:
            if path.exists():
                if path.is_dir():
                    shutil.rmtree(path, ignore_errors=True)
                else:
                    path.unlink(missing_ok=True)

    # Run cleanup in executor
    await hass.async_add_executor_job(_cleanup_files, paths_to_remove)


async def config_entry_update_listener(
    hass: HomeAssistant, config_entry: ConfigEntry
) -> None:
    """Update listener, called when the config entry options are changed."""
    _LOGGER.debug("Start config_entry_update async_reload")

    await hass.config_entries.async_reload(config_entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Unload Integration."""
    _LOGGER.debug("Unload the config entry")

    return True
