# Custom-card "Light Card Icon Info"
This is a `custom-card` to add additionall function to the `light_card`. It comes in four different versions:

* Light card with icon as info button (*card_light_icon_info*)
* Horizontal light card with icon as info button (*card_light_horizontal_icon_info*)
* Light card with icon as info button + brigthness slider (*card_light_slider_icon_info*)
* Light card with icon as info button + auto collapse brigthness slider (*card_light_slider_collapse_icon_info*)

The icon is changeable for each MDI-icon. And the icon functions as button to show more-info.

## Credits
Author: basbruss - 2021
Version: 1.0.1

## Changelog
<details>
<summary>1.0.0</summary>
Initial release
</details>
<details>
<summary>1.0.1</summary>
Bug fix background color `card_light_color`<br>
Bug fix template not found <br>
Add <i>card_light_horizontal_color</i> and <i>card_light_horizontal_icon_info</i><br>
Add variable to specify theme mode (no need for changing templates anymore)<br>
Code cleanup
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
</tr>
<tr>
<td><a href=https://www.home-assistant.io/integrations/switch>switch-entity</a></td>
<td>no</td>
<td>Only works with <i>card_light_icon_info</i></td>
</tr>
</table>

## Installation
* Copy the folder `custom_card_light_icon_info` from your download `custom_cards` to `config/minimalist-templates`

In the end it should look like this:

```yaml
config
  └── minimalist-templates
     └── custom_card_light_icon_info
        └── custom_card_light_icon_info.yaml
        └── README.md
     └── button_card_templates.yaml
     └── EN.yaml
```

## Usage

```yaml
- type: custom:button-card
  template: card_light_icon_info
  entity: light.your_light #Or switch.your_switch
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light

- type: custom:button-card
  template: card_light_horizontal_icon_info
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light

- type: custom:button-card
  template: card_light_slider_icon_info
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light

- type: custom:button-card
  template: card_light_slider_collapse_icon_info
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light
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
<td>ulm_card_light_name</td>
<td>Light</td>
<td>no</td>
<td>This is the name the card shows</td>
</tr>
<tr>
<td>all</td>
<td>ulm_card_light_icon</td>
<td>mdi:ceiling-light</td>
<td>no</td>
<td>This is your icon for the light</td>
</tr>
</table>
