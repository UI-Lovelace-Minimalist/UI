---
title: popup_light
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->

### Light popup

![Phone](../../assets/img/popup_light_phone.png){ width="500" }
![Tablet](../../assets/img/popup_light_tablet.png){ width="500" }

#### Requirements

- My Cards Bundle aka slider-card (download for HACS)
- Light Entity Card (download for HACS)

##### Card compatibility

This popup is compatible with the following cards/chips :

- card_light with variable `ulm_card_light_enable_popup` set to ``true`.

##### How to use

```yaml
- type: "custom:button-card"
  template: card_light
  entity: light.allee
  variables:
    ulm_card_light_enable_popup: true
```

## Credits

- Designed by schumijo and bavo (special thanks to him for his help on this development)).