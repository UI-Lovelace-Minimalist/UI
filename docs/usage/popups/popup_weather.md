---
title: Weather Popup
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

### Weather popup

![Phone](../../assets/img/popup_weather_phone.png){ width="500" }
![Tablet](../../assets/img/popup_weather_tablet.png){ width="500" }

#### Requirements

- weather-radar-card (download for HACS)

##### How to use

To enable this popup, add the following code to your card:

```yaml
  ulm_custom_popup:
      template: "popup_weather_forecast"
      entity: weather.xxx
      popup_variables:
          ulm_weather_popup_surpress_first_forecast: false
```

## Variables

| Variable                                  | Default | Required         | Notes                         |
|-------------------------------------------|---------|------------------|-------------------------------|
| entity                                    |         | :material-check: |                               |
| ulm_weather_popup_surpress_first_forecast | false   | :material-close: | Suppress first forecast entry |

## Credits

- Designed by schumijo
