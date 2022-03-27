---
layout: page
title: Categories
heading: Categories
permalink: /categories/
---


<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }} - </span>
      <span style="font-size: 16px;">
        <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
      </span>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>