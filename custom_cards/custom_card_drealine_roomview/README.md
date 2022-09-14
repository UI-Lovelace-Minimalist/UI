---
title: Drealine RoomView - Custom Card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Drealine RoomView"

## Credits

- Author: Drealine - 2022
- Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>
<details>

## Usage

```yaml
- type: "custom:button-card"
  template: "custom_card_drealine_roomview"
  variables:
    name: "Entrée"
    group_lights:
    group_motions: 
    group_doors: 
    group_windows: 
    group_outlets: 
    group_tv: 
    group_water: 
    group_windows_shutters:
    temperature: 
    humidity:
    icon: "mdi:home-variant-outline"
```

## Requirements

No requirements at the moment.

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>chart_type</td>
<td>line, scatter, pie, donut or radialBar</td>
<td>yes</td>
<td>The chart type you want to display</td>
</tr>
<tr>
<td>graph_span</td>
<td>1h, 12min, 1d, 1h25, 10sec, ...</td>
<td>no</td>
<td>The span of the graph as a time interval</td>
</tr>
<tr>
<td>entity_id</td>
<td>sensor.speedtest_download</td>
<td>yes</td>
<td>Entity sensor of choice</td>
</tr>
<tr>
<td>icon</td>
<td>mdi:cpu-64-bit</td>
<td>no</td>
<td>mdi icon you want to be exposed in the img_cell, '' will return entity.attributes.icon </td>
</tr>
<tr>
<td>name</td>
<td>name for the used sensor</td>
<td>no</td>
<td>'' will return entity.attributes.friendly_name</td>
</tr>
<tr>
<td>color</td>
<td>green, blue, yellow, red or grey</td>
<td>no</td>
<td>if you don't use the color variable it will choice a random color</td>
</tr>
<tr>
<td>max_value</td>
<td>10, 300, ...</td>
<td>no</td>
<td>Maximum value of the sensor. Default will be 100</td>
</tr>
</table>

??? note "Template Code"

    ```yaml title="custom_card_drealine_roomview.yaml"
    --8<-- "custom_cards/custom_card_drealine_roomview/custom_card_drealine_roomview.yaml"
    ```
