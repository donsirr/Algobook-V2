---
title: Selection Sort
description: A simple sorting algorithm that repeatedly finds the minimum element.
module: SORTING
order: 300
visualizationType: sorting-animation
---

# Selection Sort

Selection sort is an in-place comparison-based sorting algorithm. It works by dividing the input list into two parts: a sorted sublist of items which is built up from left to right, and a sublist of the remaining unsorted items.

### How it works
1. Find the smallest element in the unsorted part.
2. Swap it with the first element of the unsorted part.
3. Move the boundary between sorted and unsorted one element to the right.
4. Repeat until the entire list is sorted.

### Efficiency
- **Time Complexity**: $O(n^2)$ for all cases (best, worst, and average), because of the nested loops.
- **Space Complexity**: $O(1)$ because it sorts the array in-place.

### Pseudocode
```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
```
