"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Activity, 
  Dumbbell, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2 
} from "lucide-react";

interface ExperienceMilestone {
  id: string;
  index: string;
  role: string;
  company: string;
  period: string;
  tag: string;
  summary: string;
  highlightTitle: string;
  highlightText: string;
  metrics: { label: string; value: string; subtext: string }[];
  stack: string[];
}

const EXPERIENCES: ExperienceMilestone[] = [
  {
    id: "independent-ai",
    index: "01",
    role: "Independent AI & Product Engineer",
    company: "Applied Systems Research",
    period: "2025 — PRESENT",
    tag: "AUTONOMOUS AGENTS // ACTIVE",
    summary:
      "Engineering end-to-end multi-agent consensus pipelines, offline-first health operating systems (HlthOS) rendering at strict 60 FPS, and domain LLM inference via vLLM and PEFT.",
    highlightTitle: "Deterministic Fallback Engine",
    highlightText:
      "Engineered parallel mathematical fallback systems enforcing 100% computational guardrails on dynamic nutrition and biometric protocols.",
    metrics: [
      { label: "INGESTION", value: "< 200ms", subtext: "16-pt intake" },
      { label: "ACCURACY", value: "0.0% RAG", subtext: "Clinical grounding" },
      { label: "vLLM GAIN", value: "+40%", subtext: "PEFT / LoRA boost" },
    ],
    stack: ["Python", "vLLM", "LangChain", "Claude API", "PostgreSQL", "React Native"],
  },
  {
    id: "tech-mahindra",
    index: "02",
    role: "Technical Associate",
    company: "Tech Mahindra",
    period: "OCT 2024 — APR 2025",
    tag: "ENTERPRISE INFRASTRUCTURE",
    summary:
      "Restored mission-critical operational continuity for US retail chains, diagnosing hardware, POS networks, and physical cabling bottlenecks under rigorous enterprise SLAs.",
    highlightTitle: "Structured Fault Isolation",
    highlightText:
      "Standardized structured fault-isolation trees to accelerate issue triage and eliminate repeated hardware disconnects.",
    metrics: [
      { label: "STORE SLA", value: "99.98%", subtext: "Uptime guarantee" },
      { label: "VELOCITY", value: "-65% MTTR", subtext: "Triage trees" },
      { label: "RECTIFIED", value: "100%", subtext: "Zero cabling drops" },
    ],
    stack: ["Enterprise Systems", "Network Continuity", "Hardware Cabling", "Linux"],
  },
  {
    id: "suvidha",
    index: "03",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    period: "MAY 2023 — JUN 2023",
    tag: "FRONTEND ARCHITECTURE",
    summary:
      "Engineered dynamic React frontend workflows for an academic PhD research repository with search integration and multipart upload pipelines.",
    highlightTitle: "Zero Layout Shift UI",
    highlightText:
      "Constructed modular component libraries using Tailwind CSS, achieving zero cumulative layout shift and sub-100ms interaction latency.",
    metrics: [
      { label: "QUERY SPEED", value: "sub-100ms", subtext: "Search caching" },
      { label: "LAYOUT SHIFT", value: "0.00 CLS", subtext: "Tailwind engine" },
      { label: "PIPELINE", value: "100%", subtext: "Multipart intake" },
    ],
    stack: ["React.js", "Tailwind CSS", "TypeScript", "RESTful APIs"],
  },
  {
    id: "athletics",
    index: "04",
    role: "Athletic Rigor & Systems Discipline",
    company: "Powerlifting Applied to Code",
    period: "CONTINUOUS",
    tag: "SYSTEM PHILOSOPHY",
    summary:
      "Applying the principles of progressive overload in powerlifting to distributed software engineering: continuous stress-testing, deterministic guardrails, zero margin for sloppy execution.",
    highlightTitle: "Progressive Overload Applied",
    highlightText:
      "Tenacity under heavy barbell training directly translates into unwavering stamina during deep debugging and mission-critical production incidents.",
    metrics: [
      { label: "METHODOLOGY", value: "Overload", subtext: "Progressive load" },
      { label: "GUARDRAILS", value: "100%", subtext: "Deterministic" },
      { label: "TOLERANCE", value: "0.00", subtext: "Zero margin error" },
    ],
    stack: ["Progressive Overload", "Stress-Testing", "Deterministic Systems"],
  },
];

