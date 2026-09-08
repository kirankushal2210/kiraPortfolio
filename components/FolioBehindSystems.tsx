"use client";

import React, { useState, useRef, useCallback } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";
import { 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Layers, 
  CheckCircle2,
  Sparkles,
  Zap,
  Maximize2,
  X,
  Terminal,
  Network,
  Radio,
  ArrowUpRight
} from "lucide-react";

interface TelemetryMetric {
  label: string;
  value: string;
  subtext: string;
  detail: string;
  pct: number;
}

interface WorkExperienceItem {
  id: string;
  index: string;
  role: string;
  company: string;
  period: string;
  tag: string;
  summary: string;
  highlightTitle: string;
  highlightText: string;
  architectureType: "neural" | "infrastructure" | "component-stack";
  systemBadge: string;
  metrics: TelemetryMetric[];
  stack: string[];
  deepDive: {
    systemArchitecture: string;
    runtimeTelemetry: string[];
    benchmarkQuote: string;
  };
}

const EXPERIENCES: WorkExperienceItem[] = [
  {
    id: "independent-ai",
    index: "01",
    role: "Independent AI & Web Developer",
    company: "Applied Systems & Research",
    period: "2025 — PRESENT",
    tag: "AUTONOMOUS AI & WEB",
    summary:
      "Architecting end-to-end multi-agent consensus pipelines, offline-first health operating systems (HlthOS) rendering at strict 60 FPS, domain LLM fine-tuning, and full-stack web applications.",
    highlightTitle: "Deterministic Fallback Engine",
    highlightText:
      "Engineered parallel mathematical fallback systems enforcing 100% computational guardrails on dynamic nutrition and biometric protocols.",
    architectureType: "neural",
    systemBadge: "MULTI-AGENT CONSENSUS // HlthOS",
    metrics: [
      { 
        label: "INGESTION", 
        value: "< 200ms", 
        subtext: "16-pt intake",
        detail: "Parallel stream intake across 16 biometric and nutrition sensor vectors with zero queue starvation.",
        pct: 94
      },
      { 
        label: "ACCURACY", 
        value: "0.0% RAG", 
        subtext: "Clinical grounding",
        detail: "Deterministic AST validation completely prevents LLM hallucination in clinical advisory loops.",
        pct: 100
      },
      { 
        label: "vLLM GAIN", 
        value: "+40%", 
        subtext: "PEFT / LoRA boost",
        detail: "Custom quantized LoRA adapters running high-throughput inference on isolated GPU worker pools.",
        pct: 88
      },
    ],
    stack: ["Python", "Next.js", "React", "vLLM", "LangChain", "PostgreSQL"],
    deepDive: {
      systemArchitecture: "Decoupled Autonomous Agent Swarm (Planner + Critic + Mathematical Fallback Solver)",
      runtimeTelemetry: [
        "Offline SQLite WASM local database syncing with zero dropped packets",
        "Deterministic heuristic validator guarding 100% of LLM diet & metabolic proposals",
        "Sub-16ms React canvas re-renders adhering strictly to mobile 60 FPS thermal limits"
      ],
      benchmarkQuote: "Zero hallucination drift across 10,000+ simulated clinical intake scenarios."
    }
  },
  {
    id: "tech-mahindra",
    index: "02",
    role: "Technical Associate",
    company: "Tech Mahindra",
    period: "OCT 2024 — APR 2025",
    tag: "ENTERPRISE INFRASTRUCTURE",
    summary:
      "Provided high-stakes enterprise operational continuity for US retail chains, standardizing structured fault-isolation trees across POS hardware, cabling, and systems under strict enterprise SLAs.",
    highlightTitle: "Structured Fault Isolation",
    highlightText:
      "Isolated network bottlenecks, resolved physical cabling anomalies, and sustained a 99.98% operational uptime across high-volume retail store nodes.",
    architectureType: "infrastructure",
    systemBadge: "HIGH-AVAILABILITY CLUSTER // SLA 99.98%",
    metrics: [
      { 
        label: "STORE SLA", 
        value: "99.98%", 
        subtext: "Uptime lock",
        detail: "24/7 mission-critical node availability across distributed US retail store terminals.",
        pct: 99
      },
      { 
        label: "VELOCITY", 
        value: "-65% MTTR", 
        subtext: "Triage trees",
        detail: "Standardized algorithmic decision trees reducing Mean Time To Resolution from 45m to under 15m.",
        pct: 85
      },
      { 
        label: "CONTINUITY", 
        value: "100%", 
        subtext: "Zero cabling drops",
        detail: "Structured hardware cabling integrity checks with zero physical disconnects reported.",
        pct: 100
      },
    ],
    stack: ["Enterprise Systems", "Network Continuity", "Hardware Cabling", "Linux"],
    deepDive: {
      systemArchitecture: "Distributed POS Terminal Mesh with Multi-Homed Network Routing & Fallback Switches",
      runtimeTelemetry: [
        "Autonomous heartbeat monitoring across active transaction processing lines",
        "Deterministic physical cable trace maps minimizing field engineer dispatch latency",
        "Hardened Linux terminal baseline images with rapid recovery snapshot protocols"
      ],
      benchmarkQuote: "Protected multi-million dollar holiday transaction cycles with zero SLA penalties."
    }
  },
  {
    id: "suvidha",
    index: "03",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    period: "MAY 2023 — JUN 2023",
    tag: "FRONTEND ARCHITECTURE",
    summary:
      "Engineered dynamic React frontend workflows for an academic PhD research repository featuring real-time project search, listing, and multi-part upload pipelines with zero layout drift.",
    highlightTitle: "Zero Layout Shift UI",
    highlightText:
      "Constructed modular component libraries using Tailwind CSS, achieving zero cumulative layout shift and sub-100ms interaction latency.",
    architectureType: "component-stack",
    systemBadge: "60-FPS COMPONENT PIPELINE // ZERO-CLS",
    metrics: [
      { 
        label: "QUERY SPEED", 
        value: "sub-100ms", 
        subtext: "Search caching",
        detail: "Debounced in-memory index queries updating academic dissertation lists instantaneously.",
        pct: 92
      },
      { 
        label: "LAYOUT SHIFT", 
        value: "0.00 CLS", 
        subtext: "Tailwind engine",
        detail: "Strict container aspect ratios and reserved skeleton viewports eliminating layout reflow.",
        pct: 100
      },
      { 
        label: "PIPELINE", 
        value: "100%", 
        subtext: "Multipart intake",
        detail: "Resilient chunked multi-part research document uploads with client-side checksum verification.",
        pct: 96
      },
    ],
    stack: ["React.js", "Tailwind CSS", "TypeScript", "RESTful APIs"],
    deepDive: {
      systemArchitecture: "Modular Atomic React Component Tree with Pre-Computed Tailwind Layout Tokens",
      runtimeTelemetry: [
        "Chunked binary upload handler featuring client-side SHA256 integrity validation",
        "Virtual scrolling matrix supporting 5,000+ research publication records seamlessly",
        "Accessible WCAG 2.1 AA keyboard navigation and screen-reader compliant focus rings"
      ],
      benchmarkQuote: "Achieved a verified 98+ Google Lighthouse Performance and Accessibility rating."
    }
  },
];

