---
title: Binary Search
description: Find a target in sorted data by cutting the search space in half.
module: Searching
order: 20
difficulty: Beginner
duration: 30 min
---

# Binary Search

Binary search locates a target value inside sorted data. Instead of checking every element, it repeatedly inspects the middle and discards the half that cannot contain the target.

## Preconditions

The input must be sorted. If the data is unsorted, binary search does not know which half is safe to discard.

## Algorithm

1. Set `left` to the first index.
2. Set `right` to the last index.
3. While `left <= right`, inspect the middle index.
4. If the middle value is the target, return the index.
5. If the middle value is too small, move `left` after the middle.
6. If the middle value is too large, move `right` before the middle.

```js
function binarySearch(values, target) {
  let left = 0;
  let right = values.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (values[middle] === target) {
      return middle;
    }

    if (values[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
```

## Complexity

| Case | Complexity |
| --- | --- |
| Time | O(log n) |
| Space | O(1) |

Every comparison halves the remaining search range. That is why the runtime is logarithmic.

## Common mistake

Do not update `left = middle` or `right = middle`. If the range has two values, the algorithm can get stuck forever. Move past the middle with `middle + 1` or `middle - 1`.
