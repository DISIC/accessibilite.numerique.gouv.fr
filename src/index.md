---
title: Le site officiel du RGAA
layout: layouts/base.njk
---

Sur ce site, vous trouverez :

- Les obligations légales
- Les [critères et les tests](rgaa)
- Les ressources suivantes
  - le [glossaire](glossaire)

{% for post in collections.posts %}
{{ post.data.title }}
{% endfor %}
