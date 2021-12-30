"""Base Lovelace Minimalist UI class."""
from __future__ import annotations

import asyncio
from dataclasses import asdict, dataclass, field
from typing import Any

from .enums import (
    ConfigurationType
)


@dataclass
class LmuConfiguration:
    """LmuConfiguration class."""

    config: dict[str, Any] = field(default_factory=dict)
    config_entry: dict[str, str] = field(default_factory=dict)
    config_type: ConfigurationType | None = None
    sidepanel_icon: str = "hacs:hacs"
    sidepanel_title: str = "HACS"
    theme_path: str = "themes/"
    theme: bool = False
    plugin_path: str = "www/community/"


    def to_json(self) -> str:
        """Return a json string."""
        return asdict(self)

    def update_from_dict(self, data: dict) -> None:
        """Set attributes from dicts."""
        if not isinstance(data, dict):
            raise Exception("Configuration is not valid.")

        for key in data:
            self.__setattr__(key, data[key])


class LmuBase:
    """Base Lovelace Minimalist UI."""

    configuration = LmuConfiguration()
