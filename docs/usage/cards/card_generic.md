---
title: card_generic
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_generic.png){ width="500" }

This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| name     |         | :material-check: |                   |
|background| `true`  | :material-close: | Enable background |

## Usage

```yaml
- type: "custom:button-card"
  template: example
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_generic.yaml"
    ```
