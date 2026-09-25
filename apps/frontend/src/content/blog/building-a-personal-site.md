---
title: Building a personal site that stays simple
description: A practical approach to choosing tools, defining constraints, and shipping a site you can maintain.
publishDate: 2026-01-18
category: Tech
readTime: 8
author: Jayden Thomson
featured: true
---

## Start with the reason

A personal site works best when it has a clear job. It might be a place to publish notes, document projects, or simply own a small corner of the internet. That purpose should guide every technical choice.

When the goal is publishing, **simple and dependable** usually beats clever. A static site keeps the moving parts small while still leaving room for thoughtful design.

## Choose constraints on purpose

The tools are less important than the boundaries around them. For this site, content lives in Markdown and the interface is built from reusable components.

```ts
const principles = ["fast", "readable", "maintainable"]
console.log(principles.join(", "))
```

That setup makes each post portable, reviewable, and easy to edit without a database or admin dashboard.

## Leave room to grow

Starting small does not mean painting yourself into a corner. Typed frontmatter, predictable routes, and composable page sections provide enough structure for search, feeds, and richer media later.

The best foundation is one that supports today’s writing without demanding tomorrow’s complexity.
