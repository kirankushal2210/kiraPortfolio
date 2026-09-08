"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Layers, 
  Network, 
  Sparkles,
  Zap
} from "lucide-react";

interface MilestoneData {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  domain: string;
  summary: string;
  primaryMetric: { value: string; label: string };
  specs: { label: string; value: string; detail: string }[];
  stack: string[];
  blueprintNodes: { name: string; type: string }[];
  accentColor: string;
}

const MILESTONES: MilestoneData[] = [
  {
    id: "independent-ai",
    number: "01",
    role: "Independent AI & Product Engineer",
    company: "Applied Systems & Research",
    period: "2025 — PRESENT",
    domain: "AUTONOMOUS MULTI-AGENT ORCHESTRATION & OFFLINE-FIRST TELEMETRY",
    summary:
      "Architecting end-to-end multi-agent consensus pipelines, offline-first health operating systems (HlthOS) rendering at strict 60-FPS, domain LLM fine-tuning, and deterministic local inference via vLLM.",
    primaryMetric: { value: "< 200ms", label: "INGESTION LATENCY" },
    specs: [
      { label: "DIAGNOSTIC INTAKE", value: "< 200ms", detail: "Deterministic Relational Schema" },
      { label: "BIOLOGICAL TELEMETRY", value: "Strict 60-FPS", detail: "Zero Jitter Across 4 Metabolic Pillars" },
      { label: "THROUGHPUT BOOST", value: "+40%", detail: "via PEFT/LoRA & vLLM Serving" },
      { label: "HALLUCINATION BOUND", value: "0.0%", detail: "Hybrid-RAG Clinical Document Grounding" },
    ],
    stack: ["Python", "vLLM", "LangChain", "Claude API", "React Native", "PostgreSQL"],
    blueprintNodes: [
      { name: "Client Ingest", type: "Mobile OS" },
      { name: "LangChain Agent", type: "Consensus" },
      { name: "Claude API", type: "Grounding" },
      { name: "vLLM Fast Worker", type: "Inference" },
      { name: "PostgreSQL Sink", type: "Relational" },
    ],
    accentColor: "#FF3B00",
  },
  {
    id: "tech-mahindra",
    number: "02",
    role: "Technical Associate",
    company: "Tech Mahindra",
    period: "OCT 2024 — APR 2025",
    domain: "ENTERPRISE INFRASTRUCTURE & SYSTEMS CONTINUITY",
    summary:
      "Provided high-stakes enterprise operational continuity for US retail chains, standardizing structured fault-isolation trees across POS hardware, cabling, and systems under strict SLAs.",
    primaryMetric: { value: "99.98%", label: "STORE CONTINUITY SLA" },
    specs: [
      { label: "STORE CONTINUITY SLA", value: "99.98%", detail: "High-Volume US Retail Enterprise Nodes" },
      { label: "TRIAGE VELOCITY", value: "-65% MTTR", detail: "Standardized Structured Fault Trees" },
      { label: "HARDWARE INTEGRITY", value: "100%", detail: "Physical Cabling Continuity Resolved" },
      { label: "ESCALATION ACCURACY", value: "Zero Delay", detail: "Cross-Squad Tier-3 Triage" },
    ],
    stack: ["Enterprise Systems", "Hardware Cabling", "Network Diagnostics", "Systems SLA"],
    blueprintNodes: [
      { name: "Retail Store POS", type: "Endpoint" },
      { name: "Layer 2/3 Switch", type: "Network" },
      { name: "Structured Triage", type: "Diagnosis" },
      { name: "Operations Center", type: "Escalation" },
      { name: "Uptime Lock", type: "Continuity" },
    ],
    accentColor: "#FF3B00",
  },
  {
    id: "suvidha",
    number: "03",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    period: "MAY 2023 — JUN 2023",
    domain: "FRONTEND ARCHITECTURE & DYNAMIC DATA WORKFLOWS",
    summary:
      "Engineered dynamic React frontend workflows for an academic PhD research repository, optimizing portal listing, responsive component systems, and resilient multipart data integration.",
    primaryMetric: { value: "sub-100ms", label: "SEARCH LATENCY" },
    specs: [
      { label: "SEARCH LATENCY", value: "sub-100ms", detail: "Optimized Dynamic Client State" },
      { label: "LAYOUT STABILITY", value: "0.00 CLS", detail: "Deterministic Tailwind UI Engine" },
      { label: "UPLOAD PIPELINE", value: "100% Flow", detail: "Multi-Part File Integration" },
      { label: "BREAKPOINT ACCURACY", value: "Responsive", detail: "Zero Layout Shift" },
    ],
    stack: ["React.js", "Tailwind CSS", "RESTful Data Flows", "TypeScript"],
    blueprintNodes: [
      { name: "Research Input", type: "Client UI" },
      { name: "React State Cache", type: "Context" },
      { name: "Tailwind Viewport", type: "0.00 CLS" },
      { name: "REST Endpoint", type: "Async Sink" },
      { name: "Asset Portal", type: "Archival" },
    ],
    accentColor: "#FF3B00",
  },
];

