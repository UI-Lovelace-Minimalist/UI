---
title: card_media_player_art
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_media_player_art.png){ width="500" }

This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: | The media-player entity |
| name |  | :material-check: | Name to display for your media-player |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_media_player_art
  entity: media_player.livingroom_shield
  name: Livingroom Nvidia Shield
```

??? note "Template Code"

    ```yaml title="card_media_player_art.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_media_player_art.yaml"
    ```
