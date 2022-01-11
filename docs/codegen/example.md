---
title: 	Example
parent: CodeGenerator
nav_order: 3
---

# CodeGenerator for example code

**works for both Yaml- and UI-mode**

Here you can generate example code to see some of the possibilities this "theme" offers.

Select what you want to try out and click "Generate example code".

<u>What this tool is:</u>  
This tool combines different options, to show the general scaffold to get the "theme" running. It shows the indentation and gives you examples to work with.

<u>What this tool isn't:</u>  
This tool is not designed to give you a ready to use, working installation. You need to adapt the example code to your needs and wishes.

Note: This generator is in beta state, so there may be issues! Thanks for understanding!

<form name="minimalist-generator-examples" method="post" action="">

<fieldset><legend style="text-transform: uppercase;">Mode</legend>

Which mode are you using?

<input type="radio" name="mode" id="yaml_mode" value="yaml" checked="checked"> <label for="yaml_mode">Yaml-mode</label> <input type="radio" name="mode" id="ui_mode" value="ui"> <label for="ui_mode">UI-mode</label>  
</fieldset>

<fieldset><legend style="text-transform: uppercase;">Chips</legend>

Choose the chips, you want to use.

<input type="checkbox" id="chip_back" name="chip_back" value="chip_back"> <label for="chip_back">Chip Back Button</label>

<div class="tooltip"> ? <span class="tooltiptext">This is a `back-button`, primarly used if you switch between views and want a convenient way back.</span></div>

<input type="checkbox" id="chip_icon_double_state" name="chip_icon_double_state" value="chip_icon_double_state"> <label for="chip_icon_double_state">Chip Icon With Double State</label>  
<input type="checkbox" id="chip_icon_only" name="chip_icon_only" value="chip_icon_only"> <label for="chip_icon_only">Chip Icon Only</label>

<div class="tooltip"> ? <span class="tooltiptext">This `chip` displays just an icon.</span></div>

<input type="checkbox" id="chip_icon_state" name="chip_icon_state" value="chip_icon_state"> <label for="chip_icon_state">Chip Icon With State</label>

<div class="tooltip"> ? <span class="tooltiptext">This `chip` displays an icon and a label, where the label can be any state of a sensor you configure.</span></div>

<input type="checkbox" id="chip_power_consumption" name="chip_power_consumption" value="chip_power_consumption"> <label for="chip_power_consumption">Chip Power Consumption</label>

<div class="tooltip"> ? <span class="tooltiptext">This `chip` shows you the electric consumption from a sensor. Configurable to show power (kWh) or price (currency).</span></div>

<input type="checkbox" id="chip_presence_detection" name="chip_presence_detection" value="chip_presence_detection"> <label for="chip_presence_detection">Chip Presence Detection (counter)</label>

<div class="tooltip"> ? <span class="tooltiptext">This `chip` shows you the actual presence in your home. Shows residents and guests (guests only if one or more).</span></div>

<input type="checkbox" id="chip_temperature" name="chip_temperature" value="chip_temperature"> <label for="chip_temperature">Chip Temperature</label>

<div class="tooltip"> ? <span class="tooltiptext">This `chip` is to display a weather icon together with the outside and inside temperature.</span></div>

</fieldset>

<fieldset><legend style="text-transform: uppercase;">Title</legend>

Would you like to set some titles?

<input type="checkbox" id="card_title" name="card_title" value="card_title"> <label for="card_title">Yes, set a title.</label></fieldset>

<fieldset><legend style="text-transform: uppercase;">Cards</legend>

Select the cards you want to use.

<input type="checkbox" id="card_battery" name="card_battery" value="card_battery"> <label for="card_battery">Battery Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `battery-card` is a slightly enhanced `generic-card`, just to ease the use. You could always configure it from the `generic-card` yourself.</span></div>

<input type="checkbox" id="card_binary_sensor" name="card_binary_sensor" value="card_binary_sensor"> <label for="card_binary_sensor">Binary Sensor Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor.</span></div>

<input type="checkbox" id="card_binary_sensor_alert" name="card_binary_sensor_alert" value="card_binary_sensor_alert"> <label for="card_binary_sensor_alert">Binary Sensor Card (alert)</label>

<div class="tooltip"> ? <span class="tooltiptext">The `binary-sensor-card` is to show the state (on/off, open/close, etc.) of a binary sensor, eg. your garage door or a window contact sensor. This card shows an alert if the state is on/open or unavailable.</span></div>

<input type="checkbox" id="card_cover_with_buttons" name="card_cover_with_buttons" value="card_cover_with_buttons"> <label for="card_cover_with_buttons">Cover Card with buttons</label>

<div class="tooltip"> ? <span class="tooltiptext">With the `cover-card` you have the state of your cover and on the second line UP / PAUSE / DOWN to control it.</span></div>

<input type="checkbox" id="card_generic" name="card_generic" value="card_generic"> <label for="card_generic">Generic Card</label>

<div class="tooltip"> ? <span class="tooltiptext">This is the `generic-card` to display values from a sensor, eg. to show humidity, your next waste collection date or whatever sensor value is provided.</span></div>

