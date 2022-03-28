---
layout: page
title: Projects
heading: Projects
permalink: /projects/
order: 1
---

<div class="home">
    {%- if site.projects.size > 0 -%}
        <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
        <ul class="post-list">
        {%- for project in site.projects -%}
        <li>
            {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
            <span class="post-meta">{{ project.date | date: date_format }}</span>
            <h3>
            <a class="post-link" href="{{ project.url | relative_url }}">
                {{ project.title | escape }}
            </a>
            </h3>
            {%- if site.show_excerpts -%}
                {{ project.description | escape}}
            {%- endif -%}
        </li>
        {%- endfor -%}
        </ul>
    {%- endif -%}
</div>