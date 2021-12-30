"""Constants for Lovelace Minimalist UI."""
# Base component constants
NAME = "Lovelace Minimalist UI"
DOMAIN = "lovelace_minimalist_ui"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "0.0.1"

ATTRIBUTION = "Data provided by http://jsonplaceholder.typicode.com/"
ISSUE_URL = "https://github.com/stokkie90/lovelace-minimalist-ui/issues"


CONF_LANGUAGE = "language"
CONF_LANGUAGES = ["English", "German", "Spanish", "French", "Italian", "Swedish", "Dutch"]
CONF_SIDEPANEL_TITLE = "sidepanel_title"
CONF_SIDEPANEL_ICON = "sidepanel_icon"
CONF_THEME = "theme"
CONF_THEME_OPTIONS = [
    "minimalist-mobile-light",
    "minimalist-mobile-dark",
    "minimalist-desktop-light",
    "minimalist-desktop-dark",
    "HA selected theme",
]
CONF_INCLUDE_OTHER_CARDS = "include_other_cards"

# Defaults
DEFAULT_NAME = DOMAIN
DEFAULT_LANGUAGE = "English"
DEFAULT_SIDEPANEL_TITLE = NAME
DEFAULT_SIDEPANEL_ICON = "mdi:flower"
DEFAULT_THEME = "minimalist-desktop"
DEFAULT_INCLUDE_OTHER_CARDS = False

STARTUP_MESSAGE = f"""
-------------------------------------------------------------------
{NAME}
Version: {VERSION}
This is a custom integration!
If you have any issues with this you need to open an issue here:
{ISSUE_URL}
-------------------------------------------------------------------
"""
