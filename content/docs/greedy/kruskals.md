---
title: Kruskal's Algorithm
description: Greedy MST using sorted edges.
module: GREEDY ALGORITHMS
order: 910
visualizationType: weighted-graph
---
# Kruskal's Algorithm

Kruskal's algorithm finds a Minimum Spanning Tree (MST) by greedily adding the shortest edge that doesn't create a cycle.

### Algorithm
1. Sort all edges by weight (ascending).
2. For each edge (in sorted order):
   - If adding it doesn't create a cycle, add it to the MST.
   - Use **Union-Find** to efficiently detect cycles.
3. Stop when the MST has $V - 1$ edges.

### Pseudocode
```
Kruskal(G):
    sort edges of G by weight
    MST = {}
    for each edge (u, v, w) in sorted order:
        if Find(u) != Find(v):
            MST = MST ∪ {(u, v)}
            Union(u, v)
    return MST
```

### Difference from Prim's
- **Prim's** grows a single tree from a starting node.
- **Kruskal's** grows a forest that eventually merges into one tree.

### Complexity
- **Time**: $O(E \log E)$ (dominated by sorting edges)
- **Space**: $O(V)$ for Union-Find