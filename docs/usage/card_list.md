---
title: Card Templates
hide:
  - toc
---

<!-- markdownlint-disable -->
```yaml
https://squidfunk.github.io/mkdocs-material/reference/admonitions/#custom-admonitions
```

{% for name, card in ulm_cards.items() %}

## {{ card.doc.title | default(name) }}
!!! example "{{ card.doc.title | default(name) }}"
    <table>
    <tr>
    <td>{{ card.doc.description | default("") }}</td>
    <td>![{{name}}](../{{card.doc.image_path | default("") }}){ align=right width=50% }</td>
    </tr>
    </table>
    ??? "View Code"
        === "YAML"
            ```yaml
            {{ card.doc.yaml | default("") | indent(12, False) }}
            ```
        {% if card.doc.ui is defined %}
        === "UI"
            ```yaml
            {{ card.doc.ui | default("") | indent(12, False) }}
            ```
        {% endif %}

    ??? "Variables"
        |Variable|Default|Required|Notes|
        |--------|-------|--------|-----|
        {%- for v in card.doc.variables %}
        |`{{ v.name }}`|{{ v.default | default("") }}|{% if v.required | default(false) %}:material-check:{% endif %}|{{ v.notes | default("") }}|
        {%- endfor %}

{% endfor %}
<!-- markdownlint-restore -->
