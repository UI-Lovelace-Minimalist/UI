---
title: Customizing
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

When you have finished the installation process succesfully it's time to start customizing your dashboard.
You can find your ui-minimalist-lovelace file here:

```yaml
config
└── ui_lovelace_minimalist
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
```

It should look like this:

??? note "ui-lovelace.yaml"

    ```yaml
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ui-lovelace.yaml"
    ```

## How to customize the dashboard

You can customize your dashboard like any other YAML-based lovelace dashboard. *NOTE: UI-mode is not yet supported*
So first let add some cards. These can be found on the [Wiki](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_battery/). As an example we will add the [`card_light`](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_light/) and [`card_vacuum`](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_vacuum/) next to each other with help of a `horizontal-stack`. Please read carefully the wiki-page of each of the cards to understand their specific variables.

```yaml
---
button_card_templates: !include_dir_merge_named "../../custom_components/ui_lovelace_minimalist/__ui_minimalist__/ulm_templates/"

title: "UI Lovelace Minimalist"
theme: "minimalist-desktop"
background: "var(--background-image)"
# views: !include_dir_merge_list "views/"
views:
  - title: "Example View"
    path: 0
    icon: "mdi:flower"
    cards:
      - type: "horizontal-stack"
        cards:
          - type: "custom:button-card"
            template: card_light
            entity: light.living_room
            variables:
              ulm_card_light_enable_slider: true
              ulm_card_light_enable_color: true
          - type: "custom:button-card"
            template: "card_vacuum"
            entity: "vacuum.roborock_s5"
```

## Add multiple dashboards

After you have build your first dashboard with UI-Minimalist it's time to build multiple dashboards.
If you would to be able to adjust non-UI-Minimalist with the UI-mode it's best to work with storage mode.
For the first dashboard we did all the configuration for you. To add a second one you need to take a few steps.

 Add another `ui-lovelace.yaml` to your dashboard folder:

```yaml
config
└── ui_lovelace_minimalist
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
        └── ui-lovelace_2.yaml
```

 Add a reference to it in `configuration.yaml`: *Note: You don't need to add the first one*

```yaml
lovelace:
  mode: storage
  # Add yaml dashboards
  dashboards:
    lovelace-minimalist-2:
      mode: yaml
      title: Minimalist 2
      icon: mdi:flower
      show_in_sidebar: true
      filename: ui_lovelace_minimalist/dashboard/ui-lovelace_2.yaml
```
