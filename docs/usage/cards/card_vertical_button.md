---
title: Vertical Button Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_example.png){ width="500" }

Card `card_vertical_button` can be used in different ways. The primary usage is to switch between scenes or toggle a scene on/off. The secondary use is to toggle a switch or light. It's intended to be used with helper entities, either [input_select](https://www.home-assistant.io/integrations/input_select/) or [input_boolean](https://www.home-assistant.io/integrations/input_boolean/).

You connect the card to either an input_select (toggle between scenes) or input_boolean (toggle one scene) and the button will change the state of these entities. The final step is to create an automation that triggers on the state change and then runs the actions you want, apply a scene or interact with other entities.

The variable `ulm_card_vertical_button_state` needs to be used together with input_select to tie a specific state to the button.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_card_vertical_button_state     | on | :material-check: | Compare the entity state value with this value, ex: the button will be on if the entity.state == state (only required with input_select) |
| ulm_card_vertical_button_color | blue | :material-close: | color for the when the button is on. The color names are defined in the theme. The following colors are supported: blue, green, yellow, pink, red, purple |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_vertical_button
  entity: input_select.test_vertical_buttons
  name: Away
  icon: mdi:television-classic
  show_last_changed: true
  variables:
    ulm_card_vertical_button_state: Away
    ulm_card_vertical_button_color: green
```

??? note "Template Code"

    ```yaml title="card_vertical_button.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_vertical_button.yaml"
    ```
