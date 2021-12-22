---
layout: page
title: Template list (use)
permalink: /usage/:basename
nav_order: 2
parent: Usage
---

# <a name="template-list"></a>List of templates to use in your "view"-file  
This is the in-depth list of our "usage" templates. 

> **Note:** *Depending on the card you use, there are different things to set. Sometimes the entity is needed, sometimes the entity needs to be set as a variable, eg. ulm_card_xy_entity. In the template list is explained what you have to set.*  

> **Legend:** <i><span style="height: 10px; width: 10px; background-color: {{ site.ulm_color_orange }}; border-radius: 50%; display: inline-block;"></span> variable | <span style="height: 10px; width: 10px; background-color: {{ site.ulm_color_blue }}; border-radius: 50%; display: inline-block;"></span> entry (eg. entity)</i>

{% assign sorted = site.templates | sort: 'name' %}
{% for template in sorted %}
{% if template.internal != true %}
  
<table>
  <tr>
    <td colspan="2" style="border-right: 3px solid {% if template.category == 'card' %}{{ site.ulm_color_purple }}{% elsif template.category == 'chip' %}{{ site.ulm_color_yellow }}{% elsif template.category == 'title' %}{{ site.ulm_color_blue }}{% else %}{{ site.ulm_color_green }}{% endif %};">
      <h3><a name="{{ template.name }}"></a>{{ template.title }}</h3>
      {% if template.author != nil %}
      <span class="text-small text-grey-dk-100 mb-0">by {{ template.author }}</span>
      {% endif %}
    </td>
  </tr>
  <tr>
    <td width="50%">{{ template.explanation }}</td>
    <td width="50%"><a href="{{ template.image_path }}" data-lightbox="{{ template.name }}" data-title="{{ template.title }}"><img src="{{ template.image_path }}"></a></td>
  </tr>
  {% if template.information != nil %}
  <tr>
    <td colspan="2">
      <details>
        <summary>Additional information</summary>
        <br>
        <table>
          <tr>
            <td>{{ template.information }}</td>
          </tr>
        </table>
      </details>
    </td>
  </tr>
  {% endif %}
  <tr>
    <td colspan="2">
      <details>
        <summary>"View" code</summary>
        <br>
        <table>
          <tr>
            <td>You're working in <b>yaml-mode</b> <i>(Remember to take care of indentation)</i></td>
          </tr>
          <tr>
            <td>
              <pre><code class="language-yaml" style="border: 0">{{ template.yaml }}</code></pre>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>You're working in <b>UI-mode</b></td>
          </tr>
          <tr>
            <td>
              <pre><code class="language-yaml" style="border: 0">{{ template.ui }}</code></pre>
            </td>
          </tr>
        </table>
        <br>
      </details>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <details>
        <summary>Variables / Entries</summary>
        <br>
        <table>
          <tr>
            <th>Variable / Entry</th>
            <th>Example</th>
            <th>Required</th>
          </tr>
          {% for variable in template.variables %}
          <tr>
            <td>
              <span style="display: inline-block; background-color: {% if variable.type == 'variable' %}{{ site.ulm_color_orange }}{% else %}{{ site.ulm_color_blue }}{% endif %}; border-radius: 50%; width: 10px; height: 10px;" title="{% if variable.type == 'variable' %}variable{% else %}entry{% endif %}"></span>&nbsp;{{ variable.name }}
            </td>
            <td>{{ variable.example }}</td>
            <td>{{ variable.required }}</td>
          </tr>
          <tr>
            <td colspan="3">{{ variable.explanation }}</td>
          </tr>
          <tr>
            <td colspan="3"><hr style="background-color: #DCDCDC; margin: 0px;"></td>
          </tr>
          {% endfor %}
        </table>
        <br>
      </details>
    </td>
  </tr>
</table>
{% endif %}
{% endfor %}