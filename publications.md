---
layout: page
title: Publications
permalink: /publications/
---

<h1 class="visually-hidden">Publications</h1>

<div class="content-panel">
  <p class="lead">Read and share our scientific contributions.</p>

  <div class="filter-panel" data-filter-root>
    <div class="filter-facets">
      <section><h2>Year</h2><div data-filter-facet="year"></div></section>
      <section><h2>Venue</h2><div data-filter-facet="venue"></div></section>
      <section><h2>Author</h2><div data-filter-facet="authors"></div></section>
      <section><h2>Research area</h2><div data-filter-facet="tags"></div></section>
      <section><h2>Award &amp; Recognition</h2><div data-filter-facet="recognitions"></div></section>
    </div>
    <div class="filter-toolbar">
      <label class="search-field">
        <span class="visually-hidden">Search publications</span>
        <input type="search" data-filter-search placeholder="Title, author, venue, research area…" autocomplete="off">
      </label>
      <div class="filter-status">
        <span data-filter-count></span>
        <button type="button" data-filter-clear hidden>Clear filters</button>
      </div>
    </div>
  </div>

  <div data-filter-list>

  {% assign years = site.publications | map: 'year' | uniq | sort | reverse %}

  {% for year in years %}
  <section class="publication-year" data-filter-group>
  <h2>{{ year }}</h2>

  {% assign year_pubs = site.publications | where: 'year', year %}
  {% assign venue_groups = year_pubs | group_by: 'venue' | sort: 'name' %}
  {% for venue_group in venue_groups %}
  {% assign venue_pubs = venue_group.items | sort: 'title' %}
  {% for pub in venue_pubs %}
  {% include publication-item.html pub=pub %}
  {% endfor %}
  {% endfor %}

  </section>
  {% endfor %}
  </div>

  <p class="filter-empty" data-filter-empty hidden>No publications match those filters.</p>
</div>
