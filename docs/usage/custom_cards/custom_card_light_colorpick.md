---
title: Colorpicker Light Card Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Colorpicker Light Card"

This is a `custom-card` to add additional function to the `light_card`.

The card uses a slider as well as six conditional icons to pick the color of the light.

## Credits

Author: 13robin37 - 2021
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Requirements

This card needs the following to function correctly:
<table>
<tr>
<th>Component / card</th>
<th>required</th>
<th>Note</th>
</tr>
<tr>
<td><a href=https://www.home-assistant.io/integrations/light>light-entity</a></td>
<td>yes</td>
<td></td>
</tr>
<tr>
<td><a href=https://github.com/bokub/rgb-light-card>RGB Light Card</a></td>
<td>yes</td>
<td></td>
</tr>
</table>

## Usage

```yaml
- type: custom:button-card
  template: card_light_colorpick
  entity: light.your_light
  variables:
    ulm_card_light_slider_horizontal_colors_name: Ceiling light
    ulm_card_light_slider_horizontal_colors_transition: 1
```

## Variables

<table>
<tr>
<th>Card type</th>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>all</td>
<td>ulm_card_light_slider_horizontal_colors_name</td>
<td>Light</td>
<td>no</td>
<td>This is the name the card shows</td>
</tr>
<tr>
<td>all</td>
<td>ulm_card_light_slider_horizontal_colors_transition</td>
<td>1</td>
<td>no</td>
<td>This is the color change transition in seconds</td>
</tr>
</table>
