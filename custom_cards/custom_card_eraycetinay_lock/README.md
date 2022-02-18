---
title: custom_card_eraycetinay_lock
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

# Custom-card "Lock"

This is a `custom-card` that works in switch logic with a `lock` entity. Card structure uses `lock`, `unlock` actions and `lock`,`unlock`,`locking`,`unlocking` states.

![Generic](../../docs/assets/img/custom_card_imswel_person.gif)

## Credits

Author: eraycetinay - 2022
Version: 0.0.1

## Changelog

<details>
  <summary>1.0.0</summary>
  Initial release
</details>

## Usage

```yaml
- type: "custom:button-card"
  entity: lock.door_lock
  template: "custom_card_eraycetinay_lock"
  name: "Door Lock"
  variables:
    ulm_custom_card_eraycetinay_lock_tap_control: true
```
