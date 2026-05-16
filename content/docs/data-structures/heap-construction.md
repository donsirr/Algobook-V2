---
title: Heap Construction
description: Building a heap from an unsorted array.
module: DATA STRUCTURES
order: 710
visualizationType: heap-tree
---
# Heap Construction

A heap can be constructed from an unordered array in $O(n)$ time using the bottom-up approach.

### Bottom-Up Heap Construction
1. Start from the last internal node (index $\lfloor n/2 \rfloor - 1$).
2. Apply heapify (sift-down) to each node going backwards.
3. Each node is pushed down to its correct position.

### Why $O(n)$ and not $O(n \log n)$?
Most nodes are near the bottom of the tree and need very few swaps. The sum of work across all levels is bounded by $O(n)$.

### Pseudocode
```
HeapBottomUp(H[1..n]):
    for i = floor(n/2) downto 1:
        k = i
        v = H[k]
        heap = false
        while not heap and 2*k <= n:
            j = 2*k
            if j < n and H[j] < H[j+1]:
                j = j + 1
            if v >= H[j]:
                heap = true
            else:
                H[k] = H[j]
                k = j
        H[k] = v
```