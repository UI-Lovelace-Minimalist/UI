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

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: |                   |
| name     |         | :material-close: |                   |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_input_boolean
  entity: input_boolean.guest_mode
  name: Guest Mode
```

??? note "Template Code"

    ```yaml title="card_input_boolean.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_input_boolean.yaml"
    ```
