# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-05-16

### Added
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
