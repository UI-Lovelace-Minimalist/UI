---
title: Icon Label Chip
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_icon_label.png){ width="500" }

This `chip` displays an icon using [mdi](https://materialdesignicons.com/) and a label.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
|icon      |         | :material-check: | Icon to display   |
|label     |         | :material-check: | Label to display  |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_icon_label
  label: Label
  icon: 'mdi:heart'
```

??? note "Template Code"

    ```yaml title="chip_icon_label.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_icon_label.yaml"
    ```
