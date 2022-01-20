---
title: Card Templates
---

```yaml
https://squidfunk.github.io/mkdocs-material/reference/admonitions/#custom-admonitions
```

{% for card in card_templates.card_templates %}

## {{ card.title }}
<!-- markdownlint-disable -->
!!! example "{{ card.title }}"
    <table>
    <tr>
    <td>{{ card.description }}</td>
    <td>![{{card.name}}](../../{{card.image_path }}){ align=right width=50% }</td>
    </tr>
    </table>
    ??? "View Code"
        === "YAML"
            ```yaml
            {{ card.yaml | indent(12, False) }}
            ```

        === "UI"
            ```yaml
            {{ card.ui | indent(12, False) }}
            ```

    ??? "Variables"
        |Variable|Example|Required|Description|
        |--------|-------|--------|-----------|
        {%- for v in card.variables %}
        |{{ v.name }}|{{v.example}}|{{v.required}}|{{v.description}}|
        {%- endfor %}
    ??? "Source Code"
        ```yaml title="{{ card.name }}.yaml"
        --8<-- "{{ card.code}}"
        ```
{% endfor %}
<!-- markdownlint-restore -->
