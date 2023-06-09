---
title: Tesla car temperature chip
hide:
  - toc
---

## Description

![example-image](../../docs/assets/img/custom_chip_tesla_temperature.png)

# Custom-chip `Tesla Temperature`

Custom-chip `Tesla Temperature` is a chip showing the status of set temperature and current inside temperature.

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
  - type: "custom:button-card"
    template: custom_chip_tesla_temperature
    variables:
        ulm_chip_hvac: climate.tesla_hvac_climate_system
```

## Requirements

[UI Lovelace Minimalist](https://github.com/UI-Lovelace-Minimalist/UI)

[Tesla Custom Integration](https://github.com/alandtse/tesla)

## Variables

| Variable                | Default | Required         | Notes                      |
| ----------------------- | ------- | ---------------- | -------------------------- |
| ulm_chip_hvac           |         | Yes              | Tesla hvac entity          |

## Template code

    ```yaml title="custom_chip_tesla_temperature.yaml"
    --8<-- "custom_cards/custom_chip_tesla_temperature/custom_chip_tesla_temperature.yaml"
    ```