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
      <section><h2>Visard</h2><div data-filter-facet="lab"></div></section>
      <section><h2>Collaborator</h2><div data-filter-facet="collaborators"></div></section>
      <section><h2>Research area</h2><div data-filter-facet="tags"></div></section>
      <section><h2>Type</h2><div data-filter-facet="type"></div></section>
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

  {% assign year_pubs = site.publications | where: 'year', year | sort: 'title' %}
  {% assign year_pubs = year_pubs | sort: 'month' | reverse %}
  {% for pub in year_pubs %}
  {% include publication-item.html pub=pub %}
  {% endfor %}

  </section>
  {% endfor %}
  </div>

  <p class="filter-empty" data-filter-empty hidden>No publications match those filters.</p>
</div>
