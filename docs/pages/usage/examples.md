---
layout: page
title: Examples
permalink: /usage/:basename
nav_order: 6
parent: Usage
---

# GETS - GuidesExamplesTutorialsSnippets  
Welcome to our **GETS** page! We collect here all kinds of small tipps and tricks, guides, tutorials or snippets, to show interesting things about this "theme". Just look around, maybe there's something you could use for own layout or you can adapt it to your needs.

We are constantly expanding this page, so come back from time to time, to see what's new!

{% for example in site.examples %}

<table>
  <tr>
    <td colspan="3"><h2><a href="{{ example.url }}">{{ example.title }}</a></h2></td>
  </tr>
  <tr>
    <td>Category: {{ example.category | capitalize }}</td>
    <td>Level: {{ example.level | capitalize }}</td>
    <td>by {{ example.author }}</td>
  </tr>
  <tr>
    <td colspan="3">{{ example.teaser }}</td>
  </tr>
</table>
{% endfor %}
