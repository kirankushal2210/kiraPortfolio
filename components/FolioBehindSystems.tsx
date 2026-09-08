"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  tag: string;
  summary: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  image: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "independent",
    role: "Independent AI & Product Engineer",
    company: "Applied Systems Research",
    period: "2025 — PRESENT",
    tag: "AUTONOMOUS MULTI-AGENT SYSTEMS",
    summary:
      "Engineering end-to-end multi-agent consensus pipelines, offline-first health telemetry (HlthOS) rendering at strict 60-FPS, and domain LLM inference via vLLM and PEFT.",
    metrics: [
      { label: "DIAGNOSTIC INGESTION", value: "< 200ms" },
      { label: "GROUNDING ACCURACY", value: "100% RAG" },
      { label: "INFERENCE GAIN", value: "+40% vLLM" },
    ],
    stack: ["Python", "vLLM", "LangChain", "Claude API", "PostgreSQL", "React Native"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tech-mahindra",
    role: "Technical Associate",
    company: "Tech Mahindra",
    period: "OCT 2024 — APR 2025",
    tag: "ENTERPRISE INFRASTRUCTURE",
    summary:
      "Restored mission-critical operational continuity for US retail chains, diagnosing hardware, software, and physical network cabling faults under rigorous enterprise SLAs.",
    metrics: [
      { label: "STORE UPTIME SLA", value: "99.98%" },
      { label: "RESOLUTION TIME", value: "-65% MTTR" },
      { label: "CABLING CONTINUITY", value: "100% Resolved" },
    ],
    stack: ["Enterprise Troubleshooting", "Hardware Continuity", "Network Systems"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "suvidha",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    period: "MAY 2023 — JUN 2023",
    tag: "FRONTEND SYSTEMS",
    summary:
      "Built dynamic, responsive React frontend workflows for an academic research portal featuring real-time project search, listing, and multi-part upload pipelines.",
    metrics: [
      { label: "SEARCH LATENCY", value: "sub-100ms" },
      { label: "LAYOUT STABILITY", value: "0.00 CLS" },
      { label: "DATA ACCURACY", value: "100% Flow" },
    ],
    stack: ["React.js", "Tailwind CSS", "RESTful Data Integration", "Component UI"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "athletics",
    role: "Athletic Rigor & Systems Discipline",
    company: "Physical Overload Applied to Code",
    period: "CONTINUOUS",
    tag: "ENGINEERING PHILOSOPHY",
    summary:
      "Applying the principles of progressive overload in powerlifting to distributed software engineering: continuous stress-testing, deterministic guardrails, zero margin for sloppy execution.",
    metrics: [
      { label: "METHODOLOGY", value: "Progressive Overload" },
      { label: "GUARDRAILS", value: "Deterministic" },
      { label: "EXECUTION ERROR", value: "Zero Tolerance" },
    ],
    stack: ["Progressive Overload", "Stress-Testing", "Deterministic Systems"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ExperienceCarouselArc() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((curr) => (curr + 1) % EXPERIENCES.length);
  };

  const prevSlide = () => {
    setActiveIndex((curr) => (curr === 0 ? EXPERIENCES.length - 1 : curr - 1));
  };

  // Continuous auto-rotation every 3.5s when not hovered
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const activeRole = EXPERIENCES[activeIndex];

  return (
    <section 
      id="experience" 
      className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-[#040406] text-white flex flex-col items-center border-t border-neutral-900 overflow-hidden select-none"
    >
      
      {/* Background Soft Lighting Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Top Header */}
      <div className="w-full max-w-6xl mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#FF3B00] uppercase block">
            SECTION 05 // CAREER TRAJECTORY &amp; METRICS
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-1 text-white">
            Operational History.
          </h2>
        </div>
        <p className="text-xs font-mono text-neutral-400 max-w-xs tracking-wide">
          Select or scrub any node in the carousel arc below to inspect production architecture and verified milestones.
        </p>
      </div>

      {/* Main Focus Stage: Active Experience Screen */}
      <div 
        className="w-full max-w-4xl relative min-h-[460px] rounded-3xl bg-[#090A0E] border border-white/15 p-8 md:p-12 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Specular Rim */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#FF3B00] uppercase font-semibold">
                {activeRole.tag}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {activeRole.period}
              </span>
            </div>

            {/* Title Block */}
            <div>
              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white">
                {activeRole.role}
              </h3>
              <p className="text-sm font-mono text-neutral-400 mt-1">
                {activeRole.company}
              </p>
            </div>

            {/* Narrative Summary */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-3xl">
              {activeRole.summary}
            </p>

            {/* 3 Metric Ledgers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
              {activeRole.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase tracking-wider">
                    {m.label}
                  </span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-white mt-1 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase mr-1">
                TECH //
              </span>
              {activeRole.stack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Carousel Arc Rail (Exact Reference Interaction) */}
      <div 
        className="w-full max-w-4xl mt-12 flex flex-col items-center gap-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full flex items-center justify-center gap-4 sm:gap-6 py-4 [perspective:1000px]">
          {EXPERIENCES.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.08 }}
                animate={{
                  scale: isActive ? 1.08 : 0.88,
                  opacity: isActive ? 1 : 0.45,
                  y: isActive ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className={`relative w-24 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all shadow-xl ${
                  isActive
                    ? "border-white shadow-[0_0_25px_rgba(255,255,255,0.4)] ring-2 ring-white/20 z-20"
                    : "border-white/10 hover:border-white/40 z-10"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.role}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-2 inset-x-2 text-[9px] font-mono text-white text-center truncate font-medium">
                  {item.company}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Tactical Arrow Controls & Pagination Dots */}
        <div className="flex items-center gap-6">
          <button
            onClick={prevSlide}
            aria-label="Previous role"
            className="p-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {EXPERIENCES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-white" : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next role"
            className="p-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white transition-all active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
