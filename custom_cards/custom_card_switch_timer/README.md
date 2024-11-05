---
title: Switch Timer Card
---

<!-- markdownlint-disable MD046 -->

## Description

<img src="https://i.imgur.com/ZTkhHP0.png">

Designed to be used with [Switch Timer](https://github.com/gh0stblizz4rd/ha-switch-timer) integration. Card used for controlling a `switch_timer` entity from UI Lovelace Minimalist dashboard. A [browser_mod](https://github.com/thomasloven/hass-browser_mod) popup is bound to the cards `hold_action`, containing the [set-timer-popup-card](https://github.com/gh0stblizz4rd/set-timer-popup-card) used for controlling the timer entity. [Browser_mod](https://github.com/thomasloven/hass-browser_mod) and [set-timer-popup-card](https://github.com/gh0stblizz4rd/set-timer-popup-card) are required for the card to function.

## Requirements

- [Switch Timer](https://github.com/gh0stblizz4rd/ha-switch-timer)
- [Browser_mod](https://github.com/thomasloven/hass-browser_mod)
- [set-timer-popup-card](https://github.com/gh0stblizz4rd/set-timer-popup-card)

## Credits

Author: gh0stblizz4rd - 2024 Version 1.0.0

## Variables

| Variable                                  | Default | Required | Notes                                         |
| ----------------------------------------- | ------- | -------- | --------------------------------------------- |
| entity                                    |         | Yes      | The actual switch entity for the device       |
| name                                      |         | Yes      |                                               |
| ulm_custom_card_switch_timer_timer_entity |         | Yes      | `switch_timer` entity to be controlled        |
| ulm_custom_card_switch_timer_power_sensor |         | No       | `sensor` entity to show the power consumption |

## Usage

```yaml
- type: "custom:button-card"
  template: custom_card_switch_timer
  name: Roof fan
  icon: "mdi:fan"
  variables:
    ulm_custom_card_switch_timer_timer_entity: switch_timer.roof_fan_switch
	ulm_custom_card_switch_timer_power_sensor: sensor.roof_fan_active_power
  entity: switch.roof_fan_switch
```

## Template code

??? note "Template Code"

    ```yaml title="custom_card_switch_timer.yaml"
    --8<-- "custom_cards/custom_card_switch_timer/custom_card_switch_timer.yaml"
    ``
