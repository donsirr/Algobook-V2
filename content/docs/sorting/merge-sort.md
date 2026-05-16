---
title: Merge Sort
description: Sort an array by splitting it into halves and merging sorted subarrays.
module: Sorting
order: 30
difficulty: Intermediate
duration: 40 min
---

# Merge Sort

Merge sort is a divide-and-conquer sorting algorithm. It divides the array until each subarray is trivially sorted, then merges those sorted pieces back together.

## Core idea

A single-item array is already sorted. If you can merge two sorted arrays, you can sort a larger array by recursively sorting both halves first.

```txt
[8, 3, 5, 1]
split -> [8, 3] and [5, 1]
split -> [8], [3], [5], [1]
merge -> [3, 8] and [1, 5]
merge -> [1, 3, 5, 8]
```

## Pseudocode

```txt
mergeSort(array):
  if array length <= 1:
    return array

  left = mergeSort(first half)
  right = mergeSort(second half)

  return merge(left, right)
```

## JavaScript example

```js
function mergeSort(values) {
  if (values.length <= 1) {
    return values;
  }

  const middle = Math.floor(values.length / 2);
  const left = mergeSort(values.slice(0, middle));
  const right = mergeSort(values.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i++]);
    } else {
      sorted.push(right[j++]);
    }
  }

  return sorted.concat(left.slice(i), right.slice(j));
}
```

## Complexity

Merge sort performs `log n` levels of splitting. At each level, merging touches all `n` elements.

| Case | Complexity |
| --- | --- |
| Time | O(n log n) |
| Space | O(n) |
