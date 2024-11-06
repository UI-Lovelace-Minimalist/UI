---
title: Person Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Description

![example-image](../../assets/img/ulm_cards/card_person.png){ width="500" }

The `card_person` shows if a person is `home` or `not_home`. If you have setup other zones, it will show these as well.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |         | :material-check: | The person entity |
| ulm_card_person_entity     |         | :material-check: | The person entity |
| ulm_card_person_use_entity_picture |       | :material-close: | If you set this to true, the card shows the entity picture from your user, otherwise (set to false) shows the icon. Default is false. |
| ulm_card_person_icon | mdi:face-man | :material-close: | Sets the icon to display if entity picture not shown. |
| ulm_card_person_battery     |         | :material-close: | Battery sensor shown in the upper right corner |
| ulm_card_person_eta     |         | :material-close: | Sensor with ETA info from integrations like: [Waze](https://www.home-assistant.io/integrations/waze_travel_time/), [Google](https://www.home-assistant.io/integrations/google_travel_time/) and [HERE](https://www.home-assistant.io/integrations/here_travel_time/) |
| ulm_address     |         | :material-close: | Show an address as label, add an entity with a geo location |

## Usage

```yaml
- type: 'custom:button-card'
  template: card_person
  entity: person.username
  variables:
    ulm_card_person_entity: person.username
    ulm_card_person_use_entity_picture: true
    ulm_card_person_icon: mdi:face-woman
    ulm_card_person_battery: sensor.battery_iphone
    ulm_card_person_eta: sensor.waze_travel_time_person
    ulm_address: sensor.s10_mike_gegeocodeerde_locatie
```

??? note "Template Code"

    ```yaml title="card_person.yaml"
    --8<-- "custom_components/ui_lovelace_minimalist/lovelace/ulm_templates/card_templates/cards/card_person.yaml"
    ```
