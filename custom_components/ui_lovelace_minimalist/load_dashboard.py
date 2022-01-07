from __future__ import annotations

import logging

from homeassistant.components.lovelace import _register_panel
from homeassistant.components.lovelace.dashboard import LovelaceYAML
from homeassistant.core import HomeAssistant

from .base import UlmBase

_LOGGER: logging.Logger = logging.getLogger(__name__)


def load_dashboard(hass: HomeAssistant, ulm: UlmBase):

    dashboard_url = "ui-lovelace-minimalist"
    dashboard_config = {
        "mode": "yaml",
        "icon": ulm.configuration.sidepanel_icon,
        "title": ulm.configuration.sidepanel_title,
        "filename": "custom_components/ui_lovelace_minimalist/lovelace/ui-lovelace.yaml",
        "show_in_sidebar": True,
        "require_admin": False,
    }

    # Optoinal override can be done with config_flow?
    # if not dashboard_url in hass.data["lovelace"]["dashboards"]:
    hass.data["lovelace"]["dashboards"][dashboard_url] = LovelaceYAML(
        hass, dashboard_url, dashboard_config
    )

    _register_panel(hass, dashboard_url, "yaml", dashboard_config, True)
