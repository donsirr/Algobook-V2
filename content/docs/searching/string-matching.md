---
title: Brute-Force String Machine
description: Simple pattern matching by sliding the pattern.
module: SEARCHING
order: 220
visualizationType: string-match
---
# Brute-Force String Matching

The brute-force string matching algorithm slides the pattern over the text one character at a time and checks for a match at each position.

### Algorithm
1. Align the pattern with the beginning of the text.
2. Compare characters from left to right.
3. If a mismatch occurs, shift the pattern one position to the right and repeat.

### Pseudocode
```
BruteForceStringMatch(T[0..n-1], P[0..m-1]):
    for i = 0 to n - m:
        j = 0
        while j < m and P[j] == T[i+j]:
            j = j + 1
        if j == m:
            return i    // match found at index i
    return -1           // no match
```

### Complexity
- **Worst Case**: $O(n \cdot m)$, where $n$ is text length and $m$ is pattern length.
- **Best Case**: $O(n)$, when mismatches occur at the first character.