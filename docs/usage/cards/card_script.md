---
title: card_script
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_script.png){ width="500" }

This card starts/runs a script. You can configure icon and text.

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
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_script.yaml"
    ```
