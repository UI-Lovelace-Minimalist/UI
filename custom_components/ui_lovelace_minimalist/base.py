"""Base UI Lovelace Minimalist class."""
from __future__ import annotations

from dataclasses import asdict, dataclass, field
from typing import Any

from .const import (
    DEFAULT_INCLUDE_OTHER_CARDS,
    DEFAULT_LANGUAGE,
    DEFAULT_SIDEPANEL_ENABLED,
    DEFAULT_SIDEPANEL_ICON,
    DEFAULT_SIDEPANEL_TITLE,
    DEFAULT_THEME,
    DEFAULT_THEME_PATH,
)
from .enums import ConfigurationType


@dataclass
class UlmConfiguration:
    """UlmConfiguration class."""

    config: dict[str, Any] = field(default_factory=dict)
    config_entry: dict[str, str] = field(default_factory=dict)
    config_type: ConfigurationType | None = None
    sidepanel_enabled: bool = DEFAULT_SIDEPANEL_ENABLED
    sidepanel_icon: str = DEFAULT_SIDEPANEL_ICON
    sidepanel_title: str = DEFAULT_SIDEPANEL_TITLE
    theme_path: str = DEFAULT_THEME_PATH
    theme: str = DEFAULT_THEME
    plugin_path: str = "www/community/"
    include_other_cards: bool = DEFAULT_INCLUDE_OTHER_CARDS
    language: str = DEFAULT_LANGUAGE

    def to_dict(self) -> dict:
        """Return Dict."""
        return self.__dict__

    def to_json(self) -> str:
        """Return a json string."""
        return asdict(self)

    def update_from_dict(self, data: dict) -> None:
        """Set attributes from dicts."""
        if not isinstance(data, dict):
            raise Exception("Configuration is not valid.")

        for key in data:
            self.__setattr__(key, data[key])


class UlmBase:
    """Base UI Lovelace Minimalist."""

    configuration = UlmConfiguration()
