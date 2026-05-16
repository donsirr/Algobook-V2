---
title: Consecutive Integer Check Algorithm
description: An algorithm to find GCD by checking consecutive integers.
module: INTRODUCTION
order: 30
visualizationType: consecutive-integer-check
---
# Consecutive Integer Check Algorithm

This is a brute-force approach to finding the Greatest Common Divisor (GCD) of two integers $m$ and $n$.

### Algorithm
1. Assign $t = \min(m, n)$.
2. Divide $m$ by $t$. If the remainder is 0, proceed to step 3; otherwise, go to step 4.
3. Divide $n$ by $t$. If the remainder is 0, return $t$ as the GCD; otherwise, go to step 4.
4. Decrease $t$ by 1. Go to step 2.

### Complexity
The algorithm's complexity is $O(\min(m, n))$, making it much slower than Euclid's algorithm for large numbers.
