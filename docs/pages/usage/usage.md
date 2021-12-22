---
layout: page
title: Usage
permalink: /:basename
nav_order: 3
has_children: true
---

# Usage  
Using this "theme" is not difficult, but you need to know a few basics, so your design can make its best impression. It is depending on two things, namely using a theme and make extensive use of the `template` function from the `custom_component` [button-card](https://github.com/custom-cards/button-card) made by RomRaider.
The design system consists of graphical buttons, that are changed depending on their use.

## Table of content  
* [Changing templates](#changing-templates)
* [List of templates](#list-of-templates)  
* [Tap actions](#tap-actions)  
* [Color scheme](#color-scheme)  
* [Icons](#icons)  

### Chips  
At the top of each page we find the chips, which allow to quickly visualize important information.  

![Chips](/assets/images/chips.png)  

### Title  
Titles are used to separate the different sections. Kind of a divider...

![Title](/assets/images/title.png)    

### Vertical buttons
For using the cards as a button.  

![Title](/assets/images/scene.gif)    

### Cards   
`Cards` are the main part of this design and are widely used in very different designs and functions. With these `cards` you can set up nearly every entity in HA, showing from "state-only" over a "full blown" information graphic with various values to "controlling" your covers and climate entities.

![Cards](/assets/images/cards.png)

#### Anatomy of cards  
![Anatomy](/assets/images/anatomy.png)  
1. **Dot**: Visible when the device is unavailable. Also used on the entity **person**
2. **Icon**: Icon that represents the device
3. **Primary line**: Main information
4. **Secondary line**: Secondary information
5. **Optional part**: Possibility to display buttons to launch actions related to the device. Or display a graph to view the history of a sensor or you let your fantasy take the ride...

In the list above #5 enhances the normal `cards` with a "second line", that is used to display other information like a graph or the controls for your covers. For this readme the `cards` are divided into three groups:
* 1-line cards: These are cards for `sensor` or `binary_sensors` like *light* or *power outlets*.
* 2-line cards: These are cards with a second line for informations or controls, eg. your `cover controls`.
* Custom cards: These are special cards, that you can install, only if needed. These cards are mostly developed and contributed to the repository. Eg. an `aircondition-card` that shows the state of your aircondition and buttons to control it.  

## Changing templates
There are cases, actually a lot of them, where you want to change or extend existing template code. Doing this inside the code from the repository isn't a good idea, as the next update would overwrite your changes.  
But don't worry, we have taken care of that and you can very easily extend our code with your own.  

Take a look at this page: [Changing a template](/usage/changing_template)  

## <a name="list-of-templates"></a>List of templates to use in "view"-files
The following list is just an overview, you can find the extended list with example code, picture and description [here](/usage/template_list).  

{% assign sorted = site.templates | sort: 'name' %}
{% for template in sorted %}
{% if template.internal != true %}

<table>
  <tr>
    <td colspan="2" style="border-right: 3px solid {% if template.category == 'card' %}{{ site.ulm_color_purple }}{% elsif template.category == 'chip' %}{{ site.ulm_color_yellow }}{% elsif template.category == 'title' %}{{ site.ulm_color_blue }}{% else %}{{ site.ulm_color_green }}{% endif %};"><h4>{{ template.title }}</h4></td>
  </tr>
  <tr>
    <td><a href="/usage/template_list#{{ template.name }}">{{ template.name }}</a></td>
    <td>{{ template.explanation }}</td>
  </tr>
</table>

{% endif %}
{% endfor %}

## Tap actions  
One of the great features of button-card is, that you can set an `action`. These `actions` can be set on every card you configure, despite the cards that already have buttons. You have three possibilities to choose from:  
* `tap_action`  
* `hold_action`  
* `double_tap_action`  

Each of these "events" can be configured to use a specific `action`. These `actions` are:  

<table>
  <tr>
    <td>more-info</td>
    <td>
      <pre><code class="language-yaml" style="border: 0">xxx_action:
  action: more-info # to show the more-info popup  
  entity: your_entity # show more-info popup for this entity
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>toggle</td>
    <td>
      <pre><code class="language-yaml" style="border: 0">xxx_action:
  action: toggle # toggles the entity of the card
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>call-service</td>
    <td>
      <pre><code class="language-yaml" style="border: 0">xxx_action:
  action: call-service # to call a service from HA  
  service: service.service_arg  # the service
  service_data: # additional data, eg. an entity_id
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>none</td>
    <td>
      <pre><code class="language-yaml" style="border: 0">xxx_action:
  action: none # explicitly set to do nothing
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>navigate (HA internal)</td>
    <td>
      <pre><code class="language-yaml" style="border: 0">xxx_action:
  action: navigate  
  navigation_path: /ui-lovelace/home # the path to navigate to
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>url (only external)</td>
    <td>
      <pre><code class="language-yaml" style="border: 0">xxx_action:
  action: url  
  url_path: https://homeassistant.io
      </code></pre>
    </td>
  </tr>
</table>

## Color scheme  

|Type|Color|Hex|RGB|
|---|---|---|---|
|💡 Light<br />⚡ Electricity|<span style="height: 25px; width: 25px; background-color: #FF9101; border-radius: 50%; display: inline-block;"></span>|#FF9101|rgb(255,145,1)|
|🔥 Heating|<span style="height: 25px; width: 25px; background-color: #F54436; border-radius: 50%; display: inline-block;"></span>|#F54436|rgb(245,6,54)|
|☑️ On/off devices<br />🏠 Home|<span style="height: 25px; width: 25px; background-color: #3D5AFE; border-radius: 50%; display: inline-block;"></span>|#3D5AFE|rgb(61,90,254)|
|🌲 Exterior|<span style="height: 25px; width: 25px; background-color: #01C852; border-radius: 50%; display: inline-block;"></span>|#01C852|rgb(1,200,82)|

## Icons  
For the `chips`, this "theme" uses the standard *unicode emojis*. The main reason is, they are multi-color whereas the `mdi-icons` that HomeAssistant uses are one color only. 
> These emojis are *only used* on the `chips`, all *other cards or buttons* use the standard `mdi-icons`!

Overview over standard *unicode emojis*:  
* [https://emojipedia.org](https://emojipedia.org) or  
* [https://github.com/ikatyang/emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)  

Overview Home Assistant *mdi-icons*: 
* [https://materialdesignicons.com/](https://materialdesignicons.com/) 

Using emojis is easy:
* Go to one of the Github pages above
* Select the emoji you want and copy it ("CTRL + C" or right-click "copy" / at <i>emojipedia.org</i> you already find a "copy" button)
* Go to your view and paste the icon

> There are a lot of emojis on these pages, so we suggest you use the built-in search at <i>emojipedia</i> or the browser integrated search by pressing "CTRL + F" and type in your query like "heart". 