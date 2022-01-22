---
title: card_vertical_button
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_example.png){ width="500" }

Card description should be here.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_card_vertical_button_state     | on | :material-check: | Compare the entity state value with this value, ex: the button will be on if the entity.state == state |
| ulm_card_vertical_button_color | blue | :material-close: | color for the when the button is on. The color names are defined in the theme. The following colors are supported: blue, green, yellow, pink, red, purple |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_vertical_button
  entity: input_select.test_vertical_buttons
  name: Away
  icon: mdi:television-classic
  variables:
    ulm_card_vertical_button_state: Away
    ulm_card_vertical_button_color: green
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_vertical_button.yaml"
    ```
