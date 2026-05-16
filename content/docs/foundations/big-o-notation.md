---
title: Big O Notation
description: Describe how runtime and memory grow as input size increases.
module: Foundations
order: 10
difficulty: Beginner
duration: 25 min
---

# Big O Notation

Big O notation describes the growth rate of an algorithm as the input size gets larger. It does not predict exact seconds. It helps compare approaches.

## Core idea

When analyzing an algorithm, focus on the dominant term and ignore constants.

```txt
3n + 12      -> O(n)
4n^2 + n    -> O(n^2)
log2(n) + 7 -> O(log n)
```

## Common growth rates

| Complexity | Name | Example |
| --- | --- | --- |
| O(1) | Constant | Read an array index |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Scan an array |
| O(n log n) | Linearithmic | Merge sort |
| O(n^2) | Quadratic | Nested pair comparison |

## Example

This loop runs once for every item in the input array:

```js
for (const value of numbers) {
  console.log(value);
}
```

If the array has `n` values, the runtime grows linearly. The complexity is `O(n)`.

## Practice

Identify the complexity of this snippet:

```js
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], numbers[j]);
  }
}
```

The outer loop runs `n` times. For each outer iteration, the inner loop also runs `n` times. Total work is `n * n`, so the complexity is `O(n^2)`.
