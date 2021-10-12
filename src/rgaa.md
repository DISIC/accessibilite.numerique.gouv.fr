---
title: Les critères du RGAA
layout: _layouts/base.njk
---


<h2>{{ criterion.data.theme }}</h2>
<ul>
{% for criterion in collections.rgaa %}
<li><a href="{{ criterion.url }}">{{ criterion.data.title }}</a></li>
{% endfor %}
</ul>