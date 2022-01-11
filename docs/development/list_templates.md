---
title: Template list (dev)
parent: Development
nav_order: 3
---
# [](#templates)Templates

This is a list of all our templates. This is the template code, that is used, when you reference the template in your view file(s). This code is needed, if you manually install this theme or develop a `custom-card`.

> **Note:** _If you’re looking for the code to **use** these templates, see the list [on this page](/usage/template_list)_

> **Hint:** _If you want to copy all templates at once, eg. for installation purposes, use the file `button_card_templates.yaml` that you can find in the repository under `config` > `minimalist-templates` or click [here](https://github.com/UI-Lovelace-Minimalist/UI/blob/main/config/minimalist-templates/button_card_templates.yaml)._

<details><summary>Template name: card_battery</summary>

```yaml
    card_battery:
      template:
        - icon_info_bg
      tap_action:
        action: more-info
      variables:
        ulm_card_battery_attribute:
      icon: |
        [[[
          var icon = "mdi:help-circle-outline";
          var battery = variables.ulm_card_battery_attribute !== null
            ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
            : states[entity.entity_id].state;

          if (battery == 100) {
            icon = "mdi:battery";
          } else if (battery >= 90) {
            icon = "mdi:battery-90";
          } else if (battery >= 80) {
            icon = "mdi:battery-80";
          } else if (battery >= 70) {
            icon = "mdi:battery-70";
          } else if (battery >= 60) {
            icon = "mdi:battery-60";
          } else if (battery >= 50) {
            icon = "mdi:battery-50";
          } else if (battery >= 40) {
            icon = "mdi:battery-40";
          } else if (battery >= 30) {
            icon = "mdi:battery-30";
          } else if (battery >= 20) {
            icon = "mdi:battery-20";
          } else if (battery >= 10) {
            icon = "mdi:battery-10";
          } else {
            icon = "mdi:battery-outline";
          }

          return icon;
        ]]]
      label: |
        [[[
          var battery = variables.ulm_card_battery_attribute !== null
            ? states[entity.entity_id].attributes[variables.ulm_card_battery_attribute]
            : states[entity.entity_id].state;
          return battery + "%";
        ]]]
      name: |
        [[[
          return states[entity.entity_id].attributes.friendly_name;
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.9)'
        label:
          - align-self: end
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
          - filter: opacity(100%)
        name:
          - justify-self: start
          - align-self: start
          - font-weight: bolder
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        grid:
          - grid-template-areas: '"i l" "i n"'
          - grid-template-columns: min-content auto
          - grid-template-rows: min-content min-content

```

</details><details><summary>Template name: card_binary_sensor</summary>

```yaml
    card_binary_sensor:
      template: 
        - icon_info_bg
        - blue
      name: "[[[ return entity.attributes.friendly_name != '' ? entity.attributes.friendly_name : entity.entity_id ]]]"
      show_last_changed: true

```

</details><details><summary>Template name: card_binary_sensor_alert</summary>

```yaml
    card_binary_sensor_alert:
      template: 
        - icon_info_alert
      name: "[[[ return entity.attributes.friendly_name != '' ? entity.attributes.friendly_name : entity.entity_id ]]]"
      show_last_changed: true

```

</details><details><summary>Template name: card_cover_with_buttons</summary>

```yaml
    card_cover_with_buttons:
      variables:
        ulm_card_cover_with_buttons_name: "n/a"
      triggers_update:
        - "[[[ variables.ulm_card_cover_with_buttons_entity ]]]"
      styles:
        grid:
          - grid-template-areas: '"item1" "item2"'
          - grid-template-columns: 1fr
          - grid-template-rows: min-content  min-content
          - row-gap: 12px
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        item1:
          card:
            type: 'custom:button-card'
            template:
              - icon_info
              - ulm_language_variables
              - cover
            tap_action:
              action: more-info
            entity: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
            name: '[[[ return variables.ulm_card_cover_with_buttons_name ]]]'
        item2:
          card:
            type: 'custom:button-card'
            template: list_items
            custom_fields:
              item1:
                card:
                  type: 'custom:button-card'
                  template: widget_icon
                  tap_action:
                    action: call-service
                    service: cover.close_cover
                    service_data:
                      entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                  icon: 'mdi:arrow-down'
              item2:
                card:
                  type: 'custom:button-card'
                  template: widget_icon
                  tap_action:
                    action: call-service
                    service: cover.stop_cover
                    service_data:
                      entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                  icon: 'mdi:pause'
              item3:
                card:
                  type: 'custom:button-card'
                  template: widget_icon
                  tap_action:
                    action: call-service
                    service: cover.open_cover
                    service_data:
                      entity_id: '[[[ return variables.ulm_card_cover_with_buttons_entity ]]]'
                  icon: 'mdi:arrow-up'

```

</details><details><summary>Template name: card_generic</summary>

```yaml
    card_generic:
      template: 
        - icon_info_bg
        - ulm_language_variables
      label: >
        [[[
          var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
          if (entity.state == 'on') {
            return variables.ulm_on;
          } else if (entity.state == 'off') {
            return variables.ulm_off;
          } else if (entity.state == 'unavailable') {
            return variables.ulm_unavailable;
          } else if (entity.state == 'idle') {
            return variables.ulm_idle;
          } else if (entity.state == 'open') {
            return variables.ulm_open;
          } else if (entity.state == 'closed') {
            return variables.ulm_closed;
          } else {
            return entity.state + unit;
          }
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.9)'
        label:
          - align-self: end
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
          - filter: opacity(100%)
        name:
          - justify-self: start
          - align-self: start
          - font-weight: bolder
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        grid:
          - grid-template-areas: '"i l" "i n"'
          - grid-template-columns: min-content auto
          - grid-template-rows: min-content min-content

```

</details><details><summary>Template name: card_generic_swap</summary>

```yaml
    card_generic_swap:
      template: 
        - icon_info_bg
        - ulm_language_variables
      label: >
        [[[
          var unit = entity.attributes.unit_of_measurement != null ? ' ' + entity.attributes.unit_of_measurement : ''
          if (entity.state == 'on') {
            return variables.ulm_on;
          } else if (entity.state == 'off') {
            return variables.ulm_off;
          } else if (entity.state == 'unavailable') {
            return variables.ulm_unavailable;
          } else if (entity.state == 'idle') {
            return variables.ulm_idle;
          } else if (entity.state == 'open') {
            return variables.ulm_open;
          } else if (entity.state == 'closed') {
            return variables.ulm_closed;
          } else {
            return entity.state + unit;
          }
        ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.9)'
        label:
          - justify-self: start
          - align-self: start
          - font-weight: bolder
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        name:
          - align-self: end
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
          - filter: opacity(100%)
        grid:
          - grid-template-areas: '"i n" "i l"'
          - grid-template-columns: min-content auto
          - grid-template-rows: min-content min-content

```

</details><details><summary>Template name: card_graph</summary>

```yaml
    card_graph:
      variables:
        ulm_card_graph_color: "var(--info-color)"
        ulm_card_graph_name: "n/a"
      triggers_update:
        - "[[[ variables.ulm_card_graph_entity ]]]"
      styles:
        grid:
          - grid-template-areas: '"item1" "item2"'
          - grid-template-columns: 1fr
          - grid-template-rows: min-content  min-content
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 0px
      custom_fields:
        item1:
          card:
            type: 'custom:button-card'
            template: 
              - icon_info
              - card_generic
            styles:
              card:
                - box-shadow: none
                - border-radius: var(--border-radius) var(--border-radius) 0px 0px
                - padding: 12px
            entity: '[[[ return variables.ulm_card_graph_entity ]]]'
            name: '[[[ return variables.ulm_card_graph_name ]]]'
        item2:
          card:
            type: 'custom:mini-graph-card'
            entities:
              - entity: '[[[ return variables.ulm_card_graph_entity ]]]'
            line_color: '[[[ return variables.ulm_card_graph_color ]]]'
            show:
              name: false
              icon: false
              legend: false
              state: false
            style: |
              ha-card {
                box-shadow: none;
                border-radius: var(--border-radius);
              }

```

</details><details><summary>Template name: card_input_boolean</summary>

```yaml
    card_input_boolean:
      template: 
        - icon_info_bg
        - ulm_language_variables
        - blue
      name: "[[[ return entity.attributes.friendly_name != '' ? entity.attributes.friendly_name : entity.entity_id ]]]"
      label: >
        [[[
          if (entity.state != 'unavailable'){
            if (entity.state == 'on'){
              return variables.ulm_on;
            } else {
              return variables.ulm_off;
            }
          } else {
            return variables.ulm_unavailable;
          }
        ]]]

```

</details><details><summary>Template name: card_light</summary>

```yaml
    card_light:
      template: 
        - icon_info_bg
        - yellow
        - ulm_language_variables
      tap_action:
        action: toggle
      hold_action:
        action: more-info
      label: >-
        [[[ 
          if (entity.state != 'unavailable'){
            if (entity.state =='off'){
              return variables.ulm_off;  
            } else if (entity.state == 'on'){
              if (entity.attributes.brightness != null){
                var bri = Math.round(entity.attributes.brightness / 2.55);
                return (bri ? bri : '0') + '%';
              } else {
                return variables.ulm_on
              } 
            }
          } else {
            return variables.ulm_unavailable;
          }
        ]]]

```

</details><details><summary>Template name: card_light_slider</summary>

```yaml
    card_light_slider:
      template: 
        - ulm_language_variables
      variables:
        ulm_card_light_slider_name: "[[[ return entity.attributes.friendly_name ]]]"
      show_icon: false
      show_name: false
      show_label: false
      state:
        - operator: template
          value: "[[[ return entity.state == 'on' ]]]"
          styles:
            card:
              - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
      styles:
        grid:
          - grid-template-areas: '"item1" "item2"'
          - grid-template-columns: 1fr
          - grid-template-rows: min-content min-content
          - row-gap: 12px
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        item1:
          card:
            type: 'custom:button-card'
            template:
              - icon_info
              - yellow_slider
            entity: "[[[ return entity.entity_id ]]]"
            label: >-
              [[[  
                if (entity.state !='unavailable'){
                  if (entity.state =='off'){
                    return variables.ulm_off;  
                  } else if (entity.state == 'on'){
                    if (entity.attributes.brightness != null){
                      var bri = Math.round(entity.attributes.brightness / 2.55);
                      return (bri ? bri : '0') + '%';
                    } else {
                      return variables.ulm_on
                    } 
                  }
                } else {
                  return variables.ulm_unavailable;
                }
              ]]]
            name: "[[[ return variables.ulm_card_light_slider_name ]]]"
            styles:
              card:
                - box-shadow: none
                - border-radius: var(--border-radius) var(--border-radius) var(--border-radius) var(--border-radius)
                - padding: 0px
        item2:
          card:
            type: 'custom:my-slider'
            entity: '[[[ return entity.entity_id ]]]'
            radius: 14px
            height: 42px
            mainSliderColor: rgba(var(--color-yellow),1)
            secondarySliderColor: rgba(var(--color-yellow),0.2)
            mainSliderColorOff: rgba(var(--color-theme),0.05)
            secondarySliderColorOff: rgba(var(--color-theme),0.05)
            thumbHorizontalPadding: '0px'
            thumbVerticalPadding: '0px'   
            thumbWidth: 0px
            card_mod:
            style: |
              ha-card {
                border-radius: 14px;
                box-shadow: none;
              }

```

</details><details><summary>Template name: card_light_slider_collapse</summary>

```yaml
    card_light_slider_collapse:
      template: 
        - ulm_language_variables
      variables:
        ulm_card_light_slider_collapse_name: "[[[ return entity.attributes.friendly_name ]]]"
      show_icon: false
      show_name: false
      show_label: false
      state:
        - operator: template
          value: "[[[ return entity.state == 'on' ]]]"
          styles:
            card:
              - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
            grid:
              - row-gap: 12px
      styles:
        grid:
          - grid-template-areas: '"item1" "item2"'
          - grid-template-columns: 1fr
          - grid-template-rows: min-content min-content
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        item1:
          card:
            type: 'custom:button-card'
            template:
              - icon_info
              - yellow_slider
            entity: "[[[ return entity.entity_id ]]]"
            label: >-
              [[[  
                if (entity.state !='unavailable'){
                  if (entity.state =='off'){
                    return variables.ulm_off;  
                  } else if (entity.state == 'on'){
                    if (entity.attributes.brightness != null){
                      var bri = Math.round(entity.attributes.brightness / 2.55);
                      return (bri ? bri : '0') + '%';
                    } else {
                      return variables.ulm_on
                    } 
                  }
                } else {
                  return variables.ulm_unavailable;
                }
              ]]]
            name: "[[[ return variables.ulm_card_light_slider_collapse_name ]]]"
            styles:
              card:
                - box-shadow: none
                - border-radius: var(--border-radius) var(--border-radius) var(--border-radius) var(--border-radius)
                - padding: 0px
        item2:
          card:
            type: conditional
            conditions:
              - entity: "[[[ return entity.entity_id ]]]"
                state: 'on'
            card:
              type: 'custom:my-slider'
              entity: '[[[ return entity.entity_id ]]]'
              radius: 14px
              height: 42px
              mainSliderColor: rgba(var(--color-yellow),1)
              secondarySliderColor: rgba(var(--color-yellow),0.2)
              mainSliderColorOff: rgba(var(--color-theme),0.05)
              secondarySliderColorOff: rgba(var(--color-theme),0.05)
              thumbHorizontalPadding: '0px'
              thumbVerticalPadding: '0px'   
              thumbWidth: 0px
              card_mod:
              style: |
                ha-card {
                  border-radius: 14px;
                  box-shadow: none;
                }

```

</details><details><summary>Template name: card_light_slider_horizontal</summary>

```yaml
    card_light_slider_horizontal:
      template: 
        - ulm_language_variables
      variables:
        ulm_card_light_slider_horizontal_name: "[[[ return entity.attributes.friendly_name ]]]"
      show_icon: false
      show_name: false
      show_label: false
      state:
        - operator: template
          value: "[[[ return entity.state == 'on' ]]]"
          styles:
            card:
              - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
      styles:
        grid:
          - grid-template-areas: '"item1 item2"'
          - grid-template-columns: 1fr 1fr
          - grid-template-rows: 1fr
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        item1:
          card:
            type: 'custom:button-card'
            template:
              - icon_info
              - yellow_slider
            entity: "[[[ return entity.entity_id ]]]"
            label: >-
              [[[  
                if (entity.state !='unavailable'){
                  if (entity.state =='off'){
                    return variables.ulm_off;  
                  } else if (entity.state == 'on'){
                    if (entity.attributes.brightness != null){
                      var bri = Math.round(entity.attributes.brightness / 2.55);
                      return (bri ? bri : '0') + '%';
                    } else {
                      return variables.ulm_on
                    } 
                  }
                } else {
                  return variables.ulm_unavailable;
                }
              ]]]
            name: "[[[ return variables.ulm_card_light_slider_horizontal_name ]]]"
            styles:
              card:
                - box-shadow: none
                - border-radius: var(--border-radius) var(--border-radius) var(--border-radius) var(--border-radius)
                - padding: 0px
        item2:
          card:
            type: 'custom:my-slider'
            entity: '[[[ return entity.entity_id ]]]'
            radius: 14px
            height: 42px
            mainSliderColor: rgba(var(--color-yellow),1)
            secondarySliderColor: rgba(var(--color-yellow),0.2)
            mainSliderColorOff: rgba(var(--color-theme),0.05)
            secondarySliderColorOff: rgba(var(--color-theme),0.05)
            thumbHorizontalPadding: '0px'
            thumbVerticalPadding: '0px'   
            thumbWidth: 0px
            card_mod:
            style: |
              ha-card {
                border-radius: 14px;
                box-shadow: none;
              }

```

</details><details><summary>Template name: card_media_player</summary>

```yaml
    card_media_player:
      template:
        - icon_info_bg
        - ulm_language_variables
      icon: |
        [[[
          var icon = 'mdi:speaker';
          if(entity.attributes.app_name){
            var app = entity.attributes.app_name.toLowerCase();
            if(app == 'spotify'){
              var icon = 'mdi:spotify';
            } else if(app == 'google podcasts'){
              var icon = 'mdi:google-podcast';
            } else if(app == 'plex'){
              var icon = 'mdi:plex';
            } else if(app == 'soundcloud'){
              var icon = 'mdi:soundcloud';
            } else if(app == 'youtube music'){
              var icon = 'mdi:youtube';
            } else if (app == 'oto music'){
              var icon = 'mdi:music-circle';
            }
          }
          return icon;
        ]]]
      label: |
        [[[ 
            if (entity.state == 'off'){
              return variables.ulm_off;
            } else {
              return variables.ulm_on;
            }
        ]]]
      state:
        - operator: template
          value: "[[[ return entity.state != 'off' ]]]"
          name: "[[[ return states[entity.entity_id].attributes.media_title; ]]]"
          label: |
            [[[ 
              var label = variables.ulm_on;
              if(states[entity.entity_id].attributes.media_album_name){
                var label = states[entity.entity_id].attributes.media_album_name;
              }
              return label;
          ]]]

```

</details><details><summary>Template name: card_media_player_with_control</summary>

```yaml
    card_media_player_with_control:
      template:
        - icon_info_bg
        - ulm_language_variables
      icon: |
        [[[
            var icon = 'mdi:speaker';
            if(entity.attributes.app_name){
              var app = entity.attributes.app_name.toLowerCase();
              if(app == 'spotify'){
                var icon = 'mdi:spotify';
              } else if(app == 'google podcasts'){
                var icon = 'mdi:google-podcast';
              } else if(app == 'plex'){
                var icon = 'mdi:plex';
              } else if(app == 'soundcloud'){
                var icon = 'mdi:soundcloud';
              } else if(app == 'youtube music'){
                var icon = 'mdi:youtube';
              } else if (app == 'oto music'){
                var icon = 'mdi:music-circle';
              }
            }
            return icon;
        ]]]
      label: |
        [[[ 
            if (entity.state == 'off'){
              return variables.ulm_off;
            } else {
              return variables.ulm_on;
            }
        ]]]
      state:
        - operator: template
          value: "[[[ return entity.state != 'off' ]]]"
          name: "[[[ return states[entity.entity_id].attributes.media_title; ]]]"
          label: |
            [[[ 
                var label = variables.ulm_on;
                if(states[entity.entity_id].attributes.media_album_name){
                  var label = states[entity.entity_id].attributes.media_album_name;
                }
                return label;
            ]]]
          styles:
            label: 
              - color: white
              - filter: opacity(100%)
            img_cell:
              - background-color: 'rgba(var(--color-theme),0.0)'
            icon:
              - color: white
            name:
              - color: white
      styles:
        label:
          - opacity: '0.6'
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
        card:
          - background-blend-mode: multiply
          - background: "[[[ return states[entity.entity_id].attributes.entity_picture != null ? 'center / cover url(' + states[entity.entity_id].attributes.entity_picture + ') rgba(0, 0, 0, 0.15)' : '' ]]]"

```

</details><details><summary>Template name: card_media_player_with_controls</summary>

```yaml
    card_media_player_with_controls:
      variables:
        ulm_card_media_player_with_controls_name: "No name set"
      triggers_update:
        - "[[[ ulm_card_media_player_with_controls_entity ]]]"
      styles:
        grid:
          - grid-template-areas: '"item1" "item2"'
          - grid-template-columns: 1fr
          - grid-template-rows: min-content  min-content
          - row-gap: 12px
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        item1:
          card:
            type: 'custom:button-card'
            template:
              - ulm_language_variables
              - card_media_player
            tap_action:
              action: more-info
            entity: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
            name: '[[[ return variables.ulm_card_media_player_with_controls_name ]]]'
            styles:
              card:
                - box-shadow: none
                - padding: 0px
        item2:
          card:
            type: 'custom:button-card'
            template: list_items
            custom_fields:
              item1:
                card:
                  type: 'custom:button-card'
                  template: widget_icon
                  tap_action:
                    action: call-service
                    service: media_player.media_previous_track
                    service_data:
                      entity_id: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
                  icon: 'mdi:skip-previous'
              item2:
                card:
                  type: 'custom:button-card'
                  template: widget_icon
                  entity: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
                  tap_action:
                    action: call-service
                    service: media_player.media_play_pause
                    service_data:
                      entity_id: '[[[ return variables.ulm_card_media_player_with_controls_entity ]]]'
                  icon: 'mdi:pause'
                  state:
                    - value: paused
                      icon: 'mdi:play'
                    - value: 'off'
                      icon: 'mdi:play'
              item3:
                card:
                  type: 'custom:button-card'
                  template: widget_icon
                  tap_action:
                    action: call-service
                    service: media_player.media_next_track
                    service_data:
                      entity_id: '[[[ return entity.ulm_card_media_player_with_controls_entity ]]]'
                  icon: 'mdi:skip-next'

```

</details><details><summary>Template name: card_navigate</summary>

```yaml
    card_navigate:
      template: 
        - icon_only
        - blue_no_state
      tap_action:
        action: navigate
        navigation_path: "[[[ return variables.ulm_card_navigate_path; ]]]"
      label: "[[[ return variables.ulm_card_navigate_title; ]]]"
      icon: "[[[ return variables.ulm_card_navigate_icon; ]]]"
      styles:
        icon:
          - color: 'rgba(var(--color-blue),0.7)'
        label:
          - align-self: center
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
          - filter: opacity(100%)
        img_cell:
          - background-color: 'rgba(var(--color-blue), 0.2)'
        grid:
          - grid-template-areas: '"i l"'
          - grid-template-columns: min-content min-content
          - grid-template-rows: min-content

```

</details><details><summary>Template name: card_person</summary>

```yaml
    card_person:
      template: icon_info_bg
      variables:
        ulm_card_person_use_entity_picture: false
        ulm_card_person_zone1: ''
        ulm_card_person_zone2: ''
      tap_action:
        action: more-info
        entity: "[[[ return variables.ulm_card_person_entity; ]]]"
      show_label: true
      show_name: true
      label: "[[[ return states[variables.ulm_card_person_entity].state ]]]"
      name: "[[[ return states[variables.ulm_card_person_entity].attributes.friendly_name ]]]"
      entity: "[[[ return variables.ulm_card_person_entity; ]]]"
      icon: 'mdi:face-man'
      show_entity_picture: "[[[ return variables.ulm_card_person_use_entity_picture ]]]"
      entity_picture: "[[[ return variables.ulm_card_person_use_entity_picture != false ? states[variables.ulm_card_person_entity].attributes.entity_picture : null ]]]"
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.9)'
          - width: >
              [[[ 
                if (variables.ulm_card_person_use_entity_picture != true){
                  return '20px';
                } else {
                  return '42px';
                }
              ]]]
          - place-self: >
              [[[ 
                if (variables.ulm_card_person_use_entity_picture != true){
                  return 'center';
                } else {
                  return 'stretch stretch';
                }
              ]]]
        custom_fields:
          notification:
            - border-radius: 50%
            - position: absolute
            - left: 38px
            - top: 8px
            - height: 16px
            - width: 16px
            - border: 2px solid var(--card-background-color)
            - font-size: 12px
            - line-height: 14px
            - background-color: >
                [[[
                  if (states[variables.ulm_card_person_entity].state != 'home'){
                    return "rgba(var(--color-green),1)";
                  } else {
                    return "rgba(var(--color-blue),1)";
                  }
                ]]]
      custom_fields:
        notification: >
          [[[
            if (states[variables.ulm_card_person_entity].state != 'home'){
              if (states[variables.ulm_card_person_entity].state == variables.ulm_card_person_zone1){
                var icon = states[variables.ulm_card_person_zone1].attributes.icon != null ? states[variables.ulm_card_person_zone1].attributes.icon : 'mdi:help-circle'
                return '';
              } else if (states[variables.ulm_card_person_entity].state == variables.ulm_card_person_zone2){
                var icon = states[variables.ulm_card_person_zone2].attributes.icon != null ? states[variables.ulm_card_person_zone2].attributes.icon : 'mdi:help-circle'
                return '';
              } else {
                return '';
              }
            } else {
              return '';
            }
          ]]]

```

</details><details><summary>Template name: card_power_outlet</summary>

```yaml
    card_power_outlet:
      template:
        - icon_info_bg
        - yellow
        - ulm_language_variables
      variables:
        ulm_card_power_outlet_consumption_sensor:
      label: |-
        [[[
          if (entity.state === "on" && variables.ulm_card_power_outlet_consumption_sensor !== null) {
            return variables.ulm_on + " • " + states[variables.ulm_card_power_outlet_consumption_sensor].state + "W";
          } else if (entity.state === "on") {
            return variables.ulm_on;
          } else if (entity.state === "off") {
            return variables.ulm_off;
          } else if (entity.state === "unavailable") {
            return variables.ulm_unavailable;
          } else {
            return entity.state;
          }
        ]]]

```

</details><details><summary>Template name: card_script</summary>

```yaml
    card_script:
      template: 
        - icon_only
      label: "[[[ return variables.ulm_card_script_title; ]]]"
      icon: "[[[ return variables.ulm_card_script_icon; ]]]"
      styles:
        icon:
          - color: 'rgba(var(--color-blue),0.7)'
        label:
          - align-self: center
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
          - filter: opacity(100%)
        img_cell:
          - background-color: 'rgba(var(--color-blue), 0.2)'
        grid:
          - grid-template-areas: '"i l"'
          - grid-template-columns: min-content min-content
          - grid-template-rows: min-content

```

</details><details><summary>Template name: card_title</summary>

```yaml
    card_title:
      tap_action:
        action: none
      show_icon: false
      show_label: true
      show_name: true
      styles:
        card:
          - background-color: rgba(0,0,0,0)
          - box-shadow: none
          - height: auto
          - width: auto
          - margin-top: 12px
          - margin-left: 24px
          - margin-bottom: 0px
        grid:
          - grid-template-areas: '"n" "l"'
          - grid-template-columns: 1fr
          - grid-template-rows: min-content min-content
        name:
          - justify-self: start
          - font-weight: bold
          - font-size: '1.5rem'
        label:
          - justify-self: start
          - font-weight: bold
          - font-size: '1rem'
          - opacity: '0.4'

```

</details><details><summary>Template name: chip_back</summary>

```yaml
    chip_back:
      template: chips
      tap_action:
        action: navigate
        navigation_path: "[[[ return variables.ulm_chip_back_path; ]]]"
      show_icon: true
      icon: 'mdi:arrow-left'
      styles:
        grid:
          - grid-template-areas: '"i"'

```

</details><details><summary>Template name: chip_icon_double_state</summary>

```yaml
    chip_icon_double_state:
      template: chips
      triggers_update:
        - "[[[ variables.ulm_chip_icon_double_state_entity_1 ]]]"
        - "[[[ variables.ulm_chip_icon_double_state_entity_2 ]]]"
      label: |
        [[[
          var icon = '❔';
          if (variables.ulm_chip_icon_double_state_icon){
            var icon = variables.ulm_chip_icon_double_state_icon;
          } 
          var state1 = '';
          if (states[variables.ulm_chip_icon_double_state_entity_1].state){
            var state1 = states[variables.ulm_chip_icon_double_state_entity_1].state;
          } 
          var state2 = '';
          if (states[variables.ulm_chip_icon_double_state_entity_2].state){
            var state2 = states[variables.ulm_chip_icon_double_state_entity_2].state;
          } 
          return icon + ' ' + state1 + ' • ' + state2;
        ]]]

```

</details><details><summary>Template name: chip_icon_only</summary>

```yaml
    chip_icon_only:
      template: chips
      label: |
        [[[
          var icon = '❔';
          if (variables.ulm_chip_icon_only){
            var icon = variables.ulm_chip_icon_only;
          } 
          return icon;
        ]]]

```

</details><details><summary>Template name: chip_icon_state</summary>

```yaml
    chip_icon_state:
      template: chips
      triggers_update:
        - "[[[ variables.ulm_chip_icon_state_entity ]]]"
      label: |
        [[[
          var icon = '❔';
          if (variables.ulm_chip_icon_state_icon){
            var icon = variables.ulm_chip_icon_state_icon;
          } 
          var state = '';
          if (states[variables.ulm_chip_icon_state_entity].state){
            var state = states[variables.ulm_chip_icon_state_entity].state;
          } 
          return icon + ' ' + state;
        ]]]

```

</details><details><summary>Template name: chip_power_consumption</summary>

```yaml
    chip_power_consumption:
      template:
        - chips
        - ulm_language_variables
      triggers_update:
        - "[[[ variables.ulm_chip_electric_consumption ]]]"
      label: |
        [[[
          var amount = variables.ulm_chip_electric_price != '' ? true : false

          if (amount){
            return '⚡ ' +  states[variables.ulm_chip_electric_price].state + variables.ulm_currency;
          } else {
            return '⚡ ' +  states[variables.ulm_chip_electric_consumption].state;
          }
        ]]]

```

</details><details><summary>Template name: chip_presence_detection</summary>

```yaml
    chip_presence_detection:
      template: chips
      triggers_update:
        - "[[[ variables.ulm_chip_presence_counter_residents ]]]"
        - "[[[ variables.ulm_chip_presence_counter_guests ]]]"
      label: |
        [[[
          var guests = states[variables.ulm_chip_presence_counter_guests].state ? ' / ' + states[variables.ulm_chip_presence_counter_guests].state : '';
          return '🏠 ' +  states[variables.ulm_chip_presence_counter_residents].state + guests;
        ]]]

```

</details><details><summary>Template name: chip_temperature</summary>

```yaml
    chip_temperature:
      template: chips
      triggers_update: 
        - "[[[ variables.ulm_chip_temperature_weather ]]]"
        - "[[[ variables.ulm_chip_temperature_outside ]]]"
        - "[[[ variables.ulm_chip_temperature_inside ]]]"
      label: |
        [[[
          var icon = '🌡️';
          if (states[variables.ulm_chip_temperature_weather].state == 'clear-night'){
            var icon = '🌙';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'cloudy'){
            var icon = '☁️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'exceptional'){
            var icon = '🌞';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'fog'){
            var icon = '🌫️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'hail'){
            var icon = '⛈️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning'){
            var icon = '⚡';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'lightning-rainy'){
            var icon = '⛈️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'partlycloudy'){
            var icon = '⛅';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'pouring'){
            var icon = '🌧️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'rainy'){
            var icon = '💧';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy'){
            var icon = '❄️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'snowy-rainy'){
            var icon = '🌨️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'sunny'){
            var icon = '☀️';
          } else if(states[variables.ulm_chip_temperature_weather].state == 'windy'){
            var icon = '🌪️';
          }
          return icon + ' ' + states[variables.ulm_chip_temperature_outside].state + '° / ' + states[variables.ulm_chip_temperature_inside].state + '°' ;
        ]]]

```

</details>

## [](#internal-templates)Internal Templates

This “theme” is working with a lot of internal templates (in `button_card_templates.yaml`) that inherit settings from other templates. This is to shorten the code, avoid duplication and make the use easier. This is a list of these templates.

> **Note:** _You will need these templates for installation and development, normally you **won’t need them** in your views directly_!

<details><summary>Template name: blue</summary>

```yaml
    blue:
      state:
        - styles:
            icon:
              - color: 'rgba(var(--color-blue),1)'
            label:
              - color: 'rgba(var(--color-blue-text),1)'
            name:
              - color: 'rgba(var(--color-blue-text),1)'
            img_cell:
              - background-color: 'rgba(var(--color-blue), 0.2)'
            card:
              - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'
          value: 'on'

```

</details><details><summary>Template name: blue_no_state</summary>

```yaml
    blue_no_state:
      styles:
        icon:
          - color: 'rgba(var(--color-blue),1)'
        label:
          - color: 'rgba(var(--color-blue-text),1)'
        name:
          - color: 'rgba(var(--color-blue-text),1)'
        img_cell:
          - background-color: 'rgba(var(--color-blue), 0.2)'
        card:
          - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'

```

</details><details><summary>Template name: chips</summary>

```yaml
    chips:
      tap_action:
        action: more-info
      show_icon: false
      show_label: true
      show_name: false
      show_state: false
      styles:
        label:
          - justify-self: center
          - padding: 0px 6px
          - font-weight: bold
          - font-size: 14px
        img_cell:
          - width: 24px
        grid:
          - grid-template-areas: '"l"'
        card:
          - border-radius: 18px
          - box-shadow: var(--box-shadow)
          - height: 36px
          - width: auto
          - padding-left: 6px
          - padding-right: 6px
      size: 80%

```

</details><details><summary>Template name: cover</summary>

```yaml
    cover:
      tap_action:
        action: more-info
      icon: |
        [[[
            var icon = 'mdi:help-circle';
            if (typeof states[entity.entity_id].attributes.current_position === 'undefined'){
              if (states[entity.entity_id].state == 'closed'){
                var icon = 'mdi:window-shutter';
              } else
                var icon = 'mdi:window-shutter-open';
            } else {
              if (states[entity.entity_id].attributes.current_position == 0){
                var icon = 'mdi:window-shutter';
              } else
                var icon = 'mdi:window-shutter-open';
            }
            return icon ;
        ]]]
      label: >-
        [[[
            var icon = 'mdi:help-circle';
            if (typeof states[entity.entity_id].attributes.current_position === 'undefined'){
              if (states[entity.entity_id].state == 'closed'){
                return variables.ulm_closed;
              } else
                return variables.ulm_open;
            } else {
              if (states[entity.entity_id].attributes.current_position == 0){
                return variables.ulm_closed;
              } else {
                return variables.ulm_open + ' • ' + (states[entity.entity_id].attributes.current_position) + '%' ;
              }
            }
            return icon ;
        ]]]
      state:
        - operator: template
          value: "[[[ return states[entity.entity_id].attributes.current_position != 0; ]]]"
          styles:
            icon:
              - color: "rgba(var(--color-blue),1)"
            img_cell:
              - background-color: "rgba(var(--color-blue),0.2)"

```

</details><details><summary>Template name: edge</summary>

```yaml
    edge:
      styles:
        card:
          - width: 0px

```

</details><details><summary>Template name: icon</summary>

```yaml
    icon:
      color: var(--google-grey)
      show_icon: true
      show_label: false
      show_name: false
      state:
        - styles:
            custom_fields:
              notification:
                - border-radius: 50%
                - position: absolute
                - left: 24px
                - top: -2px
                - height: 16px
                - width: 16px
                - border: 2px solid var(--card-background-color)
                - font-size: 12px
                - line-height: 14px
                - background-color: >
                    [[[
                      return "rgba(var(--color-red),1)";
                    ]]]
          value: unavailable
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
          - border-radius: 50%
          - place-self: center
          - width: 42px
          - height: 42px
        grid:
          - grid-template-areas: '"i"'
          - grid-template-columns: min-content
          - grid-template-rows: min-content
        card:
          - border-radius: 21px
          - box-shadow: none
          - padding: 0px
      custom_fields:
        notification: >
          [[[
            if (entity.state =='unavailable'){
              return ''
            }
          ]]]
      size: 20px

```

</details><details><summary>Template name: icon_info_alert</summary>

```yaml
    icon_info_alert:
      color: var(--google-grey)
      show_icon: true
      show_label: true
      show_name: true
      state:
        - operator: template
          value: "[[[ if (entity.state == 'unavailable' || entity.state == 'on'){ return true; } ]]]"
          styles:
            icon:
              - color: 'rgba(var(--color-blue),1)'
            label:
              - color: 'rgba(var(--color-blue-text),1)'
            name:
              - color: 'rgba(var(--color-blue-text),1)'
            img_cell:
              - background-color: 'rgba(var(--color-blue), 0.2)'
            card:
              - background-color: 'rgba(var(--color-background-blue), var(--opacity-bg))'
            custom_fields:
              notification:
                - border-radius: 50%
                - position: absolute
                - left: 38px
                - top: 8px
                - height: 16px
                - width: 16px
                - border: 2px solid var(--card-background-color)
                - font-size: 12px
                - line-height: 14px
                - background-color: >
                    [[[
                      return "rgba(var(--color-red),1)";
                    ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        label:
          - justify-self: start
          - align-self: start
          - font-weight: bold
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        name:
          - align-self: end
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
        state:
          - justify-self: start
          - align-self: start
          - font-weight: bold
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
          - border-radius: 50%
          - place-self: center
          - width: 42px
          - height: 42px
        grid:
          - grid-template-areas: '"i n" "i l"'
          - grid-template-columns: min-content auto
          - grid-template-rows: min-content min-content
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        notification: >
          [[[
            if (entity.state =='unavailable' || entity.state == 'on'){
              return ''
            }
          ]]]
      size: 20px

```

</details><details><summary>Template name: icon_info_bg</summary>

```yaml
    icon_info_bg:
      color: var(--google-grey)
      show_icon: true
      show_label: true
      show_name: true
      state:
        - value: 'unavailable'
          styles:
            custom_fields:
              notification:
                - border-radius: 50%
                - position: absolute
                - left: 38px
                - top: 8px
                - height: 16px
                - width: 16px
                - border: 2px solid var(--card-background-color)
                - font-size: 12px
                - line-height: 14px
                - background-color: >
                    [[[
                      return "rgba(var(--color-red),1)";
                    ]]]
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        label:
          - justify-self: start
          - align-self: start
          - font-weight: bold
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        name:
          - align-self: end
          - justify-self: start
          - font-weight: bold
          - font-size: 14px
          - margin-left: 12px
        state:
          - justify-self: start
          - align-self: start
          - font-weight: bold
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
          - border-radius: 50%
          - place-self: center
          - width: 42px
          - height: 42px
        grid:
          - grid-template-areas: '"i n" "i l"'
          - grid-template-columns: min-content auto
          - grid-template-rows: min-content min-content
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      custom_fields:
        notification: >
          [[[
            if (entity.state =='unavailable'){
              return ''
            }
          ]]]
      size: 20px

```

</details><details><summary>Template name: icon_info_line</summary>

```yaml
    icon_info_line:
      show_icon: true
      show_label: true
      show_name: false
      styles:
        icon:
          - filter: opacity(40%)
        label:
          - padding: 2px
          - justify-self: start
          - align-self: center
          - font-weight: bolder
          - font-size: 12px
          - margin-left: 0px
          - filter: opacity(40%)
        img_cell:
          - place-self: center
          - width: 14px
          - height: 24px
        grid:
          - grid-template-areas: '"i l"'
          - grid-template-columns: max_content auto
          - grid-template-rows: min-content
        card:
          - box-shadow: none
          - padding: 0px
      size: 100%

```

</details><details><summary>Template name: icon_only</summary>

```yaml
    icon_only:
      color: var(--google-grey)
      show_icon: true
      show_label: true
      show_name: false
      styles:
        icon:
          - color: 'rgba(var(--color-theme),0.2)'
        label:
          - justify-self: start
          - align-self: start
          - font-weight: bold
          - font-size: 12px
          - filter: opacity(40%)
          - margin-left: 12px
        img_cell:
          - background-color: 'rgba(var(--color-theme),0.05)'
          - border-radius: 50%
          - place-self: center
          - width: 42px
          - height: 42px
        grid:
          - grid-template-areas: '"i l"'
          - grid-template-columns: min-content auto
          - grid-template-rows: min-content
        card:
          - border-radius: var(--border-radius)
          - box-shadow: var(--box-shadow)
          - padding: 12px
      size: 20px

```

</details><details><summary>Template name: list_items</summary>

```yaml
    list_items:
      styles:
        grid:
          - grid-template-areas: '"item1 item2 item3"'
          - grid-template-columns: 1fr 1fr 1fr
          - grid-template-rows: min-content
          - column-gap: 7px
        card:
          - box-shadow: none
          - padding: 0px

```

</details><details><summary>Template name: list_items_line</summary>

```yaml
    list_items_line:
      styles:
        grid:
          - grid-template-areas: '"item1 item2 item3"'
          - grid-template-columns: max-content max-content max-content
          - grid-template-rows: min-content
          - column-gap: 8px
        card:
          - box-shadow: none
          - padding: 0px

```

</details><details><summary>Template name: widget_icon</summary>

```yaml
    widget_icon:
      tap_action:
        action: toggle
      show_icon: true
      show_name: false
      styles:
        grid:
          - grid-template-areas: '"i"'
        card:
          - box-shadow: none
          - padding: 0px
          - background-color: 'rgba(var(--color-theme),0.05)'
          - border-radius: 14px
          - place-self: center
          - height: 42px
        icon:
          - color: 'rgba(var(--color-theme),0.9)'
      size: 20px
      color: var(--google-grey)

```

</details><details><summary>Template name: yellow</summary>

```yaml
    yellow:
      state:
        - styles:
            icon:
              - color: 'rgba(var(--color-yellow),1)'
            label:
              - color: 'rgba(var(--color-yellow-text),1)'
            name:
              - color: 'rgba(var(--color-yellow-text),1)'
            img_cell:
              - background-color: 'rgba(var(--color-yellow), 0.2)'
            card:
              - background-color: 'rgba(var(--color-background-yellow),var(--opacity-bg))'
          value: 'on'

```

</details><details><summary>Template name: yellow_slider</summary>

```yaml
    yellow_slider:
      state:
        - styles:
            icon:
              - color: 'rgba(var(--color-yellow),1)'
            label:
              - color: 'rgba(var(--color-yellow-text),1)'
            name:
              - color: 'rgba(var(--color-yellow-text),1)'
            img_cell:
              - background-color: 'rgba(var(--color-yellow), 0.2)'
            card:
              - background-color: 'rgba(0,0,0,0)'
          value: 'on'

```

</details>
