# Custom-card "Color Light Card"
This is a `custom-card` to add additionall function to the `light_card`. It comes in four different versions:

* Color changing light card with icon as info button (*card_light_color*)
* Horizontal color changing light card with icon as info button  (*card_light_horizontal_color*)
* Color changing light card with icon as info button + brigthness slider (*card_light_slider_color*)
* Color changing light card with icon as info button + auto collapse brigthness slider (*card_light_slider_collapse_color*)

The card shows you the color of the light. The icon is changeable for each MDI-icon. And the icon functions as button to show more-info.

![Light](./screenshots/light.png)
![Light_slider](./screenshots/light_slider.png)
![Light_horizontal](./screenshots/light_horizontal.png)
![Dark](./screenshots/dark.png)
![Dark_slider](./screenshots/dark_slider.png)
![Dark_horizontal](./screenshots/dark_horizontal.png)
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
Code celanup
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
<td>attribute: rgb_color</td>
<td>optional</td>
<td>Needed for color function. <i>otherwise it uses the default theme function</i></td>
</tr>
</table>

## Installation
* Copy the folder `custom_card_light_color` from your download `custom_cards` to `config/minimalist-templates`

In the end it should look like this:

```yaml
config
  └── minimalist-templates
     └── custom_card_light_color
        └── custom_card_light_color.yaml
        └── README.md
     └── button_card_templates.yaml
     └── EN.yaml
```

## Usage

```yaml
- type: custom:button-card
  template: card_light_color
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light #leave empty for standard icon
    ulm_card_light_mode: dark # define light or dark theme-mode, leave empty if you use auto

- type: custom:button-card
  template: card_light_horizontal_color
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light #leave empty for standard icon
    ulm_card_light_mode: dark # define light or dark theme-mode, leave empty if you use auto

- type: custom:button-card
  template: card_light_slider_color
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light #leave empty for standard icon
    ulm_card_light_mode: dark # define light or dark theme-mode, leave empty if you use auto

- type: custom:button-card
  template: card_light_slider_collapse_color
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light #leave empty for standard icon
    ulm_card_light_mode: dark # define light or dark theme-mode, leave empty if you use auto
```
## Dark/Light Mode support (*new function*)
The default for all cards include is auto switching. You can use only dark or light mode if you specify the `ulm_card_light_mode` variable.

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
<td>all</td>
<td>ulm_card_light_mode</td>
<td>dark</td>
<td>no</td>
<td>Specify your theme mode. (light or dark) <br>Leave empty when using auto switching</td>
</tr>
</table>
