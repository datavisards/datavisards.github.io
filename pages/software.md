---
layout: page
title: Software
permalink: /software/
---

<h1 class="visually-hidden">Software</h1>

<p class="lead">Try the tools we build.</p>

<div class="software-grid">
  {% for tool in site.data.software %}
    {% include software-card.html tool=tool %}
  {% endfor %}
</div>
