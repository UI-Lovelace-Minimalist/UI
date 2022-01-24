---
title: card_navigate
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_navigate.png){ width="500" }

The `card_navigate` is for navigating inside your HA dashboard(s).

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_card_navigate_path     |         | :material-check: | The path to your lovelace dashboard |
| ulm_card_navigate_title |   | :material-check: | Title to show for the link |
| ulm_card_navigate_icon |   | :material-check: | Icon to show |

## Usage

```yaml
- type: custom:button-card
  template: card_navigate
  variables:
    ulm_card_navigate_path: /ui-lovelace-minimalist/media
    ulm_card_navigate_title: Media
    ulm_card_navigate_icon: mdi:television
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_navigate.yaml"
    ```
