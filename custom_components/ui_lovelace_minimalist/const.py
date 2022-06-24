"""Constants for UI Lovelace Minimalist."""
# Base component constants
NAME = "UI Lovelace Minimalist"
DOMAIN = "ui_lovelace_minimalist"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "0.0.1"

ATTRIBUTION = "Data provided by http://jsonplaceholder.typicode.com/"
ISSUE_URL = "https://github.com/stokkie90/ui-lovelace-minimalist/issues"


CONF_LANGUAGE = "language"
CONF_LANGUAGES = [
    "Czech",
    "Danish",
    "German",
    "English (GB)",
    "Spanish",
    "French",
    "Italian",
    "Dutch",
    "Norwegian",
    "Polish",
    "Portuguese",
    "Portuguese (Brazil)",
    "Slovak",
    "Swedish",
    "Turkish",
    "Russian",
]
CONF_SIDEPANEL_ENABLED = "sidepanel_enabled"
CONF_SIDEPANEL_TITLE = "sidepanel_title"
CONF_SIDEPANEL_ICON = "sidepanel_icon"
CONF_SIDEPANEL_ADV_ENABLED = "adaptive_ui_enabled"
CONF_SIDEPANEL_ADV_TITLE = "adaptive_ui_title"
CONF_SIDEPANEL_ADV_ICON = "adaptive_ui_icon"
CONF_THEME = "theme"
CONF_THEME_PATH = "theme_path"
CONF_THEME_OPTIONS = [
    "minimalist-mobile",
    "minimalist-desktop",
    "minimalist-mobile-tapbar",
    "HA selected theme",
]
CONF_INCLUDE_OTHER_CARDS = "include_other_cards"

# Defaults
DEFAULT_NAME = DOMAIN
DEFAULT_LANGUAGE = "English (GB)"
DEFAULT_SIDEPANEL_ENABLED = False
DEFAULT_SIDEPANEL_TITLE = NAME
DEFAULT_SIDEPANEL_ICON = "mdi:flower"
DEFAULT_THEME = "minimalist-desktop"
DEFAULT_THEME_PATH = "themes/"
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
