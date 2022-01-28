---
title: chip_presence_detection
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_chips/chip_presence_detection.png){ width="500" }

This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more).

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| ulm_chip_presence_counter_residents     |         | :material-check: |  This is the sensor that shows your residents counter.   |
|ulm_chip_presence_counter_guests|   | :material-check: | This is the sensor that shows your guests counter.|

## Usage

```yaml
- type: 'custom:button-card'
  template: chip_presence_detection
  variables:
    ulm_chip_presence_counter_residents: sensor.people_home
    ulm_chip_presence_counter_guests: sensor.guests_home
```

??? note "Template Code"

    ```yaml title="chip_presence_detection.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/chips/chip_presence_detection.yaml"
    ```
