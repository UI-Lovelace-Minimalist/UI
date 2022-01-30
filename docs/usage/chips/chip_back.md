---
title: chip_back
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->
## Description

![example-image](../../assets/img/ulm_chips/chip_back.png){ width="500" }

This is a `back-button`, primarly used if you switch between views and want a convenient way back.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_chip_back_path     |         | :material-check: | Set the navigation path to your default view, eg. ui-lovelace-minimalist/home or lovelace |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_back
  variables:
    ulm_chip_back_path: /ui-lovelace-minimalist/home
```

??? note "Template Code"

    ```yaml title="chip_back.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_back.yaml"
    ```
