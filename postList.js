---
theme: page
title: ブログ記事一覧
next: false
prev: false
---

<script setup>
import { data as posts } from "../.vitepress/theme/posts.data.ts"
</script>

# ブログ記事一覧

<ul>
  <li v-for="post of posts">
    <a :href="'/shincode_blog_with_vitepress' + post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>
