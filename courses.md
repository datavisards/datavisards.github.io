---
layout: page
title: Courses
permalink: /courses/
---

<h1 class="visually-hidden">Courses</h1>

<p class="lead">Explore the courses taught by us at HKUST.</p>

<div class="course-list">
{% for course in site.data.courses %}
  <article class="course-card">
    <header class="course-header">
      <h2>{{ course.code }}</h2>
      <span class="course-level">{{ course.level }}</span>
    </header>
    <p class="course-title">{{ course.title }}</p>
    <ul class="course-offerings">
    {% assign offerings = course.offerings | sort: 'sort' | reverse %}
    {% for offering in offerings %}
      <li>
        <div class="course-offering-main">
          <strong>{{ offering.term }}</strong>
          {% if offering.status == 'upcoming' %}<span class="course-status">Upcoming</span>{% endif %}
        </div>
        {% if offering.tas %}
        <p class="course-tas">TAs: {% for ta in offering.tas %}{{ ta }}{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
        {% endif %}
      </li>
    {% endfor %}
    </ul>
  </article>
{% endfor %}
</div>
