---
title: card_media_player_with_controls
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_media_player_art.png){ width="500" }

With the `card_media_player_with_controls` you have the state of your media_player and on the second line PREVIOUS / PLAY-PAUSE / NEXT to control it

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_card_media_player_with_controls_entity     |         | :material-check: | The media-player entity |
| ulm_card_media_player_with_controls_name |      | :material-check: | Name to display for your media-player |

## Usage

```yaml
- type: 'custom:button-card'
  template:
    - card_media_player_with_controls
  variables:
    ulm_card_media_player_with_controls_name: "Livingroom Shield"
    ulm_card_media_player_with_controls_entity: media_player.livingroom_shield
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_media_player_with_controls.yaml"
    ```
