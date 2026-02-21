---
title: Custom-Chip "Moon"
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-Chip "Moon"

![Moon_light](../../assets/img/custom_chip_moon/custom_chip_moon_light.png)
![Moon_dark](../../assets/img/custom_chip_moon/custom_chip_moon_dark.png)

## Credits

Author: JStaegerino - 2025
Version 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template: custom_chip_moon
  entity: sensor.moon_phasee
```

## Requirements

Add the official [Moon](https://www.home-assistant.io/integrations/moon/) integration from Home Assistant

## Variables

| Variable                | Default | Required         | Notes                      |
| ----------------------- | ------- | ---------------- | -------------------------- |
| entity                  |         | :material-check: | Your moon phase sensor     |

## Template code

??? note "Template Code"

    ```yaml title="custom_chip_moon.yaml"
    --8<-- "custom_cards/custom_chip_moon/custom_chip_moon.yaml"
    ```
