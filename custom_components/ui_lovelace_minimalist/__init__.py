"""Custom Integration to setup UI Lovelace Minimalist."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.components import frontend
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.core import Config, HomeAssistant

from .base import UlmBase
from .configure import configure_cards
from .const import DOMAIN, NAME
from .enums import ConfigurationType
from .load_dashboard import load_dashboard
from .load_plugins import load_plugins

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_initialize_integration(
    hass: HomeAssistant,
    *,
    config_entry: ConfigEntry | None = None,
    config: dict[str, Any] | None = None,
) -> bool:
    """Initialize the integration."""
    hass.data[DOMAIN] = ulm = UlmBase()

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
    _LOGGER.debug("Configuration type: %s", ulm.configuration.config_type)

    configure_cards(hass=hass, ulm=ulm)

    load_plugins(hass=hass, ulm=ulm)

    load_dashboard(hass=hass, ulm=ulm)

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
