---
title: Depth-First Search
description: Exploring as far as possible before backtracking.
module: COMBINATORIAL PROBLEMS
order: 410
visualizationType: graph-traversal
---
# Depth-First Search (DFS)

Depth-First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.

### Algorithm
```
DFS(G, v):
    mark v as visited
    for each neighbor w of v:
        if w is not visited:
            DFS(G, w)
```

### How It Works
1. Start at a chosen node.
2. Explore an unvisited neighbor.
3. Repeat step 2 from the new node.
4. If no unvisited neighbors remain, backtrack to the previous node.
5. Continue until all reachable nodes have been visited.

### Applications
- Cycle detection
- Topological sorting
- Finding connected components
- Solving mazes

### Complexity
- **Time**: $O(V + E)$ where V = vertices, E = edges
- **Space**: $O(V)$ for the visited set