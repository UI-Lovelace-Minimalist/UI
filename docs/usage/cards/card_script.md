---
title: card_script
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_script.png){ width="500" }

This card starts/runs a script. You can configure icon and text.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_card_script_title     |         | :material-check: | Name to show for the script. |
|ulm_card_script_icon|   | :material-check: | Icon to show for the script. |
|tap_action_action|   | :material-check: | Only call-service is allowed here. |
|tap_action_service|   | :material-check: | Let the script run by turning it on. |
|tap_action_service_data|   | :material-check: | This is the service_data needed by your script. That can be an entity_id and/or some variables. |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_script
  variables:
    ulm_card_script_title: Romantic lights
    ulm_card_script_icon: 'mdi:candle'
  tap_action:
    action: call-service
    service: script.turn_on
    service_data:
      entity_id: script.romantic_livingroom_lights
```

??? note "Template Code"

    ```yaml title="card_script.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_script.yaml"
    ```
