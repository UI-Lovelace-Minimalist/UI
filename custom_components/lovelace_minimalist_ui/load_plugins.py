import logging
from homeassistant.components.frontend import add_extra_js_url

DATA_EXTRA_MODULE_URL = 'frontend_extra_module_url'

_LOGGER: logging.Logger = logging.getLogger(__package__)

def load_plugins(hass, name):
    add_extra_js_url(hass, "/lovelace_minimalist_ui/js/lovelace-minimalist-ui.js")

    # # Cards by others
    # add_extra_js_url(hass, "/lovelace_minimalist_ui/cards/button-card/button-card.js")
    # add_extra_js_url(hass, "/lovelace_minimalist_ui/cards/lovelace-card-mod/card-mod.js")
    # add_extra_js_url(hass, "/lovelace_minimalist_ui/cards/lovelace-card-mod/rollup.config.js")
    # add_extra_js_url(hass, "/lovelace_minimalist_ui/cards/mini-graph-card/mini-graph-card-bundle.js")
    # add_extra_js_url(hass, "/lovelace_minimalist_ui/cards/mini-media-card/mini-media-player-bundle.js")
    # add_extra_js_url(hass, "/lovelace_minimalist_ui/cards/slider-button-card/slider-button-card.js")

    # Cards by Lovelace Minimalist UI

    # Register
    hass.http.register_static_path("/lovelace_minimalist_ui/js", hass.config.path(f"custom_components/{name}/js"), True)
    # hass.http.register_static_path("/lovelace_minimalist_ui/cards", hass.config.path(f"custom_components/{name}/cards"), True)