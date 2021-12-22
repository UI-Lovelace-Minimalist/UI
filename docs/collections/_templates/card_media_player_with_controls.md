---
title: Media Player Card (with controls)
name: card_media_player_with_controls
category: card
explanation: |-
  With the `card_media_player_with_controls` you have the state of your media_player and on the second line PREVIOUS / PLAY-PAUSE / NEXT to control it
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_card_media_player_with_controls_entity
    type: variable
    example: media_player.livingroom_shield
    required: true
    explanation: "The entity of the media player"
  - name: ulm_card_media_player_with_controls_name
    type: variable
    example: Living room Media Player
    required: false 
    explanation: "The name of the media player (only displayed when off)"
yaml: |-
  - type: 'custom:button-card'
    template: 
      - card_media_player_with_controls
    variables:
      ulm_card_media_player_with_controls_name: "Livingroom Shield"
      ulm_card_media_player_with_controls_entity: media_player.livingroom_shield
ui: |-
  type: 'custom:button-card'
  template: 
    - card_media_player_with_controls
  variables:
    ulm_card_media_player_with_controls_name: "Livingroom Shield"
    ulm_card_media_player_with_controls_entity: media_player.livingroom_shield
code: |-
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
---