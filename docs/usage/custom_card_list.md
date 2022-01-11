---
title: 	Custom-cards list
parent: Usage
nav_order: 3
---
<div id="main-content" class="main-content" role="main">

# [](#list-of-included-custom-cards)List of included custom-cards

This is a list of available `custom-cards`, included in the actual version of the download.

> **Note:** _Depending on the card you use, there are different things to set. Sometimes the entity is needed, sometimes the entity needs to be set as a variable, eg. ulm_card_xy_entity. In the template list is explained what you have to set._

> **Legend:** _<span style="height: 10px; width: 10px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span>variable | <span style="height: 10px; width: 10px; background-color: #2C84FA; border-radius: 50%; display: inline-block;"></span>entry (eg. entity)_
<div class="table-wrapper">
<table>
<tbody>
<tr>
<td colspan="2" style="border-right: 3px solid #11B584;">

### <a name="custom_card_tpx01_aircondition"></a>AirCondition Card
<span class="text-small text-grey-dk-100 mb-0">by tpx01</span></td>
</tr>
<tr>
<td width="50%">The `custom_card_tpx01_aircondition` shows data from your air condition and gives you the possibility to control it.</td>
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

```yaml

    - type: custom:button-card
      template: custom_card_tpx01_aircondition_with_buttons
      variables:
        entity: climate.livingroom
        name: A/C Livingroom
```
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

```yaml

    type: custom:button-card
    template: custom_card_tpx01_aircondition_with_buttons
    variables:
      entity: climate.livingroom
      name: A/C Livingroom
```
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
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> entity</td>
<td>climate.livingroom_ac</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">Your climate entity."</td>
</tr>
<tr>
<td colspan="3">

* * *
</td>
</tr>
<tr>
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> name</td>
<td>A/C Livingroom</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">Your entity name."</td>
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
<td colspan="2" style="border-right: 3px solid #11B584;">

### <a name="custom_card_paddy_dwd_pollen"></a>DWD Pollen Card
<span class="text-small text-grey-dk-100 mb-0">by paddy0174</span></td>
</tr>
<tr>
<td width="50%">This is a `custom-card` to show the pollen count, taken from the DWD pollen service via a rest sensor. This card is only available in german, as the DWD (DeutscherWetterDienst => GermanWeatherService) only publishes data for Germany. If you want a translation added, please feel free to open an issue in the repo.</td>
<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>
</tr>
<tr>
<td colspan="2"><details><summary>Additional information</summary>  
<div class="table-wrapper">
<table>
<tbody>
<tr>
<td>I use the following `rest` and `template` sensors in HA:

```yaml

    sensor:
      - platform: rest
        scan_interval: 3600
        name: "DWD Pollenbelastung"
        resource: https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json
        json_attributes_path: "$..content[?(@.partregion_id==XXX)].Pollen"
        json_attributes:
          #- Erle
          #- Beifuss
          #- Ambrosia
          - Birke
          #- Esche
          - Hasel
          - Graeser
          #- Roggen
        value_template: "{{ value_json.last_update }}"
      - platform: template
        sensors:
          dwd_pollenbelastung_birke:
            icon_template: "mdi:tree-outline"
            friendly_name: "Birke"
            value_template: >-
              {% set dwd_state = state_attr('sensor.dwd_pollenbelastung', 'Birke')['today'] %}
              {% if dwd_state == "3" %}6{% elif dwd_state == "2-3"%}5{% elif dwd_state == "2"%}4{% elif dwd_state == "1-2"%}3{% elif dwd_state == "1"%}2{% elif dwd_state == "0-1"%}1{% else %}0{% endif %}
            attribute_templates:
              today: >-
                {% set dwd_state = state_attr('sensor.dwd_pollenbelastung', 'Birke')['today'] %}
                {% if dwd_state == "3" %}6{% elif dwd_state == "2-3"%}5{% elif dwd_state == "2"%}4{% elif dwd_state == "1-2"%}3{% elif dwd_state == "1"%}2{% elif dwd_state == "0-1"%}1{% else %}0{% endif %}
              tomorrow: >-
                {% set dwd_state = state_attr('sensor.dwd_pollenbelastung', 'Birke')['tomorrow'] %}
                {% if dwd_state == "3" %}6{% elif dwd_state == "2-3"%}5{% elif dwd_state == "2"%}4{% elif dwd_state == "1-2"%}3{% elif dwd_state == "1"%}2{% elif dwd_state == "0-1"%}1{% else %}0{% endif %}
```
</td>
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

```yaml

    - type: custom:button-card
      template: 
        - custom_card_paddy_dwd_pollen
      entity: sensor.dwd_pollenbelastung_birke
```
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

