---
title: Alarm Chip
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_alarm.png){ width="500" }

Alarm `chip` that displays alarm armed and disarmed state with colored icon.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity   |         | :material-check: | entity of your alarm_control_panel   |

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_alarm
  entity: alarm_control_panel.alarm
```

??? note "Template Code"

    ```yaml title="chip_alarm.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_alarm.yaml"
    ```
