---
title: Scenes Card Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Scenes Card"

The `card_scenes` you can control up to 5 `entity` such as `scene`, `script` or `automation`.

![Scenes Card](../../docs/assets/img/card_scenes.png)

## Credits

Author: sildehoop - 2021
Version: 1.2.0

<h2 style="color: red">Breaking changes</h2>

 <details style="color: red">
   <summary>1.2.0</summary>

```yaml
#OLD
- type: "custom:button-card"
 template:
   - card_scenes
 variables:
   entity_1: "scene.YOUR_SCENE"
   entity_2: "scene.YOUR_SCENE"
   entity_3: "scene.YOUR_SCENE"
   entity_4: "scene.YOUR_SCENE"
   entity_5: "scene.YOUR_SCENE"
   name_1: "YOUR_NAME"
   name_2: "YOUR_NAME"
   name_3: "YOUR_NAME"
   name_4: "YOUR_NAME"
   name_5: "YOUR_NAME"
   icon_1: "mdi:YOUR_ICON"
   icon_2: "mdi:YOUR_ICON"
   icon_3: "mdi:YOUR_ICON"
   icon_4: "mdi:YOUR_ICON"
   icon_5: "mdi:YOUR_ICON"
   icon_color_1: "yellow"
   icon_color_2: "blue"
   icon_color_3: "purple"
   icon_color_4: "green"
   icon_color_5: "red"
   bg_color_1: "yellow"
   bg_color_2: "blue"
   bg_color_3: "purple"
   bg_color_4: "green"
   bg_color_5: "red"
```

```yaml
#NEW
- type: "custom:button-card"
 template:
   - card_scenes
 variables:
   entity_1:
     entity_id: "scene.YOUR_SCENE"
     icon: "mdi:YOUR_ICON"
     icon_color: "yellow"
     name: "YOUR_NAME"
     bg_color: "yellow"
   entity_2:
     entity_id: "scene.YOUR_SCENE"
     icon: "mdi:YOUR_ICON"
     icon_color: "blue"
     name: "YOUR_NAME"
     bg_color: "blue"
   entity_3:
     entity_id: "scene.YOUR_SCENE"
     icon: "mdi:YOUR_ICON"
     icon_color: "purple"
     name: "YOUR_NAME"
     bg_color: "purple"
   entity_4:
     entity_id: "scene.YOUR_SCENE"
     icon: "mdi:YOUR_ICON"
     icon_color: "green"
     name: "YOUR_NAME"
     bg_color: "green"
   entity_5:
     entity_id: "scene.YOUR_SCENE"
     icon: "mdi:YOUR_ICON"
     icon_color: "red"
     name: "YOUR_NAME"
     bg_color: "red"
```

 </details>

## Changelog

<details>
<summary>1.3.0</summary>
Option to trigger automation
</details>
<details>
<summary>1.2.0</summary>
Implementation of nested variables
</details>
<details>
<summary>1.1.0</summary>
Auto dark mode box shadow
</details>
<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  template:
    - card_scenes
  variables:
    entity_1:
      entity_id: "scene.YOUR_SCENE"
      icon: "mdi:YOUR_ICON"
      icon_color: "yellow"
      name: "YOUR_NAME"
      bg_color: "yellow"
    entity_2:
      entity_id: "scene.YOUR_SCENE"
      icon: "mdi:YOUR_ICON"
      icon_color: "blue"
      name: "YOUR_NAME"
      bg_color: "blue"
    entity_3:
      entity_id: "scene.YOUR_SCENE"
      icon: "mdi:YOUR_ICON"
      icon_color: "purple"
      name: "YOUR_NAME"
      bg_color: "purple"
    entity_4:
      entity_id: "scene.YOUR_SCENE"
      icon: "mdi:YOUR_ICON"
      icon_color: "green"
      name: "YOUR_NAME"
      bg_color: "green"
    entity_5:
      entity_id: "scene.YOUR_SCENE"
      icon: "mdi:YOUR_ICON"
      icon_color: "red"
      name: "YOUR_NAME"
      bg_color: "red"
```

## Requirements

n/a

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>entity_</td>
<td>scene.evening_light</td>
<td>yes</td>
<td>Your scene entity</td>
</tr>
<tr>
<td>name_</td>
<td>Night</td>
<td>yes</td>
<td>The name to show</td>
</tr>
<tr>
<td>icon_</td>
<td>mdi:weather-night</td>
<td>yes</td>
<td>The icon to show</td>
</tr>
<tr>
<td>color_icon_</td>
<td>yellow, blue, purple, green, red</td>
<td>no</td>
<td>The color of the icon to show</td>
</tr>
<tr>
<td>color_bg_</td>
<td>yellow, blue, purple, green, red</td>
<td>no</td>
<td>The color of the icon background to show</td>
</tr>
</table>

## Template code

??? note "Template Code"

    ```yaml title="custom_card_scenes.yaml"
    --8<-- "custom_cards/custom_card_scenes/card_scenes.yaml"
    ```
