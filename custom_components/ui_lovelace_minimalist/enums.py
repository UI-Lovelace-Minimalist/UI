"""Helper constants."""

# pylint: disable=missing-class-docstring
from enum import StrEnum


class ConfigurationType(StrEnum):
    """What typ of config is used."""

    YAML = "yaml"
    CONFIG_ENTRY = "config_entry"


class UlmDisabledReason(StrEnum):
    """Reasons to disable ULM."""

    RATE_LIMIT = "rate_limit"
    INVALID_TOKEN = "invalid_token"  # nosec B105
    LOAD_ULM = "load_ulm"
