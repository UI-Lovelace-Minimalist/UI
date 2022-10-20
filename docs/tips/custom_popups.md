---
title: Custom Popups
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

## Use Custom Popups

Not all popups are made with `custom:button-card`. Popups can be constructed from any type of card available within the Home Assistant Frontend. The [Custom Popup](https://ui-lovelace-minimalist.github.io/UI/setup/custom_actions/#custom-popups) variable only provides support for `button_card_templates`. To convert easily all types of cards to a template we will provide some workaround.

### Workaround method

We take for example the weather forecast card to convert to a useful custom popup.

```yaml
    type: weather-forecast
    entity: weather.dummytown
    show_forecast: false
```

1. First we need to create a new **YAML-file** in the `config/ui_lovelace_minimalist/custom_cards/` --> Let's say *custom_weather_popup.yaml*.

2. The created file is the template we gonna use in the Custom Popup variable later on. The file should start with the name of your template. In this example we choose *custom_weather_popup*.

3. Copy over all the other code from below to convert the card to a template.

    ```yaml
    custom_weather_popup:
    show_icon: false
    show_name: false
    show_label: false
    show_units: false
    styles:
        grid:
        - grid-template-areas: "'popup_card' 'back'"
        card:
        - background: "var(--primary-background-color)"
        - box-shadow: "none"
        - padding: "0%"
        custom_fields:
        back:
            - place-self: "center"
            - padding-top: "12px"
    custom_fields:
        back:
        card:
            type: "custom:button-card"
            template: "popup_button_back"
        popup_card:
        card:
            entity: "[[[ return entity.entity_id ]]]"
    ```

4. Now we can add the card we want to convert to the code.

    ```yaml
    custom_weather_popup:
    show_icon: false
    show_name: false
    show_label: false
    show_units: false
    styles:
        grid:
        - grid-template-areas: "'popup_card' 'back'"
        card:
        - background: "var(--primary-background-color)"
        - box-shadow: "none"
        - padding: "0%"
        custom_fields:
        back:
            - place-self: "center"
            - padding-top: "12px"
    custom_fields:
        back:
        card:
            type: "custom:button-card"
            template: "popup_button_back"
        popup_card:
        card:
            entity: "[[[ return entity.entity_id ]]]"
            type: weather-forecast
            show_forecast: false
    ```

5. Now we can add to popup to any Minimalist card that supports custom actions with the following config:

    ```yaml
    variables:
    ulm_custom_popup:
        template: "custom_weather_popup"
        entity: weather.dummytown
    ```
