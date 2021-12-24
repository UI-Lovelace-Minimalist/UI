# Custom-card "Color Light Card"
This is a `custom-card` to add additionall function to the `light_card`. It comes in three different versions:

* Color chaning light card with icon as info button (*card_light_color*)
* Color chaning light card with icon as info button + brigthness slider (*card_light_slider_color*)
* Color chaning light card with icon as info button + auto collapse brigthness slider (*card_light_slider_collapse_color*)

The card shows you the color of the light. The icon is changeable for each MDI-icon. And the icon functions as button to show more-info.

## Credits
Author: basbruss - 2021
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
    ulm_card_light_icon: mdi:ceiling-light

- type: custom:button-card
  template: card_light_slider_color
  entity: light.your_light
  variables:
    ulm_card_light_name: Light
    ulm_card_light_icon: mdi:ceiling-light

- type: custom:button-card
  template: card_light_slider_collapse_color
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

## Important Note
This card works best if you use auto light/dark mode. As Home Assistant doesn't provide a way to determine in which theme mode it is.
<br>*When only using light or dark mode as theme mode* it's recommended to change the following template in `card_light_color.yaml`:

```yaml
### internal templates
auto_color:
  state:
    - value: "on"
      styles:
        icon:
          - color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),1)';
                  }
              ]]]
        label:
          - color: >
              [[[
                var color = entity.attributes.rgb_color;
                if (states['sun.sun'].state == "below_horizon"){
                  if (color != null){
                         return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }else{
                    return 'rgba(var(--color-yellow),1)';
                  }
                }else if (states['sun.sun'].state == "above_horizon")
                  return 'rgba(var(--color-yellow-text),1)';
              ]]]
        name:
          - color: >
              [[[
                var color = entity.attributes.rgb_color;
                if (states['sun.sun'].state == "below_horizon"){
                  if (color != null){
                         return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }else{
                    return 'rgba(var(--color-yellow),1)';
                  }
                }else if (states['sun.sun'].state == "above_horizon")
                  return 'rgba(var(--color-yellow-text),1)';
              ]]]
        img_cell:
          - background-color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',0.2)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),0.2)';
                  }
              ]]]
```

For only light mode usage to:
```yaml
### internal templates
auto_color:
  state:
    - value: "on"
      styles:
        icon:
          - color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),1)';
                  }
              ]]]
        label:
          - color: "rgba(var(--color-yellow-text),1)"
        name:
          - color: "rgba(var(--color-yellow-text),1)"
        img_cell:
          - background-color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',0.2)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),0.2)';
                  }
              ]]]
```

And for only dark mode usage to:
```yaml
### internal templates
auto_color:
  state:
    - value: "on"
      styles:
        icon:
          - color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),1)';
                  }
              ]]]
        label:
          - color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),1)';
                  }
              ]]]
        name:
          - color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',1)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),1)';
                  }
              ]]]
        img_cell:
          - background-color: >
              [[[
                  var color = entity.attributes.rgb_color;
                  if (color != null){
                     return 'rgba(' + entity.attributes.rgb_color + ',0.2)';
                  }
                  else{
                    return 'rgba(var(--color-yellow),0.2)';
                  }
              ]]]
```
