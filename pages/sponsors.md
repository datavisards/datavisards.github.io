---
layout: page
title: Sponsors
permalink: /sponsors/
---

<h1 class="visually-hidden">Sponsors</h1>

<p class="lead">Big thanks to the organizations that support and fund our research.</p>

<div class="sponsor-grid">
  {% for sponsor in site.data.sponsors.sponsors %}
    {% include sponsor-card.html sponsor=sponsor %}
  {% endfor %}
</div>
