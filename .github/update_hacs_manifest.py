"""Update the manifest file with a new version string."""

import argparse
import json
from pathlib import Path

# Use a constant for the path to keep the logic clean
MANIFEST_PATH = Path("custom_components/ui_lovelace_minimalist/manifest.json")


def update_manifest() -> None:
    """Update the manifest file version."""
    # 1. Better Argument Parsing
    parser = argparse.ArgumentParser(description="Update manifest version.")
    parser.add_argument("-V", "--version", help="New version string", required=True)
    args = parser.parse_args()

    # 2. Check if file exists before opening
    if not MANIFEST_PATH.exists():
        print(f"Error: Manifest file not found at {MANIFEST_PATH}")  # noqa: T201
        return

    # 3. Read and Update
    try:
        # Using .read_text() and .write_text() from pathlib is cleaner
        manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))

        manifest["version"] = args.version

        # 4. Atomic-like write with consistent formatting
        with MANIFEST_PATH.open("w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=4, sort_keys=True)
            f.write("\n")  # Ensure trailing newline for POSIX compliance

        print(f"Successfully updated manifest to version {args.version}")  # noqa: T201

    except json.JSONDecodeError:
        print(f"Error: {MANIFEST_PATH} is not a valid JSON file.")  # noqa: T201
    except Exception as err:  # noqa: BLE001
        print(f"An unexpected error occurred: {err}")  # noqa: T201


if __name__ == "__main__":
    update_manifest()