export default function Section05Experience3D() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = MILESTONES[activeIdx];

  // 3D Spatial Cursor Tracking
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-fidelity spring calibration: stiffness: 340, damping: 22, mass: 0.8
  const springConfig = { stiffness: 340, damping: 22, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseFromCenterX = (e.clientX - rect.left - width / 2) / width;
    const mouseFromCenterY = (e.clientY - rect.top - height / 2) / height;
    mouseX.set(mouseFromCenterX);
    mouseY.set(mouseFromCenterY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const prev = () => {
    setActiveIdx((curr) => (curr === 0 ? MILESTONES.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIdx((curr) => (curr === MILESTONES.length - 1 ? 0 : curr + 1));
  };

  return (
    <section 
      id="experience" 
      className="w-full min-h-[720px] py-24 sm:py-32 px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center bg-white text-[#0A0A0A] select-none border-t border-neutral-200 overflow-hidden"
    >
      {/* Top Section Header */}
      <div className="w-full max-w-6xl mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#FF3B00] uppercase block">
            SECTION 05 // WORK EXPERIENCE &amp; OPERATIONAL RECORD
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-1 text-[#0A0A0A]">
            Work Experience.
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-500 max-w-xs tracking-wide">
          Hover over the blueprint deck to project 3D spatial telemetry, live benchmarks, and system topology.
        </p>
      </div>

      {/* Main Two-Column Stage Spread (Matching Section 04.5 Layout Architecture) */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Stacked Depth 3D Projection Deck (md:col-span-6) */}
        <div className="md:col-span-6 relative flex items-center justify-center isolate [perspective:1200px]">
          
          {/* Depth Layer 2 (Furthest Back Offset Card) */}
          <div className="absolute w-72 sm:w-80 md:w-[370px] lg:w-[410px] aspect-[4/3] rounded-[36px] bg-neutral-200/90 rotate-6 translate-x-5 -translate-y-2 scale-90 -z-20 shadow-sm border border-black/5" />

          {/* Depth Layer 1 (Middle Offset Physical Backdrop) */}
          <div className="absolute w-72 sm:w-80 md:w-[370px] lg:w-[410px] aspect-[4/3] rounded-[36px] bg-neutral-300/80 -rotate-6 -translate-x-5 -translate-y-1 scale-95 -z-10 shadow-md border border-black/5" />

          {/* Active 3D Hover-Extruded Spatial Deck (Layer +1 to +3) */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.03 }}
            className="relative w-72 sm:w-80 md:w-[370px] lg:w-[410px] aspect-[4/3] rounded-[36px] bg-[#0A0A0E] text-white p-7 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-white/15 cursor-pointer z-10 overflow-hidden flex flex-col justify-between"
          >
            {/* Background Texture & Ambient Top Lighting */}
            <div className="absolute inset-0 bg-radial-at-t from-white/[0.08] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* ------------------------------------------------------------- */}
            {/* Z-DEPTH 20px: Schematic Linework, Waves & Grid Topology       */}
            {/* ------------------------------------------------------------- */}
            <div 
              className="relative z-10 w-full flex items-center justify-between border-b border-white/10 pb-3"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#FF3B00] uppercase font-bold">
                  STAGE {activeItem.number} // 3D BLUEPRINT
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                {activeItem.period}
              </span>
            </div>

            {/* Mid-Layer Animated Node Topology Wireframe */}
            <div 
              className="relative z-10 my-auto py-2 space-y-3"
              style={{ transform: "translateZ(25px)" }}
            >
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">
                SYSTEM TOPOLOGY PIPELINE:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                {activeItem.blueprintNodes.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-center shrink-0 min-w-[70px]">
                      <span className="text-[10px] font-mono text-white block font-semibold truncate">
                        {node.name}
                      </span>
                      <span className="text-[8px] font-mono text-neutral-400 block uppercase">
                        {node.type}
                      </span>
                    </div>
                    {nIdx < activeItem.blueprintNodes.length - 1 && (
                      <span className="text-neutral-500 font-mono text-xs select-none">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Z-DEPTH 45px: High-Contrast Benchmark Pills                   */}
            {/* ------------------------------------------------------------- */}
            <div 
              className="relative z-20 grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10"
              style={{ transform: "translateZ(45px)" }}
            >
              {activeItem.specs.slice(0, 2).map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                  <span className="text-[9px] font-mono uppercase text-neutral-400 block truncate">
                    {s.label}
                  </span>
                  <span className="text-sm font-mono font-bold text-white block mt-0.5">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Z-DEPTH 70px (Apex): Floating Glass/Acrylic HUD Lens           */}
            {/* ------------------------------------------------------------- */}
            <div 
              className="absolute -bottom-3 -right-3 bg-black/85 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex items-center gap-3 z-30"
              style={{ transform: "translateZ(70px)" }}
            >
              <div className="w-8 h-8 rounded-full bg-[#FF3B00]/15 border border-[#FF3B00]/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#FF3B00]" />
              </div>
              <div>
                <span className="text-[8px] font-mono uppercase text-neutral-400 tracking-wider block">
                  {activeItem.primaryMetric.label}
                </span>
                <span className="text-base font-mono font-black text-white tracking-tight block">
                  {activeItem.primaryMetric.value}
                </span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Right Column: Clean Editorial Narrative & Triggers (md:col-span-6) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Domain & Title */}
              <div>
                <span className="text-xs font-mono font-bold text-[#FF3B00] uppercase tracking-wider block">
                  {activeItem.company} · {activeItem.period}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0A0A0A] mt-1 leading-tight">
                  {activeItem.role}
                </h3>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                  DOMAIN // {activeItem.domain}
                </span>
              </div>

              {/* Narrative */}
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal pt-1">
                {activeItem.summary}
              </p>

              {/* 4 Live Spec Readout Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeItem.specs.map((spec, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3 rounded-2xl border border-neutral-200 bg-neutral-50/70 hover:border-neutral-300 transition-colors"
                  >
                    <span className="text-[9px] font-mono uppercase text-neutral-500 block truncate">
                      {spec.label}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-[#0A0A0A] block mt-0.5">
                      {spec.value}
                    </span>
                    <span className="text-[10px] font-sans text-neutral-500 block truncate mt-0.5">
                      {spec.detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Minimal Tech Stack Arsenal */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeItem.stack.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1 rounded-lg border border-neutral-200 text-neutral-800 bg-white hover:border-[#FF3B00] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Dual Circular Navigation Controls (Matching Section 04.5) */}
          <div className="flex items-center gap-4 pt-4 border-t border-black/10">
            <button
              onClick={prev}
              aria-label="Previous milestone"
              className="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-black transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={next}
              aria-label="Next milestone"
              className="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-black transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Pagination Capsules */}
            <div className="flex items-center gap-2 ml-2">
              {MILESTONES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Jump to milestone ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === idx 
                      ? "w-8 bg-[#121212]" 
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-mono font-medium text-neutral-500 ml-auto">
              0{activeIdx + 1} / 0{MILESTONES.length}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
