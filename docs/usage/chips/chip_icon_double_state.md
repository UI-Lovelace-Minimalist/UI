---
title: chip_icon_dauble_state
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_example.png){ width="500" }

Chip description should be here.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_chip_icon_double_state_icon     |         | :material-check: | This is the icon to show. See icons to read more about the used unicode `emojis`. |
|ulm_chip_icon_double_state_entity_1|     | :material-check: |  |
|ulm_chip_icon_double_state_entity_2|     | :material-check: |  |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_icon_double_state
  variables:
    ulm_chip_icon_double_state_icon: '💻'
    ulm_chip_icon_double_state_entity_1: sensor.nas_disk_used
    ulm_chip_icon_double_state_entity_2: sensor.nas_cpu_load
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_icon_double_state.yaml"
    ```
