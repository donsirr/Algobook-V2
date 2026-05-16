---
title: Coin-Collecting Problem
description: Collecting maximum coins on a grid path.
module: DYNAMIC PROGRAMMING
order: 830
visualizationType: linear-flow
---
# Coin-Collecting Problem

A robot starts at the top-left of an $n \times m$ grid. Some cells contain coins. The robot can only move **right** or **down**. Find the path that collects the maximum number of coins.

### Recurrence
$$F(i,j) = \max(F(i-1,j),\; F(i,j-1)) + c_{ij}$$

where $c_{ij}$ = 1 if cell (i,j) has a coin, 0 otherwise.

### Base Cases
- $F(0, j) = F(0, j-1) + c_{0j}$
- $F(i, 0) = F(i-1, 0) + c_{i0}$

### Complexity
- **Time**: $O(n \cdot m)$
- **Space**: $O(n \cdot m)$