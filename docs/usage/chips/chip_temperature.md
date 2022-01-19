---
title: chip_temperature
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_example.png){ width="500" }

This `chip` is to display a weather icon together with the outside and inside temperature.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_chip_temperature_outside     |         | :material-check: | This is the sensor that provides your outside temperature. If you want to use eg. a temperature value from your weather provider, you'd need to setup a template sensor first. The state of this sensor should represent a numeric value (°C or °F doesn't matter).  |
|ulm_chip_temperature_inside|   | :material-check: | This is the sensor that provides your inside temperature. The state of this sensor should represent a numeric value (°C or °F doesn't matter). |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_temperature
  variables:
    ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
    ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
    ulm_chip_temperature_weather: weather.my_weather_provider
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_temperature.yaml"
    ```
