---
title: Interpolation Search
description: Searching in sorted data using value-based estimation.
module: SEARCHING
order: 230
visualizationType: interpolation-search
---
# Interpolation Search

Interpolation Search is an improvement over Binary Search for instances where the values in a sorted array are uniformly distributed.

### The Formula
 = low + \left\lfloor \frac{(target - arr[low]) \cdot (high - low)}{arr[high] - arr[low]} \right\rfloor$

### Efficiency
- **Average Case**: (\log \log n)$
- **Worst Case**: (n)$ (when distribution is highly non-uniform)