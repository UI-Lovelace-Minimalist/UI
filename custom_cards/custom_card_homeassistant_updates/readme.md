
<h1 align="center">Custom Home Assistant card - UI Lovelace Minimalist</h1> 


<p align="center">
  <a href="https://github.com/UI-Lovelace-Minimalist/UI/">
    <img src="https://img.shields.io/badge/UI%20Minimalist-Default-299ec2.svg" />
  </a>
  <a href="https://github.com/LRvdLinden/find_my_dd_addon">
    <img src="https://img.shields.io/github/v/release/AndyVRD/UI/blob/dev/custom_cards/custom_card_homeassistant_updates" />
  </a>
    <a href="https://github.com/AndyVRD">
    <img src="https://img.shields.io/github/followers/AndyVRD?style=social" />
  </a>
</p>




<p align="center">
  <img src="https://user-images.githubusercontent.com/77990847/153276739-eca3b118-9847-4070-8020-434cc0a963fb.png" />
</p>



## Prerequisite ⚙️
---
- Make sure you have installed the lovelace [multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row), [fontawesome icons](https://github.com/thomasloven/hass-fontawesome) and [Cupertino Icons](https://github.com/menahishayan/HomeAssistant-Cupertino-Icons). This can be done manually or directly via hacs
- For Apple Devices you can use the integration [iCloud](https://www.home-assistant.io/integrations/icloud/) for Home Assistant to add `device_tracker` to the `page.yaml`


## Installation Add-on ⚙️
---
- Copy `find_my` folder and place it in to the `dwains-dashboard/addons/more_page/` directory.
- Open your `more_page.yaml` file in `dwains-dashboard/configs` and add the following;
```yaml
  - name: Find My
    main_menu: 'true' #Show this addon in the main navigation bar!
    icon: mdi:radar
    path: 'dwains-dashboard/addons/more_page/find_my/page.yaml'
```
- Reload the theme configuration via Theme Settings

## UI card ⚙️
---
- If you want to add more cards, copy a whole row`
### Example
```yaml
      - type: 'custom:button-card'
        template: card_homeassistant
        variables:
          ulm_card_homeassistant_entity: 'group.updaters'
          ulm_card_homeassistant_core: "sensor.core_updates"
          ulm_card_homeassistant_supervisor: "sensor.supervisor_updates"
          ulm_card_homeassistant_os: "sensor.os_updates"
```




