---
title: chip_navigate
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_navigate.png){ width="500" }

This `chip` is a menu button with an icon using [mdi](https://materialdesignicons.com/).

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
|ulm_chip_navigate_path     |         | :material-check: | `path` to navigate to |
|ulm_chip_navigate_icon     |         | :material-close: | Icon to use |

## Usage

```yaml
- type: "custom:button-card"
  template: chip_navigate
  variables:
    ulm_chip_navigate_path: /lovelace-minimalist-test/
    ulm_chip_navigate_icon: mdi:sofa
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_navigate.yaml"
    ```
