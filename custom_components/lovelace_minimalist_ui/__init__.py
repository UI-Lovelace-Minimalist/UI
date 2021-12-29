import logging

from homeassistant.core import HomeAssistant
from homeassistant.core import Config
from homeassistant.config_entries import ConfigEntry
from homeassistant.components import frontend

from .const import DOMAIN, NAME, STARTUP_MESSAGE
from .load_dashboard import load_dashboard
from .load_plugins import load_plugins
from .process_yaml import process_yaml

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_setup(hass: HomeAssistant, config: Config):
    """Set up this integration using YAML is not supported."""

    load_plugins(hass, DOMAIN)

    return True

async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    _LOGGER.warning("async_setup_entry")

    if not DOMAIN in hass.data:
        hass.data[DOMAIN] = {}

    _LOGGER.debug(config_entry.options)
    if config_entry.options:
        data = config_entry.options.copy()
    else:
        if DOMAIN in hass.data:
            data = hass.data[DOMAIN]
        else:
            data = {}
            await hass.config_entries.async_remove(config_entry.entry_id)

    _LOGGER.debug(hass.data[DOMAIN])

    process_yaml(hass, config_entry)

    load_dashboard(hass, config_entry)

    config_entry.add_update_listener(_update_listener)

    return True

async def async_remove_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    _LOGGER.warning("{} is now uninstalled".format(NAME))

    #TODO cleanup:
    #  - themes
    #  - blueprints


    frontend.async_remove_panel(hass, "lovelace-minimalist-ui")


async def _update_listener(hass, config_entry):
    _LOGGER.warning('Update_listener called')

    process_yaml(hass, config_entry)

    hass.bus.async_fire("lovelace_minimalist_ui_reload")

    #register_modules(hass, config_entry.options)
    #load_dashboard(hass, config_entry)

    return True