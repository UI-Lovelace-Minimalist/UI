---
title: card_scenes
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Scenes Card"

The `card_scenes` you can control up to 5 `entity` such as `scene` or `script`.

![Scenes Card](../../assets/img/ulm_cards/card_scenes.png)

## Credits

Author: sildehoop - 2021
Version: 1.1.0

## Changelog

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
    color_icon_1: "yellow"
    color_icon_2: "blue"
    color_icon_3: "purple"
    color_icon_4: "green"
    color_icon_5: "red"
    color_bg_1: "yellow"
    color_bg_2: "blue"
    color_bg_3: "purple"
    color_bg_4: "green"
    color_bg_5: "red"
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

??? note "Template Code"

```yaml title="custom_card_scenes.yaml"
--8<-- "custom_card/custom_card_scenes/custom_card_scenes.yaml"
```