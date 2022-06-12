---
title: Lock Card Custom-card
hide:
  - toc
---

<!-- markdownlint-disable MD046 -->

# Custom-card "Lock"

This is a `custom-card` that works in switch logic with a `lock` entity. Card structure uses `lock`, `unlock` (optional `open`) actions and `lock`,`unlock`,`locking`,`unlocking`, `jammed` states.

![Generic](../../docs/assets/img/custom_card_eraycetinay_lock_locked.png)
![Generic](../../docs/assets/img/custom_card_eraycetinay_lock_unlocked.png)

## Credits

Author: eraycetinay - 2022
Version: 0.0.1

## Changelog

<details>
  <summary>0.0.2</summary>
  Added option to only use lock.open
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
    ulm_custom_card_eraycetinay_lock_tap_control: true
    ulm_custom_card_eraycetinay_lock_open: true
```

## Variables

<table>
<tr>
<th>Variable</th>
<th>Example</th>
<th>Required</th>
<th>Explanation</th>
</tr>
<tr>
<td>ulm_custom_card_eraycetinay_lock_tap_control</td>
<td>true</td>
<td>no</td>
<td>Lock/Unlock on tap action</td>
</tr>
<tr>
<td>ulm_custom_card_eraycetinay_lock_open</td>
<td>true</td>
<td>no</td>
<td>Only use the card to open the door (always sends lock.open on tap)</td>
</tr>
</table>

??? note "Template Code"

    ```yaml title="custom_card_eraycetinay_lock.yaml"
    --8<-- "custom_cards/custom_card_eraycetinay_lock/custom_card_eraycetinay_lock.yaml"
    ```
