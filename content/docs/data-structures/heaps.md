---
title: Heap
description: A specialized tree-based data structure that satisfies the heap property.
module: DATA STRUCTURES
order: 700
visualizationType: heap-tree
---

# Heap Data Structure

A heap is a specialized tree-based data structure which is an almost complete tree that satisfies the heap property.

### Types of Heaps
1. **Max-Heap**: The key of the parent is greater than or equal to the keys of its children. The largest key is at the root.
2. **Min-Heap**: The key of the parent is less than or equal to the keys of its children. The smallest key is at the root.

### Operations
- **Insert**: $O(\log n)$
- **Extract Max/Min**: $O(\log n)$
- **Peek**: $O(1)$
- **Heapify**: $O(\log n)$

### Applications
- **Heapsort**: A sorting algorithm with $O(n \log n)$ complexity.
- **Priority Queues**: Efficiently managing elements with priorities.
- **Graph Algorithms**: Like Dijkstra's and Prim's.

### Array Representation
A heap can be efficiently represented as an array:
- Parent of index $i$ is at $\lfloor (i-1)/2 \rfloor$.
- Left child of index $i$ is at $2i + 1$.
- Right child of index $i$ is at $2i + 2$.
