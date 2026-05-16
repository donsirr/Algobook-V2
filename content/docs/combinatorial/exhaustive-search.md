---
title: Exhaustive Search
description: A brute-force approach to combinatorial problems.
module: COMBINATORIAL PROBLEMS
order: 405
---
# Exhaustive Search

Exhaustive search is a brute-force approach to combinatorial problems. It generates **every possible candidate** solution and selects the one that satisfies all constraints.

### The Process
1. **Generate** every possible solution in the problem domain.
2. **Filter** out solutions that don't meet the constraints.
3. **Select** the optimal solution from the remaining valid candidates.

### Example: Subset Sum Problem
Given a set $S = \{3, 7, 1, 8, 4\}$ and target sum $T = 11$:

Exhaustively generate all $2^5 = 32$ subsets:
- $\{3\} = 3$ ✗
- $\{3, 7\} = 10$ ✗
- $\{3, 7, 1\} = 11$ ✓ **Found!**
- $\{3, 8\} = 11$ ✓
- ... and so on.

### When to use Exhaustive Search
- When the problem size is **small** enough that brute-force is feasible.
- When no known polynomial-time algorithm exists (e.g., NP-hard problems).
- As a **correctness baseline** to verify optimized algorithms.

### Complexity
Typically $O(2^n)$ or $O(n!)$ — exponential or factorial, making it impractical for large inputs.