```yaml

    - type: custom:button-card
      template: 
        - custom_card_paddy_dwd_pollen
      entity: sensor.dwd_pollenbelastung_birke
```
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
<td>sensor.dwd_pollenbelastung_birke</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">Your sensor for "Pollenbelastung"</td>
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
<td colspan="2" style="border-right: 3px solid #11B584;">

### <a name="custom_card_schumijo_flower"></a>Flower Card
<span class="text-small text-grey-dk-100 mb-0">by schumijo</span></td>
</tr>
<tr>
<td width="50%">This is the `card_flower`, used to display a plant entity. Shows state of the plant and attributes.</td>
<td width="50%">[![](/assets/images/flower.png)](/assets/images/flower.png)</td>
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

```yaml

    - type: 'custom:button-card'
      template: card_flower
      variables:
        ulm_card_flower_entity: plant.bonsai_ficus
        ulm_card_flower_name: Bonsai Ficus
        ulm_card_flower_species: "ficus retusa"
```
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

```yaml

    type: 'custom:button-card'
    template: card_flower
    variables:
      ulm_card_flower_entity: plant.bonsai_ficus
      ulm_card_flower_name: Bonsai Ficus
      ulm_card_flower_species: "ficus retusa"
```
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
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_flower_entity</td>
<td>plant.bonsai_ficus</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">The entity of your plant</td>
</tr>
<tr>
<td colspan="3">

* * *
</td>
</tr>
<tr>
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_flower_name</td>
<td>Bonsai Ficus</td>
<td>false</td>
</tr>
<tr>
<td colspan="3">The name of your plant</td>
</tr>
<tr>
<td colspan="3">

