---
title: Power Consumption Chip
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_power_consumption.png){ width="500" }

This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency).

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_chip_electric_consumption     |         | :material-check: | Variable / Entry Example Required ulm_chip_electric_consumption sensor.my_electric_power_consumption true. This is your consumed energy. This is the sensor, that shows how many *kWh*s are consumed.   |
|ulm_chip_electric_price|  | :material-check: | This is the price for your consumed energy, if you have such a sensor. This should be a sensor that shows a price in your defined currency. If this variable is not set, the chip shows only the *kWh*s! If this variable is set the chip shows the price for the consumed energy! |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_power_consumption
  variables:
    ulm_chip_electric_consumption: sensor.my_electric_power_consumption
    ulm_chip_electric_price: sensor.my_electric_power_price
```

??? note "Template Code"

    ```yaml title="chip_power_consumption.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_power_consumption.yaml"
    ```
