---
title: Interpolation Search
description: Searching in sorted data using value-based estimation.
module: SEARCHING
order: 230
visualizationType: interpolation-search
---
# Interpolation Search

Interpolation Search is an improvement over Binary Search for instances where the values in a sorted array are **uniformly distributed**. Instead of always going to the middle, it estimates the target's position based on its value.

### The Formula
$$pos = low + \left\lfloor \frac{(target - arr[low]) \cdot (high - low)}{arr[high] - arr[low]} \right\rfloor$$

### How it differs from Binary Search
- **Binary Search** always checks the middle: $mid = \lfloor (low + high) / 2 \rfloor$
- **Interpolation Search** estimates a position proportional to the target's value within the range.

### Efficiency
- **Average Case**: $O(\log \log n)$ for uniformly distributed data
- **Worst Case**: $O(n)$ when distribution is highly non-uniform