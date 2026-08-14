---
layout: page
title: News
permalink: /news/
---

<h1 class="visually-hidden">News</h1>

<div class="content-panel">
  <p class="lead">Follow us to know we're up to!</p>

  <div class="filter-panel filter-panel-compact" data-filter-root>
    <div class="filter-facets">
      <section><h2>Year</h2><div data-filter-facet="year"></div></section>
      <section><h2>Category</h2><div data-filter-facet="category"></div></section>
    </div>
    <div class="filter-toolbar">
      <label class="search-field">
        <span class="visually-hidden">Search news</span>
        <input type="search" data-filter-search placeholder="Search news…" autocomplete="off">
      </label>
      <div class="filter-status">
        <span data-filter-count></span>
        <button type="button" data-filter-clear hidden>Clear filters</button>
      </div>
    </div>
  </div>

  <div class="news-list" data-filter-list>
  {% assign news = site.data.news | sort: 'date' | reverse %}
  {% assign prev_month = '' %}
  {% for item in news %}
    {% assign month_key = item.date | date: '%Y-%m' %}
    {% if month_key != prev_month %}
      {% unless prev_month == '' %}</div></section>{% endunless %}
  <section class="news-month" data-filter-group>
    <time class="news-month-label" datetime="{{ month_key }}">{{ item.date | date: "%b %Y" }}</time>
    <div class="news-month-items">
      {% assign prev_month = month_key %}
    {% endif %}
      {% include news-item.html item=item %}
  {% endfor %}
  {% if news.size > 0 %}</div></section>{% endif %}
  </div>

  <p class="filter-empty" data-filter-empty hidden>No news items match those filters.</p>
</div>