<input type="checkbox" id="card_generic_swap" name="card_generic_swap" value="card_generic_swap"> <label for="card_generic_swap">Generic Card Swapped</label>

<div class="tooltip"> ? <span class="tooltiptext">This is a `generic-card` with swapped label and name.</span></div>

<input type="checkbox" id="card_graph" name="card_graph" value="card_graph"> <label for="card_graph">Graph Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `card_graph` shows an entity with the actual state and a *min-graph-card* integrated. This can be used for a thermostat to show the actual temperature and the history."</span></div>

<input type="checkbox" id="card_input_boolean" name="card_input_boolean" value="card_input_boolean"> <label for="card_input_boolean">Input Boolean Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `input-boolean-card` is to switch an `input_boolean` on or off.</span></div>

<input type="checkbox" id="card_light" name="card_light" value="card_light"> <label for="card_light">Light Card</label>

<div class="tooltip"> ? <span class="tooltiptext">This is the `light-card`, used to toggle a light or a light group. Shows state of the light and, if available, brightness in %. In the picture on the right in row Nr1</span></div>

<input type="checkbox" id="card_light_slider" name="card_light_slider" value="card_light_slider"> <label for="card_light_slider">Light Slider Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `light-slider-card` controls a light with the added possibilty to control the brightness of your light with a slider. See row Nr2 in the picture on the right.</span></div>

<input type="checkbox" id="card_light_slider_collapse" name="card_light_slider_collapse" value="card_light_slider_collapse"> <label for="card_light_slider_collapse">Light Slider Card (collapse)</label>

<div class="tooltip"> ? <span class="tooltiptext">The `light-slider-card (collapse)` is an enhanced version of the `light-slider-card`, that only shows the slider, if the light is on. In the picture on the right, the 'off'-state is like row Nr1, the 'on'-state like row Nr2</span></div>

<input type="checkbox" id="card_light_slider_horizontal" name="card_light_slider_horizontal" value="card_light_slider_horizontal"> <label for="card_light_slider_horizontal">Light Slider Card (horizontal)</label>

<div class="tooltip"> ? <span class="tooltiptext">The `light-slider-card (horizontal)` is an enhanced version of the `light-slider-card`, that shows the slider on the right of the button, making it a 1-line-card. See the picture on the right row Nr3</span></div>

<input type="checkbox" id="card_media_player" name="card_media_player" value="card_media_player"> <label for="card_media_player">Media Player Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `card_media_player` shows you the *app*, the *title* and the *album name* playing, if the data is available through HA. The *app* is shown via a different icon.</span></div>

<input type="checkbox" id="card_media_player_with_control" name="card_media_player_with_control" value="card_media_player_with_control"> <label for="card_media_player_with_control">Media Player Card (with control)</label>

<div class="tooltip"> ? <span class="tooltiptext">This is the second `media-player-card`, in contrast to the first one above, it shows the cover art from your media player.</span></div>

<input type="checkbox" id="card_media_player_with_controls" name="card_media_player_with_controls" value="card_media_player_with_controls"> <label for="card_media_player_with_controls">Media Player Card (with controls)</label>

<div class="tooltip"> ? <span class="tooltiptext">With the `card_media_player_with_controls` you have the state of your media_player and on the second line PREVIOUS / PLAY-PAUSE / NEXT to control it</span></div>

<input type="checkbox" id="card_navigate" name="card_navigate" value="card_navigate"> <label for="card_navigate">Navigate Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `card_navigate` is for navigating inside your HA dashboard(s).</span></div>

<input type="checkbox" id="card_person" name="card_person" value="card_person"> <label for="card_person">Person Card</label>

<div class="tooltip"> ? <span class="tooltiptext">The `card_person` shows if a person is `home` or `not_home`. If you have setup other [zones](https://www.home-assistant.io/integrations/zone/), it will show these as well.</span></div>

<input type="checkbox" id="card_power_outlet" name="card_power_outlet" value="card_power_outlet"> <label for="card_power_outlet">Power Outlet Card</label>

<div class="tooltip"> ? <span class="tooltiptext">This is the `power-outlet-card`. It shows you the state of a power outlet, and if configured, the actual power consumption of the power outlet.</span></div>

<input type="checkbox" id="card_script" name="card_script" value="card_script"> <label for="card_script">Script Card</label>

<div class="tooltip"> ? <span class="tooltiptext">This card starts/runs a script. You can configure icon and text.</span></div>

</fieldset>

<fieldset><legend style="text-transform: uppercase;">Generate</legend> <input type="button" name="submit" value="Generate example code" onclick="generateExampleCode()"> <input type="reset" name="reset" value="Reset"></fieldset>

<fieldset><legend style="text-transform: uppercase;">Your example code</legend>

This is your generated code to paste into your config.  
<span class="text-big text-grey-dk-100 mb-0">**Remember to change all necessary entries and variables!**</span>

<textarea id="generated_code" name="generated_code" rows="18" cols="60" style="width: 100%;"></textarea></fieldset>

</form>
