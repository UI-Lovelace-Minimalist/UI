---
title: Person Ristou Custom Card
hide:
  - toc
---
<!-- markdownlint-disable MD046 -->
# Custom card ristou person

<table>
    <tbody>
        <tr>
            <td><img src="../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_light.png"></td>
            <td><img src="../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_dark.png"></td>
        </tr>
    </tbody>
</table>

## Credits

- Author: Ristou - 2022
- Version: 1.0.0

## Changelog

<details>
<summary>1.0.0</summary>
Initial release
</details>

## Description

The `custom_card_ristou_person` shows if a person is `home` or `not_home`. If you have setup other zones, it will show these as well (e.g `work`, `school`, `doctor`, etc... ).
Work
Showing driving state is also possible with a binary sensor.

In addition, this card can display a map (either static or using buit in map) in a second row.

## Icon style
As the main icon of this card you can choose the following set up
| Variables | UI |
|---------|----|
| ulm_custom_card_ristou_use_badge: `true` <br> ulm_custom_card_ristou_use_entity_picture: `false`| ![](../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_face_icon_badge.png) |
| ulm_custom_card_ristou_use_badge: `true` <br> ulm_custom_card_ristou_use_entity_picture: `true`| ![](../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_picture_badge.png) |
| ulm_custom_card_ristou_use_badge: `false` <br> ulm_custom_card_ristou_use_entity_picture: `false` | ![](../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_icon_only.png) |

## map style

| Variables | UI |
|---------|----|
|ulm_custom_card_ristou_camera_entity_light != "" and <br> ulm_custom_card_ristou_camera_entity_dark != "" | <img src="../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_camera.png">|
| ulm_custom_card_ristou_map_enable: `true` | <img src="../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_map.png"> |
| ulm_custom_card_ristou_camera_entity_light = "" and <br>ulm_custom_card_ristou_camera_entity_dark = "" and <br>ulm_custom_card_ristou_map_enable = `false` | <img src="../../docs/assets/img/custom_card_ristou_person/custom_card_ristou_person_no_map.png"> |

## About Static maps
The advantage of static map is that it is easy to custom and non-draggable.
For instance when you scroll down and you accidently press first on map card.

