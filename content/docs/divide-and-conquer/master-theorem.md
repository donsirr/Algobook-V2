---
title: Master Theorem
description: Solving recurrences for divide-and-conquer algorithms.
module: DIVIDE AND CONQUER
order: 610
---
# Master Theorem

The Master Theorem provides a cookbook solution for recurrences of the form:
(n) = aT(n/b) + f(n)$

### Cases
1. If (n) = O(n^c)$ where  < \log_b a$, then (n) = \Theta(n^{\log_b a})$.
2. If (n) = \Theta(n^c)$ where  = \log_b a$, then (n) = \Theta(n^c \log n)$.
3. If (n) = \Omega(n^c)$ where  > \log_b a$, then (n) = \Theta(f(n))$.