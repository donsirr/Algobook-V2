---
title: Worst/Best/Average Case
description: Understanding the three scenarios of algorithm analysis.
module: EFFICIENCY
order: 150
---
# Worst, Best, and Average Case Analysis

When analyzing an algorithm, we consider three scenarios to characterize its performance:

### Worst Case — $C_{\text{worst}}(n)$
The **maximum** number of basic operations for any input of size $n$. This gives a guaranteed upper bound on the running time.

**Example**: In sequential search, the worst case occurs when the target is the last element or not present at all: $C_{\text{worst}}(n) = n$ comparisons.

### Best Case — $C_{\text{best}}(n)$
The **minimum** number of basic operations for any input of size $n$. This represents the most favorable input.

**Example**: In sequential search, the best case occurs when the target is the first element: $C_{\text{best}}(n) = 1$ comparison.

### Average Case — $C_{\text{avg}}(n)$
The **expected** number of basic operations over all possible inputs of size $n$, weighted by their probabilities.

**Example**: Assuming the target is equally likely to be at any position, the average case for sequential search is:
$$C_{\text{avg}}(n) = \frac{1 + 2 + \cdots + n}{n} = \frac{n+1}{2}$$

### Which case matters most?
In practice, **worst-case analysis** is the most commonly used because it provides a guaranteed performance bound with no assumptions about input distribution.