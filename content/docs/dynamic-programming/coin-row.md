---
title: Coin-Row Problem
description: Picking non-adjacent coins for maximum value.
module: DYNAMIC PROGRAMMING
order: 810
visualizationType: coin-row-viz
---
# Coin-Row Problem

Given a row of $n$ coins with values $c_1, c_2, \ldots, c_n$, pick the maximum total value such that no two adjacent coins are selected.

### Recurrence
$$F(n) = \max(c_n + F(n-2), \; F(n-1))$$
$$F(0) = 0, \quad F(1) = c_1$$

### Example
Coins: [5, 1, 2, 10, 6, 2]
- $F(1) = 5$
- $F(2) = \max(1+0, 5) = 5$
- $F(3) = \max(2+5, 5) = 7$
- $F(4) = \max(10+5, 7) = 15$
- $F(5) = \max(6+7, 15) = 15$
- $F(6) = \max(2+15, 15) = 17$

**Answer**: 17 (select coins 5, 10, 2)

### Complexity
- **Time**: $O(n)$
- **Space**: $O(n)$