---
title: Dijkstra's Algorithm
description: Single-source shortest path in weighted graphs.
module: GREEDY ALGORITHMS
order: 920
visualizationType: weighted-graph
---
# Dijkstra's Algorithm

Dijkstra's algorithm finds the shortest path from a single source vertex to all other vertices in a weighted graph with **non-negative** edge weights.

### Algorithm
1. Set distance to source = 0, all others = ∞.
2. Add source to a priority queue.
3. Extract the vertex $u$ with the smallest distance.
4. For each neighbor $v$ of $u$:
   - If $dist[u] + weight(u,v) < dist[v]$, update $dist[v]$.
5. Repeat until the queue is empty.

### Pseudocode
```
Dijkstra(G, source):
    dist[source] = 0
    for each vertex v ≠ source:
        dist[v] = ∞
    PQ = {all vertices}
    while PQ is not empty:
        u = extractMin(PQ)
        for each neighbor v of u:
            if dist[u] + w(u,v) < dist[v]:
                dist[v] = dist[u] + w(u,v)
```

### Limitation
Dijkstra's does **not** work with negative edge weights. For that, use the Bellman-Ford algorithm.

### Complexity
- **Time**: $O((V + E) \log V)$ with a binary heap
- **Space**: $O(V)$