---
title: Knapsack Problem
description: Solving the optimization problem of filling a knapsack with maximum value.
module: DYNAMIC PROGRAMMING
order: 800
visualizationType: knapsack-viz
---

# Knapsack Problem (0/1)

The 0/1 Knapsack Problem is a classic optimization problem. Given a set of items, each with a weight and a value, determine the items to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

### Dynamic Programming Approach
We define a table $DP[i][w]$ representing the maximum value that can be attained with weight less than or equal to $w$ using items up to $i$.

### Recurrence Relation
$DP[i][w] = \max(DP[i-1][w], \text{value}_i + DP[i-1][w - \text{weight}_i])$ if $w \ge \text{weight}_i$.

### Complexity
- **Time Complexity**: $O(n \cdot W)$, where $n$ is the number of items and $W$ is the maximum capacity.
- **Space Complexity**: $O(n \cdot W)$ (can be optimized to $O(W)$).

### Pseudocode
```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]
```
