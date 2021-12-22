---
layout: page
title: First page
permalink: /usage/:basename
nav_order: 4
parent: Usage
---

# The first page
So now that you got the "theme" installed, let's start by setting up your first page. These instructions will guide you through the process of setting this page up and configure it. It should also give you some starting points, to develop your own pages.  

> **Note:** *The way you installed this "theme", `yaml`- or `UI`-mode, determines which way you have to work with it. You can't change it while working on it, but you can always have another dashboard configured in the other mode!*  

## Which installation method did you use?  
* for `yaml`-mode [click here](#yaml-mode)
* for `UI`-mode [click here](#ui-mode)

## Yaml-mode 
1. <strong>What you need to have before you start</strong>  
   As for the install and all things YAML, you should have a good editor to do the following steps. If you used [our guide](/installation/yaml-mode) for installation, we already named our favorites.  

   > **Note:** *As you know, indentation matters in yaml. In our code examples underneath we take care of the indentation. If you do changes like setting another `horizontal-stack`, please take care of that yourself. Otherwise some weird things can happen to this layout.*    

1. <strong>Open your view file</strong>  
   If you followed our guide for installing this "theme", you should have a file called `lovelace-minimalist.yaml` (or whatever name you choose) in your config folder. This is your "view" file. Open it in your editor and search for the string "views:". You should find something similar to this:

   <pre><code class="language-yaml" style="border: 0">button_card_templates: !include_dir_merge_named minimalist-templates/
   views:
     - title: Minimalist
       cards:
   </code></pre>

   This is our starting point.  
1. <strong>Start editing</strong>  
   Add the following code underneath the tag "cards:":  
   
   <pre><code class="language-yaml" style="border: 0">      - type: horizontal-stack
           cards:
             - type: custom:button-card
               template: edge
             - type: custom:button-card
               template: chip_temperature
               variables:
                 ulm_chip_temperature_inside: sensor.my_temperature_sensor_inside
                 ulm_chip_temperature_outside: sensor.my_temperature_sensor_outside
                 ulm_chip_temperature_weather: weather.my_weather_provider 
             - type: custom:button-card
               template: edge
         - type: horizontal-stack
           cards:
             - type: custom:button-card
               template: edge
             - type: custom:button-card
               template: title
               name: Welcome to UI-Lovelace-Minimalist
             - type: custom:button-card
               template: edge
   </code></pre>

   Change the three variables with entities from your setup, eg. "weather.accu_weather" as your weather provider.  

1. <strong>What is that code we inserted</strong>  
   Let's take a deeper look at what we have done with the last insert, as this is the blueprint for the whole design.
   * First we used a `horizontal-stack`-card to define a new row in our layout. These rows are one of the most important parts!
   * The next is a template `edge`. We use this to get just a little bit of margin around the cards. This is optional, but I'd count it as "part of the row", so I always set it.
   * In the end, my scaffold for a new row is always this:  
     <pre><code class="language-yaml" style="border: 0">      - type: horizontal-stack
             cards:
               - type: custom:button-card
                 template: edge
             ### Here is where the magic takes place ###
               - type: custom:button-card
                 template: edge
     </code></pre>  
     &raquo; a `horizontal-stack`-card  
     &raquo; a template "edge"  
     &raquo; here's where my buttons go (aka the magic)  
     &raquo; a template "edge"  
1. <strong>Your template</strong>  
   Now we finally move to the fun part, we choose some templates to use in our layout.  
   1. Go to our [list of templates](/usage/template_list) and choose which chip/card you want.  
   1. Open the '"View" code' pulldown and copy the code for `yaml`-mode.  
      > **Note:** *the code in this column is correctly indented in itself, but we don't know how your setup looks like, so you have to take care of the indentation this code needs.  
      > Just take the surrounding cards as a guide, eg. the template "edge" is correctly positioned (indented).*   
   1. Now paste the copied template code right where "the magic" is happening, this should leave you with this:
      <pre><code class="language-yaml" style="border: 0">        - type: horizontal-stack
                cards:
                  - type: custom:button-card
                    template: edge               
                  - type: custom:button-card
                    template: card_light_slider
                    entity: light.my_livingroom_light
                    variables:
                      ulm_card_light_slider_name: Livingroom Light
                  - type: custom:button-card
                    template: edge
      </code></pre>

      ||name|explanation|
      |---|---|---|
      |*type*|custom:button-card||
      |*template*|card_light_slider|template name|
      |*entity*|light.my_livingroom_light|entity ID|
      |*variables*||if variables are needed, set them here|
      |*ulm_card_light_slider_name*||variable name|  

   1. In the template list you copied the code from, is explained which entries and variables need to be set. In this example that would be `entity` and the variable `ulm_card_light_slider_name`. Change these to the specific values of your installation, eg. set the correct entity_id for *your* light.  
      > **Note:** *Depending on the card you use, there are different things to set. Sometimes the `entity` is needed, sometimes the entity needs to be set as a variable, eg. `ulm_card_xy_entity`. In the template list is explained what you have to set.*  
   1. Just for this example, add two more cards to your `horizontal-stack`-card by pasting in the same code (you still have that in your clipboard).  
   1. Save the card and take a first look at it.  
   1. We are done now with configuring the first card, but please take a look at the next paragraph, there are some things to take note of, while using this example.  

What we are doing here, is configuring a row (horizontal-stack) where you put three button-cards with our design next to each other. If you want more buttons, use a new `horizontal-stack`-card and set them. Our cards should fit in a lot of widths, so experiment with the number of buttons you want to show in one line. Eg. the `light_slider` looks best in a one column layout, if you put two next to each other, where the `generic` card looks best with three next to each other in the same layout.     

While configuring your views, we suggest you take note of these few things:  
* Every row in your layout should be a `horizontal-stack`-card, even if you only put one `button-card` in it!  
* For the row(s) where you set chips, the `horizontal-stack` is mandatory!  
* Use the template "[card_title](/usage/template_list#card_title)" to get kind of a divider between different blocks of buttons.  
* We suggest to use our template `edge` to surround your buttons inside the horizontal-stack. That means, the first and the last card in your horizontal-stack should be:  
  
  <pre><code class="language-yaml" style="border: 0">- type: 'custom:button-card'
    template: edge
  </code></pre>

  This template does not do much, but sometimes it is necessary to get just that little more padding for a card, to shift the position just a little bit. I use this template in every horizontal-stack, you never know, when you need it.  

  Now that you have your first design configured, you can built up on that. Take a look at our [example page](/usage/examples), maybe you find something interesting that you can modify to your needs.  

### UI-mode

1. <strong>Go into editing mode</strong>  
   If you followed our guide for installing this "theme", you should have a dashboard called "Minimalist" (or whatever you choose to name it). Look for it in the sidebar and click on it to open it. Open the three-dot-menu in the upper right corner and choose "Edit dashboard". You're now in editing mode.
1. <strong>The first card</strong>
   1. In the downwards right corner you find the button "+ ADD CARD". Click on it to open the "card configuration screen".  
   1. Search for "Horizontal stack" and click on it.  
   1. On the new screen search for "Custom: Button-Card" and click on it.
   1. You should now see the "card configuration screen" with the following code:
      <pre><code class="language-yaml" style="border: 0">type: custom:button-card</code></pre>
1. <strong>Choose a template</strong>  
   This is the part, where you decide what you want to show.  
   1. Go to our [list of templates](/usage/template_list) and choose which chip/card you want.  
   1. Open the '"View" code' pulldown and copy the code for `UI`-mode.  
1. <strong>Back to the card configuration</strong>
   1. Go back to the "card configuration screen" and select the code (`type: custom:button-card`)  
   1. Delete the selection and paste in the code you copied from the list of templates  
   1. You should now have something like this in the "card configuration screen":
      <pre><code class="language-yaml" style="border: 0">type: custom:button-card
      template: card_light_slider
      entity: light.my_livingroom_light
      variables:
        ulm_card_light_slider_name: Livingroom Light
      </code></pre>

      ||name|explanation|
      |---|---|---|
      |*type*|custom:button-card||
      |*template*|card_light_slider|template name|
      |*entity*|light.my_livingroom_light|entity ID|
      |*variables*||if variables are needed, set them here|
      |*ulm_card_light_slider_name*||variable name|  

   1. In the template list you copied the code from, is explained which entries and variables need to be set. In this example that would be `entity` and the variable `ulm_card_light_slider_name`. Change these to the specific values of your installation, eg. set the correct entity_id for *your* light.  
      > **Note:** *Depending on the card you use, there are different things to set. Sometimes the `entity` is needed, sometimes the entity needs to be set as a variable, eg. `ulm_card_xy_entity`. In the template list is explained what you have to set.*  
   1. Just for this example, add two more cards to your `horizontal-stack`-card by pasting in the same code (you still have that in your clipboard).  
   1. Save the card and take a first look at it.  
   1. We are done now with configuring the first card, but please take a look at the next paragraph, there are some things to take note of, while using this example.  

What we are doing here, is configuring a row (horizontal-stack) where you put three button-cards with our design next to each other. If you want more buttons, use a new `horizontal-stack`-card and set them. Our cards should fit in a lot of widths, so experiment with the number of buttons you want to show in one line. Eg. the `light_slider` looks best in a one column layout, if you put two next to each other, where the `generic` card looks best with three next to each other in the same layout.     

While configuring your views, we suggest you take note of these few things:  
* Every line in your layout should be a `horizontal-stack`-card, even if you only put one `button-card` in it!  
* For the line(s) where you set chips, the `horizontal-stack` is mandatory!  
* Use the template "[card_title](/usage/template_list#card_title)" to get kind of a divider between different blocks of buttons.  
* We suggest to use our template `edge` to surround your buttons inside the horizontal-stack. That means, the first and the last card in your horizontal-stack should be:  
  
  <pre><code class="language-yaml" style="border: 0">type: 'custom:button-card'
  template: edge
  </code></pre>

  This template does not do much, but sometimes it is necessary to get just that little more padding for a card, to shift the position just a little bit. I use this template in every horizontal-stack, you never know, when you need it.  

  Now that you have your first design configured, you can built up on that. Take a look at our [example page](/usage/examples), maybe you find something interesting that you can modify to your needs.  
