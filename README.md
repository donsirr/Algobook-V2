# Algobook

A Markdown-powered Next.js documentation platform for algorithms modules and class lessons.

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Edit lessons

Lessons live in `content/docs`. Add or edit `.md` files there:

```md
---
title: Binary Search
description: Find a target in sorted data by cutting the search space in half.
module: Searching
order: 20
difficulty: Beginner
duration: 30 min
---

# Binary Search

Lesson content goes here.
```

Required fields:

- `title`: Lesson title.
- `description`: Short summary used on cards and metadata.
- `module`: Sidebar/module group.
- `order`: Global sort order.

Optional fields:

- `difficulty`: Badge shown on the lesson page.
- `duration`: Estimated lesson length.

## Useful commands

```bash
npm run lint
npm run build
```
