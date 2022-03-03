---
title: Wifi Signal Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "WiFi Signal"

The `custom_card_mpse_wifisignal` is used to display the status of a wifi signal (dBm). Icon changes based on signal strenght.

![WiFi Signal](../../docs/assets/img/custom_wifisignal.png)

## Credits

Author: mpse
Version: 0.2.0

## Changelog

<details>
<summary>0.2.0</summary>
Cleanup and updated documentation.
</details>
<details>
<summary>0.1.0</summary>
Initial release.
</details>

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_mpse_wifisignal
  entity: sensor.wifi_julgran
```

## Requirements

No special cards needed.

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>None</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

## Template code

```yaml
---
custom_card_mpse_wifisignal:
  template:
    - "icon_info_bg"
  icon: |
    [[[
      var icon = "mdi:wifi-strength-off";
      var signal = states[entity.entity_id].state;
      if (signal >= -50) {
        icon = "mdi:wifi-strength-4";
      } else if (signal >= -60) {
        icon = "mdi:wifi-strength-3";
      } else if (signal >= -70) {
        icon = "mdi:wifi-strength-2";
      } else if (signal >= -80) {
        icon = "mdi:wifi-strength-1";
      }
      return icon;
    ]]]
  label: |
    [[[
      return entity.state + " dBm";
    ]]]
```
