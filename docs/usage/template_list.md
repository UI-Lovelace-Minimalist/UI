---
title: Template list (use)
parent: Usage
nav_order: 2
---
# [](#list-of-templates-to-use-in-your-view-file)<a name="template-list"></a>List of templates to use in your “view”-file

This is the in-depth list of our “usage” templates.

> **Note:** _Depending on the card you use, there are different things to set. Sometimes the entity is needed, sometimes the entity needs to be set as a variable, eg. ulm_card_xy_entity. In the template list is explained what you have to set._

> **Legend:** _<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span>variable | <span style="height: 10px; width: 10px; background-color: #2C84FA; border-radius: 50%; display: inline-block;"></span>entry (eg. entity)_

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_battery"></a>Battery Card

</td>

</tr>

<tr>

<td width="50%">The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself.</td>

<td width="50%">[![](/assets/images/card_battery.png)](/assets/images/card_battery.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_battery
      variables:
        ulm_card_battery_attribute: battery_attribute
      entity: sensor.livingoom_thermometer_battery

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_battery
    variables:
      ulm_card_battery_attribute: battery_attribute
    entity: sensor.livingoom_thermometer_battery

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>sensor.livingroom_thermometer_battery</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is your battery entity</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_battery_attribute</td>

<td>battery_attribute</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">If your entity provides the battery percent in an attribute (= not as an own sensor), fill in the <u>attributes name</u> here. Eg. if you have `sensor.livingroom_thermometer` and the attribute for your battery power is `sensor.livingroom_thermometer.attributes.battery_percent`, you fill in _battery_percent_ here.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_binary_sensor"></a>Binary Sensor Card

</td>

</tr>

<tr>

<td width="50%">The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor.</td>

<td width="50%">[![](/assets/images/card_binary_sensor.png)](/assets/images/card_binary_sensor.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_binary_sensor
      variables:
        - ulm_card_binary_sensor_alert: true
      entity: binary_sensor.garage_door
      show_last_changed: true

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_binary_sensor
      variables:
        - ulm_card_binary_sensor_alert: true
    entity: binary_sensor.garage_door
    show_last_changed: true

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>binary_sensor.garage_door</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The _binary_sensor_ to show</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> show_last_changed</td>

<td>true or false</td>

<td>false</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_binary_sensor_alert"></a>Binary Sensor Card (alert)

</td>

</tr>

<tr>

<td width="50%">The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor. This card shows an alert if the state is on/open or unavailable.</td>

<td width="50%">[![](/assets/images/card_binary_sensor_alert.png)](/assets/images/card_binary_sensor_alert.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_binary_sensor_alert
      variables:
        - ulm_card_binary_sensor_alert: true
      entity: binary_sensor.garage_door
      show_last_changed: true

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_binary_sensor_alert
      variables:
        - ulm_card_binary_sensor_alert: true
    entity: binary_sensor.garage_door
    show_last_changed: true

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>binary_sensor.garage_door</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The _binary_sensor_ to show</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> show_last_changed</td>

<td></td>

<td>false</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_cover_with_buttons"></a>Cover Card with buttons

</td>

</tr>

<tr>

<td width="50%">With the `cover-card` you have the state of your cover and on the second line UP / PAUSE / DOWN to control it.</td>

<td width="50%">[![](/assets/images/card_cover_with_buttons.png)](/assets/images/card_cover_with_buttons.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: 
        - card_cover_with_buttons
      variables:
        ulm_card_cover_with_buttons_name: "Cover Livingroom Window"
        ulm_card_cover_with_buttons_entity: "cover.livingroom_window"

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: 
      - card_cover_with_buttons
    variables:
      ulm_card_cover_with_buttons_name: "Cover Livingroom Window"
      ulm_card_cover_with_buttons_entity: "cover.livingroom_window"

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_cover_with_buttons_entity</td>

<td>cover.livingroom_window</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The _entity_id_ of your cover</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_cover_with_buttons_name</td>

<td>Cover Livingroom Window</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">The name of your cover entity</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_generic"></a>Generic Card

</td>

</tr>

<tr>

<td width="50%">This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.</td>

<td width="50%">[![](/assets/images/card_generic.png)](/assets/images/card_generic.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_generic
      entity: sensor.next_waste_collection

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_generic
    entity: sensor.next_waste_collection

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>sensor.next_waste_collection</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_generic_swap"></a>Generic Card Swapped

</td>

</tr>

<tr>

<td width="50%">This is a `generic-card` with swapped label and name.</td>

<td width="50%">[![](/assets/images/card_generic_swap.png)](/assets/images/card_generic_swap.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_generic_swap
      entity: sensor.next_waste_collection

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_generic_swap
    entity: sensor.next_waste_collection

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>sensor.next_waste_collection</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_graph"></a>Graph Card

</td>

</tr>

<tr>

<td width="50%">The `card_graph` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history."</td>

<td width="50%">[![](/assets/images/card_graph.png)](/assets/images/card_graph.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_graph
      variables:
        ulm_card_graph_color: "var(--google-blue)"
        ulm_card_graph_name: Temperature Livingroom
        ulm_card_graph_entity: sensor.livingroom_temperature

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_graph
    variables:
      ulm_card_graph_color: "var(--google-blue)"
      ulm_card_graph_name: Temperature Livingroom
      ulm_card_graph_entity: sensor.livingroom_temperature

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_graph_color</td>

<td>var(--google-blue)</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">This is to adjust your color value. Use a CSS varible from HA or set a color value (eg. #FFFFFF)</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_graph_name</td>

<td>Temperature Livingroom</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">The name of your sensor</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_graph_entity</td>

<td>sensor.livingroom_temperature</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Your _entity_id_ for the temperature sensor</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_input_boolean"></a>Input Boolean Card

</td>

</tr>

<tr>

<td width="50%">The `input-boolean-card` is to switch an `input_boolean` on or off.</td>

<td width="50%">[![](/assets/images/card_input_boolean.png)](/assets/images/card_input_boolean.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_input_boolean
      entity: input_boolean.guest_mode

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_input_boolean
    entity: input_boolean.guest_mode

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>input_boolean.guest_mode</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The _input_boolean_ to switch</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_light"></a>Light Card

</td>

</tr>

<tr>

<td width="50%">This is the `light-card`, used to toggle a light or a light group. Shows state of the light and, if available, brightness in %. In the picture on the right in row Nr1</td>

<td width="50%">[![](/assets/images/card_light_combi.png)](/assets/images/card_light_combi.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_light
      entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_light
    entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>light.my_livingroom_light</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_light_slider"></a>Light Slider Card

<span class="text-small text-grey-dk-100 mb-0">by schumijo</span></td>

</tr>

<tr>

<td width="50%">The `light-slider-card` controls a light with the added possibilty to control the brightness of your light with a slider. See row Nr2 in the picture on the right.</td>

<td width="50%">[![](/assets/images/card_light_combi.png)](/assets/images/card_light_combi.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_light_slider
      variables:
        ulm_card_light_slider_name: Livingroom Light
      entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_light_slider
    variables:
      ulm_card_light_slider_name: Livingroom Light
    entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>light.my_livingroom_light</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_light_slider_name</td>

<td>Livingroom Light</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">If you want to set a specific name, eg. because your friendly name is too long for the card, this is the place to fill it in. If this is not set, the friendly name will be used.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_light_slider_collapse"></a>Light Slider Card (collapse)

</td>

</tr>

<tr>

<td width="50%">The `light-slider-card (collapse)` is an enhanced version of the `light-slider-card`, that only shows the slider, if the light is on. In the picture on the right, the 'off'-state is like row Nr1, the 'on'-state like row Nr2</td>

<td width="50%">[![](/assets/images/card_light_combi.png)](/assets/images/card_light_combi.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_light_slider_collapse
      variables:
        ulm_card_light_slider_collapse_name: Livingroom Light
      entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_light_slider_collapse
    variables:
      ulm_card_light_slider_collapse_name: Livingroom Light
    entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>light.my_livingroom_light</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_light_slider_collapse_name</td>

<td>Livingroom Light</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">If you want to set a specific name, eg. because your friendly name is too long for the card, this is the place to fill it in. If this is not set, the friendly name will be used.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_light_slider_horizontal"></a>Light Slider Card (horizontal)

</td>

</tr>

<tr>

<td width="50%">The `light-slider-card (horizontal)` is an enhanced version of the `light-slider-card`, that shows the slider on the right of the button, making it a 1-line-card. See the picture on the right row Nr3</td>

<td width="50%">[![](/assets/images/card_light_combi.png)](/assets/images/card_light_combi.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_light_slider_horizontal
      variables:
        ulm_card_light_slider_horizontal_name: Livingroom Light
      entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_light_slider_horizontal
    variables:
      ulm_card_light_slider_horizontal_name: Livingroom Light
    entity: light.my_livingroom_light

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>light.my_livingroom_light</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_light_slider_horizontal_name</td>

<td>Livingroom Light</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">If you want to set a specific name, eg. because your friendly name is too long for the card, this is the place to fill it in. If this is not set, the friendly name will be used.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_media_player"></a>Media Player Card

</td>

</tr>

<tr>

<td width="50%">The `card_media_player` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon.</td>

<td width="50%">[![](/assets/images/media.png)](/assets/images/media.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>Additional information</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>Currently there are only icons for:

*   _Spotify_
*   _GooglePodcast_
*   _Plex_
*   _Soundcloud_
*   _YoutubeMusic_

Unfortunately _AmazonMusic_, _AppleMusic_ and _Deezer_ don't have an `mdi:icon`, so the default icon (a speaker) will be presented.</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_media_player
      entity: media_player.livingroom_shield
      name: Livingroom Nvidia Shield

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_media_player
    entity: media_player.livingroom_shield
    name: Livingroom Nvidia Shield

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>media_player.livingroom_shield</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The media-player entity</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> name</td>

<td>Livingroom Nvidia Shield</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Name to display for your media-player</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_media_player_with_control"></a>Media Player Card (with control)

</td>

</tr>

<tr>

<td width="50%">This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player.</td>

<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_media_player_with_control
      entity: media_player.livingroom_shield
      name: Livingroom Nvidia Shield

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_media_player_with_control
    entity: media_player.livingroom_shield
    name: Livingroom Nvidia Shield

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>media_player.livingroom_shield</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The media-player entity</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> name</td>

<td>Livingroom Nvidia Shield</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Name to display for your media-player</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_media_player_with_controls"></a>Media Player Card (with controls)

</td>

</tr>

<tr>

<td width="50%">With the `card_media_player_with_controls` you have the state of your media_player and on the second line PREVIOUS / PLAY-PAUSE / NEXT to control it</td>

<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: 
        - card_media_player_with_controls
      variables:
        ulm_card_media_player_with_controls_name: "Livingroom Shield"
        ulm_card_media_player_with_controls_entity: media_player.livingroom_shield

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: 
      - card_media_player_with_controls
    variables:
      ulm_card_media_player_with_controls_name: "Livingroom Shield"
      ulm_card_media_player_with_controls_entity: media_player.livingroom_shield

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_media_player_with_controls_entity</td>

<td>media_player.livingroom_shield</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The entity of the media player</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_media_player_with_controls_name</td>

<td>Living room Media Player</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">The name of the media player (only displayed when off)</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_navigate"></a>Navigate Card

</td>

</tr>

<tr>

<td width="50%">The `card_navigate` is for navigating inside your HA dashboard(s).</td>

<td width="50%">[![](/assets/images/card_navigate.png)](/assets/images/card_navigate.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: custom:button-card
      template: card_navigate
      variables:
        ulm_card_navigate_path: /ui-lovelace-minimalist/media
        ulm_card_navigate_title: Media
        ulm_card_navigate_icon: mdi:television 

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: custom:button-card
    template: card_navigate
    variables:
      ulm_card_navigate_path: /ui-lovelace-minimalist/media
      ulm_card_navigate_title: Media
      ulm_card_navigate_icon: mdi:television 

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_navigate_path</td>

<td>/ui-lovelace-minimalist/media</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The path to your lovelace dashboard</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_navigate_title</td>

<td>Media</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Title to show for the link</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_navigate_icon</td>

<td>mdi:television</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Icon to show</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_person"></a>Person Card

</td>

</tr>

<tr>

<td width="50%">The `card_person` shows if a person is `home` or `not_home`. If you have setup other [zones](https://www.home-assistant.io/integrations/zone/), it will show these as well.</td>

<td width="50%">[![](/assets/images/person.png)](/assets/images/person.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>Additional information</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>**Dot color:** at home - blue | away - green  
**Dot icon:** at home - _Home icon_ | not home - _Home minus icon_ | if you configured an icon for a [zone](https://www.home-assistant.io/integrations/zone/), it will be used</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_person
      variables:
        ulm_card_person_entity: person.username
        ulm_card_person_use_entity_picture: true
        ulm_card_person_zone1: work
        ulm_card_person_zone2: school

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_person
    variables:
      ulm_card_person_entity: person.username
      ulm_card_person_use_entity_picture: true
      ulm_card_person_zone1: work
      ulm_card_person_zone2: school

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_person_entity</td>

<td>person.username</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">The person entity</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_person_use_entity_picture</td>

<td>true or false</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">If you set this to true, the card shows the entity picture from your user, otherwise (set to false) shows the icon. Default is false.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_person_zone1</td>

<td>work</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">Set another zone (beside "home") to use for the card. You can set up two zones besides "home".</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_person_zone2</td>

<td>school</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">Set another zone (beside "home") to use for the card. You can set up two zones besides "home".</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_power_outlet"></a>Power Outlet Card

</td>

</tr>

<tr>

<td width="50%">This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet.</td>

<td width="50%">[![](/assets/images/outlet.png)](/assets/images/outlet.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_power_outlet
      variables:
        ulm_card_power_outlet_consumption_sensor: sensor.power_outlet_livingroom_consumption 
      entity: switch.power_outlet_livingroom
      name: Power Outlet Livingroom

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_power_outlet
    variables:
      ulm_card_power_outlet_consumption_sensor: sensor.power_outlet_livingroom_consumption 
    entity: switch.power_outlet_livingroom
    name: Power Outlet Livingroom

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> entity</td>

<td>switch.power_outlet_livingroom</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> name</td>

<td>Power Outlet Livingroom</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_power_outlet_consumption_sensor</td>

<td>sensor.power_outlet_livingroom_consumption</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">If you set this sensor, the `power-outlet-card` shows the energy consumption next to the state.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #7253ED;">

### <a name="card_script"></a>Script Card

</td>

</tr>

<tr>

<td width="50%">This card starts/runs a script. You can configure icon and text.</td>

<td width="50%">[![](/assets/images/card_script.png)](/assets/images/card_script.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_script
      variables: 
        ulm_card_script_title: Romantic lights
        ulm_card_script_icon: 'mdi:candle'
      tap_action:
        action: call-service
        service: script.turn_on
        service_data: 
          entity_id: script.romantic_livingroom_lights

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_script
    variables: 
      ulm_card_script_title: Romantic lights
      ulm_card_script_icon: 'mdi:candle'
    tap_action:
      action: call-service
      service: script.turn_on
      service_data: 
        entity_id: script.romantic_livingroom_lights

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_script_title</td>

<td>Romantic lights</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Name to show for the script.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_script_icon</td>

<td>mdi:candle</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Icon to show for the script.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> tap_action_action</td>

<td>call-service</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Only call-service is allowed here.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> tap_action_service</td>

<td>script.turn_on</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Let the script run by turning it on.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> tap_action_service_data</td>

<td>entity_id: script.romantic_livingroom_lights</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the service_data needed by your script. That can be an entity_id and/or some variables.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #2C84FA;">

### <a name="card_title"></a>Title

</td>

</tr>

<tr>

<td width="50%">Titles (and optionally subtitles) are used to seperate different areas in your design. You can use only a title, only a subtitle or both at once.</td>

<td width="50%">[![](/assets/images/card_title.png)](/assets/images/card_title.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: card_title
      name: My Title
      label: 'Subtitle'  

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: card_title
    name: My Title
    label: 'Subtitle'

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> name</td>

<td>My_Title</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is a main title (either title or subtitle is required)</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #2C84FA; border-radius: 50%; width: 10px; height: 10px;" title="entry"></span> label</td>

<td>My_Subtitle</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is a subtitle (either title or subtitle is required)</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_back"></a>Chip Back Button

</td>

</tr>

<tr>

<td width="50%">This is a `back-button`, primarly used if you switch between views and want a convenient way back.</td>

<td width="50%">[![](/assets/images/chip_return.png)](/assets/images/chip_return.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_back
      variables:
        ulm_chip_back_path: /ui-lovelace-minimalist/home

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_back
    variables:
      ulm_chip_back_path: /ui-lovelace-minimalist/home

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_back_path</td>

<td>/ui-lovelace-minimalist/home</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">Set the navigation path to your default view, eg. _ui-lovelace-minimalist/home_ or _lovelace_</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_icon_double_state"></a>Chip Icon With Double State

</td>

</tr>

<tr>

<td width="50%"></td>

<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_icon_double_state
      variables:
        ulm_chip_icon_double_state_icon: '💻'
        ulm_chip_icon_double_state_entity_1: sensor.nas_disk_used
        ulm_chip_icon_double_state_entity_2: sensor.nas_cpu_load

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_icon_double_state
    variables:
      ulm_chip_icon_double_state_icon: '💻'
      ulm_chip_icon_double_state_entity_1: sensor.nas_disk_used
      ulm_chip_icon_double_state_entity_2: sensor.nas_cpu_load

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_icon_double_state_icon</td>

<td>💻</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the icon to show. See [icons](/usage#icons) to read more about the used unicode `emojis`.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_icon_double_state_entity_1</td>

<td>sensor.nas_disk_used</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_icon_double_state_entity_2</td>

<td>sensor.nas_cpu_load</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_icon_only"></a>Chip Icon Only

</td>

</tr>

<tr>

<td width="50%">This `chip` displays just an icon.</td>

<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_icon_only
      variables:
        ulm_chip_icon_only: '❤️'

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_icon_only
    variables:
      ulm_chip_icon_only: '❤️'

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_icon_only</td>

<td>❤</td>

<td>false</td>

</tr>

<tr>

<td colspan="3">This is the icon to show. See [icons](/usage#icons) to read more about the used unicode `emojis`.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_icon_state"></a>Chip Icon With State

</td>

</tr>

<tr>

<td width="50%">This `chip` displays an icon and a label, where the label can be any state of a sensor you configure.</td>

<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_icon_state
      variables:
        ulm_chip_icon_state_icon: '🛏️'
        ulm_chip_icon_state_entity: sensor.bed_occupancy

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_icon_state
    variables:
      ulm_chip_icon_state_icon: '🛏️'
      ulm_chip_icon_state_entity: sensor.bed_occupancy

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_icon_state_icon</td>

<td>🛏️</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the icon to show. See See [icons](/usage#icons) to read more about the used unicode `emojis`.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_icon_state_entity</td>

<td>sensor.bed_occupancy</td>

<td>true</td>

</tr>

<tr>

<td colspan="3"></td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_power_consumption"></a>Chip Power Consumption

</td>

</tr>

<tr>

<td width="50%">This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency).</td>

<td width="50%">[![](/assets/images/power_consumption.png)](/assets/images/power_consumption.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_power_consumption
      variables:
        ulm_chip_electric_consumption: sensor.my_electric_power_consumption
        ulm_chip_electric_price: sensor.my_electric_power_price

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_power_consumption
    variables:
      ulm_chip_electric_consumption: sensor.my_electric_power_consumption
      ulm_chip_electric_price: sensor.my_electric_power_price

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_electric_consumption</td>

<td>sensor.my_electric_power_consumption</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is your consumed energy. This is the sensor, that shows how many *kWh*s are consumed.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_electric_price</td>

<td>sensor.my_electric_power_price</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the price for your consumed energy, if you have such a sensor. This should be a sensor that shows a price in your defined currency. If this variable is not set, the chip shows only the *kWh*s! If this variable is set the chip shows the price for the consumed energy!</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_presence_detection"></a>Chip Presence Detection (counter)

</td>

</tr>

<tr>

<td width="50%">This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more).</td>

<td width="50%">[![](/assets/images/chip_localisation_present.png)](/assets/images/chip_localisation_present.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_presence_detection
      variables:
        ulm_chip_presence_counter_residents: sensor.my_residents_counter
        ulm_chip_presence_counter_guests: sensor.my_guests_counter

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_presence_detection
    variables:
      ulm_chip_presence_counter_residents: sensor.my_residents_counter
      ulm_chip_presence_counter_guests: sensor.my_guests_counter

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_presence_counter_residents</td>

<td>sensor.my_residents_counter</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the sensor that shows your residents counter.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_presence_counter_guests</td>

<td>sensor.my_guests_counter</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the sensor that shows your guests counter.</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td colspan="2" style="border-right: 3px solid #FFEB82;">

### <a name="chip_temperature"></a>Chip Temperature

</td>

</tr>

<tr>

<td width="50%">This `chip` is to display a weather icon together with the outside and inside temperature.</td>

<td width="50%">[![](/assets/images/chip_temperature.png)](/assets/images/chip_temperature.png)</td>

</tr>

<tr>

<td colspan="2"><details><summary>"View" code</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **yaml-mode** _(Remember to take care of indentation)_</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    - type: 'custom:button-card'
      template: chip_temperature
      variables:
        ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
        ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
        ulm_chip_temperature_weather: weather.my_weather_provider"

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

<div class="table-wrapper">

<table>

<tbody>

<tr>

<td>You're working in **UI-mode**</td>

</tr>

<tr>

<td>

<div class="code-toolbar">

    type: 'custom:button-card'
    template: chip_temperature
    variables:
      ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
      ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
      ulm_chip_temperature_weather: weather.my_weather_provider"

<div class="toolbar">

<div class="toolbar-item"><button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button></div>

</div>

</div>

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

<tr>

<td colspan="2"><details><summary>Variables / Entries</summary>  

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Variable / Entry</th>

<th>Example</th>

<th>Required</th>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_temperature_outside</td>

<td>sensor.my_temperature_sensor_outside</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the sensor that provides your outside temperature. If you want to use eg. a temperature value from your weather provider, you'd need to setup a template sensor first. The state of this sensor should represent a numeric value (°C or °F doesn't matter).</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

<tr>

<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_chip_temperature_inside</td>

<td>sensor.my_temperature_sensor_inside</td>

<td>true</td>

</tr>

<tr>

<td colspan="3">This is the sensor that provides your inside temperature. The state of this sensor should represent a numeric value (°C or °F doesn't matter).</td>

</tr>

<tr>

<td colspan="3">

* * *

</td>

</tr>

</tbody>

</table>

</div>

</details></td>

</tr>

</tbody>

</table>

</div>