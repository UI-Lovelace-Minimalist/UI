---
title: Media Player Card
name: card_media_player
category: card
explanation: "The `card_media_player` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon."
information: |-
  Currently there are only icons for:  
  <ul>
    <li><i>Spotify</i></li>
    <li><i>GooglePodcast</i></li>
    <li><i>Plex</i></li>
    <li><i>Soundcloud</i></li>
    <li><i>YoutubeMusic</i></li>
  </ul>
  Unfortunately <i>AmazonMusic</i>, <i>AppleMusic</i> and <i>Deezer</i> don't have an `mdi:icon`, so the default icon (a speaker) will be presented.
image_path: "/assets/images/media.png"
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
    template: card_media_player
    entity: media_player.livingroom_shield
    name: Livingroom Nvidia Shield
ui: |-
  type: 'custom:button-card'
  template: card_media_player
  entity: media_player.livingroom_shield
  name: Livingroom Nvidia Shield
code: |-
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
---