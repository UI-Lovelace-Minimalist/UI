"""Load Dashboards for UI Lovelace Minimalist Integration."""

from __future__ import annotations

import logging

from homeassistant.components.frontend import async_remove_panel
from homeassistant.components.lovelace import _register_panel
from homeassistant.components.lovelace.dashboard import LovelaceYAML
from homeassistant.core import HomeAssistant

from .base import UlmBase

_LOGGER: logging.Logger = logging.getLogger(__name__)


def load_dashboard(hass: HomeAssistant, ulm: UlmBase):
    """Load Dashboards."""

    dashboard_url = "ui-lovelace-minimalist"
    dashboard_config = {
        "mode": "yaml",
        "icon": ulm.configuration.sidepanel_icon,
        "title": ulm.configuration.sidepanel_title,
        "filename": "ui_lovelace_minimalist/dashboard/ui-lovelace.yaml",
        "show_in_sidebar": True,
        "require_admin": False,
    }

    # Optoinal override can be done with config_flow?
    # if not dashboard_url in hass.data["lovelace"]["dashboards"]:
    if ulm.configuration.sidepanel_enabled:
        hass.data["lovelace"]["dashboards"][dashboard_url] = LovelaceYAML(
            hass, dashboard_url, dashboard_config
        )

        _register_panel(hass, dashboard_url, "yaml", dashboard_config, True)
    else:
        if dashboard_url in hass.data["lovelace"]["dashboards"]:
            async_remove_panel(hass, "ui-lovelace-minimalist")
