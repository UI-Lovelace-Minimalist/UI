---
title: Input Datetime Custom-card
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Input Datetime Card"

The `card_input_datetime` you can control a input_datetime entity.

![Input Datetime Card](../../docs/assets/img/card_input_datetime.png)

## Credits

Author: sildehoop - 2022
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template:
    - card_input_datetime
  entity: input_datetime.YOUR_INPUT_DATETIME_ENTITY
  variables:
    ulm_card_input_datetime_name: "YOUR_NAME"
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
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

## Template code

??? note "Template Code"

    ```yaml title="custom_card_input_datetime.yaml"
    --8<-- "custom_cards/custom_card_input_datetime/card_input_datetime.yaml"
    ```
