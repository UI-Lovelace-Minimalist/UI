---
title: Afvalophaling Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Afvalophaling"

![Afvalophaling](../../assets/img/ulm_cards/custom_card_afvalophaling_2.png)
![Afvalophaling](../../assets/img/ulm_cards/custom_card_afvalophaling_1.png)

!! Attention !!

This card can only be used if the integration "Home-Assistant-Sensor-Afvalbeheer" from pippyn is installed.

## Credits

- Author: AndyVRD - 2021
- Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Usage

```yaml
      - type: 'custom:button-card'
        template:
          - card_afvalophaling
        variables:
          ulm_card_ophaling_vandaag: 'sensor.limburg_net_afvalophaling_vandaag'
          ulm_card_ophaling_morgen: "sensor.limburg_net_afvalophaling_morgen"
          ulm_card_datum_gft: "sensor.limburg_net_afvalophaling_gft"
          ulm_card_datum_pmd: "sensor.limburg_net_afvalophaling_pmd"
          ulm_card_datum_rest: "sensor.limburg_net_afvalophaling_restafval"
          ulm_card_datum_papier: "sensor.limburg_net_afvalophaling_papier"
```

## Requirements

Integration from HACS: "Home-Assistant-Sensor-Afvalbeheer" from pippyn

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_ophaling_vandaag</td>
<td>sensor.limburg_net_afvalophaling_vandaag</td>
<td>yes</td>
<td>Collection(s) for today</td>
</tr>
<tr>
<td>ulm_card_ophaling_morgen</td>
<td>sensor.limburg_net_afvalophaling_morgen</td>
<td>yes</td>
<td>Collection(s) for tomorrow</td>
</tr>
<tr>
<td>ulm_card_datum_gft</td>
<td>sensor.limburg_net_afvalophaling_gft</td>
<td>yes</td>
<td>GFT collection date</td>
</tr>
<tr>
<td>ulm_card_datum_pmd</td>
<td>sensor.limburg_net_afvalophaling_pmd</td>
<td>yes</td>
<td>PMD collection date</td>
</tr>
<tr>
<td>ulm_card_datum_rest</td>
<td>sensor.limburg_net_afvalophaling_rest</td>
<td>yes</td>
<td>Restafval collection date</td>
</tr>
<tr>
<td>ulm_card_datum_papier</td>
<td>sensor.limburg_net_afvalophaling_papier</td>
<td>yes</td>
<td>Papier collection date</td>
</tr>
</table>

## Template code

```yaml
---
card_afvalophaling:
  template:
    - "ulm_language_variables"
    - "icon_info_afvalophaling"
    - "custom_colors"
  triggers_update: "all"
  icon: "mdi:delete"
  name: >
        [[[
          if(states[variables.ulm_card_ophaling_vandaag].state !=='Geen' || states[variables.ulm_card_ophaling_morgen].state !=='Geen'){
            return variables.ulm_ophaling
          } else {
            return variables.ulm_volgende_ophaling
          }
        ]]]
  label: |
        [[[
          var glas = ''
          if(variables.ulm_card_datum_glas){
          var glas = "Glas " + ' • ' + states[variables.ulm_card_datum_glas].state + '<br>'
          }
          var pmd = ''
          if(variables.ulm_card_datum_pmd){
          var pmd = "PMD " + ' • ' + states[variables.ulm_card_datum_pmd].state + '<br>'
          }
          var gft = ''
          if(variables.ulm_card_datum_gft){
          var gft = "GFT " + ' • ' + states[variables.ulm_card_datum_gft].state + '<br>'
          }
          var rest = ''
          if(variables.ulm_card_datum_rest){
          var rest = "Restafval " + ' • ' + states[variables.ulm_card_datum_rest].state + '<br>'
          }
          var papier = ''
          if(variables.ulm_card_datum_papier){
          var papier = "Papier " + ' • ' + states[variables.ulm_card_datum_papier].state + '<br>'
          }
          if(states[variables.ulm_card_ophaling_vandaag].state !=='Geen'){
            return states[variables.ulm_card_ophaling_vandaag].state
          }
          if(states[variables.ulm_card_ophaling_morgen].state !=='Geen'){
            return states[variables.ulm_card_ophaling_morgen].state
          } else {
            return rest + papier + pmd + gft + glas
          }
        ]]]
custom_colors:
  state:
    - styles:
        icon:
          - color: "rgba(var(--color-green),1)"
        img_cell:
          - background-color: "rgba(var(--color-green), 0.2)"
      value: >
        [[[
          return states[variables.ulm_card_ophaling_vandaag].state !== "Geen" || states[variables.ulm_card_ophaling_morgen].state !== "Geen"
        ]]]
      icon: "mdi:recycle"
      operator: "template"
    - styles:
        icon:
          - color: "rgba(var(--color-blue),1)"
        img_cell:
          - background-color: "rgba(var(--color-blue), 0.2)"
      value: >
        [[[
          return states[variables.ulm_card_ophaling_vandaag].state === "glas" || states[variables.ulm_card_ophaling_morgen].state === "glas"
        ]]]
      icon: "mdi:bottle-wine-outline"
      operator: "template"
icon_info_afvalophaling:
  color: "var(--google-grey)"
  show_icon: "true"
  show_label: "true"
  show_name: "true"
  state:
    - value: "unavailable"
      styles:
        icon:
          - color: "rgba(var(--color-red),1)"
        img_cell:
          - background-color: "rgba(var(--color-red), 0.2)"
        custom_fields:
          notification:
            - border-radius: "50%"
            - position: "absolute"
            - left: "42px"
            - top: "10px"
            - height: "16px"
            - width: "16px"
            - font-size: "12px"
            - line-height: "14px"
            - background-color: >
                [[[
                  return "rgba(var(--color-red),1)";
                ]]]
  styles:
    icon:
      - color: "rgba(var(--color-theme),0.2)"
    label:
      - justify-self: "start"
      - align-self: "start"
      - font-weight: "bold"
      - font-size: "12px"
      - filter: "opacity(40%)"
      - margin-left: "12px"
      - text-align: "start"
    name:
      - align-self: "end"
      - justify-self: "start"
      - font-weight: "bold"
      - font-size: "14px"
      - margin-left: "12px"
      - margin-bottom: "4px"
    state:
      - justify-self: "start"
      - align-self: "start"
      - font-weight: "bold"
      - font-size: "12px"
      - filter: "opacity(40%)"
      - margin-left: "12px"
    img_cell:
      - background-color: "rgba(var(--color-theme),0.05)"
      - border-radius: "50%"
      - place-self: "center"
      - width: "42px"
      - height: "42px"
    grid:
      - grid-template-areas: "'i n' 'i l'"
      - grid-template-columns: "min-content auto"
      - grid-template-rows: "min-content min-content"
    card:
      - border-radius: "var(--border-radius)"
      - box-shadow: "var(--box-shadow)"
      - padding: "12px"
  custom_fields:
    notification: >
      [[[
        if (states[variables.ulm_card_ophaling_vandaag].state =='unavailable' || states[variables.ulm_card_ophaling_morgen].state =='unavailable'){
          return `<ha-icon icon="mdi:help" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>`
        }
      ]]]
  size: "20px"
```
