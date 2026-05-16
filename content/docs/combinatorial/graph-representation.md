---
title: Adjacency Matrix and List
description: Representing graphs in memory.
module: COMBINATORIAL PROBLEMS
order: 440
visualizationType: matrix-list
---
# Adjacency Matrix and List

There are two common ways to represent a graph in a computer:

### 1. Adjacency Matrix
A 2D array of size  \times V$ where $ is the number of vertices. If [i][j]$ is 1, there is an edge from $ to $.

### 2. Adjacency List
An array of lists. The index of the array represents a vertex, and each element in its list represents the other vertices that form an edge with it.