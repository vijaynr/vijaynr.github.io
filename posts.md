---
layout: page
title: Posts
heading: Posts
permalink: /posts/
order: 2
---

<div class="home">
  {%- if site.posts.size > 0 -%}
    <ul class="post-list">
      {%- for post in site.posts -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }} - </span>
         <span style="font-size: 16px;">
            <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
        </span>
      </li>
      {%- endfor -%}
    </ul>
  {%- endif -%}
</div>