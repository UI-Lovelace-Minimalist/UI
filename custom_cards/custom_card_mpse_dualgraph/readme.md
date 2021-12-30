# Custom-card "Printer"

The `custom_card_mpse_dual_graph` is an extension of the standard graph card and can show 2 graphs in the same card. I wanted to show both upload/download speed in the same image. The variable names follow the same standard as the base card to make it easier to change.

![Dual Graph](./custom_dual_graph.png)

## Credits
Author: mpse
Version: 0.1.0

## Changelog
<details>
<summary>0.1.0</summary>
Initial release.
</details>

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_mpse_graph2
  variables:
    ulm_card_graph_name: "Internet - Download / Upload"
    ulm_card_graph_color: "var(--google-blue)"
    ulm_card_graph_color_2: "var(--google-green)"
    ulm_card_graph_entity: sensor.speedtest_download
    ulm_card_graph_entity_2: sensor.speedtest_upload
```

## Requirements

## Variables
<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_card_graph_name</td>
<td>"Internet - Download / Upload"</td>
<td>no</td>
<td>Name to show on card.</td>
</tr>
<tr>
<td>ulm_card_graph_color</td>
<td>var(--google-blue)</td>
<td>no</td>
<td>Color of the first graph (blue is default)</td>
</tr>
<tr>
<td>ulm_card_graph_color_2</td>
<td>var(--google-green)</td>
<td>no</td>
<td>Color of the second graph (green is default)</td>
</tr>
<tr>
<td>ulm_card_graph_entity</td>
<td>sensor.speedtest_download</td>
<td>yes</td>
<td>Name of the first sensor</td>
</tr>
<tr>
<td>ulm_card_graph_entity_2</td>
<td>sensor.speedtest_upload</td>
<td>yes</td>
<td>Name of the second sensor</td>
</tr>
</table>

## Template code

```yaml
---
custom_card_mpse_dual_graph:
  variables:
    ulm_card_graph_name: ""
    ulm_card_graph_color: "var(--google-blue)"
    ulm_card_graph_color_2: "var(--google-green)"
  triggers_update: "all"
  styles:
    grid:
      - grid-template-areas: "'item1' 'item2'"
      - grid-template-columns: "1fr"
      - grid-template-rows: "min-content  min-content"
    card:
      - border-radius: "var(--border-radius)"
      - box-shadow: "var(--box-shadow)"
      - padding: "0px"
  custom_fields:
    item1:
      card:
        type: "custom:button-card"
        template:
          - icon_info
          - card_generic
        styles:
          card:
            - box-shadow: "none"
            - border-radius: "var(--border-radius) var(--border-radius) 0px 0px"
            - padding: "12px"
        entity: "[[[ return variables.ulm_card_graph_entity ]]]"
        name: "[[[ return variables.ulm_card_graph_name ]]]"
        label: >
          [[[
            var unit = states[variables.ulm_card_graph_entity].attributes.unit_of_measurement != null ? ' ' +states[variables.ulm_card_graph_entity].attributes.unit_of_measurement : ''
            var unit2 = states[variables.ulm_card_graph_entity_2].attributes.unit_of_measurement != null ? ' ' +states[variables.ulm_card_graph_entity_2].attributes.unit_of_measurement : ''
            return states[variables.ulm_card_graph_entity].state + unit + ' / ' + states[variables.ulm_card_graph_entity_2].state + unit2;
          ]]]
    item2:
      card:
        type: "custom:mini-graph-card"
        entities:
          - entity: "[[[ return variables.ulm_card_graph_entity ]]]"
          - entity: "[[[ return variables.ulm_card_graph_entity_2 ]]]"
        line_color:
          - "[[[ return variables.ulm_card_graph_color ]]]"
          - "[[[ return variables.ulm_card_graph_color_2 ]]]"
        show:
          name: false
          icon: false
          legend: false
          state: false
        style: |
          ha-card {
            box-shadow: none;
            border-radius: var(--border-radius);
          }
```
