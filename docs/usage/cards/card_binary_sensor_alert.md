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

| Variable                                            | Default | Required         | Notes                                                                          |
| --------------------------------------------------- | ------- | ---------------- | ------------------------------------------------------------------------------ |
| entity                                              |         | :material-check: |                                                                                |
| ulm_card_binary_sensor_alert_show_last_changed      |         | :material-close: | `true` or `false`                                                              |
| ulm_card_binary_sensor_alert_name                   |         | :material-close: | Set custom Name                                                                |
| ulm_card_binary_sensor_alert_icon                   |         | :material-close: | Set custom Icon                                                                |
| ulm_icon_alert_invert_state                         | false   | :material-close: | Invert the alert state logic so an alert is shown when the sensor is "off"     |
| ulm_card_binary_sensor_alert_color                  | `blue`  | :material-close: | Set Custom Color                                                               |
| ulm_card_binary_sensor_alert_force_background_color | `false` | :material-close: | Set `ulm_card_binary_sensor_alert_color` as background color in active state ` |

!!! Warning "⚠️ Breaking Change `v1.0.1`"

    `show_last_changed` is changed to be used as variable:
    ```yaml
    variables:
      ulm_show_last_changed: true
    ```

!!! Warning "⚠️ Breaking Change `v1.3.8`"

    `ulm_show_last_changed` is renamed to `ulm_card_binary_sensor_show_last_changed`:
    ```yaml
    variables:
      ulm_card_binary_sensor_show_last_changed: true
    ```

## Usage

```yaml
- type: "custom:button-card"
  template: card_binary_sensor_alert
  variables:
    ulm_card_binary_sensor_alert: true
    ulm_card_binary_sensor_show_last_changed: true
  entity: binary_sensor.garage_door
```

??? note "Template Code"

    ```yaml title="card_binary_sensor_alert.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_binary_sensor_alert.yaml"
    ```
