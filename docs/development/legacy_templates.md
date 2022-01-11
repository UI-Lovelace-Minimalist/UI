---
title: Legacy templates
parent: Development
nav_order: 4
---
# [](#legacy-templates)Legacy templates

This “theme” was re-written prior to the release of version 1.0.0 and differs as such from the originally created templates. We tried to leave legacy templates in place (where applicable), so you can easily adjust your code over time. These legacy templates work by using the _old_ naming and forwarding these to the _new_ name. In the following table we have made an overview from the old to the new naming.

> **Note:** _Depending on the card you use, there are different things to set. Sometimes the entity is needed, sometimes the entity needs to be set as a variable, eg. ulm_card_xy_entity. In the template list is explained what you have to set._

> **Legend:** _<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span>variable | <span style="height: 10px; width: 10px; background-color: #2C84FA; border-radius: 50%; display: inline-block;"></span>entry (eg. entity)_

<div class="table-wrapper">

<table>

<tbody>

<tr>

<th>Old name</th>

<th style="min-width: 20px; width: 20px;">→</th>

<th>New name</th>

<th>New variables/entries</th>

</tr>

<tr>

<td style="vertical-align: top;">chips_icon</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">chip_icon_state</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_chip_icon_state_icon<br>
<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_chip_icon_state_entity</td>

</tr>

<tr>

<td style="vertical-align: top;">chips_return</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">chip_back</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_chip_back_path</td>

</tr>

<tr>

<td style="vertical-align: top;">chips_localisation_present</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">chip_presence_detection</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_chip_presence_counter_residents<br>  
<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_chip_presence_counter_guests</td>

</tr>

<tr>

<td style="vertical-align: top;">title</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_title</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">generic</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_generic</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">light</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_light</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">light_slider</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_light_slider</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_light_slider_name</td>

</tr>

<tr>

<td style="vertical-align: top;">binary_sensor</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_binary_sensor</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">outlet</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_power_outlet</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_power_outlet_consumption_sensor<br>  
<span style="height: 10px; width: 10px; background-color: #2C84FA; border-radius: 50%; display: inline-block;"></span> name</td>

</tr>

<tr>

<td style="vertical-align: top;">cover_buttons</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_cover_with_buttons</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_cover_with_buttons_name<br>  
<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_cover_with_buttons_entity</td>

</tr>

<tr>

<td style="vertical-align: top;">graph</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_graph</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_graph_color<br>  
<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_graph_name<br>  
<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_graph_entity</td>

</tr>

<tr>

<td style="vertical-align: top;">media</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_media_player</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">battery</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_battery</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_battery_attribute</td>

</tr>

<tr>

<td style="vertical-align: top;">media_mini_album</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_media_player_with_cover</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">media_buttons</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">card_media_player_with_controls</td>

<td style="vertical-align: top;"><span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span> ulm_card_media_player_with_controls_entity</td>

</tr>

<tr>

<td style="vertical-align: top;">scene</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">vertical_buttons</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">scene_blue</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">vertical_buttons_blue</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">scene_green</td>

<td style="vertical-align: top; min-width: 20px; width: 20px;">→</td>

<td style="vertical-align: top;">vertical_buttons_green</td>

<td style="vertical-align: top;"></td>

</tr>

</tbody>

</table>

</div>
