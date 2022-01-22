---
title: Configuration
hide:
  - toc
---

## Add theme to your Lovelace

To get this theme with all the button templates working make sure at least the generated Lovelace Dashboard is working.

### YAML Mode

When you create your dashboards using Yaml mode add the following lines at the top of the Lovelace Yaml file of your dashboard configuration.

```yaml
# For future use!
ui_lovelace_minimalist: !include "custom_components/ui_lovelace_minimalist/lovelace/plugins/ui_lovelace_minimalist.yaml"

# Button cards location
button_card_templates: !include_dir_merge_named "custom_components/ui_lovelace_minimalist/__ui_minimalist__/ulm_templates/"

```

### UI Mode

1. Open the dashboard you want to Edit
2. Go to Edit mode
3. Click again on the Three dots and select "Raw Configuration Editor"
4. Add the following lines at the top:

    ```yaml
    # For future use!
    ui_lovelace_minimalist: !include "custom_components/ui_lovelace_minimalist/lovelace/plugins/ui_lovelace_minimalist.yaml"

    # Button cards location
    button_card_templates: !include_dir_merge_named "custom_components/ui_lovelace_minimalist/__ui_minimalist__/ulm_templates/"

    ```

## Custom Cards

This integration also allows you to add your own Custom Button Cards. These cards will be merged into a directory together witch the cards of this integration and the selected Language.

You might have noticed, during the installation process a directory for UI Lovelace Minimalist is/should be created in the Home Assistant configuration directory. The directory is named `ui_lovelace_minimalist`, within this directory you can put custom cards in the folder `custom_cards`. Make sure it's in the format [include_dir_merge_named](https://www.home-assistant.io/docs/configuration/splitting_configuration/#example-include_dir_merge_named).

Example on how the directory tree could look is:

```yaml
config
└── ui_lovelace_minimalist
    ├── config
    ├── custom_cards
    |   ├── custom_card_1
    |   |   ├── custom_card_1.yaml
    |   |   └── EN.yaml
    |   └── custom_card_2
    |       ├── custom_card_2.yaml
    |       └── EN.yaml
    └── dashboard
```

Once you have added new custom_cards, you can always check the orders via Home Assistant and add the new cards to the config.
Just go to "Configuration" --> "Settings" in Home Assistant and press the "UI_LOVELACE_MINIMALIST" button within the "YAML configuration reloading" section.
