---
permalink: /assets/js/:basename
published: true
---
function generateButtonCode(){

  var mode, modeSelected, result, selectMenu, buttonSelected = null;

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

  selectMenu = document.getElementById('buttons'); 
  buttonSelected = selectMenu.options[selectMenu.selectedIndex].value;

  if (buttonSelected == -1){
    document.getElementById('generated_code').value = 'Please select a button first!';
    return;
  }

  {% for template in site.templates -%}
  {% if template.internal == false -%}
  if (buttonSelected == '{{ template.name }}'){
    
    let obj_{{ template.name | remove: "_" }} = {type:'custom:button-card', template:'{{ template.name }}'};
    let obj_{{ template.name | remove: '_' }}_var_set = false;
    let obj_{{ template.name | remove: '_' }}_variables = {};
    
    {% if template.variables != nil -%}
    {% if template.name != 'card_script' -%}
    {% for variable in template.variables -%}
    
    let {{ template.name | remove: "_"  }}{{ variable.name | remove: "_"  }} = document.getElementById('{{ template.name | remove: '_' }}_{{ variable.name | remove: '_' }}').value;
    {% if variable.type == 'variable' -%}
    Object.assign(obj_{{ template.name | remove: "_" }}_variables, { '{{ variable.name }}': {{ template.name | remove: "_" }}{{ variable.name | remove: "_" }} } );
    obj_{{ template.name | remove: '_' }}_var_set = true;
    {% elsif variable.type == 'entry' -%}
    Object.assign(obj_{{ template.name | remove: "_" }}, { '{{ variable.name }}': {{ template.name | remove: "_"  }}{{ variable.name | remove: "_"  }} });
    {% endif %} 
    
    {% endfor -%}
    {% else -%}
    let cardscriptulmcardscripttitle = document.getElementById('cardscript_ulmcardscripttitle').value;
    let cardscriptulmcardscripticon = document.getElementById('cardscript_ulmcardscripticon').value;
    let cardscripttapactionaction = document.getElementById('cardscript_tapactionaction').value;
    let cardscripttapactionservice = document.getElementById('cardscript_tapactionservice').value;
    let cardscripttapactionservicedata = document.getElementById('cardscript_tapactionservicedata').value;
    Object.assign(obj_cardscript, {
      'variables': {
        'ulm_card_script_title': cardscriptulmcardscripttitle, 
        'ulm_card_script_icon': cardscriptulmcardscripticon
      },
      'tap_action': {
        'action': cardscripttapactionaction,
        'service': cardscripttapactionservice,
        'service_data': {
          'entity_id': cardscripttapactionservicedata
        }
      }
    } );

    {% endif -%}
    {% endif -%}
    
    if (obj_{{ template.name | remove: '_' }}_var_set){
      obj_{{ template.name | remove: "_" }}['variables'] = obj_{{ template.name | remove: "_" }}_variables
    }

    if (modeSelected == 'ui'){
      var {{ template.name | remove: "_" }}_ready = jsyaml.dump(obj_{{ template.name | remove: '_' }} );
    } else {
      var {{ template.name | remove: "_" }}_ready = jsyaml.dump(obj_{{ template.name | remove: '_' }} );
    }
    
    result = {{ template.name | remove: "_" }}_ready;
  
  }

  {% endif -%}
  {% endfor -%}

  document.getElementById('generated_code').value = result;
}