/* -------------------------------------------------------------------------- */
/* 3D HOLOGRAPHIC ANIMATED STAGES FOR EACH ARCHITECTURE TYPE                  */
/* -------------------------------------------------------------------------- */

function Neural3DStage({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 [perspective:800px] select-none transition-all duration-500">
      {/* Dynamic ambient grid background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,87,34,0.4) 1px, transparent 0)",
          backgroundSize: "16px 16px"
        }}
      />

      {/* Orbiting Laser Ring 1 */}
      <div 
        className={`absolute w-24 h-24 rounded-full border border-coral/40 [transform:rotateX(68deg)] pointer-events-none transition-all duration-700 ${
          isHovered ? "scale-110 border-coral shadow-[0_0_20px_rgba(255,87,34,0.4)]" : "opacity-40"
        }`}
      />

      {/* Counter-rotating Orbiting Ring 2 */}
      <div 
        className={`absolute w-20 h-20 rounded-full border border-dashed border-cyan-400/50 [transform:rotateY(68deg)] pointer-events-none transition-all duration-700 ${
          isHovered ? "scale-115 border-cyan-400 animate-[spin_10s_linear_infinite]" : "opacity-30"
        }`}
      />

      {/* 3D Wireframe Singularity Sphere */}
      <div className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-800 border border-coral/50 flex items-center justify-center shadow-lg transition-transform duration-500 ${
        isHovered ? "scale-125 [transform:translateZ(30px)] shadow-[0_0_30px_rgba(255,87,34,0.5)]" : ""
      }`}>
        <svg
          className={`w-10 h-10 text-coral/80 pointer-events-none ${isHovered ? "animate-[spin_12s_linear_infinite]" : ""}`}
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="20" cy="20" rx="18" ry="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <ellipse cx="20" cy="20" rx="7" ry="18" stroke="rgba(255,87,34,0.6)" strokeWidth="1" />
          <circle cx="20" cy="20" r="3" fill="#FF5722" className="animate-ping" />
        </svg>
        <Cpu className="absolute w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </div>

      {/* Orbiting Agent Nodes in 3D Space */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute -translate-x-12 -translate-y-6 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 border border-coral/40 text-[9px] font-mono text-coral shadow-md animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
          <span>PLANNER</span>
        </div>
        <div className="absolute translate-x-12 translate-y-6 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 border border-cyan-400/40 text-[9px] font-mono text-cyan-300 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>SOLVER</span>
        </div>
      </div>

      {/* Telemetry HUD Badge */}
      <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-1.5">
        <span className="text-coral flex items-center gap-1">
          <Radio className="w-2.5 h-2.5 animate-pulse" /> 60 FPS SYNC
        </span>
        <span className="text-neutral-300">0.0% RAG DRIFT</span>
      </div>
    </div>
  );
}

function Infrastructure3DStage({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 [perspective:800px] select-none transition-all duration-500">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "14px 14px"
        }}
      />

      {/* 3D Isometric Server Chassis Stack */}
      <div className={`relative z-10 flex flex-col gap-1.5 transition-all duration-500 ${
        isHovered ? "scale-110 [transform:rotateX(22deg)_rotateY(-18deg)_translateZ(20px)]" : "[transform:rotateX(15deg)_rotateY(-12deg)]"
      }`}>
        {[0, 1, 2].map((slot) => (
          <div 
            key={slot}
            className={`w-44 h-6 rounded-md bg-neutral-950 border border-neutral-700/80 px-2.5 flex items-center justify-between shadow-md transition-all duration-300 ${
              isHovered && slot === 1 ? "border-emerald-400/70 shadow-[0_0_15px_rgba(52,211,153,0.3)] bg-neutral-900" : ""
            }`}
          >
            {/* Server Rack Vent Lines */}
            <div className="flex items-center gap-1">
              <Server className="w-3 h-3 text-neutral-400" />
              <div className="flex gap-0.5">
                {[0, 1, 2, 3].map((bar) => (
                  <span key={bar} className="w-1.5 h-2.5 rounded-[1px] bg-neutral-800 block" />
                ))}
              </div>
            </div>

            {/* Pulsing Status LEDs */}
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${
                slot === 0 ? "bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" :
                slot === 1 ? "bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]" :
                "bg-amber-400"
              }`} />
              <span className="text-[8px] font-mono text-neutral-400">
                NODE_0{slot + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Optical Bus Cables */}
      <div className={`absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />

      {/* Telemetry HUD Footer */}
      <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-1.5">
        <span className="text-emerald-400 flex items-center gap-1">
          <ShieldCheck className="w-2.5 h-2.5" /> 99.98% SLA LOCK
        </span>
        <span className="text-neutral-300">0 HARDWARE DROPS</span>
      </div>
    </div>
  );
}

function ComponentStack3DStage({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 [perspective:800px] select-none transition-all duration-500">
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)",
          backgroundSize: "12px 12px"
        }}
      />

      {/* 3D Floating Component Planes */}
      <div className={`relative z-10 flex flex-col items-center justify-center transition-all duration-500 ${
        isHovered ? "scale-115 [transform:rotateX(55deg)_rotateZ(-25deg)_translateZ(25px)]" : "[transform:rotateX(50deg)_rotateZ(-20deg)]"
      }`}>
        {/* Layer 3: UI Viewport */}
        <div className={`w-36 h-9 rounded-lg bg-blue-500/20 border border-blue-400/80 backdrop-blur-md flex items-center justify-between px-3 shadow-lg -mb-3 transition-transform duration-500 ${
          isHovered ? "-translate-y-4 shadow-[0_10px_20px_rgba(59,130,246,0.3)] bg-blue-500/30" : ""
        }`}>
          <span className="text-[9px] font-mono text-blue-200 font-bold">0.00 CLS UI</span>
          <Layers className="w-3 h-3 text-blue-300" />
        </div>

        {/* Layer 2: Virtual DOM / Engine */}
        <div className={`w-36 h-9 rounded-lg bg-neutral-900/90 border border-neutral-700 flex items-center justify-between px-3 shadow-md -mb-3 transition-transform duration-500 ${
          isHovered ? "-translate-y-1.5 border-coral/60" : ""
        }`}>
          <span className="text-[9px] font-mono text-neutral-300">REACT VDOM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
        </div>

        {/* Layer 1: Data Intake & Multi-Part API */}
        <div className="w-36 h-9 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between px-3 shadow-sm">
          <span className="text-[9px] font-mono text-neutral-400">DISSERTATION API</span>
          <span className="text-[8px] font-mono text-emerald-400">&lt;100ms</span>
        </div>
      </div>

      {/* Telemetry HUD Footer */}
      <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-1.5">
        <span className="text-blue-400 flex items-center gap-1">
          <Zap className="w-2.5 h-2.5" /> SUB-100MS CACHE
        </span>
        <span className="text-neutral-300">100% MULTIPART</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TACTILE 3D CARD WRAPPER WITH REAL-TIME GYRO TILT & SPECULAR GLARE          */
/* -------------------------------------------------------------------------- */

interface ExperienceCard3DProps {
  exp: WorkExperienceItem;
  onOpenDeepDive: (exp: WorkExperienceItem) => void;
}

function ExperienceCard3D({ exp, onOpenDeepDive }: ExperienceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMetricHover, setActiveMetricHover] = useState<TelemetryMetric | null>(null);

  // Framer Motion spring physics for 3D gyro tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 280,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 280,
    damping: 24,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xFromCenter = (e.clientX - rect.left) / width - 0.5;
    const yFromCenter = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xFromCenter);
    mouseY.set(yFromCenter);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setActiveMetricHover(null);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-[32px] bg-white border border-black/[0.08] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.16)] transition-shadow duration-300 p-6 sm:p-7 flex flex-col justify-between group min-h-[580px] select-none [perspective:1000px]"
    >
      {/* Specular Radial Spotlight Glare Following Cursor */}
      <div 
        className="absolute inset-0 rounded-[32px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(255, 87, 34, 0.06), transparent 70%)"
        }}
      />

      {/* Top Specular Edge Sheen */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent rounded-t-[32px]" />

      {/* Top Header / Meta Line with 3D Depth */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-xs font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="text-neutral-400 font-bold uppercase text-[10px]">
            [{exp.index}] {exp.period}
          </span>
        </div>
        <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-neutral-200 text-neutral-700 bg-neutral-50 font-medium">
          {exp.tag}
        </span>
      </div>

      {/* 3D Dynamic Animated Spatial Viewport Stage */}
      <div 
        style={{ transform: "translateZ(35px)" }}
        className="my-3 relative cursor-pointer"
        onClick={() => onOpenDeepDive(exp)}
        title="Click to expand architecture telemetry blueprint"
      >
        {exp.architectureType === "neural" && <Neural3DStage isHovered={isHovered} />}
        {exp.architectureType === "infrastructure" && <Infrastructure3DStage isHovered={isHovered} />}
        {exp.architectureType === "component-stack" && <ComponentStack3DStage isHovered={isHovered} />}

        {/* Hover Blueprint Quick-Trigger Pill */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="w-2.5 h-2.5 text-coral" />
          <span>BLUEPRINT</span>
        </div>
      </div>

      {/* Card Core Content with Z-axis Layering */}
      <div 
        style={{ transform: "translateZ(25px)" }}
        className="space-y-3.5 my-auto"
      >
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-[#121212] group-hover:text-coral transition-colors">
              {exp.role}
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
            {exp.company}
          </p>
        </div>

        <p className="text-xs text-neutral-600 leading-relaxed font-normal">
          {exp.summary}
        </p>

        {/* Engineering Highlight Box with Subtle Micro-extrusion */}
        <div 
          style={{ transform: "translateZ(18px)" }}
          className="border-l-2 border-neutral-300 pl-3.5 py-0.5 space-y-1 hover:border-coral transition-colors"
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-coral" />
            <h4 className="text-xs font-bold text-[#121212] tracking-tight">
              {exp.highlightTitle}
            </h4>
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {exp.highlightText}
          </p>
        </div>

        {/* 3 Telemetry Metric Columns with Interactive Pop-Up Hover HUD */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="grid grid-cols-3 gap-2 pt-3 border-t border-black/[0.06] relative"
        >
          {exp.metrics.map((m, mIdx) => (
            <div 
              key={mIdx} 
              onMouseEnter={() => setActiveMetricHover(m)}
              onMouseLeave={() => setActiveMetricHover(null)}
              className="space-y-0.5 p-1.5 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-black/[0.08] transition-all cursor-crosshair group/metric"
            >
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block truncate">
                {m.label}
              </span>
              <span className="text-sm sm:text-base font-mono font-bold text-[#121212] group-hover/metric:text-coral block">
                {m.value}
              </span>
              <span className="text-[9px] font-sans text-neutral-500 block truncate">
                {m.subtext}
              </span>
            </div>
          ))}

          {/* Floating Hover Telemetry Pop-Up Tooltip ("whenever I hover my mouse a 3d animation pops up") */}
          <AnimatePresence>
            {activeMetricHover && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: -4, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="absolute -top-16 inset-x-2 z-40 bg-neutral-900/95 backdrop-blur-md text-white p-2.5 rounded-xl border border-neutral-700 shadow-2xl pointer-events-none"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-coral mb-1">
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5 animate-pulse" />
                    {activeMetricHover.label}: {activeMetricHover.value}
                  </span>
                  <span className="text-neutral-400">{activeMetricHover.pct}% VERIFIED</span>
                </div>
                <p className="text-[10px] text-neutral-300 leading-snug">
                  {activeMetricHover.detail}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Stack - Clean Minimalist Transparent Badges with Extrusion Depth */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="pt-3 border-t border-black/[0.06] flex items-center justify-between gap-2"
      >
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-neutral-200 text-neutral-600 bg-white hover:border-black/30 hover:text-black transition-colors"
            >
              {t}
            </span>
          ))}
          {exp.stack.length > 4 && (
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md text-neutral-400 bg-neutral-100">
              +{exp.stack.length - 4}
            </span>
          )}
        </div>

        {/* Action Button: Explore 3D Blueprint */}
        <button
          onClick={() => onOpenDeepDive(exp)}
          className="text-neutral-400 hover:text-coral transition-colors p-1"
          title="Inspect Telemetry Blueprint"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* FULL-SCALE 3D ARCHITECTURAL TELEMETRY MODAL                                 */
/* -------------------------------------------------------------------------- */

function ExperienceDeepDiveModal({
  exp,
  onClose,
}: {
  exp: WorkExperienceItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md select-none"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative w-full max-w-2xl bg-[#0D0E12] text-white border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Rim Glow */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-coral to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono text-coral font-bold tracking-widest uppercase block">
              3D TELEMETRY BLUEPRINT // [{exp.index}]
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
              {exp.role}
            </h3>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">
              {exp.company} • {exp.period}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Architectural Stage Display */}
        <div className="my-5">
          {exp.architectureType === "neural" && <Neural3DStage isHovered={true} />}
          {exp.architectureType === "infrastructure" && <Infrastructure3DStage isHovered={true} />}
          {exp.architectureType === "component-stack" && <ComponentStack3DStage isHovered={true} />}
        </div>

        {/* Architecture Spec */}
        <div className="space-y-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
            <p className="text-neutral-200 font-medium leading-relaxed">
              {exp.deepDive.systemArchitecture}
            </p>
          </div>

          {/* Operational Telemetry Points */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              VERIFIED RUNTIME TELEMETRY
            </span>
            <div className="space-y-1.5">
              {exp.deepDive.runtimeTelemetry.map((telemetry, idx) => (
                <div key={idx} className="flex items-start gap-2 text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                  <span className="leading-snug">{telemetry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Quote */}
          <div className="p-3 rounded-xl bg-coral/10 border border-coral/20 text-coral-light font-mono text-[11px]">
            &ldquo;{exp.deepDive.benchmarkQuote}&rdquo;
          </div>

          {/* Tech Stack List */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {exp.stack.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-mono text-neutral-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN FOLIO SECTION COMPONENT                                               */
/* -------------------------------------------------------------------------- */

export default function FolioBehindSystems() {
  const [selectedDeepDive, setSelectedDeepDive] = useState<WorkExperienceItem | null>(null);

  return (
    <section 
      id="experience" 
      className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center bg-white text-[#121212] select-none border-t border-neutral-200 overflow-hidden"
    >
      {/* Top Section Header */}
      <div className="w-full max-w-6xl mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-widest text-coral uppercase block">
            SECTION 05 // CAREER &amp; WORK EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-1 text-[#121212]">
            Work Experience.
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-500 max-w-xs tracking-wide">
          Tactile 3D spatial artifact system. Hover over cards and telemetry metrics to initialize live operational animations.
        </p>
      </div>

      {/* 3 Display Cards Side-by-Side with Tactile 3D Hover Extrusion */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard3D 
              key={exp.id} 
              exp={exp} 
              onOpenDeepDive={(item) => setSelectedDeepDive(item)} 
            />
          ))}
        </div>
      </div>

      {/* Full Telemetry Deep Dive Modal */}
      <AnimatePresence>
        {selectedDeepDive && (
          <ExperienceDeepDiveModal 
            exp={selectedDeepDive} 
            onClose={() => setSelectedDeepDive(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

