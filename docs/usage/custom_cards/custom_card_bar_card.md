---
title: Bar Card Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Bar Card"

This is a `custom-card` to display a percentage value as a bar.

![Screenshot](../../assets/img/screenshot_bar_card.png)

## Credits

Author: rphlwnk - 2021 Version: 1.0.0
Update: JStaegerino - 2026 Version 2.0.0

## Changelog

<details>
<summary>2.0.0</summary>
rebase code and make it work
<summary>1.0.0</summary>
Initial release.
</details>
<details>
<summary>0.1.1</summary>
Fix for UI Minimalist v1.0.1.
</details>
<details>
<summary>0.1.2</summary>
Fix border radius
</details>

## Requirements

This card needs the following to function correctly:

[Custom Card 'Bar-Card'](https://github.com/custom-cards/bar-card)

## Usage

```yaml
- type: "custom:button-card"
  template: custom_card_bar_card
  entity: sensor.memory_use_percent
  variables:
    ulm_custom_card_bar_card_name: Memory Usage
    ulm_custom_card_bar_card_value: true
    ulm_custom_card_bar_card_indicator: true
    ulm_custom_card_bar_card_color: "var(--google-green)"
    ulm_custom_card_bar_card_min: 10
    ulm_custom_card_bar_card_max: 20
```

## Variables

| Variable                            | Default | Required         | Notes                                |
| ----------------------------------- | ------- | ---------------- | ------------------------------------ |
| entity                              |         | :material-check: | Your entity-id for the bar           |
| ulm_custom_card_bar_card_name       |         | :material-close: | Overwrites the sensor name           |
| ulm_custom_card_bar_card_min        | 0       | :material-close: | Change the minimum value of the bar  |
| ulm_custom_card_bar_card_max        | 100     | :material-close: | Change the maximum value of the bar  |
| ulm_custom_card_bar_card_value      | false   | :material-close: | If true, shows the value in the bar  |
| ulm_custom_card_bar_card_color      | blue    | :material-close: | Change the color of the bar          |
| ulm_custom_card_bar_card_icon       |         | :material-close: | Overwrites the sensor icon           |
| ulm_custom_card_bar_card_icon_color |         | :material-close: | Overwrites the sensor icon color     |
| ulm_custom_card_bar_card_show_icon  | true    | :material-close: | If false, hides icon and title       |

## Example

```yaml
- type: "custom:button-card"
  template: custom_card_bar_card
  entity: sensor.memory_use_percent
  variables:
    ulm_custom_card_bar_card_name: Memory Usage
```

??? note "Template Code"

    ```yaml title="custom_card_bar_card.yaml"
    --8<-- "custom_cards/custom_card_bar_card/custom_card_bar_card.yaml"
    ```
