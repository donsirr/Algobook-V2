---
title: Breadth-First Search
description: Traverse a graph level by level with a queue.
module: COMBINATORIAL PROBLEMS
order: 400
visualizationType: bfs-viz
---

# Breadth-First Search (BFS)

Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

### Key Characteristics
- Uses a **Queue** (First-In, First-Out) data structure.
- Finds the **shortest path** in unweighted graphs.
- Explores nodes layer by layer.

### Algorithm Steps
1. Push the root node into a queue.
2. Mark the root node as visited.
3. While the queue is not empty:
    - Dequeue a node and process it.
    - For each unvisited neighbor, mark it as visited and enqueue it.

### Complexity
- **Time Complexity**: $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity**: $O(V)$ to store the visited status and the queue.
