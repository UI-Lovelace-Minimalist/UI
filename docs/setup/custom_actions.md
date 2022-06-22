---
title: Custom actions
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->
## Customize tap, double-tap and hold actions

This 'theme' do offer support for customizing actions. Tap, double-tap and hold on different parts (card, icon and name) of the cards could be changed. To achieve this customization follow the instructions on this page.

![actions](../assets/img/actions.png)

To change the normal behaviour of tap_action, double_tap_action and hold_action, edit `custom_actions.yaml` file located under `/config/ui_lovelace_minimalist/custom_actions/`.

```yaml
---
ulm_custom_actions:
  variables:
    ulm_card_tap_action: "toggle"
    ulm_card_hold_action: "popup"
    ulm_card_double_tap_action: "more-info"
    ulm_icon_tap_action: "popup"
    ulm_icon_hold_action: "none"
    ulm_icon_double_tap_action: "none"
    ulm_name_tap_action: "more-info"
    ulm_name_hold_action: "toggle"
    ulm_name_double_tap_action: "popup"

```

Possible values for each variables are :

| Value      | Description                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
| none       | No action                                                                                                                       |
| toggle     | Toggle an entity if available (for binary_sensor and sensor entity, `none` action is used)                                      |
| more-info  | Display more-info window                                                                                                        |
| popup      | Display UI LOVELACE MINIMALIST popup if available and enabled on card (if not `more-info` action is used)                       |
| adaptive   | Switch UI LOVELACE MINIMALIST popup on adaptive dashboard<br> if current dashboard is adaptive (if not `popup` action is used)  |

!!! tip "Reloading"

    Once you have edited `custom_actions.yaml` file, you must reload `"UI LOVELACE MINIMALIST"` configuration.
    Just go to `"Configuration" --> "Settings"` in Home Assistant and press the `"UI_LOVELACE_MINIMALIST"` button within the "YAML configuration reloading" section.

## For developpers

To enable action customization on your custom cards, use the following templates `icon_more_info_new` and `ulm_actions_card`
