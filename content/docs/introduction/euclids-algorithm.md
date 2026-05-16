---
title: Euclid's Algorithm
description: An efficient method for computing the Greatest Common Divisor (GCD) of two integers.
module: INTRODUCTION
order: 20
visualizationType: euclid-gcd
---

# Algorithm: Euclid's

Euclid's Algorithm is an efficient method for computing the Greatest Common Divisor (GCD) of two integers. It is one of the oldest algorithms in common use, appearing in Euclid's *Elements* around 300 BC.

### The Procedure
The algorithm works by repeatedly finding the remainder and reducing the problem size, until the remainder is zero. 

1. Given two numbers $a$ and $b$ ($a > b$).
2. Replace $a$ with $b$ and $b$ with $a \pmod b$.
3. Repeat until $b = 0$.
4. The value of $a$ is the GCD.

### Example Walkthrough
For inputs (48, 18): 
- $\text{GCD}(48, 18) = \text{GCD}(18, 12)$ since $48 \pmod{18} = 12$
- $\text{GCD}(18, 12) = \text{GCD}(12, 6)$ since $18 \pmod{12} = 6$
- $\text{GCD}(12, 6) = \text{GCD}(6, 0)$ since $12 \pmod 6 = 0$
- The last non-zero remainder, **6**, is the GCD.

### Pseudocode
```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```
