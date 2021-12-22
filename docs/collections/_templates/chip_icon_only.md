---
title: Chip Icon Only
name: chip_icon_only
category: chip
explanation: "This `chip` displays just an icon."
image_path: "https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet"
internal: false
generator_install: true
generator_example: true
generator_button: true
variables:
  - name: ulm_chip_icon_only
    type: variable
    example: '❤'
    required: false 
    explanation: "This is the icon to show. See <a href='/usage#icons'>icons</a> to read more about the used unicode `emojis`."
yaml: |-
  - type: 'custom:button-card'
    template: chip_icon_only
    variables:
      ulm_chip_icon_only: '❤️'
ui: |-
  type: 'custom:button-card'
  template: chip_icon_only
  variables:
    ulm_chip_icon_only: '❤️'
code: |-
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
---