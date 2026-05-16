---
title: Big O Notation
description: Understanding the asymptotic upper bound of algorithm complexity.
module: EFFICIENCY
order: 100
visualizationType: growth-curves
---

# Big O Notation

Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards infinity. In computer science, it classifies algorithms by how their run time or space requirements grow as the input size grows.

### Why use Big O?
It allows us to compare the efficiency of different algorithms in a way that is independent of hardware or specific implementation details.

### Common Complexity Classes
| Notation | Name | Example |
| :--- | :--- | :--- |
| $O(1)$ | Constant | Accessing an array element |
| $O(\log n)$ | Logarithmic | Binary search |
| $O(n)$ | Linear | Sequential search |
| $O(n \log n)$ | Linearithmic | Mergesort |
| $O(n^2)$ | Quadratic | Bubble sort |
| $O(2^n)$ | Exponential | Recursive Fibonacci |

### Formal Definition
$f(n) = O(g(n))$ if there exist positive constants $c$ and $n_0$ such that $0 \le f(n) \le c \cdot g(n)$ for all $n \ge n_0$.
