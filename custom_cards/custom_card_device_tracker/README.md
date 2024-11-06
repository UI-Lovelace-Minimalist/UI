---
title: Device Tracker Custom-card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../docs/assets/img/custom_card_device_tracker.png){ width="500" }

The `custom_card_device_tracker` displays presence state of a device according to the provided entity.
It allow to display the state of two tracker for this device

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: | The device entity or group |
| ulm_custom_card_device_tracker_icon |       | :material-close: | `icon` to display |
| ulm_custom_card_device_tracker_tracker_1_entity     |         | :material-close: | Set the first tracker `entity`. |
| ulm_custom_card_device_tracker_tracker_1_type     |         | :material-close: | Set the type of the first tracker, for the notification icon |
| ulm_custom_card_device_tracker_tracker_2_entity     |         | :material-close: | Set the second tracker `entity`. |
| ulm_custom_card_device_tracker_tracker_2_type     |         | :material-close: | Set the type of the second tracker, for the notification icon |

## Usage

```yaml
- type: 'custom:button-card'
  template: custom_card_device_tracker
  entity: group.my_smartphone
  variables:
    ulm_custom_card_device_tracker_icon: mdi:cellphone
    ulm_custom_card_device_tracker_tracker_1_entity: device_tracker.my_smartphone_ping
    ulm_custom_card_device_tracker_tracker_1_type: 'lan'
    ulm_custom_card_device_tracker_tracker_2_entity: device_tracker.my_smartphone_bluetooth
    ulm_custom_card_device_tracker_tracker_2_type: 'bluetooth'
```

??? note "Template Code"

    ```yaml title="custom_card_device_tracker.yaml"
    --8<-- "custom_cards/custom_card_device_tracker/custom_card_device_tracker.yaml"
    ```
