---
title: Efficiency Classes
description: The standard hierarchy of algorithm complexity classes.
module: EFFICIENCY
order: 190
---
# Efficiency Classes

Algorithms are classified into standard efficiency classes based on their order of growth. Understanding these classes helps you quickly assess whether an algorithm is practical for large inputs.

| Class | Notation | Name | Practical? | Example Algorithm |
| :---: | :---: | :--- | :---: | :--- |
| 1 | $O(1)$ | Constant | ✅ | Array access, hash lookup |
| 2 | $O(\log n)$ | Logarithmic | ✅ | Binary search |
| 3 | $O(n)$ | Linear | ✅ | Sequential search |
| 4 | $O(n \log n)$ | Linearithmic | ✅ | Merge sort, heap sort |
| 5 | $O(n^2)$ | Quadratic | ⚠️ | Bubble sort, selection sort |
| 6 | $O(n^3)$ | Cubic | ⚠️ | Matrix multiplication (naive) |
| 7 | $O(2^n)$ | Exponential | ❌ | Recursive Fibonacci, subset enumeration |
| 8 | $O(n!)$ | Factorial | ❌ | Brute-force TSP, permutations |

### Key Insight
The boundary between **practical** and **impractical** is roughly at $O(n^2)$ to $O(n^3)$. Algorithms with exponential or factorial growth are intractable for all but the smallest inputs.

### Growth Comparison (for $n = 1{,}000{,}000$)
- $\log n \approx 20$ operations
- $n = 1{,}000{,}000$ operations
- $n \log n \approx 20{,}000{,}000$ operations
- $n^2 = 10^{12}$ operations (~16 minutes)
- $2^n$: more operations than atoms in the universe