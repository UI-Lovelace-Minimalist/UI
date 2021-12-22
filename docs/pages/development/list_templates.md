---
layout: page
title: Template list (dev)
permalink: /development/:basename
nav_order: 3
parent: Development
---

# Templates
This is a list of all our templates. This is the template code, that is used, when you reference the template in your view file(s). This code is needed, if you manually install this theme or develop a `custom-card`. 

> **Note:** *If you're looking for the code to **use** these templates, see the list [on this page](/usage/template_list)*  

> **Hint:** *If you want to copy all templates at once, eg. for installation purposes, use the file `button_card_templates.yaml` that you can find in the repository under `config` > `minimalist-templates` or click [here](https://github.com/UI-Lovelace-Minimalist/UI/blob/main/config/minimalist-templates/button_card_templates.yaml).*

{% assign sorted = site.templates | sort: 'name' %}
{% for template in sorted %}
{% if template.internal != true %}
<details>
<summary>Template name: <i>{{ template.name }}</i></summary>

<pre><code class="language-yaml" style="border: 0">{{ template.code }}</code></pre>

</details>
{% endif %}
{% endfor %}

## Internal Templates
This "theme" is working with a lot of  internal templates (in `button_card_templates.yaml`) that inherit settings from other templates. This is to shorten the code, avoid duplication and make the use easier. This is a list of these templates. 

> **Note:** *You will need these templates for installation and development, normally you **won't need them** in your views directly*!

{% assign sorted = site.templates | sort: 'name' %}
{% for template in sorted %}
{% if template.internal == true %}
<details>
<summary>Template name: <i>{{ template.name }}</i></summary>

<pre><code class="language-yaml" style="border: 0">{{ template.code }}</code></pre>

</details>
{% endif %}
{% endfor %}
