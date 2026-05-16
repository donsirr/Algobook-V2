"use client";

import React from "react";

export interface GraphRendererProps {
  type?: string;
}

export function GraphRenderer({ type }: GraphRendererProps) {
  if (!type) return null;

  return (
    <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
          Interactive Visualization
        </h3>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-teal-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="flex min-h-[300px] items-center justify-center">
        {type === "euclid-gcd" && <EuclidGCD />}
        {type === "linear-flow" && <LinearFlow />}
        {type === "cartesian-comparison" && <CartesianComparison />}
        {type === "sorting-animation" && <SortingViz />}
        {type === "search-animation" && <SearchViz />}
        {type === "graph-traversal" && <GraphViz />}
        {type === "weighted-graph" && <WeightedGraph />}
        {type === "heap-tree" && <HeapViz />}
        {type !== "euclid-gcd" && type !== "linear-flow" && type !== "cartesian-comparison" && 
         type !== "sorting-animation" && type !== "search-animation" && type !== "graph-traversal" && (
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

function EuclidGCD() {
  const steps = [
    { a: 48, b: 18, remainder: 12 },
    { a: 18, b: 12, remainder: 6 },
    { a: 12, b: 6, remainder: 0 },
    { a: 6, b: 0, remainder: null, isResult: true },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {steps.map((step, i) => (
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

function SortingViz() {
  const bars = [64, 34, 25, 12, 22, 11, 90];
  
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex items-end gap-2 h-40">
        {bars.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div 
              className="w-8 bg-teal-500 rounded-t-sm transition-all duration-500" 
              style={{ height: `${val}%` }}
            ></div>
            <span className="text-[10px] font-mono text-gray-400">{val}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm text-xs font-bold">
        <span className="text-gray-400">STATUS:</span>
        <span className="text-teal-600 uppercase">Scanning Minimum Element...</span>
      </div>
    </div>
  );
}

function SearchViz() {
  const elements = [10, 23, 45, 70, 11, 15, 88];
  const target = 70;
  const currentIndex = 3;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-2">
        {elements.map((val, i) => (
          <div 
            key={i} 
            className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 font-mono font-bold transition-all duration-300 ${
              i === currentIndex 
                ? "border-teal-500 bg-teal-50 text-teal-700 ring-4 ring-teal-100" 
                : "border-gray-200 bg-white text-gray-400"
            }`}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target: {target}</p>
        <p className="mt-1 text-sm font-medium text-teal-600">Found match at index {currentIndex}!</p>
      </div>
    </div>
  );
}

function GraphViz() {
  return (
    <div className="relative w-full max-w-sm h-64">
      {/* Simple Node-Link SVG */}
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Edges */}
        <line x1="100" y1="40" x2="60" y2="100" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="100" y1="40" x2="140" y2="100" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="100" x2="40" y2="160" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="100" x2="80" y2="160" stroke="#e5e7eb" strokeWidth="2" />

        {/* Nodes */}
        <circle cx="100" cy="40" r="15" className="fill-teal-500 stroke-teal-200 stroke-[4]" />
        <circle cx="60" cy="100" r="15" className="fill-white stroke-teal-500 stroke-[2]" />
        <circle cx="140" cy="100" r="15" className="fill-white stroke-gray-300 stroke-[2]" />
        <circle cx="40" cy="160" r="12" className="fill-white stroke-gray-200 stroke-[2]" />
        <circle cx="80" cy="160" r="12" className="fill-white stroke-gray-200 stroke-[2]" />

        <text x="100" y="44" textAnchor="middle" className="text-[10px] font-bold fill-white">A</text>
        <text x="60" y="104" textAnchor="middle" className="text-[10px] font-bold fill-teal-600">B</text>
        <text x="140" y="104" textAnchor="middle" className="text-[10px] font-bold fill-gray-400">C</text>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase">Breadth-First Search Traversal</p>
      </div>
    </div>
  );
}

function WeightedGraph() {
  return (
    <div className="relative w-full max-w-sm h-64">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <line x1="50" y1="50" x2="150" y2="50" stroke="#0d9488" strokeWidth="4" />
        <line x1="50" y1="50" x2="50" y2="150" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="150" y1="50" x2="150" y2="150" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="50" y1="150" x2="150" y2="150" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="50" y1="50" x2="150" y2="150" stroke="#e5e7eb" strokeWidth="2" />

        <circle cx="50" cy="50" r="15" className="fill-teal-500" />
        <circle cx="150" cy="50" r="15" className="fill-teal-500" />
        <circle cx="50" cy="150" r="15" className="fill-white stroke-gray-300" />
        <circle cx="150" cy="150" r="15" className="fill-white stroke-gray-300" />

        <text x="100" y="45" textAnchor="middle" className="text-[12px] font-bold fill-teal-800">4</text>
        <text x="45" y="105" textAnchor="middle" className="text-[12px] font-bold fill-gray-400">8</text>
        <text x="155" y="105" textAnchor="middle" className="text-[12px] font-bold fill-gray-400">5</text>
        <text x="100" y="155" textAnchor="middle" className="text-[12px] font-bold fill-gray-400">11</text>
        <text x="105" y="105" textAnchor="middle" className="text-[12px] font-bold fill-gray-400 rotate-45">7</text>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase">Prim's Algorithm: MST Construction</p>
      </div>
    </div>
  );
}

function HeapViz() {
  return (
    <div className="relative w-full max-w-sm h-64">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <line x1="100" y1="40" x2="60" y2="90" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="100" y1="40" x2="140" y2="90" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="90" x2="40" y2="140" stroke="#e5e7eb" strokeWidth="2" />
        <line x1="60" y1="90" x2="80" y2="140" stroke="#e5e7eb" strokeWidth="2" />

        <circle cx="100" cy="40" r="15" className="fill-teal-500" />
        <circle cx="60" cy="90" r="15" className="fill-teal-500" />
        <circle cx="140" cy="90" r="15" className="fill-teal-500" />
        <circle cx="40" cy="140" r="12" className="fill-teal-500" />
        <circle cx="80" cy="140" r="12" className="fill-teal-500" />

        <text x="100" y="44" textAnchor="middle" className="text-[10px] font-bold fill-white">90</text>
        <text x="60" y="94" textAnchor="middle" className="text-[10px] font-bold fill-white">36</text>
        <text x="140" y="94" textAnchor="middle" className="text-[10px] font-bold fill-white">17</text>
        <text x="40" y="144" textAnchor="middle" className="text-[10px] font-bold fill-white">25</text>
        <text x="80" y="144" textAnchor="middle" className="text-[10px] font-bold fill-white">1</text>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase">Max-Heap Data Structure</p>
      </div>
    </div>
  );
}
