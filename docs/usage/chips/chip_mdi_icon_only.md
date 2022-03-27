---
title: Mdi:icon Only Chip
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_mdi_icon_only.png){ width="500" }

This `chip` displays an icon using [mdi](https://materialdesignicons.com/).

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
|ulm_chip_mdi_icon_only_entity      |         | :material-check: | `entity` to link     |
|ulm_chip_mdi_icon_only_icon        |         | :material-check: | mdi:icon to display  |
|ulm_chip_mdi_icon_only_icon_color  | `primary-text-color` | :material-close: | Allow to change `icon` color |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_mdi_icon_only
  variables:
    ulm_chip_mdi_icon_only_entity: binary_sensor.bedroom_master_closed_door
    ulm_chip_mdi_icon_only_icon: mdi:door
```

??? note "Template Code"

    ```yaml title="chip_mdi_icon_only.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_mdi_icon_only.yaml"
    ```
