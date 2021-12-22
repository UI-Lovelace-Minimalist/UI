---
layout: page
title: Custom-cards list
permalink: /usage/:basename
nav_order: 3
parent: Usage
---

# List of included custom-cards
This is a list of available `custom-cards`, included in the actual version of the download.  

> **Note:** *Depending on the card you use, there are different things to set. Sometimes the entity is needed, sometimes the entity needs to be set as a variable, eg. ulm_card_xy_entity. In the template list is explained what you have to set.*  

> **Legend:** <i><span style="height: 10px; width: 10px; background-color: {{ site.ulm_color_orange }}; border-radius: 50%; display: inline-block;"></span> variable | <span style="height: 10px; width: 10px; background-color: {{ site.ulm_color_blue }}; border-radius: 50%; display: inline-block;"></span> entry (eg. entity)</i>

{% assign custom_cards = site.custom_cards | sort: "title" %}
{% for card in custom_cards %}
  
<table>
  <tr>
    <td colspan="2" style="border-right: 3px solid {% if card.category == 'card' %}{{ site.ulm_color_purple }}{% elsif card.category == 'chip' %}{{ site.ulm_color_yellow }}{% elsif card.category == 'title' %}{{ site.ulm_color_blue }}{% else %}{{ site.ulm_color_green }}{% endif %};">
      <h3><a name="{{ card.name }}"></a>{{ card.title }}</h3>
      {% if card.author != nil %}
      <span class="text-small text-grey-dk-100 mb-0">by {{ card.author }}</span>
      {% endif %}
    </td>
  </tr>
  <tr>
    <td width="50%">{{ card.explanation }}</td>
    <td width="50%"><a href="{{ card.image_path }}" data-lightbox="{{ card.name }}" data-title="{{ card.title }}"><img src="{{ card.image_path }}"></a></td>
  </tr>
  {% for variant in card.variants %}
  {% if variant.title != nil %}
  <tr>
    <td colspan="2"><h4>{{ variant.title }}</h4></td>
  </tr>
  {% endif %}
  {% if variant.information != nil %}
  <tr>
    <td colspan="2">
      <details>
        <summary>Additional information</summary>
        <br>
        <table>
          <tr>
            <td>{{ variant.information }}</td>
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
              <pre><code class="language-yaml" style="border: 0">{{ variant.yaml }}</code></pre>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>You're working in <b>UI-mode</b></td>
          </tr>
          <tr>
            <td>
              <pre><code class="language-yaml" style="border: 0">{{ variant.ui }}</code></pre>
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
          {% for variable in variant.variables %}
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
  {% if variant.required_cards != nil %}
  <tr>
    <td colspan="2">
      <details>
        <summary>Required cards</summary>
        <br>
        <table>
          <tr>
            <th>Name</th>
            <th>Link to card</th>
          </tr>
          {% for required_card in variant.required_cards %}
          <tr>
            <td>{{ required_card.name }}</td>
            <td><a href="{{ required_card.link }}">{{ required_card.link }}</a></td>
          </tr>
          {% endfor %}
        </table>
        <br>
      </details>
    </td>
  </tr>
  {% endif %}
  {% endfor %}
</table>
{% endfor %}
