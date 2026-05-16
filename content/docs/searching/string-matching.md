---
title: Brute-Force String Machine
description: Simple pattern matching by sliding the pattern.
module: SEARCHING
order: 220
visualizationType: string-match
---
# Brute-Force String Machine

The brute-force string matching algorithm slides the pattern over the text one character at a time and checks for a match.

### Algorithm
1. Align the pattern with the beginning of the text.
2. Compare characters from left to right.
3. If a mismatch occurs, shift the pattern one position to the right and repeat.

### Complexity
- **Worst Case**: (n \cdot m)$, where $ is text length and $ is pattern length.