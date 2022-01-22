---
title: card_weather
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_example.png){ width="500" }

This is a card based on simple-weather-card to show your weather.
[simple-weather-card](https://github.com/kalkih/simple-weather-card) lovelace ressources must be installed for this one!

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: | your weather entity |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_weather
  entity: weather.my_local_weather
```

??? note "Template Code"

    ```yaml title="card_light.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_weather.yaml"
    ```
