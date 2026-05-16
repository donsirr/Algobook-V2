---
title: Order of Growth
description: Comparing how fast different functions grow as n increases.
module: EFFICIENCY
order: 140
visualizationType: growth-curves
---
# Order of Growth

Order of growth defines how the execution time increases as the input size grows. It is the most important concept for comparing algorithms.

### 📊 Ranking (Slowest to Fastest Growth)

| Icon | Notation | Name | Behavior |
| :---: | :---: | :--- | :--- |
| 🟢 | $1$ | Constant | Time stays the same regardless of input size. |
| 🟢 | $\log n$ | Logarithmic | Time increases very slowly (e.g., doubling $n$ adds 1 step). |
| 🟡 | $n$ | Linear | Time increases proportionally to input size. |
| 🟡 | $n \log n$ | Linearithmic | Standard for efficient sorting algorithms. |
| 🟠 | $n^2$ | Quadratic | Time increases with the square of the input (nested loops). |
| 🔴 | $2^n$ | Exponential | Time doubles with each additional element (intractable). |
| 🔴 | $n!$ | Factorial | Grows astronomically (permutations). |

### 🚀 Why it Matters
As $n$ becomes large, the higher-order term dominates. An $O(n^2)$ algorithm might be faster than $O(n)$ for $n=2$, but it will be vastly slower for $n=1,000,000$.

The goal of algorithm design is often to move a solution from a higher growth class (like $O(2^n)$) to a lower one (like $O(n^2)$ or $O(n)$).