I choose map box for the following reasons:
- Easy to sep it up with [static image API playground](https://docs.mapbox.com/playground/static/)
- Already existing styles (light & dark) to fit to your theme.
- Add many custom markers, I decided to represent my current location , home, and work.
- Possibility to remove attribution and logo.

URL can be direclty use inside a camera entity using dynamic markers as explain [here](https://www.home-assistant.io/examples/google_maps_card/)

below is an example of the url I use for mapbox:
``` yaml
https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l-suitcase+f88927({{ state_attr('zone.work', 'longitude') }},{{ state_attr('zone.work', 'latitude') }}),pin-l-home+01C852({{ state_attr('zone.home', 'longitude') }},{{ state_attr('zone.home', 'latitude') }}),pin-l-m+3D5AFE({{ state_attr('device_tracker.mathieu_phone', 'longitude') }},{{ state_attr('device_tracker.mathieu_phone', 'latitude') }})/auto/466x200?attribution=false&logo=false&&access_token=YOUR_TOKEN
```

## Known issues

### map
built in map is not always rendering properly. I observed 2 issues:
- Not displaying if under sub stack like `horizontal stack` or `vertical stack`. another map has to be added somewhere else in the page. [Github issue](https://github.com/home-assistant/frontend/issues/12023)
- In IOS (never tried with other devices) bottom corner radius is not taken into consideration

### Static map
Static map can be blurry if ratio does not fit card width.
In my case I used developper tool to find out exact width of the card (which is 466px) and then I ajusted the heigh to my needs.

## Variables

| Variable | Default | Required         | Notes             |
|----------|---------|------------------|-------------------|
| entity     |  | ✔️ | person entity |
| ulm_custom_card_ristou_use_entity_picture     | false | ❌ | If you set this to true, the card shows the entity picture from your user, otherwise (set to false) shows the icon. Default is false. |
| ulm_custom_card_ristou_use_badge     | true | ❌ | Show a notification badge on the icon. if set to false and not sing entity picture, then icon will be dinamically displayed to (Home, Away, Known place, or CAR) |
| ulm_custom_card_ristou_map_enable     |false| ❌ | Display built in map as a second row |
| ulm_custom_card_ristou_map_aspect_ratio     |16:5| ❌ | Display built in map as a second row |
| ulm_custom_card_ristou_map_hours_to_show     |24| ❌ | Display built in map as a second row |
| ulm_custom_card_ristou_map_default_zoom     |9| ❌ | Display built in map as a second row |
| ulm_custom_card_ristou_camera_entity_light     |         | ❌ | Camera entity picture in light mode |
| ulm_custom_card_ristou_camera_entity_dark     |         | ❌ | Camera entity picture in dark mode |
| ulm_custom_card_ristou_zones     |         | ❌ | Used to display known zone on badge, icon, label or map |
| ulm_custom_card_ristou_findmy_script     |         | ❌ | Show a button to find your phone |

## Usage

```yaml
- type: "custom:button-card"
  template: custom_card_ristou_person
  entity: person.mathieu
  variables:
    ulm_custom_card_ristou_use_entity_picture: true
    ulm_custom_card_ristou_findmy_script: script.find_phone_mathieu
    ulm_custom_card_ristou_person_driving_entity: binary_sensor.mathieu_driving
    ulm_custom_card_ristou_camera_entity_light: "camera.mapbox_mathieu_light"
    ulm_custom_card_ristou_camera_entity_dark: "camera.mapbox_mathieu_dark"
    ulm_custom_card_ristou_zones:
      - person.isabelle
      - person.mathieu
      - zone.work
      - zone.judo
      - zone.doctor
      - zone.nounou
      - zone.work_isabelle
```

## Template code

<!-- <details>
<summary>Template Code</summary> -->

``` yaml
---
### custom card ristou person ###
custom_card_ristou_person:
  template:
    - "ulm_language_variables"
    - "ulm_custom_card_ristou_person_language_variables"
  variables:
    ulm_custom_card_ristou_name: "[[[ return entity.attributes.friendly_name ]]]"
    ulm_custom_card_ristou_icon: "[[[ return entity.attributes.icon ]]]"
    ulm_custom_card_ristou_use_entity_picture: false
    ulm_custom_card_ristou_use_badge: true
    ulm_custom_card_ristou_enable_map: false
    ulm_custom_card_ristou_findmy_script: ""
    ulm_custom_card_ristou_zones:
    ulm_custom_card_ristou_person_driving_entity: ""
    ulm_custom_card_ristou_aspect_ratio: "16:5"
    ulm_custom_card_ristou_hours_to_show: 24
    ulm_custom_card_ristou_default_zoom: 9
    ulm_custom_card_ristou_camera_entity_light: ""
    ulm_custom_card_ristou_camera_entity_dark: ""
  show_icon: false
  show_name: false
  show_label: false
  triggers_update: "all"
  styles:
    grid:
      - grid-template-areas: >
          [[[
            if (variables.ulm_custom_card_ristou_enable_map) {
                return "\"item1\" \"item3\"";
            } else if (
              variables.ulm_custom_card_ristou_camera_entity_light !== "" 
              && variables.ulm_custom_card_ristou_camera_entity_dark !== ""
            ) {
                return "\"item1\" \"item2\"";
            } else {
              return "\"item1\""
            }
          ]]]
      - grid-template-columns: >
          [[[

            return "1fr";
          ]]]
      - grid-template-rows: >
          [[[
            return "1fr";
          ]]]
    card:
      - border-radius: "var(--border-radius)"
      - box-shadow: "var(--box-shadow)"
      - padding: "0px"
    custom_fields:
      item2:
        - display: >
            [[[
              if (
                variables.ulm_custom_card_ristou_camera_entity_light !== "" 
                && variables.ulm_custom_card_ristou_camera_entity_dark !== "" 
                && !variables.ulm_custom_card_ristou_enable_map
              ) {
                  return "block";
              } else {
                  return "none";
              }
            ]]]
      item3:
        - display: >
            [[[
              if (variables.ulm_custom_card_ristou_enable_map) {
                  return "block";
              } else {
                  return "none";
              }
            ]]]
  custom_fields:
    item1:
      ###############
      ### 1ST ROW ###
      ###############
      card:
        type: "custom:button-card"
        template:
          - "icon_more_info"
        styles:
          grid:
            - grid-template-areas: '"item1 item2 item3"'
            - grid-template-columns: min-content 1fr auto
            - grid-template-rows: min-content
          custom_fields:
            item3:
              - display: >
                  [[[
                        if (variables.ulm_custom_card_ristou_findmy_script !== "") {
                            return "block";
                        } else {
                            return "none";
                        }
                  ]]]
        custom_fields:
          ###################
          ### PERSON ICON ###
          ###################
          item1:
            card:
              type: "custom:button-card"
              entity: "[[[ return entity.entity_id ]]]"
              icon: >
                [[[
                  if (!variables.ulm_custom_card_ristou_use_badge) {
                    var zones = variables.ulm_custom_card_ristou_zones;
                    var person_location = entity.state;
                    var driving_state = "off"
                    if (variables.ulm_custom_card_ristou_person_driving_entity !== "") {
                      driving_state = states[variables.ulm_custom_card_ristou_person_driving_entity].state;
                    }
                    if (driving_state === "on" || driving_state === "true") {
                      return "mdi:car";
                    } else {
                      if (person_location !== 'home'){
                          for (const item of zones){
                            if (person_location == states[item]?.attributes?.friendly_name){
                              var icon = (states[item].attributes.icon !== null) ? states[item].attributes.icon : 'mdi:help-circle';
                              return icon ;
                            } else if (person_location == 'not_home'){
                              return "mdi:home-minus";
                            }
                          }
                      } else{
                        return "mdi:home-variant";
                      }
                    }
                  } else {
                    return  "mdi:face-man";
                  }
                ]]]
              show_entity_picture: "[[[ return variables.ulm_custom_card_ristou_use_entity_picture ]]]"
              entity_picture:
                "[[[ return variables.ulm_custom_card_ristou_use_entity_picture != false ? states[entity.entity_id].attributes.entity_picture\
                \ : null ]]]"
              styles:
                icon:
                  - color: >
                      [[[
                        if (!variables.ulm_custom_card_ristou_use_badge) {
                          var zones = variables.ulm_custom_card_ristou_zones;
                          var person_location = entity.state;
                          var driving_state = "off"
                          if (variables.ulm_custom_card_ristou_person_driving_entity !== "") {
                            driving_state = states[variables.ulm_custom_card_ristou_person_driving_entity].state;
                          }

                          if (driving_state === "on" || driving_state === "true") {
                            return 'rgba(var(--color-red),0.9)';
                          } else {
                            if (person_location !== 'home'){
                              for (const item of zones){
                                if (person_location == states[item]?.attributes?.friendly_name){
                                  return 'rgba(var(--color-yellow),0.9)';
                                } else if (person_location == 'not_home'){
                                  return 'rgba(var(--color-blue),0.9)';
                                }
                              }
                            } else{
                              return 'rgba(var(--color-green),0.9)';
                            }
                          }
                        } else {
                          return "rgba(var(--color-theme),0.9)";
                        }
                      ]]]
                  - width: >
                      [[[
                        if (variables.ulm_custom_card_ristou_use_entity_picture !== true){
                          return "20px";
                        } else {
                          return "42px";
                        }
                      ]]]
                  - place-self: >
                      [[[
                        if (variables.ulm_custom_card_ristou_use_entity_picture !== true){
                          return "center";
                        } else {
                          return "stretch stretch";
                        }
                      ]]]
                img_cell:
                  - background-color: >
                      [[[
                        if (!variables.ulm_custom_card_ristou_use_badge) {
                          var zones = variables.ulm_custom_card_ristou_zones;
                          var person_location = entity.state;
                          var driving_state = "off"
                          if (variables.ulm_custom_card_ristou_person_driving_entity !== "") {
                            driving_state = states[variables.ulm_custom_card_ristou_person_driving_entity].state;
                          }
                          if (driving_state === "on" || driving_state === "true") {
                            return 'rgba(var(--color-red),0.2)';
                          } else {
                            if (person_location !== 'home'){
                              for (const item of zones){
                                if (person_location == states[item]?.attributes?.friendly_name){
                                  return 'rgba(var(--color-yellow),0.2)';
                                } else if (person_location == 'not_home'){
                                  return 'rgba(var(--color-blue),0.2)';
                                }
                              }
                            } else {
                              return 'rgba(var(--color-green),0.2)';
                            }
                          }
                        } else {
                          return 'rgba(var(--color-theme),0.05)';
                        }
                      ]]]
                card:
                  - box-shadow: "none"
                  - border-radius: "var(--border-radius) var(--border-radius) 0px 0px"
                  - padding: "12px 0px 12px 12px"
                custom_fields:
                  notification:
                    - border-radius: "50%"
                    - position: "absolute"
                    - left: "38px"
                    - top: "8px"
                    - height: "16px"
                    - width: "16px"
                    - border: "2px solid var(--card-background-color)"
                    - font-size: "12px"
                    - line-height: "14px"
                    - background-color: >
                        [[[
                          var zones = variables.ulm_custom_card_ristou_zones;
                          var person_location = entity.state;
                          var driving_state = "off"
                          if (variables.ulm_custom_card_ristou_person_driving_entity !== "") {
                            driving_state = states[variables.ulm_custom_card_ristou_person_driving_entity].state;
                          }
                          if (driving_state === "on" || driving_state === "true") {
                            return "rgba(var(--color-red),1)";
                          } else {
                            if (person_location !== 'home'){
                              for (const item of zones){
                                if (person_location == states[item]?.attributes?.friendly_name){
                                  return "rgba(var(--color-yellow),1)";
                                } else if (person_location == 'not_home'){
                                  return "rgba(var(--color-blue),1)";
                                }
                              }
                            } else{
                              return "rgba(var(--color-green),1)";
                            }
                          }
                        ]]]
                    - display: >
                        [[[
                              if (variables.ulm_custom_card_ristou_use_badge) {
                                  return "block";
                              } else {
                                  return "none";
                              }
                        ]]]
              custom_fields:
                notification: >
                  [[[
                    var zones = variables.ulm_custom_card_ristou_zones;
                    var person_location = entity.state;
                    var driving_state = "off"
                    var icon = "mdi:help-circle"
                    if (variables.ulm_custom_card_ristou_person_driving_entity !== "") {
                      driving_state = states[variables.ulm_custom_card_ristou_person_driving_entity].state;
                    }
                    if (driving_state === "on" || driving_state === "true") {
                      icon = 'mdi:car';
                    } else {
                      if (person_location !== 'home'){
                        for (const item of zones){
                          if (person_location == states[item]?.attributes?.friendly_name){
                            icon = (states[item].attributes.icon !== null) ? states[item].attributes.icon : 'mdi:help-circle';
                          } else if (person_location == 'not_home'){
                            icon = 'mdi:home-minus';
                          }
                        }
                      } else{
                        icon = 'mdi:home-variant';
                      }
                    }
                    return '<ha-icon icon="' + icon + '" style="width: 10px; height: 10px; color: var(--primary-background-color);"></ha-icon>';
                  ]]]
          #####################
          ### LABEL + STATE ###
          #####################
          item2:
            card:
              type: "custom:button-card"
              entity: "[[[ return entity.entity_id ]]]"
              name: "[[[ return variables.ulm_custom_card_ristou_name ]]]"
              label: >-
                [[[
                  var location = entity.state
                  var driving_state = "off"
                  if (variables.ulm_custom_card_ristou_person_driving_entity !== "") {
                    driving_state = states[variables.ulm_custom_card_ristou_person_driving_entity].state;
                  }
                  if (driving_state === "on" || driving_state === "true") {
                    return variables.ulm_custom_card_ristou_person_driving;
                  } else {
                    if (location == "unavailable"){
                      return variables.ulm_unavailable;
                    } else if (location == "not_home"){
                      return variables.ulm_custom_card_ristou_person_not_home;
                    } else{
                      return (location == "home") ? variables.ulm_custom_card_ristou_person_home : location;
                    }
                  }
                ]]]
          #####################
          ### FIND MY PHONE ###
          #####################
          item3:
            card:
              template:
                - "icon_info_bg"
                - "blue"
              show_name: false
              show_label: false
              type: "custom:button-card"
              entity: "[[[ return variables.ulm_custom_card_ristou_findmy_script ]]]"
              icon: "[[[ return variables.ulm_custom_card_ristou_icon ]]]"
              tap_action:
                action: "toggle"
              styles:
                card:
                  - box-shadow: "none"
                  - border-radius: "var(--border-radius)"
                  - padding: "12px"
    ###############
    ### 2ND ROW ###
    ###############
    item2:
      ##################
      ### STATIC MAP ###
      ##################
      card:
        type: picture-entity
        show_state: false
        show_name: false
        camera_view: auto
        entity: >-
          [[[
              if (hass.themes.darkMode) {
                return variables.ulm_custom_card_ristou_camera_entity_dark;
              } else {
                return variables.ulm_custom_card_ristou_camera_entity_light;
              }
          ]]]
        style:
          .: |
            ha-card {
              box-shadow: none;
              border-radius: 0px 0px var(--border-radius) var(--border-radius);
            }
    item3:
      ###################
      ### BUILTIN MAP ###
      ###################
      card:
        type: "map"
        aspect_ratio: "[[[ return variables.ulm_custom_card_ristou_aspect_ratio ]]]"
        hours_to_show: "[[[ return variables.ulm_custom_card_ristou_hours_to_show ]]]"
        entities: "[[[ return variables.ulm_custom_card_ristou_zones ]]]"
        style:
          ha-map$: |
            .leaflet-control-attribution {
              visibility: hidden;
            }
            .leaflet-control-zoom {
              visibility: hidden;
            }
          .: |
            ha-card {
              box-shadow: none;
              border-radius: 0px 0px var(--border-radius) var(--border-radius);
            }
```
<!-- </details> -->