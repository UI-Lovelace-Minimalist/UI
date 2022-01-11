---
title: 	Button
parent: CodeGenerator
nav_order: 4
---

# CodeGenerator for button(s)

With this generator you can configure a button and get the complete code for your "view" file.

<details><summary>Show instructions</summary>

*   Choose the button, you want to generate
*   If variables or entries need to be set, the form shows these after you choose
*   Fill in the data from Home Assistant as described
*   Click "Generate button code"
*   Copy the generated code and paste it in your edit window in Home Assistant

Note: If you don't want to fill in the data, just click "Generate button code" after choosing a button type. The generator shows the code without filled in data. This generator works locally in your browser, no data is send anywhere!</details>

Note: This generator is in beta state, so there may be issues! Thanks for understanding!

<form name="minimalist-generator-buttons" id="minimalist-generator-buttons" method="post" action="">

<fieldset><legend style="text-transform: uppercase;">Mode</legend>

Which mode are you using?

<input type="radio" name="mode" id="yaml_mode" value="yaml" disabled=""> <label for="yaml_mode">Yaml-mode (temp. disabled)</label> <input type="radio" name="mode" id="ui_mode" value="ui" checked="checked"> <label for="ui_mode">UI-mode</label>  
</fieldset>

<fieldset><legend style="text-transform: uppercase;">Button</legend>

Choose a button to configure, the "basic" button.

<select name="buttons" id="buttons"><option value="-1">Choose a button</option> <optgroup label="Chips"><option value="chip_back">Chip Back Button</option> <option value="chip_icon_double_state">Chip Icon With Double State</option> <option value="chip_icon_only">Chip Icon Only</option> <option value="chip_icon_state">Chip Icon With State</option> <option value="chip_power_consumption">Chip Power Consumption</option> <option value="chip_presence_detection">Chip Presence Detection (counter)</option> <option value="chip_temperature">Chip Temperature</option></optgroup> <optgroup label="Title"><option value="card_title">Title</option></optgroup> <optgroup label="Cards"><option value="card_battery">Battery Card</option> <option value="card_binary_sensor">Binary Sensor Card</option> <option value="card_binary_sensor_alert">Binary Sensor Card (alert)</option> <option value="card_cover_with_buttons">Cover Card with buttons</option> <option value="card_generic">Generic Card</option> <option value="card_generic_swap">Generic Card Swapped</option> <option value="card_graph">Graph Card</option> <option value="card_input_boolean">Input Boolean Card</option> <option value="card_light">Light Card</option> <option value="card_light_slider">Light Slider Card</option> <option value="card_light_slider_collapse">Light Slider Card (collapse)</option> <option value="card_light_slider_horizontal">Light Slider Card (horizontal)</option> <option value="card_media_player">Media Player Card</option> <option value="card_media_player_with_control">Media Player Card (with control)</option> <option value="card_media_player_with_controls">Media Player Card (with controls)</option> <option value="card_navigate">Navigate Card</option> <option value="card_person">Person Card</option> <option value="card_power_outlet">Power Outlet Card</option> <option value="card_script">Script Card</option></optgroup></select></fieldset>

<div id="div_card_battery" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardbattery_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardbattery_entity" name="cardbattery_entity" requiredminlength="4" placeholder="eg. sensor.livingroom_thermometer_battery">

<div class="tooltip"> ? <span class="tooltiptext">This is your battery entity</span></div>

<label for="cardbattery_ulmcardbatteryattribute">Variable: _ulm_card_battery_attribute_</label>  
<input type="text" id="cardbattery_ulmcardbatteryattribute" name="cardbattery_ulmcardbatteryattribute" minlength="4" placeholder="eg. battery_attribute">

<div class="tooltip"> ? <span class="tooltiptext">If your entity provides the battery percent in an attribute (= not as an own sensor), fill in the <u>attributes name</u> here. Eg. if you have `sensor.livingroom_thermometer` and the attribute for your battery power is `sensor.livingroom_thermometer.attributes.battery_percent`, you fill in _battery_percent_ here.</span></div>