export default function FolioBehindSystems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = EXPERIENCES.length;

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? total - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === total - 1 ? 0 : curr + 1));
  };

  // Indices for Left, Center, and Right cards
  const leftIndex = (activeIndex - 1 + total) % total;
  const centerIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % total;

  return (
    <section 
      id="experience" 
      className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center bg-white text-[#121212] select-none border-t border-neutral-200 overflow-hidden"
    >
      {/* Top Section Header (Clean Minimalist Editorial) */}
      <div className="w-full max-w-6xl mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-widest text-coral uppercase block">
            SECTION 05 // CAREER &amp; OPERATIONAL HISTORY
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-1 text-[#121212]">
            Operational History.
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-500 max-w-xs tracking-wide">
          Select or scrub any card below to inspect production architecture and verified engineering milestones.
        </p>
      </div>

      {/* 3 White Floating Cards Row (Pixel-Matched to User Image Reference) */}
      <div className="w-full max-w-6xl relative py-8 px-2 flex items-center justify-center overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center w-full">
          
          {/* ================= LEFT CARD ================= */}
          <motion.div
            key={`left-${leftIndex}`}
            onClick={prev}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="hidden md:flex flex-col justify-between p-7 lg:p-8 rounded-[32px] bg-white border border-black/[0.08] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.12)] cursor-pointer h-[500px] transition-all relative overflow-hidden group opacity-85 hover:opacity-100"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-xs font-mono">
              <span className="text-neutral-400 font-bold uppercase text-[10px]">
                [{EXPERIENCES[leftIndex].index}] {EXPERIENCES[leftIndex].period}
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">
                PREVIOUS
              </span>
            </div>

            {/* Content */}
            <div className="space-y-3 my-auto">
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-[#141414] group-hover:text-coral transition-colors">
                {EXPERIENCES[leftIndex].role}
              </h3>
              <p className="text-xs font-medium text-neutral-500">
                {EXPERIENCES[leftIndex].company}
              </p>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                {EXPERIENCES[leftIndex].summary}
              </p>

              {/* Mini metric preview */}
              <div className="pt-2 border-t border-black/[0.06] flex items-center gap-3">
                <span className="text-sm font-bold font-mono text-[#141414]">
                  {EXPERIENCES[leftIndex].metrics[0].value}
                </span>
                <span className="text-[10px] font-sans text-neutral-400 truncate">
                  {EXPERIENCES[leftIndex].metrics[0].label}
                </span>
              </div>
            </div>

            {/* Footer Stack */}
            <div className="pt-3 border-t border-black/[0.06] flex flex-wrap gap-1">
              {EXPERIENCES[leftIndex].stack.slice(0, 3).map((s) => (
                <span key={s} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ================= CENTER FOCAL CARD (Active Luminous Rim) ================= */}
          <motion.div
            key={`center-${centerIndex}`}
            initial={{ scale: 0.98, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="relative flex flex-col justify-between p-7 sm:p-9 rounded-[32px] bg-white border border-black/[0.08] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.14),0_0_35px_rgba(244,114,182,0.22)] h-[540px] z-20 overflow-hidden"
          >
            {/* Subtle Iridescent Top-Right Rim Glow matching User's Middle Card Reference */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-bl from-pink-400/25 via-purple-300/15 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-pink-300/60 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[1.5px] bg-gradient-to-b from-pink-400/60 via-purple-300/40 to-transparent" />

            {/* Top Meta Line */}
            <div className="relative z-10 flex items-center justify-between border-b border-black/[0.08] pb-3.5 text-xs font-mono">
              <span className="text-coral font-bold tracking-wider uppercase text-[10px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                [{EXPERIENCES[centerIndex].index}] {EXPERIENCES[centerIndex].tag}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-semibold border border-neutral-200">
                {EXPERIENCES[centerIndex].period}
              </span>
            </div>

            {/* Center Card Body */}
            <div className="relative z-10 space-y-4 my-auto">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121212] leading-snug">
                  {EXPERIENCES[centerIndex].role}
                </h3>
                <p className="text-sm font-sans font-medium text-neutral-500 mt-1">
                  {EXPERIENCES[centerIndex].company}
                </p>
              </div>

              {/* Highlight Quote Box */}
              <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/80 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#141414] tracking-tight">
                  {EXPERIENCES[centerIndex].highlightTitle}
                </h4>
                <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                  {EXPERIENCES[centerIndex].highlightText}
                </p>
              </div>

              {/* 3 Concrete Telemetry Columns */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-black/[0.08]">
                {EXPERIENCES[centerIndex].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="space-y-0.5">
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block truncate">
                      {m.label}
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#121212] block">
                      {m.value}
                    </span>
                    <span className="text-[9px] font-sans text-neutral-500 block truncate">
                      {m.subtext}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="relative z-10 pt-3.5 border-t border-black/[0.08] flex flex-wrap gap-1.5">
              {EXPERIENCES[centerIndex].stack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200/80 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}
          <motion.div
            key={`right-${rightIndex}`}
            onClick={next}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="hidden md:flex flex-col justify-between p-7 lg:p-8 rounded-[32px] bg-white border border-black/[0.08] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.12)] cursor-pointer h-[500px] transition-all relative overflow-hidden group opacity-85 hover:opacity-100"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-xs font-mono">
              <span className="text-neutral-400 font-bold uppercase text-[10px]">
                [{EXPERIENCES[rightIndex].index}] {EXPERIENCES[rightIndex].period}
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">
                NEXT
              </span>
            </div>

            {/* Content */}
            <div className="space-y-3 my-auto">
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-[#141414] group-hover:text-coral transition-colors">
                {EXPERIENCES[rightIndex].role}
              </h3>
              <p className="text-xs font-medium text-neutral-500">
                {EXPERIENCES[rightIndex].company}
              </p>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                {EXPERIENCES[rightIndex].summary}
              </p>

              {/* Mini metric preview */}
              <div className="pt-2 border-t border-black/[0.06] flex items-center gap-3">
                <span className="text-sm font-bold font-mono text-[#141414]">
                  {EXPERIENCES[rightIndex].metrics[0].value}
                </span>
                <span className="text-[10px] font-sans text-neutral-400 truncate">
                  {EXPERIENCES[rightIndex].metrics[0].label}
                </span>
              </div>
            </div>

            {/* Footer Stack */}
            <div className="pt-3 border-t border-black/[0.06] flex flex-wrap gap-1">
              {EXPERIENCES[rightIndex].stack.slice(0, 3).map((s) => (
                <span key={s} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Tactical Controls: Glassy Chevrons & Indicators */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={prev}
          aria-label="Previous role"
          className="btn-liquid-glass w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all text-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dynamic Capsule Indicators */}
        <div className="flex items-center gap-2">
          {EXPERIENCES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to role ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? "w-7 bg-[#121212]" 
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next role"
          className="btn-liquid-glass w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all text-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <span className="text-xs font-mono font-semibold text-neutral-500 ml-3">
          0{activeIndex + 1} / 0{total}
        </span>
      </div>

    </section>
  );
}
