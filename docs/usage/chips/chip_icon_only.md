---
title: chip_icon_only
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_icon_only.png){ width="500" }

This `chip` displays just an icon.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_chip_icon_only     |         | :material-close: | This is the icon to show. See icons to read more about the used unicode `emojis`.  |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_icon_only
  variables:
    ulm_chip_icon_only: '❤️'
```

??? note "Template Code"

    ```yaml title="chip_icon_only.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_icon_only.yaml"
    ```