</fieldset>

</div>

<div id="div_card_binary_sensor" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardbinarysensor_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardbinarysensor_entity" name="cardbinarysensor_entity" requiredminlength="4" placeholder="eg. binary_sensor.garage_door">

<div class="tooltip"> ? <span class="tooltiptext">The _binary_sensor_ to show</span></div>

<label for="cardbinarysensor_showlastchanged">Entry: _show_last_changed_</label>  
<input type="text" id="cardbinarysensor_showlastchanged" name="cardbinarysensor_showlastchanged" minlength="4" placeholder="eg. true or false">  
</fieldset>

</div>

<div id="div_card_binary_sensor_alert" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardbinarysensoralert_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardbinarysensoralert_entity" name="cardbinarysensoralert_entity" requiredminlength="4" placeholder="eg. binary_sensor.garage_door">

<div class="tooltip"> ? <span class="tooltiptext">The _binary_sensor_ to show</span></div>

<label for="cardbinarysensoralert_showlastchanged">Entry: _show_last_changed_</label>  
<input type="text" id="cardbinarysensoralert_showlastchanged" name="cardbinarysensoralert_showlastchanged" minlength="4" placeholder="eg. ">  
</fieldset>

</div>

<div id="div_card_cover_with_buttons" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardcoverwithbuttons_ulmcardcoverwithbuttonsentity">Variable: _ulm_card_cover_with_buttons_entity_ (required)</label>  
<input type="text" id="cardcoverwithbuttons_ulmcardcoverwithbuttonsentity" name="cardcoverwithbuttons_ulmcardcoverwithbuttonsentity" requiredminlength="4" placeholder="eg. cover.livingroom_window">

<div class="tooltip"> ? <span class="tooltiptext">The _entity_id_ of your cover</span></div>

<label for="cardcoverwithbuttons_ulmcardcoverwithbuttonsname">Variable: _ulm_card_cover_with_buttons_name_</label>  
<input type="text" id="cardcoverwithbuttons_ulmcardcoverwithbuttonsname" name="cardcoverwithbuttons_ulmcardcoverwithbuttonsname" minlength="4" placeholder="eg. Cover Livingroom Window">

<div class="tooltip"> ? <span class="tooltiptext">The name of your cover entity</span></div>

</fieldset>

</div>

<div id="div_card_generic" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardgeneric_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardgeneric_entity" name="cardgeneric_entity" requiredminlength="4" placeholder="eg. sensor.next_waste_collection">  
</fieldset>

</div>

<div id="div_card_generic_swap" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardgenericswap_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardgenericswap_entity" name="cardgenericswap_entity" requiredminlength="4" placeholder="eg. sensor.next_waste_collection">  
</fieldset>

</div>

<div id="div_card_graph" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardgraph_ulmcardgraphcolor">Variable: _ulm_card_graph_color_</label>  
<input type="text" id="cardgraph_ulmcardgraphcolor" name="cardgraph_ulmcardgraphcolor" minlength="4" placeholder="eg. var(--google-blue)">

