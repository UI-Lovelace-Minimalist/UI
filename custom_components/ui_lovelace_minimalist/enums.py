"""Helper constants."""
# pylint: disable=missing-class-docstring
from enum import Enum


class ConfigurationType(str, Enum):
    """What typ of config is used."""

    YAML = "yaml"
    CONFIG_ENTRY = "config_entry"
