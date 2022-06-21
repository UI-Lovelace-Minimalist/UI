---
title: More Power Outlet Card
---
<!-- markdownlint-disable MD046 -->

## Description

<img width="248" alt="image" src="https://user-images.githubusercontent.com/30660751/167216999-2a911d70-0955-410e-a050-ebdcc4c43706.png">

This is the power outlet card is very similar to the default `power-outlet-card` from UI-Minimalist but it is also possible to show two additional sensors - one for total energy and one for time.

## Credits

Author: Wranglatang - 2022 Vesion 1.0.0

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: |                   |
|name|  | :material-check: | Enable background |
|custom_card_more_power_outlet_power_sensor|  | :material-close: | If you set this sensor, the `custom_card_more_power_outlet` shows the current power consumption (W). |
|custom_card_more_power_outlet_energy_sensor|  | :material-close: | If you set this sensor, the `custom_card_more_power_outlet` shows the energy consumption (kWh) - Typically used with a Daily [Utility Meter](https://www.home-assistant.io/integrations/utility_meter). |
|custom_card_more_power_outlet_time_sensor|  | :material-close: | If you set this sensor, the `custom_card_more_power_outlet` shows the a duration (Mins) - Typically used with the [History Stats](https://www.home-assistant.io/integrations/history_stats). |

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_more_power_outlet
  variables:
    custom_card_more_power_outlet_power_sensor: sensor.immersion_heater_power
    custom_card_more_power_outlet_energy_sensor: sensor.immersion_heater_energy_daily
    custom_card_more_power_outlet_time_sensor: sensor.time_immersion_heater_heating
  entity: switch.immersion_heater
  name: Immersion Heater
```

## Template code

```yaml
---
### Custom Card More Power Outlet ###
custom_card_more_power_outlet:
  template:
    - "icon_info_bg"
    - "yellow"
    - "ulm_language_variables"
  variables:
    custom_card_more_power_outlet_power_sensor:
    custom_card_more_power_outlet_energy_sensor:
    custom_card_more_power_outlet_time_sensor:
  triggers_update: "all"
  label: |-
    [[[
      if (entity.state === "on" && variables.custom_card_more_power_outlet_power_sensor !== null && variables.custom_card_more_power_outlet_energy_sensor !== null && variables.custom_card_more_power_outlet_time_sensor !== null) {
        if (states[variables.custom_card_more_power_outlet_time_sensor].state < 1){
          return states[variables.custom_card_more_power_outlet_power_sensor].state + "W • " + states[variables.custom_card_more_power_outlet_energy_sensor].state + "kWh • " + (states[variables.custom_card_more_power_outlet_time_sensor].state * 100) + "Mins";
        } else
          return states[variables.custom_card_more_power_outlet_power_sensor].state + "W • " + states[variables.custom_card_more_power_outlet_energy_sensor].state + "kWh • " + states[variables.custom_card_more_power_outlet_time_sensor].state + "Hrs";
      } else if (entity.state === "on" && variables.custom_card_more_power_outlet_power_sensor !== null && variables.custom_card_more_power_outlet_energy_sensor !== null) {
        return states[variables.custom_card_more_power_outlet_power_sensor].state + "W • " + states[variables.custom_card_more_power_outlet_energy_sensor].state + "kWh";
      } else if (entity.state === "on" && variables.custom_card_more_power_outlet_power_sensor !== null && variables.custom_card_more_power_outlet_time_sensor !== null) {
          if (states[variables.custom_card_more_power_outlet_time_sensor].state < 1){
          return states[variables.custom_card_more_power_outlet_power_sensor].state + "W • " + (states[variables.custom_card_more_power_outlet_time_sensor].state * 100) + "Mins";
        } else
          return states[variables.custom_card_more_power_outlet_power_sensor].state + "W • " + states[variables.custom_card_more_power_outlet_time_sensor].state + "Hrs";
      } else if (entity.state === "on" && variables.custom_card_more_power_outlet_energy_sensor !== null && variables.custom_card_more_power_outlet_time_sensor !== null) {
          if (states[variables.custom_card_more_power_outlet_time_sensor].state < 1){
          return states[variables.custom_card_more_power_outlet_energy_sensor].state + "kWh • " + (states[variables.custom_card_more_power_outlet_time_sensor].state * 100) + "Mins";
        } else
          return states[variables.custom_card_more_power_outlet_energy_sensor].state + "kWh • " + states[variables.custom_card_more_power_outlet_time_sensor].state + "Hrs";
      } else if (entity.state === "on" && variables.custom_card_more_power_outlet_power_sensor !== null) {
        return states[variables.custom_card_more_power_outlet_power_sensor].state + "W";

      } else if (entity.state === "on" && variables.custom_card_more_power_outlet_energy_sensor !== null) {
        return states[variables.custom_card_more_power_outlet_energy_sensor].state + "kWh";

      } else if (entity.state === "on" && variables.custom_card_more_power_outlet_time_sensor !== null) {
          if (states[variables.custom_card_more_power_outlet_time_sensor].state < 1){
          return (states[variables.custom_card_more_power_outlet_time_sensor].state * 100) + "Mins";
        } else
          return states[variables.custom_card_more_power_outlet_time_sensor].state + "Hrs";
      } else if (entity.state === "on") {
        return variables.ulm_on;
      } else if (entity.state === "off") {
        return variables.ulm_off;
      } else if (entity.state === "unavailable") {
        return variables.ulm_unavailable;
      } else {
        return entity.state;
      }
    ]]]
```
