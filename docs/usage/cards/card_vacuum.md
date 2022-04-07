---
title: Vacuum Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_vacuum_docked.png){ width="250" }
![example-image](../../assets/img/ulm_cards/card_vacuum_cleaning.png){ width="250" }
![example-image](../../assets/img/ulm_cards/card_vacuum_returning.png){ width="250" }

This is a card to control your Robot-vacuum. It has support for all vacuums which use the services `vacuum.start`, `vacuum.stop`, `vacuum.return_to_base` and `vacuum.locate`

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity   |  `vacuum.*` | :material-check: |                   |
|`ulm_card_vacuum_name`|  | :material-close: | Add a custom name |
|`ulm_card_vacuum_icon`|   | :material-close: | Add a custom MDI icon |
|`ulm_card_vacuum_label`|  | :material-close: | Add a custom label |
|`ulm_card_vacuum_room`|   | :material-close: | Add a script to clean a specific room |
|`ulm_card_vacuum_room_icon`|   | :material-close: | Add custom icon to the room script |

## Usage

```yaml
- type: "custom:button-card"
  template: "card_vacuum"
  entity: "vacuum.<Your_Vacuum>"

- type: "custom:button-card"
  template: "card_vacuum"
  entity: "vacuum.<Your_Vacuum>"
  variables:
    ulm_card_vacuum_room: "script.clean_kitchen"
    ulm_card_vacuum_room_icon: "mdi:table-chair"
```

??? note "Template Code"

    ```yaml title="card_vacuum.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_vacuum.yaml"
    ```
