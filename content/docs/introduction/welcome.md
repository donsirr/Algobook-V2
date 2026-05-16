---
title: Welcome to Algobook
description: Learn how the course is organized and how to use the Markdown lesson files.
module: Introduction
order: 1
difficulty: Starter
duration: 8 min
---

# Welcome to Algobook

Algobook is a documentation platform for algorithm classes. Each lesson is a Markdown file in `content/docs`, so the syllabus can grow without changing the Next.js UI.

## How to edit lessons

Open any `.md` file inside `content/docs` and update the frontmatter plus lesson body.

```md
---
title: Binary Search
description: Locate a value by repeatedly halving a sorted range.
module: Searching
order: 20
difficulty: Beginner
duration: 20 min
---
```

The `module` field controls the sidebar group. The `order` field controls where the lesson appears in the course map.

## Recommended lesson shape

Use this structure for algorithm lessons:

1. Define the problem.
2. Explain the core idea.
3. Walk through an example.
4. Give pseudocode.
5. Analyze time and space complexity.
6. Add practice prompts.

> Keep each lesson focused. A clear explanation plus two good examples is usually stronger than a long wall of theory.

## Markdown support

The renderer supports headings, tables, lists, blockquotes, inline code, fenced code blocks, and GitHub-flavored Markdown tables.

| Feature | Use |
| --- | --- |
| Frontmatter | Lesson metadata |
| Headings | Page sections and anchors |
| Code blocks | Pseudocode or implementation |
| Tables | Complexity summaries |
