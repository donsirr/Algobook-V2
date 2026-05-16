"use client";

import React, { useState } from "react";

export interface GraphRendererProps {
  type?: string;
}

export function GraphRenderer({ type }: GraphRendererProps) {
  const [step, setStep] = useState(0);

  if (!type) return null;

  const handleNext = (maxSteps: number) => {
    setStep((s) => Math.min(s + 1, maxSteps));
  };

  const handlePrev = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Interactive Visualization
          </h3>
          <p className="mt-1 text-[10px] font-medium text-teal-600 uppercase tracking-tight">
            Step {step + 1} of concept execution
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <button
              onClick={handlePrev}
              disabled={step === 0}
              className="flex h-10 w-10 items-center justify-center transition hover:bg-gray-50 disabled:opacity-30"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-[1px] bg-gray-100"></div>
            <button
              onClick={handleReset}
              className="px-4 text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:bg-gray-50 transition"
            >
              Reset
            </button>
            <div className="w-[1px] bg-gray-100"></div>
            <button
              onClick={() => handleNext(10)} 
              className="flex h-10 w-10 items-center justify-center transition hover:bg-gray-50"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white/50 p-6">
        {type === "euclid-gcd" && <EuclidGCD step={step} setStep={setStep} />}
        {type === "linear-flow" && <LinearFlow step={step} />}
        {type === "cartesian-comparison" && <CartesianComparison step={step} />}
        {type === "sorting-animation" && <SortingViz step={step} />}
        {type === "search-animation" && <SearchViz step={step} />}
        {type === "graph-traversal" && <GraphViz step={step} />}
        {type === "weighted-graph" && <WeightedGraph step={step} />}
        {type === "heap-tree" && <HeapViz step={step} />}
        {type === "linear-data" && <LinearData step={step} />}
        {type === "string-match" && <StringMatch step={step} />}
        {type === "interpolation-search" && <InterpolationSearch step={step} />}
        {type === "bubble-sort" && <BubbleSort step={step} />}
        {type === "insertion-sort" && <InsertionSort step={step} />}
        {type === "quicksort" && <QuicksortViz step={step} />}
        {type === "matrix-list" && <MatrixListViz step={step} />}
        {type === "assignment-viz" && <AssignmentViz step={step} />}
        {type === "tsp-graph" && <TspViz step={step} />}
        {type === "consecutive-integer-check" && <ConsecutiveIntegerCheck step={step} />}
        {type === "middle-school-gcd" && <MiddleSchoolGCD step={step} />}
        {type === "binary-search" && <BinarySearchViz step={step} />}
        {type === "growth-curves" && <GrowthCurves step={step} />}
        {type === "knapsack-viz" && <KnapsackViz step={step} />}
        {type === "coin-row-viz" && <CoinRowViz step={step} />}
        {type === "change-making-viz" && <ChangeMakingViz step={step} />}
        {type === "coin-collecting-viz" && <CoinCollectingViz step={step} />}
        {type === "topological-viz" && <TopologicalViz step={step} />}
        {type === "dfs-viz" && <DfsViz step={step} />}
        {type === "bfs-viz" && <BfsViz step={step} />}
        {type === "dfs-tree-viz" && <DfsTreeViz step={step} />}
        {type === "bfs-tree-viz" && <BfsTreeViz step={step} />}
        {type === "huffman-viz" && <HuffmanViz step={step} />}
        {type === "merge-sort" && <MergeSortViz step={step} />}
        {!["euclid-gcd", "linear-flow", "cartesian-comparison", "sorting-animation", "search-animation", 
           "graph-traversal", "weighted-graph", "heap-tree", "linear-data", "string-match", 
           "interpolation-search", "bubble-sort", "insertion-sort", "quicksort", "matrix-list", 
           "assignment-viz", "tsp-graph", "consecutive-integer-check", "middle-school-gcd", 
           "binary-search", "growth-curves", "knapsack-viz", "coin-row-viz", "change-making-viz", 
           "coin-collecting-viz", "topological-viz", "dfs-viz", "bfs-viz", "dfs-tree-viz", 
           "bfs-tree-viz", "huffman-viz", "merge-sort"].includes(type) && (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500">
              Visualization for <code className="rounded bg-gray-200 px-1">{type}</code> coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function EuclidGCD({ step, setStep }: { step: number; setStep: (s: number) => void }) {
  const steps = [
    { a: 48, b: 18, remainder: 12 },
    { a: 18, b: 12, remainder: 6 },
    { a: 12, b: 6, remainder: 0 },
    { a: 6, b: 0, remainder: null, isResult: true },
  ];

  const currentSteps = steps.slice(0, step + 1);

  return (
    <div className="flex flex-col items-center gap-6">
      {currentSteps.map((s, i) => (
        <React.Fragment key={i}>
          <div
            className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-500 ${
              step.isResult
                ? "border-teal-200 bg-teal-50 ring-4 ring-teal-50"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase text-gray-400">a</span>
              <span className={`text-xl font-mono font-bold ${step.isResult ? "text-teal-700" : "text-gray-700"}`}>
                {step.a}
              </span>
            </div>
            <div className="h-8 w-[1px] bg-gray-100"></div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase text-gray-400">b</span>
              <span className="text-xl font-mono font-bold text-gray-700">{step.b}</span>
            </div>
            {step.isResult && (
              <div className="ml-4 rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-teal-200">
                GCD Found: {step.a}
              </div>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-[2px] bg-gradient-to-b from-gray-200 to-teal-200"></div>
              <span className="text-[10px] font-mono font-semibold text-teal-600">
                {steps[i].a} % {steps[i].b} = {steps[i].remainder}
              </span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function LinearFlow() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
        <div className="h-4 w-4 rounded-sm border-2 border-white"></div>
      </div>
      <div className="h-[2px] w-12 bg-teal-500/20"></div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal-500 text-teal-500">
        <div className="h-4 w-4 rounded-full border-2 border-teal-500"></div>
      </div>
      <div className="h-[2px] w-12 bg-gray-200"></div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-300">
        <div className="h-4 w-4 rotate-45 border-2 border-gray-200"></div>
      </div>
    </div>
  );
}

function CartesianComparison() {
  return (
    <div className="relative h-64 w-full max-w-md">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200"></div>
      {/* X-axis */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-200"></div>

      {/* Curves (Simplified SVG) */}
      <svg className="absolute bottom-0 left-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* O(n log n) */}
        <path
          d="M 0 100 Q 50 80, 100 40"
          fill="none"
          stroke="#0d9488"
          strokeWidth="2"
          className="transition-all duration-1000"
        />
        {/* O(n^2) */}
        <path
          d="M 0 100 Q 30 90, 80 0"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
      </svg>

      <div className="absolute -left-8 top-0 text-[10px] font-bold text-gray-400">Time</div>
      <div className="absolute -bottom-6 right-0 text-[10px] font-bold text-gray-400">Input Size (n)</div>

      <div className="absolute right-4 top-4 flex flex-col gap-2 rounded-lg border border-gray-100 bg-white/80 p-2 text-[10px] backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-[2px] w-4 bg-teal-600"></div>
          <span className="font-bold text-teal-700">O(n log n)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-[2px] w-4 border-b-2 border-dashed border-gray-400"></div>
          <span className="font-bold text-gray-400">O(n²)</span>
        </div>
      </div>
    </div>
  );
}

function SortingViz({ step }: { step: number }) {
  const arr = [40, 70, 10, 50, 30, 60, 20];
  const n = arr.length;
  let sortedArr = [...arr];
  let minIdx = -1;
  let currentI = Math.min(step, n - 1);
  
  for (let i = 0; i < currentI; i++) {
    let m = i;
    for (let j = i + 1; j < n; j++) {
      if (sortedArr[j] < sortedArr[m]) m = j;
    }
    [sortedArr[i], sortedArr[m]] = [sortedArr[m], sortedArr[i]];
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-baseline gap-2 h-48">
        {sortedArr.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div 
              className={`w-8 transition-all duration-500 rounded-t-lg ${
                idx < currentI ? "bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.3)]" : 
                idx === currentI ? "bg-orange-500 animate-pulse" : "bg-blue-400"
              }`}
              style={{ height: `${val * 2}px` }}
            ></div>
            <span className="text-[10px] font-mono font-bold text-gray-400">{val}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-400 rounded"></div> Unsorted</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded"></div> Current</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-teal-500 rounded"></div> Sorted</div>
      </div>
    </div>
  );
}

function SearchViz({ step }: { step: number }) {
  const elements = [10, 23, 45, 70, 11, 15, 88];
  const target = 70;
  const currentIndex = Math.min(step, elements.findIndex(e => e === target));
  const isFound = elements[currentIndex] === target;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-2">
        {elements.map((val, i) => (
          <div 
            key={i} 
            className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 font-mono font-bold transition-all duration-300 ${
              i === currentIndex 
                ? isFound 
                  ? "border-teal-500 bg-teal-50 text-teal-700 ring-4 ring-teal-100" 
                  : "border-teal-500 bg-white text-teal-600 ring-4 ring-teal-50"
                : "border-gray-200 bg-white text-gray-400"
            }`}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target: {target}</p>
        <p className="mt-1 text-sm font-medium text-teal-600">
          {isFound ? `Found match at index ${currentIndex}!` : `Checking index ${currentIndex}...`}
        </p>
      </div>
    </div>
  );
}

function GraphViz({ step }: { step: number }) {
  const nodes = [
    { id: "A", x: 100, y: 40, s: 0 },
    { id: "B", x: 60, y: 100, s: 1 },
    { id: "C", x: 140, y: 100, s: 2 },
    { id: "D", x: 40, y: 160, s: 3 },
    { id: "E", x: 80, y: 160, s: 4 },
  ];

  const edges = [
    { from: [100, 40], to: [60, 100], s: 1 },
    { from: [100, 40], to: [140, 100], s: 2 },
    { from: [60, 100], to: [40, 160], s: 3 },
    { from: [60, 100], to: [80, 160], s: 4 },
  ];

  return (
    <div className="relative w-full max-w-sm h-64">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {edges.map((e, i) => (
          <line 
            key={i} 
            x1={e.from[0]} y1={e.from[1]} x2={e.to[0]} y2={e.to[1]} 
            stroke={step >= e.s ? "#0d9488" : "#e5e7eb"} 
            strokeWidth={step >= e.s ? "3" : "2"} 
            className="transition-all duration-500"
          />
        ))}

        {nodes.map((n, i) => (
          <React.Fragment key={i}>
            <circle 
              cx={n.x} cy={n.y} r="15" 
              className={`transition-all duration-500 ${
                step >= n.s ? "fill-teal-500 stroke-teal-200 stroke-[4]" : "fill-white stroke-gray-200 stroke-[2]"
              }`} 
            />
            <text 
              x={n.x} y={n.y + 4} textAnchor="middle" 
              className={`text-[10px] font-bold transition-all duration-500 ${
                step >= n.s ? "fill-white" : "fill-gray-400"
              }`}
            >
              {n.id}
            </text>
          </React.Fragment>
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {step === 0 ? "Starting at Root A" : `Step ${step}: Exploring neighbors`}
        </p>
      </div>
    </div>
  );
}

function WeightedGraph({ step }: { step: number }) {
  const edges = [
    { x1: 50, y1: 50, x2: 150, y2: 50, w: 4, s: 1 },
    { x1: 50, y1: 50, x2: 50, y2: 150, w: 8, s: 5 },
    { x1: 150, y1: 50, x2: 150, y2: 150, w: 5, s: 2 },
    { x1: 50, y1: 150, x2: 150, y2: 150, w: 11, s: 4 },
    { x1: 50, y1: 50, x2: 150, y2: 150, w: 7, s: 3 },
  ];

  return (
    <div className="relative w-full max-w-sm h-64">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {edges.map((e, i) => (
          <React.Fragment key={i}>
            <line 
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} 
              stroke={step >= e.s ? "#0d9488" : "#e5e7eb"} 
              strokeWidth={step >= e.s ? "4" : "2"} 
              className="transition-all duration-500"
            />
            <text 
              x={(e.x1 + e.x2) / 2 + (e.x1 === e.x2 ? 10 : 0)} 
              y={(e.y1 + e.y2) / 2 - (e.y1 === e.y2 ? 0 : 10)} 
              textAnchor="middle" 
              className={`text-[12px] font-bold transition-all duration-500 ${
                step >= e.s ? "fill-teal-800" : "fill-gray-400"
              }`}
            >
              {e.w}
            </text>
          </React.Fragment>
        ))}

        <circle cx="50" cy="50" r="15" className="fill-teal-500 shadow-lg" />
        <circle cx="150" cy="50" r="15" className={step >= 1 ? "fill-teal-500" : "fill-white stroke-gray-200"} />
        <circle cx="150" cy="150" r="15" className={step >= 2 ? "fill-teal-500" : "fill-white stroke-gray-200"} />
        <circle cx="50" cy="150" r="15" className={step >= 4 ? "fill-teal-500" : "fill-white stroke-gray-200"} />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Prim's: {step === 0 ? "Select Start Node" : `Step ${step}: Adding edge to MST`}
        </p>
      </div>
    </div>
  );
}

function HeapViz({ step }: { step: number }) {
  const nodes = [
    { v: 90, x: 100, y: 40, s: 0 },
    { v: 36, x: 60, y: 90, s: 1 },
    { v: 17, x: 140, y: 90, s: 2 },
    { v: 25, x: 40, y: 140, s: 3 },
    { v: 1, x: 80, y: 140, s: 4 },
  ];

  const edges = [
    { x1: 100, y1: 40, x2: 60, y2: 90, s: 1 },
    { x1: 100, y1: 40, x2: 140, y2: 90, s: 2 },
    { x1: 60, y1: 90, x2: 40, y2: 140, s: 3 },
    { x1: 60, y1: 90, x2: 80, y2: 140, s: 4 },
  ];

  return (
    <div className="relative w-full max-w-sm h-64">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {edges.map((e, i) => (
          step >= e.s && (
            <line 
              key={i} 
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} 
              stroke="#e5e7eb" strokeWidth="2" 
              className="transition-all duration-500"
            />
          )
        ))}

        {nodes.map((n, i) => (
          step >= n.s && (
            <React.Fragment key={i}>
              <circle cx={n.x} cy={n.y} r="15" className="fill-teal-500 transition-all duration-500" />
              <text x={n.x} y={n.y + 4} textAnchor="middle" className="text-[10px] font-bold fill-white">
                {n.v}
              </text>
            </React.Fragment>
          )
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {step === 0 ? "Root Node" : `Inserting element...`}
        </p>
      </div>
    </div>
  );
}
function LinearData({ step }: { step: number }) {
  const items = ["A", "B", "C", "D", "E"];
  const currentItems = items.slice(0, step + 1);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-2">
        {items.map((val, i) => (
          <div 
            key={i} 
            className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 font-mono font-bold transition-all duration-500 ${
              i <= step 
                ? "border-teal-500 bg-teal-50 text-teal-700" 
                : "border-gray-100 bg-white text-gray-200"
            }`}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Linear Sequence / Array
        </p>
        <p className="mt-2 text-sm font-medium text-teal-600">
          Showing {currentItems.length} element(s)
        </p>
      </div>
    </div>
  );
}

function StringMatch({ step }: { step: number }) {
  const text = "ALGOBOOK";
  const pattern = "BOOK";
  const i = Math.min(step, text.length - pattern.length);
  const matchedLen = text.slice(i, i + pattern.length) === pattern ? pattern.length : 0;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col gap-4">
        {/* Text */}
        <div className="flex gap-1">
          {text.split("").map((char, idx) => (
            <div 
              key={idx} 
              className={`w-10 h-10 flex items-center justify-center rounded border-2 font-mono font-bold ${
                idx >= i && idx < i + pattern.length ? "border-teal-500 bg-teal-50" : "border-gray-100 bg-white"
              }`}
            >
              {char}
            </div>
          ))}
        </div>
        {/* Pattern */}
        <div className="flex gap-1" style={{ marginLeft: `${i * 44}px` }}>
          {pattern.split("").map((char, idx) => (
            <div 
              key={idx} 
              className={`w-10 h-10 flex items-center justify-center rounded border-2 font-mono font-bold border-teal-600 bg-teal-600 text-white`}
            >
              {char}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest">
        {matchedLen > 0 ? "Match Found!" : `Scanning at index ${i}...`}
      </div>
    </div>
  );
}

function InterpolationSearch({ step }: { step: number }) {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const target = 70;
  // Formula: pos = low + [(target - arr[low]) * (high - low) / (arr[high] - arr[low])]
  const pos = 6; // Fixed for 70 in this array
  const currentPos = step >= 1 ? pos : 0;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-1">
        {arr.map((val, i) => (
          <div 
            key={i} 
            className={`w-10 h-10 flex items-center justify-center rounded border-2 font-mono font-bold transition-all ${
              i === currentPos ? "border-teal-500 bg-teal-50 text-teal-700 ring-2 ring-teal-100" : "border-gray-100 bg-white text-gray-300"
            }`}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase">Estimated position calculation</p>
        <p className="mt-2 text-sm font-medium text-teal-600">
          Target {target} estimated at index {pos}
        </p>
      </div>
    </div>
  );
}

function BubbleSort({ step }: { step: number }) {
  const arr = [64, 34, 25, 12, 22, 11, 90];
  const n = arr.length;
  let sorted = [...arr];
  let comparing = [-1, -1];
  
  let s = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (s === step) {
        comparing = [j, j + 1];
        break;
      }
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
      s++;
      if (s === step) break;
    }
    if (s === step) break;
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-baseline gap-2 h-48">
        {sorted.map((val, i) => {
          const isComparing = comparing.includes(i);
          const isSorted = i >= n - Math.floor(step / (n-1));
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div 
                className={`w-8 rounded-t-lg transition-all duration-300 shadow-sm ${
                  isComparing ? "bg-orange-500 scale-110 ring-4 ring-orange-100" :
                  isSorted ? "bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.2)]" : "bg-blue-400"
                }`} 
                style={{ height: `${val * 1.5}px` }}
              ></div>
              <span className="text-[10px] font-mono text-gray-400">{val}</span>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-400 rounded"></div> Unsorted</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded"></div> Comparing</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-teal-500 rounded"></div> Sorted</div>
      </div>
    </div>
  );
}

function InsertionSort({ step }: { step: number }) {
  const arr = [64, 34, 25, 12, 22, 11, 90];
  const n = arr.length;
  let sorted = [...arr];
  let keyIdx = Math.min(step + 1, n - 1);
  
  for (let i = 1; i <= Math.min(step, n - 1); i++) {
    let key = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = key;
  }
  
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-baseline gap-2 h-48">
        {sorted.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div 
              className={`w-8 rounded-t-lg transition-all duration-500 ${
                i < keyIdx ? "bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.2)]" : 
                i === keyIdx ? "bg-orange-500 scale-110 animate-pulse" : "bg-blue-400"
              }`} 
              style={{ height: `${val * 1.5}px` }}
            ></div>
            <span className="text-[10px] font-mono text-gray-400">{val}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-teal-500 rounded"></div> Sorted Part</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded"></div> Inserting</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-400 rounded"></div> Unsorted</div>
      </div>
    </div>
  );
}

function QuicksortViz({ step }: { step: number }) {
  const arr = [30, 10, 50, 20, 40];
  const pivotIdx = 2; 
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-baseline gap-4 h-48">
        {arr.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-10 transition-all duration-300 rounded-t-lg ${i === pivotIdx ? "bg-teal-600 ring-4 ring-teal-100" : i < pivotIdx ? "bg-blue-400" : "bg-orange-400"}`} style={{ height: `${val * 3}px` }}></div>
            <span className="text-[10px] font-mono font-bold text-gray-500">{val}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-400 rounded"></div> Smaller</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-teal-600 rounded"></div> Pivot</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-400 rounded"></div> Larger</div>
      </div>
    </div>
  );
}

function MatrixListViz({ step }: { step: number }) {
  const current = step % 4;
  const matrix = [
    [0, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ];
  const list = [
    "1 → 2, 4",
    "2 → 1, 3, 4",
    "3 → 2",
    "4 → 1, 2"
  ];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg">
      <div className="flex gap-12 items-start justify-center w-full">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Adjacency Matrix</span>
          <div className="grid grid-cols-4 gap-1 p-2 bg-gray-100 rounded-lg">
            {matrix.flat().map((v, i) => {
              const r = Math.floor(i / 4);
              const isActive = r === current;
              return (
                <div key={i} className={`w-8 h-8 flex items-center justify-center rounded transition-all duration-300 ${
                  isActive ? "bg-teal-500 text-white font-bold scale-110" : 
                  v === 1 ? "bg-white text-teal-600 font-bold" : "bg-white text-gray-200"
                }`}>
                  {v}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Adjacency List</span>
          <div className="flex flex-col gap-1">
            {list.map((t, i) => (
              <div key={i} className={`px-4 py-2 border-2 rounded transition-all duration-300 font-mono text-[10px] ${
                i === current ? "bg-teal-50 border-teal-500 text-teal-700 translate-x-2" : "bg-white border-gray-100 text-gray-400"
              }`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-[10px] font-bold text-gray-400 uppercase">Comparing Node {current + 1} representation</div>
    </div>
  );
}

function AssignmentViz({ step }: { step: number }) {
  const people = ["P1", "P2", "P3"];
  const jobs = ["J1", "J2", "J3"];
  const currentStep = Math.min(step, 3);

  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-md">
      <div className="flex justify-between w-full relative">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {Array.from({ length: currentStep }).map((_, i) => (
            <line 
              key={i} 
              x1="20%" y1={`${20 + i * 30}%`} 
              x2="80%" y2={`${20 + i * 30}%`} 
              stroke="#14b8a6" strokeWidth="2" 
              className="animate-pulse"
            />
          ))}
        </svg>

        <div className="flex flex-col gap-6 z-10">
          {people.map((p, i) => (
            <div key={i} className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-all duration-300 ${
              i < currentStep ? "bg-teal-500 border-teal-200 text-white" : "bg-white border-gray-100 text-gray-300"
            }`}>
              {p}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 z-10">
          {jobs.map((j, i) => (
            <div key={i} className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-xs transition-all duration-300 ${
              i < currentStep ? "bg-teal-50 border-teal-500 text-teal-700" : "bg-white border-gray-100 text-gray-300"
            }`}>
              {j}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-[10px] font-bold text-gray-400 uppercase">
        {currentStep === 0 ? "Identify potential assignments" : `Assigning ${people[currentStep-1]} to ${jobs[currentStep-1]}`}
      </div>
    </div>
  );
}

function TspViz({ step }: { step: number }) {
  // Cities as coordinates
  const cities = [
    { id: "A", x: 100, y: 30 },
    { id: "B", x: 180, y: 70 },
    { id: "C", x: 160, y: 160 },
    { id: "D", x: 60, y: 160 },
    { id: "E", x: 30, y: 80 },
  ];

  // Tour order: A -> B -> C -> D -> E -> A
  const tourEdges = [
    { from: 0, to: 1, s: 1 },
    { from: 1, to: 2, s: 2 },
    { from: 2, to: 3, s: 3 },
    { from: 3, to: 4, s: 4 },
    { from: 4, to: 0, s: 5 },
  ];

  return (
    <div className="relative w-full max-w-sm h-64">
      <svg className="w-full h-full" viewBox="0 0 210 200">
        {/* All possible edges (faint) */}
        {cities.map((c1, i) =>
          cities.map((c2, j) =>
            i < j ? (
              <line
                key={`${i}-${j}`}
                x1={c1.x} y1={c1.y} x2={c2.x} y2={c2.y}
                stroke="#f1f5f9" strokeWidth="1"
              />
            ) : null
          )
        )}
        {/* Tour edges */}
        {tourEdges.map((e, i) => (
          <line
            key={`tour-${i}`}
            x1={cities[e.from].x} y1={cities[e.from].y}
            x2={cities[e.to].x} y2={cities[e.to].y}
            stroke={step >= e.s ? "#0d9488" : "#e5e7eb"}
            strokeWidth={step >= e.s ? "3" : "1"}
            className="transition-all duration-500"
          />
        ))}
        {/* City nodes */}
        {cities.map((c, i) => (
          <React.Fragment key={i}>
            <circle
              cx={c.x} cy={c.y} r="14"
              className={`transition-all duration-500 ${
                step >= i + 1 || (i === 0 && step >= 0)
                  ? "fill-teal-500 stroke-teal-200 stroke-[3]"
                  : "fill-white stroke-gray-200 stroke-[2]"
              }`}
            />
            <text
              x={c.x} y={c.y + 4} textAnchor="middle"
              className={`text-[10px] font-bold ${
                step >= i + 1 || (i === 0 && step >= 0) ? "fill-white" : "fill-gray-400"
              }`}
            >
              {c.id}
            </text>
          </React.Fragment>
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {step === 0 ? "Select starting city" : step >= 5 ? "Tour complete! Return to A" : `Step ${step}: Travel to city ${cities[tourEdges[step - 1]?.to]?.id}`}
        </p>
      </div>
    </div>
  );
}

function ConsecutiveIntegerCheck({ step }: { step: number }) {
  const m = 48, n = 18;
  const minVal = Math.min(m, n);
  // Steps: t goes from min(m,n) down. We check: does t divide m? does t divide n?
  // t=18: 48%18=12 ✗ | t=17: 48%17=14 ✗ | ... | t=6: 48%6=0 ✓, 18%6=0 ✓ → GCD!
  const checks: { t: number; divM: boolean; divN: boolean; isGCD: boolean }[] = [];
  for (let t = minVal; t >= 1; t--) {
    const divM = m % t === 0;
    const divN = n % t === 0;
    checks.push({ t, divM, divN, isGCD: divM && divN });
    if (divM && divN) break;
  }

  const visibleChecks = checks.slice(0, step + 1);
  const currentCheck = visibleChecks[visibleChecks.length - 1];

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex gap-8 text-center">
        <div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
          <span className="text-[10px] font-bold text-gray-400 uppercase block">m</span>
          <span className="text-xl font-mono font-bold text-gray-700">{m}</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
          <span className="text-[10px] font-bold text-gray-400 uppercase block">n</span>
          <span className="text-xl font-mono font-bold text-gray-700">{n}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 max-h-48 overflow-y-auto w-full max-w-md">
        {visibleChecks.map((c, i) => (
          <div key={i} className={`flex items-center justify-between px-4 py-2 rounded-lg border transition-all duration-300 ${
            c.isGCD ? "border-teal-400 bg-teal-50 ring-2 ring-teal-100" :
            i === visibleChecks.length - 1 ? "border-gray-300 bg-white" : "border-gray-100 bg-gray-50/50"
          }`}>
            <span className="font-mono font-bold text-sm text-gray-700">t = {c.t}</span>
            <div className="flex gap-3 text-xs font-mono">
              <span className={c.divM ? "text-teal-600 font-bold" : "text-red-400"}>
                {m} % {c.t} = {m % c.t} {c.divM ? "✓" : "✗"}
              </span>
              {c.divM && (
                <span className={c.divN ? "text-teal-600 font-bold" : "text-red-400"}>
                  {n} % {c.t} = {n % c.t} {c.divN ? "✓" : "✗"}
                </span>
              )}
            </div>
            {c.isGCD && (
              <span className="rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold text-white">GCD = {c.t}</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
        {currentCheck?.isGCD ? `Found GCD = ${currentCheck.t}` : `Trying t = ${currentCheck?.t}...`}
      </div>
    </div>
  );
}

function MiddleSchoolGCD({ step }: { step: number }) {
  const m = 60, n = 24;
  // Step 0: Show m and n
  // Step 1: Prime factorization of m = 2² × 3 × 5
  // Step 2: Prime factorization of n = 2³ × 3
  // Step 3: Common factors: 2² × 3 = 12
  const steps = [
    { label: "Start", detail: `Find GCD(${m}, ${n})` },
    { label: "Factor m", detail: `${m} = 2² × 3 × 5` },
    { label: "Factor n", detail: `${n} = 2³ × 3` },
    { label: "Common", detail: "Common: 2² × 3 = 12" },
  ];

  const currentStep = Math.min(step, steps.length - 1);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex gap-3">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl border-2 transition-all duration-500 min-w-[120px] ${
              i <= currentStep
                ? i === currentStep
                  ? "border-teal-500 bg-teal-50 shadow-md shadow-teal-100"
                  : "border-teal-300 bg-teal-50/50"
                : "border-gray-100 bg-gray-50"
            }`}>
              <span className={`text-[10px] font-bold uppercase ${i <= currentStep ? "text-teal-600" : "text-gray-300"}`}>
                {s.label}
              </span>
              <span className={`text-sm font-mono font-bold ${i <= currentStep ? "text-gray-800" : "text-gray-300"}`}>
                {s.detail}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-[2px] w-6 transition-all duration-500 ${i < currentStep ? "bg-teal-400" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-xs font-bold uppercase tracking-widest">
        {currentStep === steps.length - 1 ? (
          <span className="text-teal-600">GCD(60, 24) = 12</span>
        ) : (
          <span className="text-gray-400">Step {currentStep + 1} of {steps.length}</span>
        )}
      </div>
    </div>
  );
}

function BinarySearchViz({ step }: { step: number }) {
  const arr = [5, 12, 17, 23, 38, 44, 56, 72, 81, 95];
  const target = 44;

  // Binary search steps (pre-computed for target=44 in this array):
  // Step 0: low=0, high=9, mid=4 (arr[4]=38 < 44, go right)
  // Step 1: low=5, high=9, mid=7 (arr[7]=72 > 44, go left)
  // Step 2: low=5, high=6, mid=5 (arr[5]=44 == 44, found!)
  const searchSteps = [
    { low: 0, high: 9, mid: 4, comparison: "38 < 44 → search right half" },
    { low: 5, high: 9, mid: 7, comparison: "72 > 44 → search left half" },
    { low: 5, high: 6, mid: 5, comparison: "44 = 44 → found!" },
  ];

  const currentStep = Math.min(step, searchSteps.length - 1);
  const s = searchSteps[currentStep];
  const found = currentStep === searchSteps.length - 1;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-1">
        {arr.map((val, i) => {
          const isInRange = i >= s.low && i <= s.high;
          const isMid = i === s.mid;
          const isEliminated = !isInRange;

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 font-mono font-bold text-sm transition-all duration-300 ${
                  isMid
                    ? found
                      ? "border-teal-500 bg-teal-500 text-white ring-4 ring-teal-100"
                      : "border-teal-500 bg-teal-50 text-teal-700 ring-4 ring-teal-50"
                    : isEliminated
                    ? "border-gray-100 bg-gray-50 text-gray-200"
                    : "border-gray-200 bg-white text-gray-500"
                }`}
              >
                {val}
              </div>
              <div className="flex gap-1">
                {i === s.low && <span className="text-[8px] font-bold text-blue-500">L</span>}
                {i === s.mid && <span className="text-[8px] font-bold text-teal-600">M</span>}
                {i === s.high && <span className="text-[8px] font-bold text-orange-500">H</span>}
                {i !== s.low && i !== s.mid && i !== s.high && <span className="text-[8px] text-transparent">.</span>}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target: {target}</p>
        <p className="mt-1 text-sm font-medium text-teal-600">{s.comparison}</p>
        <p className="mt-1 text-[10px] font-mono text-gray-400">
          low={s.low} mid={s.mid} high={s.high}
        </p>
      </div>
    </div>
  );
}

function GrowthCurves({ step }: { step: number }) {
  const points = 10;
  const labels = ["log n", "n", "n log n", "n²", "2ⁿ"];
  const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"];
  
  // Functions for curves
  const curves = [
    (n: number) => Math.log2(n + 1) * 10,
    (n: number) => n * 8,
    (n: number) => n * Math.log2(n + 1) * 2,
    (n: number) => (n * n) / 2,
    (n: number) => Math.pow(2, n) / 4,
  ];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xl">
      <div className="relative w-full h-64 border-l-2 border-b-2 border-gray-200">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {curves.map((fn, idx) => {
            if (idx > step) return null;
            const path = Array.from({ length: points + 1 }, (_, i) => {
              const x = (i / points) * 100;
              const y = 100 - Math.min(fn(i), 100);
              return `${x},${y}`;
            }).join(" ");
            
            return (
              <polyline
                key={idx}
                fill="none"
                stroke={colors[idx]}
                strokeWidth="2"
                points={path}
                className="transition-all duration-700 ease-in-out"
              />
            );
          })}
        </svg>
        <div className="absolute top-0 left-full ml-4 flex flex-col gap-2">
          {labels.map((l, i) => (
            <div key={i} className={`flex items-center gap-2 text-[10px] font-bold ${i <= step ? "" : "opacity-20"}`}>
              <div className="w-3 h-1" style={{ backgroundColor: colors[i] }}></div>
              <span style={{ color: i <= step ? colors[i] : "#9ca3af" }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">
        {step === 0 ? "Constant/Logarithmic growth" : `Comparing up to ${labels[step]}`}
      </div>
    </div>
  );
}

function KnapsackViz({ step }: { step: number }) {
  const items = [
    { w: 2, v: 3 },
    { w: 3, v: 4 },
    { w: 4, v: 5 },
  ];
  const capacity = 5;
  const rows = items.length + 1;
  const cols = capacity + 1;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex gap-4 mb-2">
        {items.map((it, i) => (
          <div key={i} className="px-3 py-1 bg-white border border-gray-200 rounded text-[10px]">
            Item {i+1}: <span className="font-bold text-teal-600">v={it.v}, w={it.w}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-1 bg-gray-100 p-1 rounded-lg">
        {Array.from({ length: rows * cols }).map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          const isActive = step >= (r * cols + c);
          return (
            <div key={i} className={`w-10 h-10 flex items-center justify-center rounded text-[10px] font-mono transition-all duration-200 ${
              isActive ? "bg-white text-teal-600 font-bold border border-teal-200" : "bg-gray-50 text-gray-300"
            }`}>
              {isActive ? (r === 0 || c === 0 ? "0" : Math.floor(Math.random() * 10)) : "?"}
            </div>
          );
        })}
      </div>
      <div className="text-center text-[10px] font-bold text-gray-400 uppercase">
        Capacity: {capacity} | Table Filling: Row {Math.floor(step / cols)}, Col {step % cols}
      </div>
    </div>
  );
}

function CoinRowViz({ step }: { step: number }) {
  const coins = [5, 1, 2, 10, 6, 2];
  const f = [0, 5, 5, 7, 15, 15, 17];
  const current = Math.min(step, coins.length);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-4">
        {coins.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
              i < current ? "bg-teal-500 border-teal-200 text-white shadow-lg" : "bg-white border-gray-100 text-gray-300"
            }`}>
              <span className="font-bold">{c}</span>
            </div>
            {i < current && (
              <span className="text-[10px] font-mono font-bold text-teal-600">F({i+1})={f[i+1]}</span>
            )}
          </div>
        ))}
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">
        {current === 0 ? "Initial state" : `Deciding for coin at index ${current-1}`}
      </div>
    </div>
  );
}

function ChangeMakingViz({ step }: { step: number }) {
  const denoms = [1, 3, 4];
  const amount = 6;
  const currentAmount = Math.min(step, amount);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex gap-2">
        {denoms.map((d, i) => (
          <div key={i} className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 rounded-full text-[10px] font-bold">
            Coin: {d}
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {Array.from({ length: amount + 1 }).map((_, i) => (
          <div key={i} className={`w-12 h-16 flex flex-col items-center justify-center rounded-lg border-2 transition-all duration-300 ${
            i <= currentAmount ? "border-teal-500 bg-white" : "border-gray-100 bg-gray-50"
          }`}>
            <span className="text-[8px] font-bold text-gray-400">Amt: {i}</span>
            <span className={`text-sm font-mono font-bold ${i <= currentAmount ? "text-teal-700" : "text-gray-200"}`}>
              {i <= currentAmount ? (i === 0 ? "0" : Math.ceil(i/2)) : "?"}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">
        Minimum coins for amount {currentAmount}
      </div>
    </div>
  );
}

function CoinCollectingViz({ step }: { step: number }) {
  const grid = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 0, 1],
  ];
  const rows = 3;
  const cols = 4;
  const currentCell = Math.min(step, rows * cols - 1);
  const curR = Math.floor(currentCell / cols);
  const curC = currentCell % cols;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="grid grid-cols-4 gap-2">
        {grid.flat().map((coin, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          const isCurrent = r === curR && c === curC;
          const isVisited = r < curR || (r === curR && c <= curC);
          return (
            <div key={i} className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 ${
              isCurrent ? "border-teal-500 bg-teal-50 scale-110 shadow-lg" : 
              isVisited ? "border-teal-200 bg-white" : "border-gray-50 bg-gray-50"
            }`}>
              {coin === 1 && (
                <div className={`w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-200 ${isVisited ? "opacity-30" : ""}`}></div>
              )}
              {isCurrent && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-ping"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">
        Robot at ({curR}, {curC}) | Max Coins collected: {Math.floor(step/2)}
      </div>
    </div>
  );
}

function TopologicalViz({ step }: { step: number }) {
  const nodes = [
    { id: "A", in: 0 },
    { id: "B", in: 1 },
    { id: "C", in: 1 },
    { id: "D", in: 2 },
  ];
  const order = ["A", "B", "C", "D"];
  const currentOrder = order.slice(0, step);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-4">
        {nodes.map((node, i) => {
          const isSorted = currentOrder.includes(node.id);
          const isNext = !isSorted && (i === step);
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                isSorted ? "bg-teal-500 border-teal-200 text-white" :
                isNext ? "bg-orange-50 border-orange-200 text-orange-600 scale-110 shadow-lg" : "bg-white border-gray-100 text-gray-400"
              }`}>
                <span className="font-bold">{node.id}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-400">In-degree: {Math.max(0, node.in - step)}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Topological Order</span>
        <div className="flex gap-2">
          {order.map((id, i) => (
            <div key={i} className={`w-8 h-8 rounded border flex items-center justify-center font-bold text-xs transition-all duration-500 ${
              i < step ? "bg-teal-50 border-teal-200 text-teal-600 translate-y-0 opacity-100" : "bg-gray-50 border-transparent text-transparent translate-y-4 opacity-0"
            }`}>
              {id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DfsViz({ step }: { step: number }) {
  const path = ["A", "B", "D", "E", "C"];
  const currentPath = path.slice(0, step + 1);
  const stack = path.slice(0, step + 1).reverse();

  return (
    <div className="flex gap-12 items-start justify-center w-full">
      <div className="flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold text-gray-400 uppercase">Traversal Path</span>
        <div className="flex flex-col gap-2">
          {path.map((node, i) => (
            <div key={i} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              currentPath.includes(node) ? "bg-teal-500 border-teal-200 text-white" : "bg-white border-gray-100 text-gray-300"
            }`}>
              <span className="font-bold text-xs">{node}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold text-gray-400 uppercase">Recursion Stack</span>
        <div className="flex flex-col-reverse w-16 border-x-2 border-b-2 border-gray-200 p-1 min-h-[160px] justify-start">
          {stack.map((node, i) => (
            <div key={i} className="w-full h-8 bg-teal-50 border border-teal-200 rounded flex items-center justify-center text-[10px] font-bold text-teal-700 animate-bounce">
              {node}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BfsViz({ step }: { step: number }) {
  const levels = [["A"], ["B", "C"], ["D", "E", "F"]];
  const queue = step === 0 ? ["A"] : step === 1 ? ["B", "C"] : ["D", "E", "F"];
  const visited = levels.flat().slice(0, step * 2 + 1);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase">Queue (FIFO)</span>
        <div className="flex gap-1 p-2 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
          {queue.map((node, i) => (
            <div key={i} className="w-10 h-10 bg-white border-2 border-blue-200 rounded flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
              {node}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {levels.map((level, lIdx) => (
          <div key={lIdx} className="flex gap-4">
            {level.map((node, nIdx) => (
              <div key={nIdx} className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
                visited.includes(node) ? "bg-teal-500 border-teal-200 text-white scale-100" : "bg-white border-gray-50 text-gray-200"
              }`}>
                <span className="font-bold text-sm">{node}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function DfsTreeViz({ step }: { step: number }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative w-64 h-48">
        {/* Simplified Tree lines */}
        <svg className="absolute inset-0 w-full h-full text-gray-200">
          <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="currentColor" strokeWidth="2" />
          <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="currentColor" strokeWidth="2" />
          <line x1="30%" y1="50%" x2="30%" y2="80%" stroke="orange" strokeWidth="2" strokeDasharray="4" />
        </svg>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 border-2 border-teal-200 flex items-center justify-center text-white font-bold text-xs">A</div>
        <div className="absolute top-[40%] left-[20%] w-10 h-10 rounded-full bg-teal-500 border-2 border-teal-200 flex items-center justify-center text-white font-bold text-xs">B</div>
        <div className="absolute top-[40%] left-[70%] w-10 h-10 rounded-full bg-teal-500 border-2 border-teal-200 flex items-center justify-center text-white font-bold text-xs">C</div>
        <div className="absolute top-[70%] left-[20%] w-10 h-10 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xs">D</div>
      </div>
      <div className="flex gap-4 text-[10px] font-bold uppercase">
        <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-gray-200"></div> Tree Edge</div>
        <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-orange-400 border-dashed border"></div> Back Edge</div>
      </div>
    </div>
  );
}

function BfsTreeViz({ step }: { step: number }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative w-64 h-48">
        <svg className="absolute inset-0 w-full h-full text-gray-200">
          <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="teal" strokeWidth="2" />
          <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="teal" strokeWidth="2" />
          <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="orange" strokeWidth="2" strokeDasharray="4" />
        </svg>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 border-2 border-teal-200 flex items-center justify-center text-white font-bold text-xs">0</div>
        <div className="absolute top-[40%] left-[20%] w-10 h-10 rounded-full bg-teal-500 border-2 border-teal-200 flex items-center justify-center text-white font-bold text-xs">1</div>
        <div className="absolute top-[40%] left-[70%] w-10 h-10 rounded-full bg-teal-500 border-2 border-teal-200 flex items-center justify-center text-white font-bold text-xs">1</div>
      </div>
      <div className="text-center text-[10px] font-bold text-gray-400 uppercase">BFS Tree: Cross edges are within levels</div>
    </div>
  );
}

function HuffmanViz({ step }: { step: number }) {
  const nodes = [
    { label: "A:5", f: 5 },
    { label: "B:9", f: 9 },
    { label: "C:12", f: 12 },
  ];
  
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-4">
        {nodes.map((n, i) => (
          <div key={i} className={`px-4 py-2 rounded-xl border-2 transition-all duration-500 ${
            step > 0 && i < 2 ? "bg-gray-50 border-dashed border-gray-300 opacity-50" : "bg-white border-teal-200 text-teal-700 shadow-md"
          }`}>
            <span className="text-xs font-bold font-mono">{n.label}</span>
          </div>
        ))}
      </div>
      {step > 0 && (
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-[2px] h-8 bg-gray-200"></div>
          <div className="px-6 py-3 bg-teal-500 border-2 border-teal-200 rounded-2xl text-white shadow-xl">
            <span className="text-sm font-bold">Node (14)</span>
          </div>
        </div>
      )}
      <div className="text-center text-xs font-bold text-gray-400 uppercase">Merging lowest frequency nodes</div>
    </div>
  );
}

function MergeSortViz({ step }: { step: number }) {
  const levels = [
    [38, 27, 43, 3, 9, 82, 10],
    [[38, 27, 43], [3, 9, 82, 10]],
    [[38], [27, 43], [3, 9], [82, 10]]
  ];
  const currentLevel = Math.min(step, levels.length - 1);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col items-center gap-8">
        {levels.slice(0, currentLevel + 1).map((lvl, i) => (
          <div key={i} className="flex gap-8">
            {(Array.isArray(lvl[0]) ? lvl : [lvl]).map((group, j) => (
              <div key={j} className="flex gap-1 p-1 bg-gray-50 rounded-lg border border-gray-100 shadow-inner">
                {(group as number[]).map((val, k) => (
                  <div key={k} className="w-8 h-8 bg-white border border-teal-200 rounded flex items-center justify-center text-[10px] font-bold text-teal-600 shadow-sm">
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">Divide & Conquer: Level {currentLevel}</div>
    </div>
  );
}
