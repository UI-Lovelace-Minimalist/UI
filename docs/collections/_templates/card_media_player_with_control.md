---
title: Media Player Card (with control)
name: card_media_player_with_control
category: card
explanation: "This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player."
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: entity
    type: entry
    example: media_player.livingroom_shield
    required: true 
    explanation: "The media-player entity"
  - name: name
    type: entry
    example: Livingroom Nvidia Shield
    required: true 
    explanation: "Name to display for your media-player"
yaml: |-
  - type: 'custom:button-card'
    template: card_media_player_with_control
    entity: media_player.livingroom_shield
    name: Livingroom Nvidia Shield
ui: |-
  type: 'custom:button-card'
  template: card_media_player_with_control
  entity: media_player.livingroom_shield
  name: Livingroom Nvidia Shield
code: |-
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
---