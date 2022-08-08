"""Constants for UI Lovelace Minimalist."""
from typing import TypeVar

# Base component constants
NAME = "UI Lovelace Minimalist"
DOMAIN = "ui_lovelace_minimalist"
DOMAIN_DATA = f"{DOMAIN}_data"
VERSION = "0.0.1"
CLIENT_ID = "c1603968d9d29a2492df"

TV = TypeVar("TV")

PACKAGE_NAME = "custom_components.ui_lovelace_minimlist"

ATTRIBUTION = "Data provided by http://jsonplaceholder.typicode.com/"
ISSUE_URL = "https://github.com/stokkie90/ui-lovelace-minimalist/issues"

GITHUB_REPO = "UI-Lovelace-Minimalist/UI"
COMMUNITY_CARDS_FOLDER = "custom_cards"

LANGUAGES = {
    "Czech": "cs",
    "Danish": "da",
    "German": "de",
    "English (GB)": "en",
    "Spanish": "es",
    "French": "fr",
    "Italian": "it",
    "Dutch": "nl",
    "Norwegian": "no",
    "Polish": "pl",
    "Portuguese": "pt",
    "Portuguese (Brazil)": "pt-BR",
    "Slovak": "sk",
    "Swedish": "sv",
    "Turkish": "tr",
    "Russian": "ru",
}

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
CONF_COMMUNITY_CARDS_ENABLED = "community_cards_enabled"
CONF_COMMUNITY_CARDS = "community_cards"
CONF_COMMUNITY_CARDS_ALL = [
    "card-1",
    "card-2",
    "card-3",
    "card-4",
    "card-5",
    "card-6",
    "card-7",
    "card-8",
    "card-9",
    "card-9",
    "card-0",
    "card-11",
    "card-12",
]

# Defaults
DEFAULT_NAME = DOMAIN
DEFAULT_LANGUAGE = "English (GB)"
DEFAULT_SIDEPANEL_ENABLED = True
DEFAULT_SIDEPANEL_TITLE = NAME
DEFAULT_SIDEPANEL_ICON = "mdi:flower"
DEFAULT_SIDEPANEL_ADV_ENABLED = False
DEFAULT_SIDEPANEL_ADV_TITLE = NAME
DEFAULT_SIDEPANEL_ADV_ICON = "mdi:flower"
DEFAULT_THEME = "minimalist-desktop"
DEFAULT_THEME_PATH = "themes/"
DEFAULT_INCLUDE_OTHER_CARDS = False
DEFAULT_COMMUNITY_CARDS_ENABLED = False
DEFAULT_COMMUNITY_CARDS = []

STARTUP_MESSAGE = f"""
-------------------------------------------------------------------
{NAME}
Version: {VERSION}
This is a custom integration!
If you have any issues with this you need to open an issue here:
{ISSUE_URL}
-------------------------------------------------------------------
"""
