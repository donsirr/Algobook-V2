---
title: Breadth-First Search
description: Traverse a graph level by level with a queue.
module: Graphs
order: 40
difficulty: Intermediate
duration: 35 min
---

# Breadth-First Search

Breadth-first search explores a graph in waves. It visits all immediate neighbors before moving farther away from the starting node.

## When to use BFS

BFS is useful when you need the shortest path in an unweighted graph, level-order traversal, or all nodes reachable from a start node.

## Queue-based traversal

```js
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return order;
}
```

## Example graph

```js
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};
```

Starting from `A`, BFS visits `A`, then `B` and `C`, then `D`, `E`, and `F`.

## Complexity

| Representation | Time | Space |
| --- | --- | --- |
| Adjacency list | O(V + E) | O(V) |

`V` is the number of vertices. `E` is the number of edges. Each vertex is queued at most once, and every adjacency list is inspected.
