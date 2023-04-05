---
title: Garage Chip Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-chip `Garage`

Custom-chip `Garage` is a chip showing the status of a garage door.

INSERT IMAGES

## Credits

Author: Vincent Lape - 2023
Credits: THe basis of this chip was derived from built-in [Alarm chip](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_alarm/)
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
  - type: 'custom:button-card'
    template: chip_garage
    entity: cover.garage_door
```

## Requirements

[UI Lovelace Minimalist](https://github.com/UI-Lovelace-Minimalist/UI)

## Variables

| Variable                | Default | Required         | Notes                      |
| ----------------------- | ------- | ---------------- | -------------------------- |
| entity                  |         | Yes | Garage door entity       |

## Template code

??? note "Template Code"

    ```yaml title="custom_chip_vlape_garage.yaml"
    --8<-- "custom_cards/custom_chip_vlape_garage/custom_chip_vlape_garage.yaml"
    ```