* * *
</td>
</tr>
<tr>
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_card_flower_species</td>
<td>ficus retusa</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">The species of your plant</td>
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
<tr>
<td colspan="2"><details><summary>Required cards</summary>  
<div class="table-wrapper">
<table>
<tbody>
<tr>
<th>Name</th>
<th>Link to card</th>
</tr>
<tr>
<td>lovelace-flower-card</td>
<td>[https://github.com/thomasloven/lovelace-flower-card](https://github.com/thomasloven/lovelace-flower-card)</td>
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
<td colspan="2" style="border-right: 3px solid #11B584;">

### <a name="custom_card_paddy_waste_collection"></a>Waste Collection Card
<span class="text-small text-grey-dk-100 mb-0">by paddy0174</span></td>
</tr>
<tr>
<td width="50%">The `custom_card_paddy_waste_collection` shows you a button for the next waste collection date. On the day of collection and the day before, the icon and text will be red, to alert you.</td>
<td width="50%">[![](/assets/images/custom_card_paddy_waste_collection.png)](/assets/images/custom_card_paddy_waste_collection.png)</td>
</tr>
<tr>
<td colspan="2"><details><summary>Additional information</summary>  
<div class="table-wrapper">
<table>
<tbody>
<tr>
<td>This is my `sensor` setup in HA. I do the change from "days" to "friendly days" in my template sensor.

*   Don't forget to set `add_days_to` in your `sensor` config
*   "HEUTE" is german for today or aujourd'hui | "MORGEN" is german for tomorrow or demain

```yaml

    sensor:
      - platform: waste_collection_schedule
        name: waste_collection_paper
        details_format: upcoming
        add_days_to: true # this line is important
        value_template:  >-
          {% if value.daysTo == 0 %}
          HEUTE
          {% elif value.daysTo == 1 %}
          MORGEN
          {% else %}
          in {{value.daysTo}} Tagen
          {% endif %}
        types:
          - Papiertonne
```
</td>
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

```yaml

    - type: 'custom:button-card'
      template: custom_card_paddy_waste_collection
      entity: sensor.waste_collection_paper
```
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

```yaml

    type: 'custom:button-card'
    template: custom_card_paddy_waste_collection
    entity: sensor.waste_collection_paper
```
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
<td>sensor.waste_collection_paper</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">Your entity from waste_collection_framework</td>
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
<tr>
<td colspan="2"><details><summary>Required cards</summary>  
<div class="table-wrapper">
<table>
<tbody>
<tr>
<th>Name</th>
<th>Link to card</th>
</tr>
<tr>
<td>Waste Collection Framework</td>
<td>[https://github.com/mampfes/hacs_waste_collection_schedule](https://github.com/mampfes/hacs_waste_collection_schedule)</td>
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
<td colspan="2" style="border-right: 3px solid #11B584;">

### <a name="custom_card_paddy_welcome"></a>Welcome Card
<span class="text-small text-grey-dk-100 mb-0">by paddy0174</span></td>
</tr>
<tr>
<td width="50%">The `custom_card_paddy_welcome` shows a welcome message to the logged in user(name) and can show additional infos like news, notifications, weather, buttons or...  
Three different variants in the download: welcome-card, welcome-card with weather and welcome-card with news (homefeed-card)</td>
<td width="50%">[![](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)](https://via.placeholder.com/426x96/efefef/999999?text=Sorry,+no+image+yet)</td>
</tr>
<tr>
<td colspan="2">

#### Welcome Card
</td>
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

```yaml

    - type: 'custom:button-card'
      template: custom_card_paddy_welcome
      variables:
        ulm_custom_card_paddy_welcome_time: sensor.time
```
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

```yaml

    type: 'custom:button-card'
    template: custom_card_paddy_welcome
    variables:
      ulm_custom_card_paddy_welcome_time: sensor.time
```
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
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_custom_card_paddy_welcome_time</td>
<td>sensor.time</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">This is your `time` sensor in Home Assistant.</td>
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
<tr>
<td colspan="2">

#### Welcome Card with Weather
</td>
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

```yaml

    - type: 'custom:button-card'
      template: custom_card_paddy_welcome_with_weather
      variables:
        ulm_custom_card_paddy_welcome_time: sensor.time
        ulm_custom_card_paddy_welcome_weather_provider: weather.accu_weather
```
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

```yaml

    type: 'custom:button-card'
    template: custom_card_paddy_welcome_with_weather
    variables:
      ulm_custom_card_paddy_welcome_time: sensor.time
      ulm_custom_card_paddy_welcome_weather_provider: weather.accu_weather
```
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
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_custom_card_paddy_welcome_time</td>
<td>sensor.time</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">This is your `time` sensor in Home Assistant.</td>
</tr>
<tr>
<td colspan="3">

* * *
</td>
</tr>
<tr>
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_custom_card_paddy_welcome_weather_provider</td>
<td>weather.accu_weather</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">Your Home Assistant weather provider</td>
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
<tr>
<td colspan="2">

#### Welcome Card With News
</td>
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

```yaml

    - type: 'custom:button-card'
      template: custom_card_paddy_welcome_with_news
      variables:
        ulm_custom_card_paddy_welcome_time: sensor.time
        ulm_custom_card_paddy_welcome_news_entities:
          - entity: sensor.waste_collection_paper
            content_template: "{{display_name}}{{state}}"
          - entity: sensor.waste_collection_waste
            content_template: "{{display_name}}{{state}}" 
```
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

```yaml

    type: 'custom:button-card'
    template: custom_card_paddy_welcome_with_news
    variables:
      ulm_custom_card_paddy_welcome_time: sensor.time
      ulm_custom_card_paddy_welcome_news_entities: 
        - entity: sensor.waste_collection_paper
          content_template: "{{display_name}}{{state}}"
        - entity: sensor.waste_collection_waste
          content_template: "{{display_name}}{{state}}"
```
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
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_custom_card_paddy_welcome_time</td>
<td>sensor.time</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">This is your `time` sensor in Home Assistant.</td>
</tr>
<tr>
<td colspan="3">

* * *
</td>
</tr>
<tr>
<td><span style="display: inline-block; background-color: #FF9101; border-radius: 50%; width: 10px; height: 10px;" title="variable"></span> ulm_custom_card_paddy_welcome_news_entities</td>
<td>

```yaml

    ulm_custom_card_paddy_welcome_news_entities:
      - entity: sensor.waste_collection_paper
        content_template: "{{display_name}}{{state}}"
      - entity: sensor.waste_collection_waste
        content_template: "{{display_name}}{{state}}"
```
</td>
<td>true</td>
</tr>
<tr>
<td colspan="3">These are the entities, that get listed in your news-feed.  
Please see the documentation of [home-feed-card](https://github.com/gadgetchnnel/lovelace-home-feed-card) to see all the available options.  
We also provide an example for the configuration in our <a href="">G.E.T.S.</a> category.</td>
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
<tr>
<td colspan="2"><details><summary>Required cards</summary>  
<div class="table-wrapper">
<table>
<tbody>
<tr>
<th>Name</th>
<th>Link to card</th>
</tr>
<tr>
<td>lovelace-home-feed-card</td>
<td>[https://github.com/gadgetchnnel/lovelace-home-feed-card](https://github.com/gadgetchnnel/lovelace-home-feed-card)</td>
</tr>
</tbody>
</table>
</div>
</details></td>
</tr>
</tbody>
</table>
</div>