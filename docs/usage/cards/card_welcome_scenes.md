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
| entity_  |    `script.*`  | :material-check: | Your script entity <br> If not specified, it will take a random script |
| icon_  |    | :material-close: | The icon to show |
| name_  |      | :material-close: | The name to show|
| color_  |  Random    | :material-close: | Color of the icon <br> Can choose between: `blue`, `red`, `green`, `yellow`, `pink`, `purple` <br> If not specified, it will take a random color  |

## Usage

```yaml
- type: "custom:button-card"
  template: "card_welcome_scenes"
  variables:
    ulm_weather: "weather.YOUR_WEATHERPROVIDER"
    entity_1:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "blue"
    entity_2:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "red"
    entity_3:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "green"
    entity_4:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "purple"
    entity_5:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "yellow"

# Use random script entities (icon and name cannot be specified!!)
- type: "custom:button-card"
  template: "card_welcome_scenes"
  variables:
    ulm_weather: "weather.YOUR_WEATHERPROVIDER"
    entity_1:
      color: "blue"
    entity_2:
      color: "red"
    entity_3:
      color: "green"
    entity_4:
      color: "purple"
    entity_5:
      color: "yellow"

# Use random colors
- type: "custom:button-card"
  template: "card_welcome_scenes"
  variables:
    ulm_weather: "weather.YOUR_WEATHERPROVIDER"
    entity_1:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
    entity_2:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
    entity_3:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
    entity_4:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
    entity_5:
      entity_id: "script.YOUR_SCRIPT"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL

# Let the card decide everything
- type: "custom:button-card"
  template: "card_welcome_scenes"
  variables:
    ulm_weather: "weather.YOUR_WEATHERPROVIDER"
```

??? note "Template Code"

    ```yaml title="card_welcome_scenes.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_welcome_scenes.yaml"
    ```
