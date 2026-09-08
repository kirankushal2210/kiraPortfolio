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
  Server, 
  Layers, 
  CheckCircle2 
} from "lucide-react";

interface ExperienceCard {
  id: string;
  index: string;
  role: string;
  company: string;
  period: string;
  tag: string;
  summary: string;
  quoteTitle: string;
  quoteText: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  bgGradient: string;
  image: string;
}

const EXPERIENCES: ExperienceCard[] = [
  {
    id: "independent-ai",
    index: "01",
    role: "Independent AI & Product Engineer",
    company: "Applied Systems Research",
    period: "2025 — PRESENT",
    tag: "AUTONOMOUS MULTI-AGENT SYSTEMS",
    summary:
      "Architecting end-to-end multi-agent consensus pipelines, offline-first biological OS (HlthOS) rendering at strict 60 FPS, and domain LLM inference via vLLM and PEFT.",
    quoteTitle: "Zero Hallucination Architecture",
    quoteText:
      "Deterministic computational guardrails enforcing 100% precision over clinical recommendations and real-time biometrics.",
    metrics: [
      { label: "INGESTION LATENCY", value: "< 200ms" },
      { label: "GROUNDING ACCURACY", value: "0.0% RAG" },
      { label: "vLLM THROUGHPUT", value: "+40% BOOST" },
    ],
    stack: ["Python", "vLLM", "LangChain", "Claude API", "PostgreSQL", "React Native"],
    bgGradient: "from-[#080914] via-[#0E1126] to-[#05060A]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
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
    quoteTitle: "Operational Continuity",
    quoteText:
      "Standardized structured fault-isolation trees to accelerate issue triage and eliminate repeated hardware disconnects.",
    metrics: [
      { label: "STORE UPTIME SLA", value: "99.98%" },
      { label: "RESOLUTION VELOCITY", value: "-65% MTTR" },
      { label: "CABLING FAULTS", value: "100% Resolved" },
    ],
    stack: ["Enterprise Diagnostics", "Network Continuity", "Hardware Cabling", "Linux"],
    bgGradient: "from-[#0B1015] via-[#101A24] to-[#05080C]",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
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
    quoteTitle: "Zero Layout Drift",
    quoteText:
      "Constructed modular component libraries achieving zero cumulative layout shift and sub-100ms UI interaction budgets.",
    metrics: [
      { label: "PORTAL QUERY TIME", value: "sub-100ms" },
      { label: "LAYOUT SHIFT", value: "0.00 CLS" },
      { label: "UPLOAD INTEGRITY", value: "100% Flow" },
    ],
    stack: ["React.js", "Tailwind CSS", "TypeScript", "RESTful Data Integration"],
    bgGradient: "from-[#090C16] via-[#12192F] to-[#060810]",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
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
    quoteTitle: "Progressive Overload",
    quoteText:
      "Tenacity under heavy barbell training directly translates into unwavering stamina during deep debugging and mission-critical production incidents.",
    metrics: [
      { label: "METHODOLOGY", value: "Progressive Overload" },
      { label: "GUARDRAILS", value: "Deterministic" },
      { label: "EXECUTION ERROR", value: "Zero Tolerance" },
    ],
    stack: ["Progressive Overload", "Stress-Testing", "Deterministic Systems"],
    bgGradient: "from-[#140C0A] via-[#24130F] to-[#0A0605]",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FolioBehindSystems() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? EXPERIENCES.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === EXPERIENCES.length - 1 ? 0 : curr + 1));
  };

  return (
    <section 
      id="experience" 
      className="w-full py-24 sm:py-32 px-6 md:px-16 flex flex-col items-center justify-center bg-white text-[#121212] select-none border-t border-neutral-200 overflow-hidden"
    >
      {/* Top Section Header (Identical Black & White Style to Live Production Demos) */}
      <div className="w-full max-w-5xl mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-widest text-coral uppercase block">
            SECTION 05 // CAREER &amp; OPERATIONAL HISTORY
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-1 text-[#121212]">
            Operational History.
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-500 max-w-xs tracking-wide">
          Select or scrub any node in the kinetic 3D deck below to inspect production architecture and verified milestones.
        </p>
      </div>

      {/* Kinetic 3D Fanning Deck Stage (Pixel-Matched to Reference Picture 1) */}
      <div className="w-full max-w-5xl relative min-h-[580px] flex items-center justify-center [perspective:1400px]">
        <div className="relative w-full h-[520px] flex items-center justify-center">
          {EXPERIENCES.map((card, index) => {
            const count = EXPERIENCES.length;
            // Calculate circular offset relative to activeIndex
            let diff = index - activeIndex;
            if (diff > count / 2) diff -= count;
            if (diff < -count / 2) diff += count;

            const isCenter = diff === 0;
            const isLeft = diff === -1 || (diff === count - 1 && count > 2);
            const isRight = diff === 1 || (diff === -(count - 1) && count > 2);
            const isHidden = !isCenter && !isLeft && !isRight;

            // 3D Arc Physics
            let xPos = 0;
            let rotateY = 0;
            let rotateZ = 0;
            let scale = 0.9;
            let zIndex = 10;
            let opacity = 0.6;

            if (isCenter) {
              xPos = 0;
              rotateY = 0;
              rotateZ = 0;
              scale = 1.02;
              zIndex = 30;
              opacity = 1;
            } else if (isLeft) {
              xPos = -320;
              rotateY = 12;
              rotateZ = -4;
              scale = 0.88;
              zIndex = 20;
              opacity = 0.75;
            } else if (isRight) {
              xPos = 320;
              rotateY = -12;
              rotateZ = 4;
              scale = 0.88;
              zIndex = 20;
              opacity = 0.75;
            } else {
              xPos = diff * 400;
              scale = 0.7;
              opacity = 0;
              zIndex = 5;
            }

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: xPos,
                  rotateY: rotateY,
                  rotateZ: rotateZ,
                  scale: scale,
                  opacity: isHidden ? 0 : opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 26,
                }}
                style={{
                  zIndex,
                  pointerEvents: isHidden ? "none" : "auto",
                  transformStyle: "preserve-3d",
                }}
                className={`absolute w-[300px] sm:w-[350px] md:w-[380px] h-[500px] sm:h-[520px] rounded-[36px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 bg-gradient-to-b ${card.bgGradient} text-white border ${
                  isCenter
                    ? "border-white/25 shadow-[0_30px_70px_rgba(0,0,0,0.35)] ring-1 ring-white/20"
                    : "border-white/10 hover:border-white/20 shadow-lg"
                }`}
              >
                {/* Background Specular Flare & Texture Overlay */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Top Meta Line */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-coral font-bold tracking-wider uppercase text-[10px]">
                    {card.tag}
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    {card.period}
                  </span>
                </div>

                {/* Main Card Body */}
                <div className="relative z-10 space-y-4 my-auto">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                      {card.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans font-medium text-neutral-400 mt-1">
                      {card.company}
                    </p>
                  </div>

                  {/* Highlight Quote Block (Similar to "The greatest trick" in reference) */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1 backdrop-blur-md">
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {card.quoteTitle}
                    </h4>
                    <p className="text-xs font-sans text-neutral-300 leading-relaxed font-normal">
                      {card.quoteText}
                    </p>
                  </div>

                  {/* Telemetry Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                    {card.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <span className="text-[9px] font-mono text-neutral-400 block uppercase tracking-wider truncate">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-white block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {card.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Controls: Glassy Liquid Chevrons & Pill Pagination */}
      <div className="flex items-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous milestone"
          className="btn-liquid-glass w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all text-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dynamic Indicator Dots */}
        <div className="flex items-center gap-2">
          {EXPERIENCES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to milestone ${idx + 1}`}
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
          aria-label="Next milestone"
          className="btn-liquid-glass w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all text-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <span className="text-xs font-mono font-semibold text-neutral-500 ml-4">
          0{activeIndex + 1} / 0{EXPERIENCES.length}
        </span>
      </div>

    </section>
  );
}
