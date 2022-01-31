---
title: card_media_player
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_media_player.png){ width="500" }

The `card_media_player` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon.

## Variables

 Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: | The media-player entity |
| name |      | :material-check: | Name to display for your media-player |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_media_player
  entity: media_player.livingroom_shield
  name: Livingroom Nvidia Shield
```

??? note "Template Code"

    ```yaml title="card_media_player.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_media_player.yaml"
    ```
