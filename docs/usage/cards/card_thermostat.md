---
title: card_thermostat
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_thermostat.png){ width="500" }

The thermostat-card is used to switch a climate entity on/off and show the temperature from a (different) sensor.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity   |         | :material-check: |                   |
| ulm_card_thermostat_sensor   |         | :material-check: | Sensor for displaying the temperature |

## Usage

```yaml
- type: 'custom:button-card'
  template:
    - card_thermostat
  variables:
    ulm_card_thermostat_sensor: sensor.livingroom_temperature
  entity: climate.livingroom
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_thermostat.yaml"
    ```
