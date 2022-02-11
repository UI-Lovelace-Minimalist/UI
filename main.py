"""
MKDocs Macros Module
"""

from __future__ import annotations
from simplejson import load

import yaml
import os 
import fnmatch

from typing import Any, TypeVar, Union, TextIO
from collections import OrderedDict
from collections.abc import Iterator

JSON_TYPE = Union[list, dict, str]  # pylint: disable=invalid-name
DICT_T = TypeVar("DICT_T", bound=dict)  # pylint: disable=invalid-name

def _is_file_valid(name: str) -> bool:
    """Decide if a file is valid."""
    return not name.startswith(".")

def _find_files(directory: str, pattern: str):
    """Recursively load files in a directory."""
    ulm_templates = []
    for root, dirs, files in os.walk(directory, topdown=True):
        dirs[:] = [d for d in dirs if _is_file_valid(d)]
        for basename in sorted(files):
            if _is_file_valid(basename) and fnmatch.fnmatch(basename, pattern):
                ulm_templates.append(os.path.join(root, basename))
    return ulm_templates

def load_yaml(fname: str) -> JSON_TYPE:
    """Load a YAML file."""
    try:
        with open(fname, encoding="utf-8") as conf_file:
            try:
                return (
                    yaml.load(conf_file, Loader=lambda stream: yaml.SafeLoader(stream))
                    or OrderedDict()
                )
            except yaml.YAMLError as exc:
                print(exc)
    except UnicodeDecodeError as exc:
        print(exc)

# def parse_yaml(content: str | TextIO) -> JSON_TYPE:
#     """Load a YAML file."""
#     try:
#         # If configuration file is empty YAML returns None
#         # We convert that to an empty dict
#         return (
#             yaml.load(content, Loader=lambda stream: SafeLineLoader(stream))
#             or OrderedDict()
#         )
#     except yaml.YAMLError as exc:
#         print(exc)
        
# def _include_dir_merge_named_yaml(
#     loader: SafeLineLoader, node: yaml.nodes.Node
# ) -> OrderedDict:
#     """Load multiple files from directory as a merged dictionary."""
#     mapping: OrderedDict = OrderedDict()
#     loc = os.path.join(os.path.dirname(loader.name), node.value)
#     for fname in _find_files(loc, "*.yaml"):
#         loaded_yaml = load_yaml(fname)
#         if isinstance(loaded_yaml, dict):
#             mapping.update(loaded_yaml)
#     return _add_reference(mapping, loader, node)

def define_env(env):
    ulm_templates_folder = "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/"
    mapping: OrderedDict = OrderedDict()
    for fname in _find_files(ulm_templates_folder, "*.y*ml"):
        loaded_yaml = load_yaml(fname)
        if isinstance(loaded_yaml, dict):
            for card, data in loaded_yaml.items():
                if "doc" in data: 
                    mapping.update(loaded_yaml)
    env.variables["ulm_cards"] = mapping
    env.variables["rick_test"] = "rick-test-value"
