"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  AlertCircle, 
  AlertTriangle, 
  ArrowUp, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from "lucide-react";

interface RoleCard {
  id: string;
  period: string;
  role: string;
  company: string;
  stack: string[];
  gradientTheme: {
    stroke: string;
    fillGradient: string;
    ambientGlow: string;
  };
  metrics: {
    icon: "check" | "alert" | "warning";
    label: string;
    value: string;
    trend: "up" | "down";
  }[];
}

const ROLES: RoleCard[] = [
  {
    id: "suvidha",
    period: "MAY 2023 — JUN 2023",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    stack: ["React.js", "Tailwind", "REST APIs"],
    gradientTheme: {
      stroke: "#FF5722",
      fillGradient: "url(#orange-grad)",
      ambientGlow: "from-[#FF5722]/20 via-[#E64A19]/5 to-transparent",
    },
    metrics: [
      {
        icon: "check",
        label: "Portal Query Speed",
        value: "sub-100ms",
        trend: "down",
      },
      {
        icon: "alert",
        label: "Project Asset Uploads",
        value: "100% Flow",
        trend: "up",
      },
      {
        icon: "warning",
        label: "Responsive Breakpoints",
        value: "Zero Layout Shift",
        trend: "down",
      },
    ],
  },
  {
    id: "tech-mahindra",
    period: "OCT 2024 — APR 2025",
    role: "Technical Associate",
    company: "Tech Mahindra",
    stack: ["Enterprise Systems", "Network Diagnostics", "Hardware Continuity"],
    gradientTheme: {
      stroke: "#38BDF8",
      fillGradient: "url(#blue-grad)",
      ambientGlow: "from-[#38BDF8]/20 via-[#0284C7]/5 to-transparent",
    },
    metrics: [
      {
        icon: "check",
        label: "Mean Time to Resolve",
        value: "-65% MTTR",
        trend: "down",
      },
      {
        icon: "alert",
        label: "Store Continuity SLA",
        value: "99.98%",
        trend: "up",
      },
      {
        icon: "warning",
        label: "Cabling Fault Rectification",
        value: "100% Resolved",
        trend: "up",
      },
    ],
  },
  {
    id: "independent",
    period: "2025 — PRESENT",
    role: "Independent AI & Product Engineer",
    company: "Independent Systems & Research",
    stack: ["Python", "LangChain", "vLLM", "React Native"],
    gradientTheme: {
      stroke: "#A855F7",
      fillGradient: "url(#purple-grad)",
      ambientGlow: "from-[#A855F7]/20 via-[#7E22CE]/5 to-transparent",
    },
    metrics: [
      {
        icon: "check",
        label: "Clinical Hallucinations",
        value: "0.0% via RAG",
        trend: "down",
      },
      {
        icon: "alert",
        label: "Diagnostic Intake Latency",
        value: "<200ms",
        trend: "up",
      },
      {
        icon: "warning",
        label: "vLLM Inference Throughput",
        value: "+40% Boost",
        trend: "up",
      },
    ],
  },
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? ROLES.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === ROLES.length - 1 ? 0 : prevIdx + 1));
  };

  const activeCard = ROLES[currentIndex];

  return (
    <section id="experience" className="relative w-full min-h-[900px] py-24 sm:py-36 px-4 sm:px-6 bg-white text-[#121212] flex flex-col items-center justify-center overflow-hidden border-t border-neutral-200 select-none">
      
      {/* Subtle Dynamic Ambient Background Glow */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-radial ${activeCard.gradientTheme.ambientGlow} opacity-40 blur-[140px] pointer-events-none transition-all duration-700 -z-10`} 
      />

      {/* Section 05 Title Header (High-Contrast Clean White Theme) */}
      <div className="w-full max-w-5xl mx-auto mb-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 gap-4">
          <div className="space-y-2">
            <span className="text-coral text-xs sm:text-sm font-sans font-bold tracking-widest uppercase block">
              SECTION 05 // CAREER TIMELINE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#121212] leading-tight">
              Experience
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-md font-sans text-left md:text-right">
            Engineering tenure across enterprise systems, high-scale web platforms, and autonomous intelligence research.
          </p>
        </div>
      </div>

      {/* Sub-Header Stage Indicator */}
      <div className="w-full max-w-[420px] mb-6 flex items-center justify-between text-neutral-500 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-coral" />
          <span className="text-[11px] tracking-wider uppercase font-semibold text-neutral-700">SYSTEM METRICS &amp; ROLES</span>
        </div>
        <span className="font-semibold text-neutral-600">0{currentIndex + 1} / 0{ROLES.length}</span>
      </div>

      {/* 3D Depth Card Stage with Layered Decking */}
      <div className="relative w-full max-w-[420px] h-[580px] flex items-center justify-center">
        {/* Layered Cards Stacked Behind (Clean Neutral Shadows) */}
        <div className="absolute inset-0 rounded-[36px] bg-neutral-200/90 border border-black/5 -translate-y-4 scale-[0.94] pointer-events-none -z-10 shadow-md" />
        <div className="absolute inset-0 rounded-[36px] bg-neutral-300/80 border border-black/5 -translate-y-8 scale-[0.88] pointer-events-none -z-20 shadow-sm" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -16 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="w-full h-full rounded-[36px] bg-[#0E1015]/95 border border-black/10 p-8 flex flex-col justify-between shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl relative overflow-hidden text-white"
          >
            {/* Top Border Sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Header Block */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                {activeCard.period}
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {activeCard.role}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  {activeCard.company}
                </p>
              </div>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeCard.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Center Waveform SVG */}
            <div className="relative w-full h-36 my-4 flex flex-col justify-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 360 120">
                <defs>
                  <pattern id="dot-matrix" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#333" />
                  </pattern>

                  <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF5722" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#FF5722" stopOpacity="0.0" />
                  </linearGradient>

                  <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                  </linearGradient>

                  <linearGradient id="purple-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#dot-matrix)" />

                <path
                  d="M 0,90 C 60,65 110,50 160,70 C 210,90 260,40 310,45 C 335,48 350,55 360,60 L 360,120 L 0,120 Z"
                  fill={activeCard.gradientTheme.fillGradient}
                />

                <path
                  d="M 0,98 C 50,90 100,95 160,85 C 220,75 270,82 360,78"
                  fill="none"
                  stroke={activeCard.gradientTheme.stroke}
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />

                <path
                  d="M 0,90 C 60,65 110,50 160,70 C 210,90 260,40 310,45 C 335,48 350,55 360,60"
                  fill="none"
                  stroke={activeCard.gradientTheme.stroke}
                  strokeWidth="2.5"
                />
              </svg>

              <div className="flex justify-between border-t border-white/10 pt-1 text-[9px] font-mono text-neutral-500">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
                <span className="text-white font-semibold">PEAK</span>
              </div>
            </div>

            {/* Bottom Rows */}
            <div className="divide-y divide-white/10 pt-1">
              {activeCard.metrics.map((metric, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {metric.icon === "check" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {metric.icon === "alert" && <AlertCircle className="w-4 h-4 text-emerald-400" />}
                    {metric.icon === "warning" && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                    <span className="text-xs font-mono text-neutral-300">
                      {metric.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white">
                      {metric.value}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      {metric.trend === "up" ? (
                        <ArrowUp className="w-3 h-3 stroke-[2.5]" />
                      ) : (
                        <ArrowDown className="w-3 h-3 stroke-[2.5]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Nav Controls (Matching Production Demos Circular Styling) */}
      <div className="flex items-center gap-5 mt-10 z-20">
        <button
          onClick={prev}
          aria-label="Previous role"
          className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center hover:bg-black transition-all active:scale-95 shadow-md cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-2">
          {ROLES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "w-8 bg-[#161616]" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next role"
          className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center hover:bg-black transition-all active:scale-95 shadow-md cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

    </section>
  );
}
