---
title: Input Number Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Input Number"

The `card_input_number` you can control a input_number entity

![Input Number Card](../../docs/assets/img/card_input_number.png)

## Credits

Author: sildehoop - 2021
Version: 1.1.0

<h2 style="color: red">Braking changes</h2>

<details style="color: red">
  <summary>1.1.0</summary>

```yaml
#OLD
- type: "custom:button-card"
  template:
    - card_input_number
  variables:
    ulm_card_input_number_name: "YOUR_NAME"
    ulm_card_input_number_entity: "input_number.YOUR_INPUT_NUMBER"
```

```yaml
#NEW
- type: "custom:button-card"
  template: card_input_number
  entity: input_number.YOUR_INPUT_NUMBER_ENTITY
  variables:
    ulm_card_input_number_name: "YOUR_CARD_NAME"
```

</details>

## Changelog

<details>
<summary>1.1.0</summary>
Adds ability to work with counter entities. Compatibility with input number entities is not affected.
</details>
<details>
<summary>1.0.1</summary>
Added option to leave ulm_card_input_number_name empty (takes the friendly_name of the entity)
Removed background from middle text (because it is not a button).
Removed variables ulm_card_input_number_entity.
</details>
<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template: card_input_number
  entity: input_number.YOUR_INPUT_NUMBER
  variables:
    ulm_card_input_number_name: "YOUR_NAME"
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
<td>ulm_card_input_number_name</td>
<td>Bathroom Ceiling Fan Threshold</td>
<td>false</td>
<td>The name to display on your card</td>
</tr>
</table>

## Template code

??? note "Template Code"

    ```yaml title="custom_card_input_number.yaml"
    --8<-- "custom_cards/custom_card_input_number/card_input_number.yaml"
    ```
