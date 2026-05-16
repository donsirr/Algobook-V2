---
title: Change-making Problem
description: Minimum coins to make a given amount.
module: DYNAMIC PROGRAMMING
order: 820
visualizationType: change-making-viz
---
# Change-Making Problem

Given coin denominations $d_1, d_2, \ldots, d_m$ and a target amount $n$, find the minimum number of coins needed to make change for $n$.

### Recurrence
$$F(n) = \min_{j: d_j \le n} \{ F(n - d_j) \} + 1$$
$$F(0) = 0$$

### Example
Denominations: {1, 3, 4}, Amount: 6
- $F(0) = 0$
- $F(1) = 1$ (use 1)
- $F(2) = 2$ (use 1+1)
- $F(3) = 1$ (use 3)
- $F(4) = 1$ (use 4)
- $F(5) = 2$ (use 1+4)
- $F(6) = 2$ (use 3+3)

**Answer**: 2 coins

### Complexity
- **Time**: $O(n \cdot m)$
- **Space**: $O(n)$