---
title: Entities Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Custom-card "Entities"

This is a `custom-card` to display states from multiple entities or from an entity with multiples attributes (To use it with attributes need to modify the code)

![Screenshot](../../assets/img/screenshot_irmajavi_entities_card.jpg)

## Credits

Author: irmajavi - 2022
Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Requirements

none

## Usage

```yaml
type: custom:button-card
template: custom_card_irmajavi_entities
variables:
  ulm_custom_card_irmajavi_entities_entity_1: sensor.inverter_voltage
  ulm_custom_card_irmajavi_entities_entity_2: sensor.inverter_temperature
  ulm_custom_card_irmajavi_entities_entity_3: sensor.active_ac_power
  ulm_custom_card_irmajavi_entities_entity_4: sensor.ac_load_current
  ulm_custom_card_irmajavi_entities_name_1: Voltage
  ulm_custom_card_irmajavi_entities_name_2: Temperature
  ulm_custom_card_irmajavi_entities_name_3: AC Power
  ulm_custom_card_irmajavi_entities_name_4: Current
  ulm_custom_card_irmajavi_entities_name: System Status
  ulm_custom_card_irmajavi_entities: sensor.inverter_operating_mode
```

## Variables

<table>
<thead>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>ulm_custom_card_irmajavi_entities</td>
<td>sensor.main</td>
<td>Yes</td>
<td>Main entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entitites_name</td>
<td>Status</td>
<td>Yes</td>
<td>Main entity name</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_entity_1</td>
<td>sensor.test1</td>
<td>Yes</td>
<td>The first entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_entity_2</td>
<td>sensor.test2</td>
<td>Yes</td>
<td>The second entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_entity_3</td>
<td>sensor.test3</td>
<td>Yes</td>
<td>The third entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_entity_4</td>
<td>sensor.test4</td>
<td>Yes</td>
<td>The forth entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_name_1</td>
<td>Test1</td>
<td>Yes</td>
<td>The name of the first entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_name_2</td>
<td>Test2</td>
<td>Yes</td>
<td>The name of the second entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_name_3</td>
<td>Test3</td>
<td>Yes</td>
<td>The name of the third entity</td>
</tr>
<tr>
<td>ulm_custom_card_irmajavi_entities_name_4</td>
<td>Test4</td>
<td>Yes</td>
<td>The name of the forth entity</td>
</tr>
</tbody>
</table>

## Template Code

```yaml
---
custom_card_irmajavi_entities:
  template:
    - ulm_language_variables
  triggers_update: all
  show_icon: false
  show_name: false
  show_label: false
  styles:
    grid:
      - grid-template-areas: '''item1'' ''item2'' ''item3'' ''item4'''
      - grid-template-columns: 1fr
      - grid-template-rows: min-content min-content
      - row-gap: 12px
    card:
      - border-radius: 30px
      - box-shadow: var(--box-shadow)
      - padding: 12px
      - height: 160px
  custom_fields:
    item1:
      card:
        type: custom:button-card
        color: var(--google-grey)
        show_icon: false
        show_label: true
        show_name: true
        styles:
          name:
            - align-self: start
            - justify-self: start
            - font-weight: bold
            - font-size: 14px
            - margin-left: 12px
          grid:
            - grid-template-areas: '"n" "l"'
            - grid-template-columns: min-content auto min-content
            - grid-template-rows: min-content min-content
          card:
            - box-shadow: none
            - border-radius: 20px
            - border: 2px solid var(--google-grey)
            - height: 70px
          label:
            - justify-self: start
            - align-self: end
            - font-weight: bold
            - font-size: 14px
            - filter: opacity(40%)
            - margin-left: 35px
        name: |
          [[[
            var icon = '👽';
            if (variables.ulm_custom_card_irmajavi_entities_icon){
              var icon = variables.ulm_custom_card_irmajavi_entities_icon;
            }
            return icon + ' ' + variables.ulm_custom_card_irmajavi_entities_name;
          ]]]
        label: |
          [[[
            return states[variables.ulm_custom_card_irmajavi_entities].state
          ]]]
    item2:
      card:
        type: custom:button-card
        template: list_4_items
        custom_fields:
          item1:
            card:
              type: custom:button-card
              template: custom_widget_irmajavi
              entity: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_entity_1;
                ]]]
              name: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_name_1
                ]]]
          item2:
            card:
              type: custom:button-card
              template: custom_widget_irmajavi
              entity: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_entity_2;
                ]]]
              name: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_name_2
                ]]]
          item3:
            card:
              type: custom:button-card
              template: custom_widget_irmajavi
              entity: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_entity_3;
                ]]]
              name: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_name_3
                ]]]
          item4:
            card:
              type: custom:button-card
              template: custom_widget_irmajavi
              entity: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_entity_4;
                ]]]
              name: >-
                [[[ return variables.ulm_custom_card_irmajavi_entities_name_4
                ]]]


custom_widget_irmajavi:
  show_label: true
  show_icon: false
  label: |
    [[[
      var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
      if (entity.state == 'on') {
        return variables.ulm_on;
      } else if (entity.state == 'off') {
        return variables.ulm_off;
      } else if (entity.state == 'unavailable') {
        return variables.ulm_unavailable;
      } else if (entity.state == 'idle') {
        return variables.ulm_idle;
      } else if (entity.state == 'open') {
        return variables.ulm_open;
      } else if (entity.state == 'closed') {
        return variables.ulm_closed;
      } else {
        return entity.state + unit;
      }
    ]]]
  styles:
    name:
      - justify-self: center
      - align-self: start
      - font-weight: bolder
      - font-size: 12px
      - filter: opacity(40%)
    label:
      - margin-top: 10px
      - justify-self: center
      - font-weight: bold
      - font-size: 14px
    grid:
      - grid-template-areas: '"l" "n"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content min-content
    card:
      - box-shadow: none
```
