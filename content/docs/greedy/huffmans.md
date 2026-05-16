---
title: Huffman's Algorithm
description: Optimal prefix codes for data compression.
module: GREEDY ALGORITHMS
order: 930
visualizationType: heap-tree
---
# Huffman's Algorithm

Huffman coding is a lossless data compression algorithm that assigns variable-length codes to characters based on their frequency — more frequent characters get shorter codes.

### Algorithm
1. Create a leaf node for each character with its frequency.
2. Insert all nodes into a min-priority queue.
3. While there is more than one node in the queue:
   - Extract the two nodes with the lowest frequency.
   - Create a new internal node with these two as children and frequency = sum of both.
   - Insert the new node into the queue.
4. The remaining node is the root of the Huffman tree.

### Example
Characters: A(5), B(9), C(12), D(13), E(16), F(45)

The resulting Huffman tree assigns:
- F: `0` (1 bit — most frequent)
- C: `100` (3 bits)
- D: `101` (3 bits)
- A: `1100` (4 bits — least frequent)
- B: `1101` (4 bits)
- E: `111` (3 bits)

### Optimality
Huffman coding produces the optimal prefix-free code for a given set of character frequencies.

### Complexity
- **Time**: $O(n \log n)$ where $n$ = number of unique characters
- **Space**: $O(n)$