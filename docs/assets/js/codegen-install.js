---
permalink: /assets/js/:basename
published: true
---
function generateInstallCode(){

  {% for template in site.templates -%}
  var {{ template.name | remove: "_" }} = `{{ template.code }}`;
  var {{ template.name | remove: "_" }}_yaml = jsyaml.dump({{ template.name | remove: "_" }}, { 'indent': 2 });
  var {{ template.name | remove: "_" }}_ready = {{ template.name | remove: "_" }}_yaml.substring(2);
  {% endfor -%}

  {% for language in site.languages -%}
  var {{ language.language }} = `{{ language.code }}`;
  var {{ language.language }}_yaml = jsyaml.dump({{ language.language }}, { 'indent': 2 });
  var {{ language.language }}_ready = {{ language.language }}_yaml.substring(2);
  {% endfor -%}

  {% for card in site.custom_cards -%}
  {% for variant in card.variants -%}
  {% if variant.name != nil -%}
  var {{ variant.name | remove: "_" }} = `{{ variant.code }}`;
  var {{ variant.name | remove: "_" }}_yaml = jsyaml.dump({{ variant.name | remove: "_" }}, { 'indent': 2 });
  var {{ variant.name | remove: "_" }}_ready = {{ variant.name | remove: "_" }}_yaml.substring(2);
  {% else %}
  var {{ card.name | remove: "_" }} = `{{ variant.code }}`;
  var {{ card.name | remove: "_" }}_yaml = jsyaml.dump({{ card.name | remove: "_" }}, { 'indent': 2 });
  var {{ card.name | remove: "_" }}_ready = {{ card.name | remove: "_" }}_yaml.substring(2);
  {% endif -%}
  {% endfor -%}
  {% if card.languages != nil -%}
  {% for language in card.languages -%}
  var {{ card.name | remove: "_"  }}_{{ language.language }} = `{{ language.code }}`;
  var {{ card.name | remove: "_"  }}_{{ language.language }}_yaml = jsyaml.dump({{ card.name | remove: "_"  }}_{{ language.language }}, { 'indent': 2 });
  var {{ card.name | remove: "_"  }}_{{ language.language }}_ready = {{ card.name | remove: "_"   }}_{{ language.language }}_yaml.substring(2);
  {% endfor -%}
  {% endif -%}
  {% endfor %}

  var result, languageSelected = null;

  var example = `##### EXAMPLE CODE #####
views:
  - title: Minimalist
    path: ui-lovelace-minimalist
    badges: []
    cards: 
      - type: horizontal-stack
        card:
          - type: custom:button-card
            template: edge
          - type: custom:button-card
            template: title
            name: UI-Lovelace-Minimalist
          - type: custom:button-card
            template: edge
      - type: horizontal-stack
        card:
          - type: custom:button-card
            template: edge
          - type: custom:button-card
            template: 
              - card_light
            entity: group.livingroom_lights
          - type: custom:button-card
            template: 
              - card_light
            entity: group.kitchen_lights
          - type: custom:button-card
            template: edge`;

  var header = `####################
#
# UI-Lovelace-Minimalist CodeGenerator Installation
#
# Author: Paddy0174
#
####################
`;

  result = `button_card_templates:`;

  lng = document.getElementsByName('language');

  for (i=0; i < lng.length; i++){
    if (lng[i].checked){
      if (lng[i].value == 'de'){
        languageSelected = 'de';
      } else if (lng[i].value == 'fr') {
        languageSelected = 'fr';
      } else {
        languageSelected = 'en';
      }
    }
  }

  {% for template in site.templates -%}
    result += {{ template.name | remove: "_" }}_ready
  {% endfor %}

  {% for language in site.languages -%}
    if (languageSelected == '{{ language.language }}'){
      result += {{ language.language }}_ready;
    }
  {% endfor -%}

  {% for card in site.custom_cards -%}
    {% for variant in card.variants -%}
      {% if variant.name != nil -%}
        if (document.getElementById('{{ variant.name }}').checked == true){
          result +=  {{ variant.name | remove: "_" }}_ready;
        {% if card.languages != nil -%}
          {% for language in card.languages -%}
            if (languageSelected == '{{ language.language }}'){
              result += {{ card.name | remove: "_"  }}_{{ language.language }}_ready
            }
          {% endfor -%}
        {% endif -%}
        }
      {% else -%}
        if (document.getElementById('{{ card.name }}').checked == true){
          result += {{ card.name | remove: "_" }}_ready;
        {% if card.languages != nil -%}
          {% for language in card.languages -%}
            if (languageSelected == '{{ language.language }}'){
              result += {{ card.name | remove: "_"  }}_{{ language.language }}_ready
            }
          {% endfor -%}
        {% endif -%}
        }
      {% endif %}
    {% endfor -%}
  {% endfor -%}

  if (document.getElementById('example').checked == true){
    result += example;
  }

  document.getElementById('generated_code').value = header + result;
  
}
