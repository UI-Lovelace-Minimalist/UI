---
title: Lock Card Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Lock"

This is a `custom-card` that works in switch logic with a `lock` entity. Card structure uses `lock`, `unlock` (optional `open`) actions and `lock`,`unlock`,`locking`,`unlocking`, `jammed` states.

![Generic](../../docs/assets/img/custom_card_eraycetinay_lock.png)

## Credits

Author: eraycetinay - 2022
Version: 0.0.3
Contributor:
- [Sisimomo](https://github.com/sisimomo) - 2022-06-14


## Changelog

<details>
  <summary>0.0.3</summary>
  <ul>
    <li>Now can displays a warning when the battery is low.</li>
    <li>Now can displays a warning when the door is lock but the door is still open.</li>
    <li>Code refactoring to fit <a href="https://ui-lovelace-minimalist.github.io/UI/development/custom_cards/#order">framework structure</a>.</li>
    <li>Documentation clean up.</li>
    <li>Code clean up.</li>
  </ul>
</details>
<details>
  <summary>0.0.2</summary>
  Added option to only use lock.open
</details>
<details>
  <summary>0.0.1</summary>
  Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  entity: lock.door_lock
  template: "custom_card_eraycetinay_lock"
  name: "Door Lock"
  variables:
    custom_card_eraycetinay_lock_tap_control: true
    custom_card_eraycetinay_lock_battery_level: sensor.door_battery
    custom_card_eraycetinay_lock_door_open: binary_sensor.door_open
  triggers_update:
    - "sensor.door_battery"
    - "binary_sensor.door_open"
```

## Variables

<table>
  <tr>
    <th>Variable</th>
    <th>Example</th>
    <th>Default</th>
    <th>Required</th>
    <th>Explanation</th>
  </tr>
    <tr>
    <td>custom_card_eraycetinay_lock_tap_control</td>
    <td>true</td>
    <td>false</td>
    <td>no</td>
    <td>Lock/Unlock on tap action</td>
  </tr>
  <tr>
    <td>custom_card_eraycetinay_lock_only_open</td>
    <td>true</td>
    <td>false</td>
    <td>no</td>
    <td>Only use the card to open the door (always sends lock.open on tap)</td>
  </tr>
  <tr>
    <td>custom_card_eraycetinay_lock_battery_level</td>
    <td>sensor.door_battery</td>
    <td></td>
    <td>no</td>
    <td>Displays a warning when the battery is low.</td>
  </tr>
  <tr>
    <td>custom_card_eraycetinay_lock_battery_warning</td>
    <td>25</td>
    <td>20</td>
    <td>no</td>
    <td>At what battery percentage should the low battery warning appear.</td>
  </tr>
  <tr>
    <td>custom_card_eraycetinay_lock_battery_warning_low</td>
    <td>10</td>
    <td>5</td>
    <td>no</td>
    <td>At what battery percentage should the very low battery warning appear.</td>
  </tr>
  <tr>
    <td>custom_card_eraycetinay_lock_door_open</td>
    <td>binary_sensor.door_open</td>
    <td></td>
    <td>no</td>
    <td>Displays a warning when the door is lock but the door is still open.</td>
  </tr>
</table>

## Template code

```yaml
---
---
custom_card_eraycetinay_lock:
  template:
    - "ulm_language_variables"
    - "custom_card_eraycetinay_lock_language_variables"
    - "icon_info_bg"
  variables:
    custom_card_eraycetinay_lock_battery_warning: 20
    custom_card_eraycetinay_lock_battery_warning_low: 5
  tap_action:
    action: |
      [[[
        if (variables.custom_card_eraycetinay_lock_tap_control === true) {
          return "call-service";
        } else {
          return "more-info";
        }
      ]]]
    # only related with call-service action
    service: |
      [[[
        if (variables.custom_card_eraycetinay_lock_tap_control === true) {
          if (variables.custom_card_eraycetinay_lock_only_open === true) {
            return "lock.open";
          } else if (entity.state === "locked") {
            return "lock.unlock";
          } else if (entity.state === "unlocked") {
            return "lock.lock";
          }
        }
      ]]]
    # only related with call-service action
    service_data:
      entity_id: "[[[ return entity.entity_id; ]]]"
  hold_action:
    action: "more-info"
  triggers_update: "[[[ return entity.entity_id; ]]]"
  show_label: true
  show_name: true
  label: |
    [[[
      if (entity.state == "unavailable") {
        return variables.custom_card_eraycetinay_lock_unavailable;
      } else if (entity.state == "locked") {
        return variables.custom_card_eraycetinay_lock_locked;
      } else if (entity.state == "unlocked") {
        return variables.custom_card_eraycetinay_lock_unlocked;
      } else if (entity.state == "open") {
        return variables.ulm_open;
      } else if (entity.state == "unlocking") {
        return variables.custom_card_eraycetinay_lock_unlocking;
      } else if (entity.state == "locking") {
        return variables.custom_card_eraycetinay_lock_locking;
      } else if (entity.state == "jammed") {
        return variables.custom_card_eraycetinay_lock_jammed;
      } else {
        return entity.state;
      }
    ]]]
  state:
    - value: "unlocked"
      styles:
        icon:
          - color: "[[[ return 'rgba(var(--color-yellow), 1)'; ]]]"
        img_cell:
          - background-color: "[[[ return 'rgba(var(--color-yellow), 0.2)'; ]]]"
    - value: "locked"
      styles:
        icon:
          - color: "[[[ return 'rgba(var(--color-green), 1)'; ]]]"
        img_cell:
          - background-color: "[[[ return 'rgba(var(--color-green), 0.2)'; ]]]"
  styles:
    icon:
      - color: "rgba(var(--color-theme),0.2)"
    img_cell:
      - background-color: "rgba(var(--color-theme),0.05)"
      - border-radius: "50%"
      - place-self: "center"
      - width: "42px"
      - height: "42px"
    grid:
      - position: "relative"
    custom_fields:
      notification_locked_and_opened:
        - border-radius: "50%"
        - position: "absolute"
        - left: "28px"
        - top: "-6px"
        - height: "16px"
        - width: "16px"
        - border: "2px solid var(--card-background-color)"
        - font-size: "12px"
        - line-height: "14px"
        - background-color: "[[[ return 'rgba(var(--color-red),1)'; ]]]"
      notification_battery:
        - border-radius: "50%"
        - position: "absolute"
        - left: "-6px"
        - top: "-6px"
        - height: "16px"
        - width: "16px"
        - border: "2px solid var(--card-background-color)"
        - font-size: "12px"
        - line-height: "14px"
        - background-color: |
            [[[
              if (variables.custom_card_eraycetinay_lock_battery_level !== undefined) {
                if (states[variables.custom_card_eraycetinay_lock_battery_level].state <= variables.custom_card_eraycetinay_lock_battery_warning_low) {
                  return "rgba(var(--color-red),1)";
                } else if (states[variables.custom_card_eraycetinay_lock_battery_level].state <= variables.custom_card_eraycetinay_lock_battery_warning) {
                  return "rgba(var(--color-yellow),1)";
                }
              }
            ]]]
  custom_fields:
    notification_locked_and_opened: >
      [[[
          if (variables.custom_card_eraycetinay_lock_door_open !== undefined && (entity.state === "locked" && states[variables.custom_card_eraycetinay_lock_door_open].state === "on")) {
            return `<span title="${variables.custom_card_eraycetinay_lock_locked_and_opened}"><ha-icon icon="mdi:door-open" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon></span>`;
          }
      ]]]
    notification_battery: >
      [[[
          if (variables.custom_card_eraycetinay_lock_battery_level !== undefined) {
            if (variables.custom_card_eraycetinay_lock_battery_warning >= states[variables.custom_card_eraycetinay_lock_battery_level].state) {
              return `<span title="${variables.custom_card_eraycetinay_lock_battery_is_at} ${states[variables.custom_card_eraycetinay_lock_battery_level].state}%">
                        <ha-icon icon="mdi:battery-low" style="width: 12px; height: 12px; color: var(--primary-background-color);"></ha-icon>
                      </span>`;
            }
          }
      ]]]

```