---
theme: page
title: タグ一覧
next: false
prev: false
---

<script setup>
// import { data as posts } from "../.vitepress/posts.data.js"
</script>

# タグ一覧

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>
