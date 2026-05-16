# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2026-05-16

### Added
- **Bespoke Pedagogical Visualizations**: Replaced generic templates with context-aware interactive components for 20+ algorithms:
    - **Dynamic Programming**: Knapsack table filling, Coin-row decision flow, Change-making grid, and Coin-collecting robot path.
    - **Searching**: Functional Binary Search (halving logic) and Interpolation Search.
    - **Sorting**: Colorful, state-aware visualizers for Selection, Bubble, Insertion, Merge, and Quick Sort (using "Comparing", "Sorted", and "Pivot" indicators).
    - **Efficiency**: "Growth Curves" multi-line graph comparing complexity classes ($O(\log n)$ to $O(2^n)$).
    - **Graph Algorithms**: Distinct DFS/BFS traversals, DFS/BFS tree/back-edge classification, and Topological Sort (in-degree tracking).
    - **Greedy**: Huffman tree merging process.
- **Enhanced Documentation Content**: 
    - Expanded `Order of Growth` with a descriptive ranking table and efficiency icons.
    - Detailed `Efficiency Classes` with formal definitions and examples.
    - Concrete examples (Subset Sum) for `Exhaustive Search`.
- **Site-wide Quality Audit**: Verified every entry in `MODULES.md` for interactive functionality and context alignment.

### Fixed
- **LaTeX Consistency**: site-wide audit fixed broken math delimiters and character escaping in `string-matching.md`, `interpolation-search.md`, and `problem-reduction.md`.
- **Placeholder Cleanup**: Removed non-interactive visualization sections from conceptual pages where irrelevant (Welcome, Asymptotic Notations).

## [0.2.0] - 2026-05-16

### Added
- **Interactive Visualization Controls**: Replaced static examples with a fully interactable stepping system. 
    - Added "Next", "Previous", and "Reset" controls to all visualizations.
    - Implemented step-by-step logic for Euclid GCD, Sorting, Searching, BFS Traversal, MST construction, and Heap insertion.
    - Added progress tracking (e.g., "Step X of concept execution").
- **Full Curriculum Implementation**: Populated all major modules (INTRODUCTION, EFFICIENCY, SEARCHING, SORTING, etc.) with detailed descriptions and pseudocode.
- **Dynamic Visualization Engine**: Expanded `GraphRenderer` to support:
    - `sorting-animation` (Bar charts)
    - `search-animation` (Indexed arrays)
    - `graph-traversal` (Node-link diagrams)
    - `weighted-graph` (MST/Shortest path)
    - `heap-tree` (Tree structures)
    - `cartesian-comparison` (Complexity curves)
- **LaTeX Support**: Added `remark-math` and `rehype-katex` to render mathematical expressions ($O(n)$, etc.) correctly.

### Fixed
- **Math Formatting**: Resolved an issue where dollar signs were displayed instead of rendered math symbols.
- **File Encoding**: Fixed a UTF-16 encoding issue in batch-created documentation files that caused runtime errors.

## [0.1.0] - 2026-05-16

### Added
- **Initial Setup**: Next.js 16 with Tailwind CSS 4 and TypeScript.
- **Navigation System**: Persistent sidebar with ALL CAPS module headers and dynamic highlighting.
- **Core Documentation**: Implementation of Euclid's Algorithm as a hero lesson.
