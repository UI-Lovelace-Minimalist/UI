import logging

from homeassistant.core import HomeAssistant
from homeassistant.core import Config
from homeassistant.config_entries import ConfigEntry
from homeassistant.components import frontend

from .const import DOMAIN, NAME, STARTUP_MESSAGE
from .load_dashboard import load_dashboard
from .process_yaml import process_yaml

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_setup(hass: HomeAssistant, config: Config):
    """Set up this integration using YAML is not supported."""
    return True

async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    _LOGGER.warning("async_setup_entry")

    # _LOGGER.error(print(hass.data["hass_customize"]))
    # for test in hass.data["hass_customize"].items():
    #     _LOGGER.warning(test)
    # for i in config_entry.options.items():
    #     _LOGGER.warning(str(i))

    # """Set up this integration using UI."""
    # if hass.data.get(DOMAIN) is None:
    #     hass.data.setdefault(DOMAIN, {})
    #     _LOGGER.info(STARTUP_MESSAGE)

    process_yaml(hass, config_entry)

    load_dashboard(hass, config_entry)


    config_entry.add_update_listener(_update_listener)

    return True

async def async_remove_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    _LOGGER.warning("{} is now uninstalled".format(NAME))

    frontend.async_remove_panel(hass, "lovelace-minimalist-ui")


async def _update_listener(hass, config_entry):
    _LOGGER.warning('Update_listener called')

    process_yaml(hass, config_entry)

    hass.bus.async_fire("lovelace_minimalist_ui_reload")

    #register_modules(hass, config_entry.options)
    #load_dashboard(hass, config_entry)

    return True