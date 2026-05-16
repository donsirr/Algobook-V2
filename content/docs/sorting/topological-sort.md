---
title: Topological Sorting
description: Linear ordering for Directed Acyclic Graphs (DAG).
module: SORTING
order: 340
visualizationType: topological-viz
---
# Topological Sorting

Topological sorting for a **Directed Acyclic Graph (DAG)** is a linear ordering of vertices such that for every directed edge $u \to v$, vertex $u$ comes before $v$ in the ordering.

### 🧩 The "Prerequisite" Analogy
Think of courses in a university. If Course A is a prerequisite for Course B, you must take A before B. A topological sort gives you a valid sequence to complete all courses.

### 🛠️ Algorithms
1. **Kahn's Algorithm**: Based on in-degrees of vertices. Repeatedly find a vertex with in-degree 0 and remove it.
2. **DFS-based Algorithm**: Perform a DFS and push vertices onto a stack as they finish. The reverse of the stack is the topological sort.

### 📝 Key Properties
- A topological sort is **not unique**.
- If the graph has a **cycle**, a topological sort is impossible.
- Time Complexity: $O(V + E)$.

### 🚀 Applications
- Instruction scheduling
- Build systems (e.g., Make, Webpack dependency resolution)
- Data serialization