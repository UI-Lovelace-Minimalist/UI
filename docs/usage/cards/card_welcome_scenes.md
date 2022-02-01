---
title: Card Welcome Scenes
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_welcome_scenes.png){ width="500" }

This is a card which shows the basic needs for your dashboard. This card can generate itself automatically. It is also included in the preview-dashboard which comes with a fresh installation of UI-Minimalist.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_weather   |         | :material-check: | This is your weather provider. <br> Example: `weather.your_provider`|
|ulm_time| `sensor.time`  | :material-check: | Sensor to check the current time. <br> Example: `sensor.time` |
|entity_pill_1| `script.*`  | :material-close: | Script entity to show in the first pill. <br> When not configured it will be auto-configured with `auto-entities` |
|entity_pill_2| `script.*`  | :material-close: | Script entity to show in the first pill. <br> When not configured it will be auto-configured with `auto-entities` |
|entity_pill_3| `script.*`  | :material-close: | Script entity to show in the first pill. <br> When not configured it will be auto-configured with `auto-entities` |
|entity_pill_4| `script.*`  | :material-close: | Script entity to show in the first pill. <br> When not configured it will be auto-configured with `auto-entities` |
|entity_pill_5| `script.*`  | :material-close: | Script entity to show in the first pill. <br> When not configured it will be auto-configured with `auto-entities` |
|color_pill_1| `random`  | :material-close: | Random generated color for the icon of the 1st pill. <br>. Can be manual configured with: `blue`,`yellow`,`green`,`red`,`purple`,`pink` |
|color_pill_2| `random`  | :material-close: | Random generated color for the icon of the 2nd pill. <br>. Can be manual configured with: `blue`,`yellow`,`green`,`red`,`purple`,`pink` |
|color_pill_3| `random`  | :material-close: | Random generated color for the icon of the 3th pill. <br>. Can be manual configured with: `blue`,`yellow`,`green`,`red`,`purple`,`pink` |
|color_pill_4| `random`  | :material-close: | Random generated color for the icon of the 4th pill. <br>Can be manual configured with: `blue`,`yellow`,`green`,`red`,`purple`,`pink` |
|color_pill_5| `random`  | :material-close: | Random generated color for the icon of the 5th pill. <br>Can be manual configured with: `blue`,`yellow`,`green`,`red`,`purple`,`pink` |
|icon_pill_1|  | :material-close: | Set a custom `MDI` icon for the 1st pill |
|icon_pill_2|  | :material-close: | Set a custom `MDI` icon for the 2nd pill |
|icon_pill_3|  | :material-close: | Set a custom `MDI` icon for the 3th pill |
|icon_pill_4|  | :material-close: | Set a custom `MDI` icon for the 4th pill |
|icon_pill_5|  | :material-close: | Set a custom `MDI` icon for the 5th pill |
|name_pill_1|  | :material-close: | Set a custom `MDI` icon for the 1st pill |
|name_pill_2|  | :material-close: | Set a custom `MDI` icon for the 2nd pill |
|name_pill_3|  | :material-close: | Set a custom `MDI` icon for the 3th pill |
|name_pill_4|  | :material-close: | Set a custom `MDI` icon for the 4th pill |
|name_pill_5|  | :material-close: | Set a custom `MDI` icon for the 5th pill | for the 5th pill |

## Usage

```yaml
- type: "custom:button-card"
  template: "card_welcome_scenes"
  variables:
    ulm_time: "sensor.time"
    ulm_weather: "this.entity_id"
```

??? note "Template Code"

    ```yaml title="card_welcome_scenes.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_welcome_scenes.yaml"
    ```
