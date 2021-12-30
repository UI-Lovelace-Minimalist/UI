import logging


from homeassistant.core import HomeAssistant
from homeassistant.components.lovelace.dashboard import LovelaceYAML
from homeassistant.components.lovelace import _register_panel
from homeassistant.components.automation import

from .base import LmuBase
from .const import DOMAIN, NAME, DEFAULT_SIDEPANEL_ICON, DEFAULT_SIDEPANEL_TITLE

_LOGGER: logging.Logger = logging.getLogger(__name__)

def load_dashboard(hass: HomeAssistant, lmu: LmuBase):

    dashboard_url = "lovelace-minimalist-ui"
    dashboard_config = {
        "mode": "yaml",
        "icon": lmu.configuration.sidepanel_icon,
        "title": lmu.configuration.sidepanel_title,
        "filename": "custom_components/lovelace_minimalist_ui/lovelace/ui-lovelace.yaml",
        "show_in_sidebar": True,
        "require_admin": False,
    }

    # Optoinal override can be done with config_flow?
    # if not dashboard_url in hass.data["lovelace"]["dashboards"]:
    hass.data["lovelace"]["dashboards"][dashboard_url] = LovelaceYAML(hass, dashboard_url, dashboard_config)

    _register_panel(hass, dashboard_url, "yaml", dashboard_config, True)
