import logging

from homeassistant.core import HomeAssistant
from homeassistant.core import Config
from homeassistant.config_entries import ConfigEntry
from homeassistant.components import frontend

from .const import DOMAIN, NAME, STARTUP_MESSAGE
from .load_dashboard import load_dashboard

_LOGGER: logging.Logger = logging.getLogger(__package__)


async def async_setup(hass: HomeAssistant, config: Config):
    """Set up this integration using YAML is not supported."""
    return True

async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    """Set up this integration using UI."""
    if hass.data.get(DOMAIN) is None:
        hass.data.setdefault(DOMAIN, {})
        _LOGGER.info(STARTUP_MESSAGE)

    load_dashboard(hass, config_entry)

    return True

async def async_remove_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    _LOGGER.warning("{} is now uninstalled".format(NAME))

    frontend.async_remove_panel(hass, "lovelace-minimalist-ui")