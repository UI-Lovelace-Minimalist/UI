---
title: Power Outlet Card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_power_outlet.png){ width="500" }

This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet.

## Variables

| Variable                                     | Default  | Required         | Notes                                                                                           |
| -------------------------------------------- | -------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| entity                                       |          | :material-check: |                                                                                                 |
| ulm_card_power_outlet_name                   |          | :material-close: | Set custom Name                                                                                 |
| ulm_card_power_outlet_icon                   |          | :material-close: | Set custom Icon                                                                                 |
| ulm_card_power_outlet_consumption_sensor     |          | :material-close: | If you set this sensor, the `power-outlet-card` shows the energy consumption next to the state. |
| ulm_card_power_outlet_color                  | `yellow` | :material-close: | Set Custom Color                                                                                |
| ulm_card_power_outlet_force_background_color | `false`  | :material-close: | Set `ulm_card_power_outlet_color` as background color in active state `                         |

## Usage

```yaml
- type: "custom:button-card"
  template: card_power_outlet
  variables:
    ulm_card_power_outlet_consumption_sensor: sensor.power_outlet_livingroom_consumption
    ulm_card_power_outlet_name: Power Outlet Livingroom
  entity: switch.power_outlet_livingroom
```

??? note "Template Code"

    ```yaml title="card_power_outlet.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_power_outlet.yaml"
    ```
