---
title: Generic Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_generic.png){ width="500" }

This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: |                   |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_generic
  entity: sensor.next_waste_collection
```

??? note "Template Code"

    ```yaml title="card_generic.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_generic.yaml"
    ```
