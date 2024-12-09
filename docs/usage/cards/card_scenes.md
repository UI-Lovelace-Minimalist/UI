---
title: Scenes Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_scenes.png){ width="500" }

This card is part of the Welcome Scenes card and can be used separately to only show the scene pills. It has the same features set as the pills in the Welcome Scenes card.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity_1  | auto-entities | :material-close:  | Can be any common type of entity <br> if no entity is specified defaults to auto-entities |
| entity_2  | auto-entities | :material-close:  | Can be any common type of entity <br> if no entity is specified defaults to auto-entities|
| entity_3  | auto-entities | :material-close:  | Can be any common type of entity <br> if no entity is specified defaults to auto-entities|
| entity_4  | auto-entities | :material-close:  | Can be any common type of entity <br> if no entity is specified defaults to auto-entities|
| entity_5  | auto-entities | :material-close:  | Can be any common type of entity <br> if no entity is specified defaults to auto-entities|
| entity_6  | none          | :material-close:  | Can be any common type of entity |
| entity_7  | none          | :material-close:  | Can be any common type of entity |

## Entity Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| _entity_id  |     | :material-close: | Support almost all types of entities <br> Scenes do always show as off |
| _icon |    | :material-close: | The icon to show |
| _name  |      | :material-close: | The name to show|
| _color  |  Random    | :material-close: | Color of the icon <br> Can choose between: `blue`, `red`, `green`, `yellow`, `pink`, `purple` or pass a css variable such as `var(--google-blue)` or a `rgb`/`rgba` like `rgba(var(--rgb-google-red), 1)` or a hex color code <br> If not specified, it will take a random color  |
| _bg_color  |  _color    | :material-close: | Color of the background <br> Can choose between same options as _color and add transparency if recognized (in color list or css variable or hex code) <br> If not specified, it will take same color as icon with 80% of transparency  |
| _state  | `on` or `playing`    | :material-close: | Define `input_select` state or give manual state for pill to be full |
| _nav_path |     | :material-close:  | Navigate to another view <br> *Overrides other types of actions*
| _forced  | `true`    | :material-close: | Force `state` value and corresponding design of the pill |

## Usage

!!! note ""
    You can set 1 to 7 entities to show 1 to 7 pills dynamically <br>
    If set none it uses `auto-entities` with max 5 pills

```yaml
- type: "custom:button-card"
  template: "card_scenes"
  variables:
    entity_1:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "blue"
      bg_color: rgba(var(--rgb-google-red), 1)
      forced: true
    entity_2:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "var(--google-blue)"
    entity_3:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "green"
    entity_4:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "purple"
    entity_5:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "yellow"
    entity_6:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "pink"
    entity_7:
      entity_id: "<YOUR_ENTITY>"
      icon: "mdi:YOUR_ICON" #OPTIONAL
      name: "YOUR_NAME" #OPTIONAL
      color: "yellow"
```

??? note "Auto-entities"

    ```yaml
    - type: "custom:button-card"
      template: "card_scenes"
    ```

??? note "Template Code"

    ```yaml title="card_welcome_scenes.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_scenes.yaml"
    ```
