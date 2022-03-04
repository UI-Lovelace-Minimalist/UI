---
title: Icon State Chip
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_icon_state.png){ width="500" }

This `chip` displays an icon and a label, where the label can be any `state` of a `sensor` you configure.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity |  | :material-check: | `entity` to link |
| ulm_chip_icon_state_icon     |         | :material-check: | This is the icon to show. See See icons to read more about the used unicode `emojis`.  |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_icon_state
  entity: sensor.bed_occupancy
  variables:
    ulm_chip_icon_state_icon: '🛏️'
```

??? note "Template Code"

    ```yaml title="chip_icon_state.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_icon_state.yaml"
    ```
