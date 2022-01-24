---
title: chip_mdi_icon_state
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_mdi_icon_state.png){ width="500" }

This `chip` displays an icon using [mdi](https://materialdesignicons.com/) and `state` of the chosen `entity`.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
|ulm_chip_mdi_icon_state_entity     |         | :material-check: | `entity` to link |                  |
|ulm_chip_mdi_icon_state_icon       |         | :material-close: | mdi:icon to display  |

## Usage

```yaml
- type: "custom:button-card"
  template: chip_mdi_icon_state
  variables:
    ulm_chip_mdi_icon_state_entity: light.kitchen_lights
    ulm_chip_mdi_icon_state_icon: mdi:lightbulb
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_mdi_icon_state.yaml"
    ```
