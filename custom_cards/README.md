---
title: Chip settings notification card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card Chip settings notification card

This is a `custom-card` that shows home assistant update, with blink notification, and navigate to settings with a Minimal Design.

![Alt text](https://github.com/Nik18111997/IMAGE/blob/main/settings.PNG)
![Alt text](https://github.com/Nik18111997/IMAGE/blob/main/setting_notification.PNG)

## Credits

Author: Nik97 - 2022 Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Requirements

To have the Minimalist cards and custom cards installed

## Usage

```yaml
- type: custom:button-card
  template: custom_card_settings_notification_chip
  variables:
    ulm_custom_card_settings_notification_chip_icon: mdi:cog-outline

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
    <td>ulm_custom_card_settings_notification_chip_icon</td>
    <td>mdi:cog-outline</td>
    <td>Yes</td>
    <td>Your settings icon</td>
  </tr>
</tbody>
</table>

## Template Code

```yaml
---
custom_card_settings_notification_chip:
  type: "custom:button-card"
  icon: "[[[ return variables.ulm_custom_card_settings_notification_chip_icon; ]]]"
  show_icon: true
  styles:
    card:
      - border-radius: "18px"
      - height: "36px"
      - width: "36px"
      - padding-left: "6px"
      - padding-right: "6px"
    custom_fields:
      notification:
        - border-radius: "50%"
        - position: "absolute"
        - left: "65%"
        - top: "15%"
        - height: "6px"
        - width: "6px"
        - animation: >
            [[[ 
              if (states['update.home_assistant_core_update'].state == 'on') return 'flasher 1s infinite';
              if (states['update.home_assistant_operating_system_update'].state == 'on') return 'flasher 1s infinite';
              if (states['update.home_assistant_supervisor_update'].state == 'on') return 'flasher 1s infinite';
            ]]]
  size: "80%"
  custom_fields:
    notification: "none"
  extra_styles: >
    @keyframes flasher {
              100% {background-color: #FF7121
              } 
  tap_action:
    action: "navigate"
    navigation_path: "/config/dashboard/"
```