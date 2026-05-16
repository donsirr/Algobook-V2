---
title: Prim's Algorithm
description: A greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.
module: GREEDY ALGORITHMS
order: 900
visualizationType: weighted-graph
---

# Prim's Algorithm

Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized.

### How it works
1. Initialize a tree with a single vertex, chosen arbitrarily from the graph.
2. Grow the tree by one edge: of the edges that connect the tree to vertices not yet in the tree, find the minimum-weight edge, and transfer it to the tree.
3. Repeat step 2 until all vertices are in the tree.

### Complexity
- **Using adjacency matrix**: $O(V^2)$.
- **Using binary heap and adjacency list**: $O(E \log V)$.

### Pseudocode
```python
def prim(graph):
    # Initialize keys as infinite and parent as None
    key = [float('inf')] * V
    parent = [None] * V
    key[0] = 0
    mst_set = [False] * V

    for _ in range(V):
        u = min_key(key, mst_set)
        mst_set[u] = True
        for v in range(V):
            if graph[u][v] > 0 and not mst_set[v] and key[v] > graph[u][v]:
                key[v] = graph[u][v]
                parent[v] = u
```
