---
title: card_generic_swap
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_generic_swap.png){ width="500" }

This is a `generic-card` with swapped label and name.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: |                   |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_generic_swap
  entity: sensor.next_waste_collection
```

??? note "Template Code"

    ```yaml title="card_generic_swap.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_generic_swap.yaml"
    ```
