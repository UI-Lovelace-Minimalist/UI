---
permalink: /assets/js/:basename
published: true
---
function generateExampleCode(){

  var mode, modeSelected = null;
  mode = document.getElementsByName('mode');

  for (i=0; i < mode.length; i++){
    if (mode[i].checked){
      if (mode[i].value == 'ui'){
        modeSelected = 'ui';
      } else {
        modeSelected = 'yaml';
      }
    }
  }

  {% for template in site.templates -%}
  {% if template.internal == false -%}
  var {{ template.name | remove: "_" }} = `{{ template.yaml }}`;
  if ( modeSelected == 'ui'){
    var {{ template.name | remove: "_" }}_yaml = jsyaml.dump({{ template.name | remove: "_" }}, { 'indent': 10 });
  } else {
    var {{ template.name | remove: "_" }}_yaml = jsyaml.dump({{ template.name | remove: "_" }}, { 'indent': 8 });
  }
  var {{ template.name | remove: "_" }}_ready = {{ template.name | remove: "_" }}_yaml.substring(2);
  {% endif -%}
  {% endfor %}

  var result = null;

  var header = `####################
#
# UI-Lovelace-Minimalist CodeGenerator Example
#
# Author: Paddy0174
#
####################
`;

  if ( modeSelected == 'ui'){
    result = `views:
  - title: Minimalist
    path: ui-lovelace-minimalist
    badges: []
    cards:
`;
  } else {
    result = `- title: Minimalist
  path: ui-lovelace-minimalist
  badges: []
  cards:
`;

  }
  
  var rowStart = `- type: horizontal-stack
  cards:
    - type: custom:button-card
      template: edge
`;
  if ( modeSelected == 'ui'){
    rowStart_yaml = jsyaml.dump(rowStart,{ 'indent': 6 });
  } else {
    rowStart_yaml = jsyaml.dump(rowStart,{ 'indent': 4 });
  }
  rowStart_ready = rowStart_yaml.substring(2);

  var rowEnd = `
- type: custom:button-card
  template: edge
`;
  if ( modeSelected == 'ui'){
    rowEnd_yaml = jsyaml.dump(rowEnd,{ 'indent': 10 });
  } else {
    rowEnd_yaml = jsyaml.dump(rowEnd,{ 'indent': 8 });
  }
  rowEnd_ready = rowEnd_yaml.substring(2);

  {% for template in site.templates -%}
  {% if template.internal == false -%}
  var {{ template.name | remove: "_" }}_title = `- type: markdown
  content: >
    {{ template.title }}`;
  if ( modeSelected == 'ui'){
    var {{ template.name | remove: "_" }}_title_yaml = jsyaml.dump({{ template.name | remove: "_" }}_title, { 'indent': 10 });
  } else {
    var {{ template.name | remove: "_" }}_title_yaml = jsyaml.dump({{ template.name | remove: "_" }}_title, { 'indent': 8 });
  }
  var {{ template.name | remove: "_" }}_title_ready = {{ template.name | remove: "_" }}_title_yaml.substring(2);

  if (document.getElementById('{{ template.name }}').checked == true){
    result += rowStart_ready;
    result += {{ template.name | remove: "_" }}_ready;
    result += {{ template.name | remove: "_" }}_title_ready;
    result += rowEnd_ready;
  }
  {% endif -%}
  {% endfor -%}

  document.getElementById('generated_code').value = header + result;
  
}
