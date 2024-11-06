---
title: Thermostat Popup
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

### Thermostat popup

![Phone](../../assets/img/popup_thermostat_phone.png){ width="500" }

##### Card compatibility

This popup is displayed using ``hold_action`` and it is compatible with the following cards/chips :

- card_thermostat

##### Variables

<table>
  <tr>
    <th>Variable</th>
    <th>Example</th>
    <th>Required</th>
    <th>Explanation</th>
  </tr>
  <tr>
    <td>ulm_card_thermostat_preset_mode</td>
    <td>true</td>
    <td>no</td>
    <td>Switch to Preset Mode</td>
  </tr>
</table>

##### How to use

To enable this popup, add the variable ``ulm_card_thermostat_enable_popup`` and set to ``true``.

!!! warning
    This is a different approach as the other `popup_cards` use.

For example :

```yaml
- type: "custom:button-card"
  template: card_thermostat
  entity: climate.thermostat
  variables:
    ulm_card_thermostat_enable_popup: true
    ulm_card_thermostat_preset_mode: true
```

## Credits

- Designed by schumijo
