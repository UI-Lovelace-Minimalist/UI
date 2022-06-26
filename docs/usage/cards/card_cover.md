---
title: Cover Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_cover.png){ width="500" }
![example-image](../../assets/img/ulm_cards/card_cover_controls.png){ width="500" }
![example-image](../../assets/img/ulm_cards/card_cover_horizontal.png){ width="500" }

With the `cover-card` you have the state of your cover. Optionnaly, on the second line, OPEN / PAUSE / CLOSE to control it and/or a slider to control position.

!!! warning
    This card has backward compatibilty with older template except custom name. It means variable `ulm_card_cover_buttons_name` must be replaced by `ulm_card_cover_name`.

## Variables

| Variable/Entity                        | Default         | Required         | Notes                                  | Requirement |
|----------------------------------------|-----------------|------------------|----------------------------------------|-------------|
| entity                                 |                 | :material-check: | Your HA entity                         |             |
| ulm_card_cover_name                    | `friendly_name` | :material-close: | Customize name                         |             |
| ulm_card_cover_display_left_right      | `false`         | :material-close: | Display left right control button      |             |
| ulm_card_curtain_display_collapse_expand      | `false`         | :material-close: | Display expand collapse control button |             |
| ulm_card_cover_garage      | `false`         | :material-close: | Display garage icon for garage cover   |             |
| ulm_card_cover_gate      | `false`         | :material-close: | Display gate icon for gate cover       |             |
| ulm_card_cover_enable_controls         | `false`         | :material-close: | Enable control buttons                 |             |
| ulm_card_cover_enable_slider           | `false`         | :material-close: | Enable slider                          |             |
| ulm_card_cover_enable_horizontal       | `false`         | :material-close: | Enable horizontal card                 | Need `ulm_card_cover_enable_controls: true` or `ulm_card_cover_enable_slider: true` |
| ulm_card_cover_enable_popup            | `false`         | :material-close: | Enable `popup_cover`                   | |

## Usage

```yaml
- type: "custom:button-card"
  template: card_cover
  entity: cover.window
  variables:
    ulm_card_cover_enable_controls: true
    ulm_card_cover_enable_slider: true
```

??? note "Template Code"

    ```yaml title="card_cover_buttons.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_cover.yaml"
    ```
