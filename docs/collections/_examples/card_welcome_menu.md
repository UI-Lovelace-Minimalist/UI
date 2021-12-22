---
layout: example_page
title: Card welcome with menu buttons
author: paddy0174
category: tutorial
level: moderate
teaser: "In this tutorial you'll learn how to expand a card with another `lovelace-card`, shown on the `welcome-card`." 
tl_dr: |-
  In this tutorial we'll take the template code of the `welcome-card` and enhance it with a `horizontal-stack`-card and a few buttons provided by `button-card`.  
  You'll learn how to extend the template code and slip in your own.
---

Enhancing a card with another `lovelace-card`? Writing code for a template? Sounds a lot and a little complicated? No worries, this tutorial breaks all the necessary steps down for you, so you can try it with your own code later!

## What do we need before we start?  
Not much, but I recommend using a good editor to do this task. No matter if you later will use it with `yaml`- or `UI`-mode, for the "developing" work a good editor is nice to work with. It just simplifies a few tasks.  
And you need to have `welcome-card` installed. That's all!

## Looking for a template to start  
The first thing we do, is looking for the template code we want to take as a basis. Go to our [list of templates]() and copy the template code that you will be offered into a new file in your editor. For this tutorial we are going to take the code of the `custom-card` `custom_card_paddy_welcome` as a basis. And here it is:

<pre><code class="language-yaml" style="border: 0">custom_card_paddy_welcome:
  template:
    - ulm_custom_card_paddy_welcome_language_variables
  show_icon: false
  show_name: false
  show_label: false
  styles:
    grid:
      - grid-template-areas: '"item1"'
      - grid-template-columns: 1fr
      - grid-template-rows: min-content
      - row-gap: 12px
    card:
      - border-radius: var(--border-radius)
      - box-shadow: var(--box-shadow)
      - padding: 12px
  custom_fields:
    item1:
      card:
        type: markdown
        content: >
          [[[
            let time = states[variables.ulm_custom_card_paddy_welcome_time].state;
            let welcome = '';

            if (time > '18:00'){
              welcome = variables.ulm_custom_card_paddy_welcome_evening; 
            } else if (time > '12:00'){
              welcome = variables.ulm_custom_card_paddy_welcome_afternoon;
            } else if (time > '05:00'){
              welcome = variables.ulm_custom_card_paddy_welcome_morning;
            } else {
              welcome = variables.ulm_custom_card_paddy_welcome_hello;
            }

            return welcome + ',&lt;br>' + user.name + '!';
          ]]]
        card_mod:
        style: |
          ha-card {
            border-radius: 14px;
            box-shadow: none;
            font-size: 30px;
            text-align: left;
            cursor: default;
          }
</code></pre>