<div class="tooltip"> ? <span class="tooltiptext">This is to adjust your color value. Use a CSS varible from HA or set a color value (eg. #FFFFFF)</span></div>

<label for="cardgraph_ulmcardgraphname">Variable: _ulm_card_graph_name_</label>  
<input type="text" id="cardgraph_ulmcardgraphname" name="cardgraph_ulmcardgraphname" minlength="4" placeholder="eg. Temperature Livingroom">

<div class="tooltip"> ? <span class="tooltiptext">The name of your sensor</span></div>

<label for="cardgraph_ulmcardgraphentity">Variable: _ulm_card_graph_entity_ (required)</label>  
<input type="text" id="cardgraph_ulmcardgraphentity" name="cardgraph_ulmcardgraphentity" requiredminlength="4" placeholder="eg. sensor.livingroom_temperature">

<div class="tooltip"> ? <span class="tooltiptext">Your _entity_id_ for the temperature sensor</span></div>

</fieldset>

</div>

<div id="div_card_input_boolean" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardinputboolean_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardinputboolean_entity" name="cardinputboolean_entity" requiredminlength="4" placeholder="eg. input_boolean.guest_mode">

<div class="tooltip"> ? <span class="tooltiptext">The _input_boolean_ to switch</span></div>

</fieldset>

</div>

<div id="div_card_light" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardlight_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardlight_entity" name="cardlight_entity" requiredminlength="4" placeholder="eg. light.my_livingroom_light">  
</fieldset>

</div>

<div id="div_card_light_slider" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardlightslider_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardlightslider_entity" name="cardlightslider_entity" requiredminlength="4" placeholder="eg. light.my_livingroom_light">  
<label for="cardlightslider_ulmcardlightslidername">Variable: _ulm_card_light_slider_name_</label>  
<input type="text" id="cardlightslider_ulmcardlightslidername" name="cardlightslider_ulmcardlightslidername" minlength="4" placeholder="eg. Livingroom Light">

<div class="tooltip"> ? <span class="tooltiptext">If you want to set a specific name, eg. because your friendly name is too long for the card, this is the place to fill it in. If this is not set, the friendly name will be used.</span></div>

</fieldset>

</div>

<div id="div_card_light_slider_collapse" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardlightslidercollapse_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardlightslidercollapse_entity" name="cardlightslidercollapse_entity" requiredminlength="4" placeholder="eg. light.my_livingroom_light">  
<label for="cardlightslidercollapse_ulmcardlightslidercollapsename">Variable: _ulm_card_light_slider_collapse_name_</label>  
<input type="text" id="cardlightslidercollapse_ulmcardlightslidercollapsename" name="cardlightslidercollapse_ulmcardlightslidercollapsename" minlength="4" placeholder="eg. Livingroom Light">

<div class="tooltip"> ? <span class="tooltiptext">If you want to set a specific name, eg. because your friendly name is too long for the card, this is the place to fill it in. If this is not set, the friendly name will be used.</span></div>

</fieldset>

</div>

<div id="div_card_light_slider_horizontal" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardlightsliderhorizontal_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardlightsliderhorizontal_entity" name="cardlightsliderhorizontal_entity" requiredminlength="4" placeholder="eg. light.my_livingroom_light">  
<label for="cardlightsliderhorizontal_ulmcardlightsliderhorizontalname">Variable: _ulm_card_light_slider_horizontal_name_</label>  
<input type="text" id="cardlightsliderhorizontal_ulmcardlightsliderhorizontalname" name="cardlightsliderhorizontal_ulmcardlightsliderhorizontalname" minlength="4" placeholder="eg. Livingroom Light">

<div class="tooltip"> ? <span class="tooltiptext">If you want to set a specific name, eg. because your friendly name is too long for the card, this is the place to fill it in. If this is not set, the friendly name will be used.</span></div>

</fieldset>

</div>

<div id="div_card_media_player" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardmediaplayer_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardmediaplayer_entity" name="cardmediaplayer_entity" requiredminlength="4" placeholder="eg. media_player.livingroom_shield">

<div class="tooltip"> ? <span class="tooltiptext">The media-player entity</span></div>

<label for="cardmediaplayer_name">Entry: _name_ (required)</label>  
<input type="text" id="cardmediaplayer_name" name="cardmediaplayer_name" requiredminlength="4" placeholder="eg. Livingroom Nvidia Shield">

<div class="tooltip"> ? <span class="tooltiptext">Name to display for your media-player</span></div>

</fieldset>

</div>

<div id="div_card_media_player_with_control" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardmediaplayerwithcontrol_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardmediaplayerwithcontrol_entity" name="cardmediaplayerwithcontrol_entity" requiredminlength="4" placeholder="eg. media_player.livingroom_shield">

<div class="tooltip"> ? <span class="tooltiptext">The media-player entity</span></div>

<label for="cardmediaplayerwithcontrol_name">Entry: _name_ (required)</label>  
<input type="text" id="cardmediaplayerwithcontrol_name" name="cardmediaplayerwithcontrol_name" requiredminlength="4" placeholder="eg. Livingroom Nvidia Shield">

<div class="tooltip"> ? <span class="tooltiptext">Name to display for your media-player</span></div>

</fieldset>

</div>

<div id="div_card_media_player_with_controls" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardmediaplayerwithcontrols_ulmcardmediaplayerwithcontrolsentity">Variable: _ulm_card_media_player_with_controls_entity_ (required)</label>  
<input type="text" id="cardmediaplayerwithcontrols_ulmcardmediaplayerwithcontrolsentity" name="cardmediaplayerwithcontrols_ulmcardmediaplayerwithcontrolsentity" requiredminlength="4" placeholder="eg. media_player.livingroom_shield">

<div class="tooltip"> ? <span class="tooltiptext">The entity of the media player</span></div>

<label for="cardmediaplayerwithcontrols_ulmcardmediaplayerwithcontrolsname">Variable: _ulm_card_media_player_with_controls_name_</label>  
<input type="text" id="cardmediaplayerwithcontrols_ulmcardmediaplayerwithcontrolsname" name="cardmediaplayerwithcontrols_ulmcardmediaplayerwithcontrolsname" minlength="4" placeholder="eg. Living room Media Player">

<div class="tooltip"> ? <span class="tooltiptext">The name of the media player (only displayed when off)</span></div>

</fieldset>

</div>

<div id="div_card_navigate" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardnavigate_ulmcardnavigatepath">Variable: _ulm_card_navigate_path_ (required)</label>  
<input type="text" id="cardnavigate_ulmcardnavigatepath" name="cardnavigate_ulmcardnavigatepath" requiredminlength="4" placeholder="eg. /ui-lovelace-minimalist/media">

<div class="tooltip"> ? <span class="tooltiptext">The path to your lovelace dashboard</span></div>

<label for="cardnavigate_ulmcardnavigatetitle">Variable: _ulm_card_navigate_title_ (required)</label>  
<input type="text" id="cardnavigate_ulmcardnavigatetitle" name="cardnavigate_ulmcardnavigatetitle" requiredminlength="4" placeholder="eg. Media">

<div class="tooltip"> ? <span class="tooltiptext">Title to show for the link</span></div>

<label for="cardnavigate_ulmcardnavigateicon">Variable: _ulm_card_navigate_icon_ (required)</label>  
<input type="text" id="cardnavigate_ulmcardnavigateicon" name="cardnavigate_ulmcardnavigateicon" requiredminlength="4" placeholder="eg. mdi:television">

<div class="tooltip"> ? <span class="tooltiptext">Icon to show</span></div>

</fieldset>

</div>

<div id="div_card_person" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardperson_ulmcardpersonentity">Variable: _ulm_card_person_entity_ (required)</label>  
<input type="text" id="cardperson_ulmcardpersonentity" name="cardperson_ulmcardpersonentity" requiredminlength="4" placeholder="eg. person.username">

<div class="tooltip"> ? <span class="tooltiptext">The person entity</span></div>

<label for="cardperson_ulmcardpersonuseentitypicture">Variable: _ulm_card_person_use_entity_picture_</label>  
<input type="text" id="cardperson_ulmcardpersonuseentitypicture" name="cardperson_ulmcardpersonuseentitypicture" minlength="4" placeholder="eg. true or false">

<div class="tooltip"> ? <span class="tooltiptext">If you set this to true, the card shows the entity picture from your user, otherwise (set to false) shows the icon. Default is false.</span></div>

<label for="cardperson_ulmcardpersonzone1">Variable: _ulm_card_person_zone1_</label>  
<input type="text" id="cardperson_ulmcardpersonzone1" name="cardperson_ulmcardpersonzone1" minlength="4" placeholder="eg. work">

<div class="tooltip"> ? <span class="tooltiptext">Set another zone (beside "home") to use for the card. You can set up two zones besides "home".</span></div>

<label for="cardperson_ulmcardpersonzone2">Variable: _ulm_card_person_zone2_</label>  
<input type="text" id="cardperson_ulmcardpersonzone2" name="cardperson_ulmcardpersonzone2" minlength="4" placeholder="eg. school">

<div class="tooltip"> ? <span class="tooltiptext">Set another zone (beside "home") to use for the card. You can set up two zones besides "home".</span></div>

</fieldset>

</div>

<div id="div_card_power_outlet" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardpoweroutlet_entity">Entry: _entity_ (required)</label>  
<input type="text" id="cardpoweroutlet_entity" name="cardpoweroutlet_entity" requiredminlength="4" placeholder="eg. switch.power_outlet_livingroom">  
<label for="cardpoweroutlet_name">Entry: _name_ (required)</label>  
<input type="text" id="cardpoweroutlet_name" name="cardpoweroutlet_name" requiredminlength="4" placeholder="eg. Power Outlet Livingroom">  
<label for="cardpoweroutlet_ulmcardpoweroutletconsumptionsensor">Variable: _ulm_card_power_outlet_consumption_sensor_</label>  
<input type="text" id="cardpoweroutlet_ulmcardpoweroutletconsumptionsensor" name="cardpoweroutlet_ulmcardpoweroutletconsumptionsensor" minlength="4" placeholder="eg. sensor.power_outlet_livingroom_consumption">

<div class="tooltip"> ? <span class="tooltiptext">If you set this sensor, the `power-outlet-card` shows the energy consumption next to the state.</span></div>

</fieldset>

</div>

<div id="div_card_script" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardscript_ulmcardscripttitle">Variable: _ulm_card_script_title_ (required)</label>  
<input type="text" id="cardscript_ulmcardscripttitle" name="cardscript_ulmcardscripttitle" requiredminlength="4" placeholder="eg. Romantic lights">

<div class="tooltip"> ? <span class="tooltiptext">Name to show for the script.</span></div>

<label for="cardscript_ulmcardscripticon">Variable: _ulm_card_script_icon_ (required)</label>  
<input type="text" id="cardscript_ulmcardscripticon" name="cardscript_ulmcardscripticon" requiredminlength="4" placeholder="eg. mdi:candle">

<div class="tooltip"> ? <span class="tooltiptext">Icon to show for the script.</span></div>

<label for="cardscript_tapactionaction">Entry: _tap_action_action_ (required)</label>  
<input type="text" id="cardscript_tapactionaction" name="cardscript_tapactionaction" requiredminlength="4" placeholder="eg. call-service">

<div class="tooltip"> ? <span class="tooltiptext">Only call-service is allowed here.</span></div>

<label for="cardscript_tapactionservice">Entry: _tap_action_service_ (required)</label>  
<input type="text" id="cardscript_tapactionservice" name="cardscript_tapactionservice" requiredminlength="4" placeholder="eg. script.turn_on">

<div class="tooltip"> ? <span class="tooltiptext">Let the script run by turning it on.</span></div>

<label for="cardscript_tapactionservicedata">Entry: _tap_action_service_data_ (required)</label>  
<input type="text" id="cardscript_tapactionservicedata" name="cardscript_tapactionservicedata" requiredminlength="4" placeholder="eg. entity_id: script.romantic_livingroom_lights">

<div class="tooltip"> ? <span class="tooltiptext">This is the service_data needed by your script. That can be an entity_id and/or some variables.</span></div>

</fieldset>

</div>

<div id="div_card_title" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="cardtitle_name">Entry: _name_ (required)</label>  
<input type="text" id="cardtitle_name" name="cardtitle_name" requiredminlength="4" placeholder="eg. My_Title">

<div class="tooltip"> ? <span class="tooltiptext">This is a main title (either title or subtitle is required)</span></div>

<label for="cardtitle_label">Entry: _label_ (required)</label>  
<input type="text" id="cardtitle_label" name="cardtitle_label" requiredminlength="4" placeholder="eg. My_Subtitle">

<div class="tooltip"> ? <span class="tooltiptext">This is a subtitle (either title or subtitle is required)</span></div>

</fieldset>

</div>

<div id="div_chip_back" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chipback_ulmchipbackpath">Variable: _ulm_chip_back_path_ (required)</label>  
<input type="text" id="chipback_ulmchipbackpath" name="chipback_ulmchipbackpath" requiredminlength="4" placeholder="eg. /ui-lovelace-minimalist/home">

<div class="tooltip"> ? <span class="tooltiptext">Set the navigation path to your default view, eg. _ui-lovelace-minimalist/home_ or _lovelace_</span></div>

</fieldset>

</div>

<div id="div_chip_icon_double_state" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chipicondoublestate_ulmchipicondoublestateicon">Variable: _ulm_chip_icon_double_state_icon_ (required)</label>  
<input type="text" id="chipicondoublestate_ulmchipicondoublestateicon" name="chipicondoublestate_ulmchipicondoublestateicon" requiredminlength="4" placeholder="eg. 💻">

<div class="tooltip"> ? <span class="tooltiptext">This is the icon to show. See [icons](/usage#icons) to read more about the used unicode `emojis`.</span></div>

<label for="chipicondoublestate_ulmchipicondoublestateentity1">Variable: _ulm_chip_icon_double_state_entity_1_ (required)</label>  
<input type="text" id="chipicondoublestate_ulmchipicondoublestateentity1" name="chipicondoublestate_ulmchipicondoublestateentity1" requiredminlength="4" placeholder="eg. sensor.nas_disk_used">  
<label for="chipicondoublestate_ulmchipicondoublestateentity2">Variable: _ulm_chip_icon_double_state_entity_2_ (required)</label>  
<input type="text" id="chipicondoublestate_ulmchipicondoublestateentity2" name="chipicondoublestate_ulmchipicondoublestateentity2" requiredminlength="4" placeholder="eg. sensor.nas_cpu_load">  
</fieldset>

</div>

<div id="div_chip_icon_only" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chipicononly_ulmchipicononly">Variable: _ulm_chip_icon_only_</label>  
<input type="text" id="chipicononly_ulmchipicononly" name="chipicononly_ulmchipicononly" minlength="4" placeholder="eg. ❤">

<div class="tooltip"> ? <span class="tooltiptext">This is the icon to show. See [icons](/usage#icons) to read more about the used unicode `emojis`.</span></div>

</fieldset>

</div>

<div id="div_chip_icon_state" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chipiconstate_ulmchipiconstateicon">Variable: _ulm_chip_icon_state_icon_ (required)</label>  
<input type="text" id="chipiconstate_ulmchipiconstateicon" name="chipiconstate_ulmchipiconstateicon" requiredminlength="4" placeholder="eg. 🛏️">

<div class="tooltip"> ? <span class="tooltiptext">This is the icon to show. See See [icons](/usage#icons) to read more about the used unicode `emojis`.</span></div>

<label for="chipiconstate_ulmchipiconstateentity">Variable: _ulm_chip_icon_state_entity_ (required)</label>  
<input type="text" id="chipiconstate_ulmchipiconstateentity" name="chipiconstate_ulmchipiconstateentity" requiredminlength="4" placeholder="eg. sensor.bed_occupancy">  
</fieldset>

</div>

<div id="div_chip_power_consumption" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chippowerconsumption_ulmchipelectricconsumption">Variable: _ulm_chip_electric_consumption_ (required)</label>  
<input type="text" id="chippowerconsumption_ulmchipelectricconsumption" name="chippowerconsumption_ulmchipelectricconsumption" requiredminlength="4" placeholder="eg. sensor.my_electric_power_consumption">

<div class="tooltip"> ? <span class="tooltiptext">This is your consumed energy. This is the sensor, that shows how many *kWh*s are consumed.</span></div>

<label for="chippowerconsumption_ulmchipelectricprice">Variable: _ulm_chip_electric_price_ (required)</label>  
<input type="text" id="chippowerconsumption_ulmchipelectricprice" name="chippowerconsumption_ulmchipelectricprice" requiredminlength="4" placeholder="eg. sensor.my_electric_power_price">

<div class="tooltip"> ? <span class="tooltiptext">This is the price for your consumed energy, if you have such a sensor. This should be a sensor that shows a price in your defined currency. If this variable is not set, the chip shows only the *kWh*s! If this variable is set the chip shows the price for the consumed energy!</span></div>

</fieldset>

</div>

<div id="div_chip_presence_detection" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chippresencedetection_ulmchippresencecounterresidents">Variable: _ulm_chip_presence_counter_residents_ (required)</label>  
<input type="text" id="chippresencedetection_ulmchippresencecounterresidents" name="chippresencedetection_ulmchippresencecounterresidents" requiredminlength="4" placeholder="eg. sensor.my_residents_counter">

<div class="tooltip"> ? <span class="tooltiptext">This is the sensor that shows your residents counter.</span></div>

<label for="chippresencedetection_ulmchippresencecounterguests">Variable: _ulm_chip_presence_counter_guests_ (required)</label>  
<input type="text" id="chippresencedetection_ulmchippresencecounterguests" name="chippresencedetection_ulmchippresencecounterguests" requiredminlength="4" placeholder="eg. sensor.my_guests_counter">

<div class="tooltip"> ? <span class="tooltiptext">This is the sensor that shows your guests counter.</span></div>

</fieldset>

</div>

<div id="div_chip_temperature" style="display: none;">

<fieldset><legend style="text-transform: uppercase;">Variables / entries</legend>

Fill in at least the required fields with _your_ data from Home Assistant.

<label for="chiptemperature_ulmchiptemperatureoutside">Variable: _ulm_chip_temperature_outside_ (required)</label>  
<input type="text" id="chiptemperature_ulmchiptemperatureoutside" name="chiptemperature_ulmchiptemperatureoutside" requiredminlength="4" placeholder="eg. sensor.my_temperature_sensor_outside">

<div class="tooltip"> ? <span class="tooltiptext">This is the sensor that provides your outside temperature. If you want to use eg. a temperature value from your weather provider, you'd need to setup a template sensor first. The state of this sensor should represent a numeric value (°C or °F doesn't matter).</span></div>

<label for="chiptemperature_ulmchiptemperatureinside">Variable: _ulm_chip_temperature_inside_ (required)</label>  
<input type="text" id="chiptemperature_ulmchiptemperatureinside" name="chiptemperature_ulmchiptemperatureinside" requiredminlength="4" placeholder="eg. sensor.my_temperature_sensor_inside">

<div class="tooltip"> ? <span class="tooltiptext">This is the sensor that provides your inside temperature. The state of this sensor should represent a numeric value (°C or °F doesn't matter).</span></div>

</fieldset>

</div>

<fieldset><legend style="text-transform: uppercase;">Generate</legend> <input type="button" name="submit" value="Generate button code" onclick="generateButtonCode()"></fieldset>

<fieldset><legend style="text-transform: uppercase;">Your example code</legend>

This is your generated code to paste into your config.

<textarea id="generated_code" name="generated_code" rows="18" cols="60" style="width: 100%;"></textarea></fieldset>

</form>
