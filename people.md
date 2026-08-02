---
layout: page
title: People
permalink: /people/
---

<h1 class="visually-hidden">People</h1>

<p class="lead">Meet the Visards who wield all the magic!</p>

<section class="people-section">
<h2>Core members</h2>
{% assign pi = site.people | where: 'program', 'Faculty PI' %}
{% assign others = site.people | where_exp: 'p', 'p.program != "Faculty PI"' %}
{% assign periods = others | map: 'period' | uniq | sort %}
<div class="people-grid">
{% for person in pi %}
{% include people-card.html person=person %}
{% endfor %}
{% for period in periods %}
  {% assign cohort = others | where: 'period', period | sort: 'name' %}
  {% for person in cohort %}
{% include people-card.html person=person %}
  {% endfor %}
{% endfor %}
</div>
</section>

<section class="people-section">
<h2>Visiting research interns</h2>
<div class="intern-grid">
{% for group in site.data.students.intern_groups %}
  <article class="collaborator-group">
    <header><strong>{{ group.program }}</strong></header>
    <ul class="collaborator-list">
    {% for student in group.students %}
      <li>
        <span class="collaborator-name">{{ student.name }}{% if student.repeat %} {{ student.repeat }}{% endif %}</span>
        {% if student.affiliation %}<span class="collaborator-affiliation">{{ student.affiliation }}</span>{% endif %}
        {% if student.period %}<span class="collaborator-period">{{ student.period }}</span>{% endif %}
      </li>
    {% endfor %}
    </ul>
  </article>
{% endfor %}
</div>
</section>

<section class="people-section">
<h2>Students in coursework</h2>
<div class="coursework-grid">
{% for column in site.data.students.coursework_columns %}
  <div class="coursework-col">
  {% for group in column.groups %}
    <article class="collaborator-group">
      <header><strong>{{ group.course }}</strong></header>
      {% for project in group.projects %}
      <div class="collaborator-project">
        {% if project.label or project.period %}
        <div class="collaborator-project-head">
          {% if project.label %}<p class="collaborator-project-label">{{ project.label }}</p>{% else %}<span></span>{% endif %}
          {% if project.period %}<span class="collaborator-period">{{ project.period }}</span>{% endif %}
        </div>
        {% endif %}
        <ul class="collaborator-list">
        {% for student in project.students %}
          <li>
            <span class="collaborator-name">{{ student.name }}</span>
            {% if student.period %}<span class="collaborator-period">{{ student.period }}</span>{% endif %}
          </li>
        {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </article>
  {% endfor %}
  </div>
{% endfor %}
</div>
</section>
