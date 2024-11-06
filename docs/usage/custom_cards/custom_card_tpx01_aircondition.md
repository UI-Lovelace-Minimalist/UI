---
title: AirCondition Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "AirCondition"

The `custom_card_tpx01_aircondition` shows data from your air condition and gives you the possibility to control it.

## Credits

Author: tpx01 - 2021
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: custom:button-card
  template: custom_card_tpx01_aircondition_with_buttons
  variables:
    entity: climate.livingroom
    name: A/C Livingroom
```

## Requirements

n/a

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity</td>
<td>climate.livingroom</td>
<td>yes</td>
<td>Your climate entity</td>
</tr>
<tr>
<td>name</td>
<td>A/C Livingroom</td>
<td>yes</td>
<td>The name to show</td>
</tr>
</table>

## Template code

??? note "Template Code"

    ```yaml title="custom_card_tpx01_aircondition.yaml"
    --8<-- "custom_cards/custom_card_tpx01_aircondition/custom_card_tpx01_aircondition.yaml"
    ```
