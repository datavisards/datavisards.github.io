---
layout: page
title: Home
class: home
permalink: /
---

{% assign lab = site.data.lab %}
{% assign recent_years = site.publications | group_by: 'year' | sort: 'name' | reverse %}
{% assign recent_news = site.data.news | sort: 'date' | reverse %}

<h1 class="visually-hidden">DataVisards</h1>

<div class="home-intro">
  <p class="home-copy">
    <span class="home-greeting">Hi there! <span aria-hidden="true">👋</span></span>
    We are <strong>DataVisards</strong>, a research lab at
    <a href="{{ lab.links.institution }}">HKUST</a> led by
    <a href="{{ lab.faculty_pi.url }}">Dr. Arpit Narechania</a>.
    We design novel, interactive tools and techniques that help people understand data and collaborate effectively with AI. Our current research focus is on:
  </p>
</div>

<section class="home-research" id="research">
  <div class="theme-grid">
    {% for theme in site.data.research %}
    <article class="theme-card theme-{{ theme.color }}">
      <h3>{{ theme.title }}</h3>
      <p>{{ theme.description }}</p>
      <div class="theme-projects">
        {% for project in theme.projects %}
        <a href="{{ project.url | relative_url }}">{{ project.label }}</a>
        {% endfor %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<div class="home-latest-grid">
  <section>
    <div class="home-section-heading">
      <h2>Recent publications</h2>
      <a class="see-all" href="{{ '/publications/' | relative_url }}">All publications →</a>
    </div>
    <div class="home-publications">
    {% assign recent_count = 0 %}
    {% for year_group in recent_years %}
      {% assign recent_venues = year_group.items | group_by: 'venue' | sort: 'name' %}
      {% for venue_group in recent_venues %}
        {% assign venue_publications = venue_group.items | sort: 'title' %}
        {% for pub in venue_publications %}
          {% if recent_count < 5 %}
      {% include publication-compact.html pub=pub %}
            {% assign recent_count = recent_count | plus: 1 %}
          {% endif %}
        {% endfor %}
      {% endfor %}
    {% endfor %}
    </div>
  </section>

  <section>
    <div class="home-section-heading">
      <h2>Recent news</h2>
      <a class="see-all" href="{{ '/news/' | relative_url }}">All news →</a>
    </div>
    {% assign shown_news = 0 %}
    {% assign prev_month = '' %}
    {% assign distinct_months = 0 %}
    {% for item in recent_news %}
      {% assign month_key = item.date | date: '%Y-%m' %}
      {% if month_key != prev_month %}
        {% assign distinct_months = distinct_months | plus: 1 %}
        {% if distinct_months > 3 %}{% break %}{% endif %}
        {% unless prev_month == '' %}</div></section>{% endunless %}
    <section class="news-month">
      <time class="news-month-label" datetime="{{ month_key }}">{{ item.date | date: "%b %Y" }}</time>
      <div class="news-month-items">
        {% assign prev_month = month_key %}
      {% endif %}
      {% include news-item.html item=item %}
      {% assign shown_news = shown_news | plus: 1 %}
    {% endfor %}
    {% if shown_news > 0 %}</div></section>{% endif %}
    {% if shown_news == 0 %}
    <p class="home-empty">No news yet.</p>
    {% endif %}
  </section>
</div>