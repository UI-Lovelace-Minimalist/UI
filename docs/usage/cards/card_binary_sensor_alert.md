---
title: Binary Sensor Alert Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_binary_sensor_alert.png){ width="500" }

The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor. This card shows an alert if the state is on/open or unavailable.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: |                   |
| show_last_changed |   | :material-close: | `true` or `false` |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_binary_sensor_alert
  variables:
    - ulm_card_binary_sensor_alert: true
  entity: binary_sensor.garage_door
  show_last_changed: true
```

??? note "Template Code"

    ```yaml title="card_binary_sensor_alert.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_binary_sensor_alert.yaml"
    ```
