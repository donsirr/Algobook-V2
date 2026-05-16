---
title: Asymptotic Notations
description: Big O, Big Omega, and Big Theta explained.
module: EFFICIENCY
order: 160
---
# Asymptotic Notations

Asymptotic notations are mathematical tools used to describe the running time of algorithms as the input size grows toward infinity.

### Big O — $O(g(n))$ — Upper Bound
A function $f(n)$ is $O(g(n))$ if there exist positive constants $c$ and $n_0$ such that:
$$0 \le f(n) \le c \cdot g(n) \quad \text{for all } n \ge n_0$$

**Interpretation**: $f(n)$ grows **no faster than** $g(n)$. It describes the worst-case scenario.

**Example**: $3n + 5 = O(n)$ because for $c = 4$ and $n_0 = 5$, $3n + 5 \le 4n$.

### Big Omega — $\Omega(g(n))$ — Lower Bound
A function $f(n)$ is $\Omega(g(n))$ if there exist positive constants $c$ and $n_0$ such that:
$$f(n) \ge c \cdot g(n) \ge 0 \quad \text{for all } n \ge n_0$$

**Interpretation**: $f(n)$ grows **at least as fast as** $g(n)$. It describes the best-case scenario.

### Big Theta — $\Theta(g(n))$ — Tight Bound
A function $f(n)$ is $\Theta(g(n))$ if:
$$c_1 \cdot g(n) \le f(n) \le c_2 \cdot g(n) \quad \text{for all } n \ge n_0$$

**Interpretation**: $f(n)$ grows **at the same rate as** $g(n)$. This is the most precise characterization.

### Relationship
$$f(n) = \Theta(g(n)) \iff f(n) = O(g(n)) \text{ and } f(n) = \Omega(g(n))$$