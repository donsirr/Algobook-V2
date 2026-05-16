---
title: Sequential Search
description: A basic search algorithm that checks every element in a list.
module: SEARCHING
order: 200
visualizationType: search-animation
---

# Sequential Search

Sequential search, also known as linear search, is the simplest searching algorithm. It starts at the beginning of the list and checks each element one by one until a match is found or the end of the list is reached.

### Algorithm Steps
1. Start from the first element (index 0).
2. Compare the current element with the target value.
3. If the element matches the target, return the index.
4. If not, move to the next element.
5. Repeat until a match is found or the end of the list is reached.

### Complexity
- **Worst Case**: $O(n)$ - The target is at the very end or not present at all.
- **Best Case**: $O(1)$ - The target is the first element.
- **Average Case**: $O(n/2) \approx O(n)$.

### Pseudocode
```python
def sequential_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```
