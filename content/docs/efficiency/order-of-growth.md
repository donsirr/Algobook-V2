---
title: Order of Growth
description: Comparing how fast different functions grow.
module: EFFICIENCY
order: 140
visualizationType: growth-curves
---
# Order of Growth

Order of growth defines how the execution time increases as the input size grows. It is the most important concept for comparing algorithms.

### 📊 Ranking (Slowest to Fastest Growth)

| Rank | Notation | Name | Behaviour |
| :---: | :---: | :--- | :--- |
| 🟢 | $O(1)$ | Constant | Stays flat regardless of input |
| 🟢 | $O(\log n)$ | Logarithmic | Grows very slowly; halving each step |
| 🟡 | $O(n)$ | Linear | Grows proportionally to input |
| 🟡 | $O(n \log n)$ | Linearithmic | Slightly faster than linear |
| 🟠 | $O(n^2)$ | Quadratic | Nested loops over input |
| 🔴 | $O(2^n)$ | Exponential | Doubles with each added element |
| 🔴 | $O(n!)$ | Factorial | All permutations; grows astronomically |

### Practical Impact
For $n = 100$:
- $\log n \approx 7$
- $n = 100$
- $n \log n \approx 664$
- $n^2 = 10{,}000$
- $2^n \approx 1.27 \times 10^{30}$
- $n! \approx 9.33 \times 10^{157}$

The difference between polynomial and exponential growth is the boundary between **tractable** and **intractable** problems.