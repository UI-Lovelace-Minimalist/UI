---
title: Input_boolean Card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_input_boolean.png){ width="500" }

The `input-boolean-card` is to switch an `input_boolean` on or off.

## Variables

| Variable                                      | Default | Required         | Notes                                                                    |
| --------------------------------------------- | ------- | ---------------- | ------------------------------------------------------------------------ |
| entity                                        |         | :material-check: |                                                                          |
| ulm_card_input_boolean_name                   |         | :material-close: | Set custom Name                                                          |
| ulm_card_input_boolean_icon                   |         | :material-close: | Set custom Icon                                                          |
| ulm_card_input_boolean_color                  | `blue`  | :material-close: | Set Custom Color                                                         |
| ulm_card_input_boolean_force_background_color | `false` | :material-close: | Set `ulm_card_input_boolean_color` as background color in active state ` |

## Usage

```yaml
- type: "custom:button-card"
  template: card_input_boolean
  entity: input_boolean.guest_mode
  variables:
    ulm_card_input_boolean_name: Guest Mode
```

??? note "Template Code"

    ```yaml title="card_input_boolean.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_input_boolean.yaml"
    ```
