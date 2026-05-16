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
        {type === "sorting-animation" && <SortingViz step={step} setStep={setStep} />}
        {type === "search-animation" && <SearchViz step={step} setStep={setStep} />}
        {type === "graph-traversal" && <GraphViz step={step} setStep={setStep} />}
        {type === "weighted-graph" && <WeightedGraph step={step} setStep={setStep} />}
        {type === "heap-tree" && <HeapViz step={step} setStep={setStep} />}
        {type === "linear-data" && <LinearData step={step} />}
        {type === "string-match" && <StringMatch step={step} />}
        {type === "interpolation-search" && <InterpolationSearch step={step} />}
        {type === "bubble-sort" && <BubbleSort step={step} />}
        {type === "insertion-sort" && <InsertionSort step={step} />}
        {type === "quicksort" && <QuicksortViz step={step} />}
        {type === "matrix-list" && <MatrixListViz step={step} />}
        {type === "assignment-viz" && <AssignmentViz step={step} />}
        {type === "tsp-graph" && <TspViz step={step} />}
        {type !== "euclid-gcd" && type !== "linear-flow" && type !== "cartesian-comparison" && 
         type !== "sorting-animation" && type !== "search-animation" && type !== "graph-traversal" &&
         type !== "weighted-graph" && type !== "heap-tree" && type !== "linear-data" && 
         type !== "string-match" && type !== "interpolation-search" && 
         type !== "bubble-sort" && type !== "insertion-sort" && type !== "quicksort" &&
         type !== "matrix-list" && type !== "assignment-viz" && type !== "tsp-graph" && (
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
  const bars = [64, 34, 25, 12, 22, 11, 90];
  const n = bars.length;
  
  // Selection Sort snapshot logic
  let currentBars = [...bars];
  let minIdx = 0;
  let sortedUpTo = Math.min(step, n - 1);
  
  // This is a simplification for visualization
  for (let i = 0; i < sortedUpTo; i++) {
    let m = i;
    for (let j = i + 1; j < n; j++) {
      if (currentBars[j] < currentBars[m]) m = j;
    }
    [currentBars[i], currentBars[m]] = [currentBars[m], currentBars[i]];
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-end gap-2 h-40">
        {currentBars.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div 
              className={`w-8 rounded-t-sm transition-all duration-500 ${
                i < sortedUpTo ? "bg-teal-600" : i === sortedUpTo ? "bg-teal-400 animate-pulse" : "bg-gray-200"
              }`} 
              style={{ height: `${(val / 90) * 100}%` }}
            ></div>
            <span className="text-[10px] font-mono text-gray-400">{val}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm text-xs font-bold">
        <span className="text-gray-400">STATUS:</span>
        <span className="text-teal-600 uppercase">
          {sortedUpTo < n - 1 ? `Sorting index ${sortedUpTo}...` : "Sorting Complete"}
        </span>
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
  const bars = [64, 34, 25, 12, 22, 11, 90];
  let currentBars = [...bars];
  let n = currentBars.length;
  let swaps = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (swaps >= step) break;
      if (currentBars[j] > currentBars[j + 1]) {
        [currentBars[j], currentBars[j + 1]] = [currentBars[j + 1], currentBars[j]];
      }
      swaps++;
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-end gap-2 h-40">
        {currentBars.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div 
              className="w-8 bg-teal-500 rounded-t-sm transition-all duration-500" 
              style={{ height: `${(val / 90) * 100}%` }}
            ></div>
            <span className="text-[10px] font-mono text-gray-400">{val}</span>
          </div>
        ))}
      </div>
      <div className="text-center text-xs font-bold text-teal-600 uppercase">
        Bubble Sort Progress: Step {step}
      </div>
    </div>
  );
}

function InsertionSort({ step }: { step: number }) {
  const bars = [64, 34, 25, 12, 22, 11, 90];
  let currentBars = [...bars];
  let n = currentBars.length;
  
  for (let i = 1; i <= Math.min(step, n - 1); i++) {
    let key = currentBars[i];
    let j = i - 1;
    while (j >= 0 && currentBars[j] > key) {
      currentBars[j + 1] = currentBars[j];
      j = j - 1;
    }
    currentBars[j + 1] = key;
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-end gap-2 h-40">
        {currentBars.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div 
              className={`w-8 rounded-t-sm transition-all duration-500 ${i <= step ? "bg-teal-600" : "bg-gray-200"}`} 
              style={{ height: `${(val / 90) * 100}%` }}
            ></div>
            <span className="text-[10px] font-mono text-gray-400">{val}</span>
          </div>
        ))}
      </div>
      <div className="text-center text-xs font-bold text-teal-600 uppercase">
        Insertion Sort: Sorted part up to index {step}
      </div>
    </div>
  );
}

function QuicksortViz({ step }: { step: number }) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-end gap-4 h-40">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 bg-gray-200 h-20 rounded-t-sm"></div>
          <span className="text-[10px] font-mono text-gray-400">Left</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 bg-teal-600 h-32 rounded-t-sm ring-4 ring-teal-100"></div>
          <span className="text-[10px] font-bold text-teal-600">Pivot</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 bg-gray-200 h-24 rounded-t-sm"></div>
          <span className="text-[10px] font-mono text-gray-400">Right</span>
        </div>
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">
        Partitioning around pivot element
      </div>
    </div>
  );
}

function MatrixListViz({ step }: { step: number }) {
  return (
    <div className="flex gap-12 items-center w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase">Adjacency Matrix</span>
        <div className="grid grid-cols-4 gap-1 p-2 bg-gray-100 rounded-lg">
          {[0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0].map((v, i) => (
            <div key={i} className={`w-8 h-8 flex items-center justify-center rounded bg-white text-xs font-mono ${v === 1 ? "text-teal-600 font-bold" : "text-gray-300"}`}>
              {v}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase">Adjacency List</span>
        <div className="flex flex-col gap-1">
          {["1 → 2, 4", "2 → 1, 3, 4", "3 → 2", "4 → 1, 2"].map((t, i) => (
            <div key={i} className="px-3 py-1 bg-white border border-gray-100 rounded text-[10px] font-mono text-teal-700">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AssignmentViz({ step }: { step: number }) {
  const jobs = ["Job 1", "Job 2", "Job 3"];
  const people = ["Person A", "Person B", "Person C"];
  const assignment = step >= 1 ? [0, 1, 2] : [];

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-20">
        <div className="flex flex-col gap-4">
          {people.map((p, i) => (
            <div key={i} className="w-24 h-10 flex items-center justify-center rounded-lg border-2 border-teal-500 bg-teal-50 text-[10px] font-bold text-teal-700">
              {p}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {jobs.map((j, i) => (
            <div key={i} className="w-24 h-10 flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white text-[10px] font-bold text-gray-400">
              {j}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs font-bold text-gray-400 uppercase">
        {step === 0 ? "Initial state: Unassigned" : "Greedy assignment: Optimal matches found"}
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
