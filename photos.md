---
layout: page
title: Photos
permalink: /photos/
---

<h1 class="visually-hidden">Photos</h1>

<p class="lead">Get a glimpse of the life in and around the lab.</p>

{% assign gallery = site.data.gallery | sort: 'date' | reverse %}
{% if gallery.size > 0 %}
{% assign first = gallery.first %}
<div class="photo-carousel" data-photo-carousel data-autoplay="6000">
  <div class="photo-carousel-main">
    <div class="photo-carousel-stage">
      <button class="photo-carousel-nav photo-carousel-prev" type="button" data-carousel-prev aria-label="Previous photo">‹</button>
      <figure class="photo-carousel-frame">
        <img data-carousel-image src="{{ first.src | relative_url }}" alt="{{ first.alt | escape }}" loading="eager">
        <figcaption data-carousel-caption>{{ first.caption }}</figcaption>
      </figure>
      <button class="photo-carousel-nav photo-carousel-next" type="button" data-carousel-next aria-label="Next photo">›</button>
    </div>
    <div class="photo-carousel-thumbs" data-carousel-thumbs>
      {% for photo in gallery %}
      <button
        class="photo-carousel-thumb{% if forloop.first %} is-active{% endif %}"
        type="button"
        data-carousel-thumb
        data-src="{{ photo.src | relative_url }}"
        data-alt="{{ photo.alt | escape }}"
        data-caption="{{ photo.caption | escape }}"
        aria-label="Show photo {{ forloop.index }}"
      >
        <img src="{{ photo.src | relative_url }}" alt="" loading="lazy">
      </button>
      {% endfor %}
    </div>
  </div>
</div>
{% else %}
<p>Photos coming soon.</p>
{% endif %}
