---
title: Problem Reduction
description: Reducing one problem to another known problem.
module: DATA STRUCTURES
order: 730
---
# Problem Reduction

Problem reduction is a strategy where we transform a problem we want to solve into another problem for which an efficient algorithm already exists.

### Classic Example: LCM via GCD
$$\text{LCM}(m, n) = \frac{m \cdot n}{\text{GCD}(m, n)}$$

Instead of computing LCM directly (which is harder), we **reduce** it to computing GCD (which Euclid's algorithm solves efficiently in $O(\log \min(m, n))$).

### Other Examples
- **Counting**: Reduce to sorting, then scan for duplicates.
- **Shortest Path**: Reduce a single-pair shortest path to the single-source problem (Dijkstra's).
- **Linear Programming**: Many optimization problems can be reduced to LP.

### Why it matters
If you can reduce Problem A to Problem B, and Problem B has a known efficient solution, then Problem A is at most as hard as Problem B.