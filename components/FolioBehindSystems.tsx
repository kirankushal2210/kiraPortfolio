"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Activity,
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  Dumbbell,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Server,
  Layers,
  Network
} from "lucide-react";

interface Milestone {
  id: string;
  index: string;
  period: string;
  role: string;
  company: string;
  statusBadge: string;
  category: string;
  architectureNodes: { label: string; desc: string; icon: React.ComponentType<{ className?: string }> }[];
  pillars: {
    title: string;
    detail: string;
  }[];
  telemetry: {
    label: string;
    value: string;
    subtext: string;
  }[];
  stack: string[];
}

const MILESTONES: Milestone[] = [
  {
    id: "independent-ai",
    index: "01",
    period: "2025 — PRESENT",
    role: "Independent AI & Product Engineer",
    company: "Independent Systems & Research",
    statusBadge: "ACTIVE R&D & PRODUCTION",
    category: "Autonomous AI, Biological OS & Hybrid-RAG",
    architectureNodes: [
      { label: "BIOMETRIC INTAKE", desc: "16-pt Onboarding (<200ms)", icon: Activity },
      { label: "RELATIONAL SCHEMA", desc: "PostgreSQL Engine", icon: Database },
      { label: "HYBRID-RAG CORE", desc: "Pinecone + Claude API", icon: Network },
      { label: "vLLM LoRA ENGINE", desc: "+40% Inference Boost", icon: Cpu },
      { label: "DETERMINISTIC GUARD", desc: "100% Bound Accuracy", icon: ShieldCheck },
    ],
    pillars: [
      {
        title: "Offline-First Biological Telemetry OS (HlthOS)",
        detail:
          "Engineered an offline-first biological operating system managing 4 core pillars (Nutrition, Training, Recovery, AI Coaching) maintaining a strict 60-FPS rendering lock across real-time telemetry graphs.",
      },
      {
        title: "Zero-Hallucination Hybrid-RAG Architecture",
        detail:
          "Architected vector embeddings across thousands of peer-reviewed clinical documents via Claude API, driving clinical hallucinations to 0.0% with sub-200ms diagnostic onboarding latency.",
      },
      {
        title: "Domain LLM Fine-Tuning & vLLM Optimization",
        detail:
          "Fine-tuned domain models via PyTorch & PEFT LoRA adapters, deploying high-concurrency vLLM serving to boost inference throughput by 40% alongside a parallel mathematical fallback bounding engine.",
      },
    ],
    telemetry: [
      { label: "INTAKE LATENCY", value: "< 200ms", subtext: "Sub-second biometric ingestion" },
      { label: "HALLUCINATION RATE", value: "0.0% RAG", subtext: "Clinical grounding via Claude" },
      { label: "vLLM THROUGHPUT", value: "+40% BOOST", subtext: "PEFT / LoRA GPU acceleration" },
    ],
    stack: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "vLLM",
      "PyTorch",
      "Pinecone",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "tech-mahindra",
    index: "02",
    period: "OCT 2024 — APR 2025",
    role: "Technical Associate",
    company: "Tech Mahindra",
    statusBadge: "ENTERPRISE CONTINUITY",
    category: "High-Availability US Retail Infrastructure",
    architectureNodes: [
      { label: "RETAIL STORE NODES", desc: "POS & Dispatch Outlets", icon: Server },
      { label: "NETWORK SWITCH BUS", desc: "Layer 2/3 Routing", icon: Network },
      { label: "STRUCTURED DIAGNOSTIC", desc: "Cabling Fault Isolation", icon: Activity },
      { label: "CROSS-TEAM TRIAGE", desc: "-65% MTTR Escalation", icon: Layers },
      { label: "CONTINUITY ASSURANCE", desc: "99.98% Store SLA", icon: ShieldCheck },
    ],
    pillars: [
      {
        title: "Mission-Critical Retail Continuity",
        detail:
          "Provided Tier-2/3 technical diagnostics for retail outlets at a tier-one US retail chain, diagnosing network outages, server disconnects, and restoring real-time transaction continuity.",
      },
      {
        title: "Structured Cabling & Hardware Fault Isolation",
        detail:
          "Resolved physical cabling faults, network packet anomalies, and hardware continuity failures through systematic OSI root-cause analysis and structured telemetry triage.",
      },
      {
        title: "Cross-Functional SLA & MTTR Reduction",
        detail:
          "Collaborated with distributed engineering and network operations centers to reduce Mean Time to Resolve (MTTR) by 65% while sustaining an enterprise store continuity SLA of 99.98%.",
      },
    ],
    telemetry: [
      { label: "MEAN TIME TO RESOLVE", value: "-65% MTTR", subtext: "Rapid triage escalation" },
      { label: "STORE CONTINUITY SLA", value: "99.98%", subtext: "Operational uptime lock" },
      { label: "CABLING FAULTS", value: "100% RESOLVED", subtext: "Zero unresolved drops" },
    ],
    stack: [
      "Enterprise Systems",
      "Network Diagnostics",
      "Hardware Continuity",
      "OSI Troubleshooting",
      "ITIL Workflows",
      "Linux SysAdmin",
    ],
  },
  {
    id: "suvidha",
    index: "03",
    period: "MAY 2023 — JUN 2023",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    statusBadge: "ACADEMIC WEB PORTAL",
    category: "Full-Stack Research & Asset Discovery",
    architectureNodes: [
      { label: "BROWSER CLIENT", desc: "React.js Dynamic UI", icon: Activity },
      { label: "STATE ENGINE", desc: "Zero Layout Drift", icon: Layers },
      { label: "REST DISPATCHER", desc: "sub-100ms Query Latency", icon: Network },
      { label: "MULTIPART PIPELINE", desc: "Asset & Project Intake", icon: Server },
      { label: "RESEARCH DATABASE", desc: "Indexed Search Portal", icon: Database },
    ],
    pillars: [
      {
        title: "Research-Project Portal Architecture",
        detail:
          "Developed a modular React front-end platform enabling multi-domain research project uploads, categorical indexing, and dynamic discovery filters with sub-100ms query latency.",
      },
      {
        title: "Zero-Drift Responsive UI/UX Engine",
        detail:
          "Engineered dynamic UI components using Tailwind CSS and React hooks, enforcing strict responsive breakpoints and achieving zero Cumulative Layout Shift (CLS) across mobile and desktop.",
      },
      {
        title: "Backend REST API Integration & Data Integrity",
        detail:
          "Partnered with backend engineers to integrate structured REST endpoints, validating multipart project asset uploads and enforcing client-side validation guardrails.",
      },
    ],
    telemetry: [
      { label: "PORTAL QUERY SPEED", value: "sub-100ms", subtext: "Frictionless search latency" },
      { label: "ASSET UPLOAD FLOW", value: "100% FLOW", subtext: "Fault-tolerant multipart sync" },
      { label: "RESPONSIVE ACCURACY", value: "ZERO CLS", subtext: "Zero layout shift verification" },
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "RESTful APIs",
      "Node.js",
      "Responsive UI/UX",
    ],
  },
];

export default function FolioBehindSystems() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeMilestone = MILESTONES[selectedIndex];

  return (
    <section
      id="experience"
      className="relative w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#040406] text-white overflow-hidden border-t border-white/10 select-none"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(rgba(255,87,34,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 80px 80px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="w-full max-w-7xl mx-auto mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-4">
          <div className="space-y-2">
            <span className="text-coral text-xs sm:text-sm font-sans font-bold tracking-widest uppercase block">
              Section 05 // Career Timeline &amp; System Flight Recorder
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Experience
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-sans text-left md:text-right leading-relaxed">
            Mission-control engineering flight recorder tracking production deployments, enterprise continuity, and autonomous AI research.
          </p>
        </div>
      </div>

      {/* Widescreen Console Spread */}
      <div className="w-full max-w-7xl mx-auto rounded-3xl border border-white/10 bg-[#08080C]/85 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden relative z-10">

        {/* Top Console Command Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-3.5 border-b border-white/10 bg-black/60 text-xs font-mono text-neutral-400 gap-2">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-coral" />
            <span className="font-semibold text-white tracking-wider uppercase">
              ENGINEERING FLIGHT RECORDER // AUDIT LOG
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 text-[10px]">
              ID: REC-2026-MK
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline text-neutral-500">
              STATION: HYDERABAD (IST)
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              STATUS: TELEMETRY ACTIVE
            </span>
          </div>
        </div>

        {/* Main Two-Column Split Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">

          {/* Left Rail (Timeline Navigation & Index, 35%) */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 flex flex-col justify-between bg-black/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase pb-2 border-b border-white/5">
                <span>CHRONOLOGICAL INDEX</span>
                <span>[0{MILESTONES.length} STAGES]</span>
              </div>

              {/* Milestones Navigation List */}
              <div className="space-y-3">
                {MILESTONES.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative cursor-pointer group ${isSelected
                          ? "bg-white/[0.08] border border-white/20 shadow-xl"
                          : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                        }`}
                    >
                      {/* Active Hairline Indicator */}
                      {isSelected && (
                        <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-coral shadow-[0_0_12px_#FF5722]" />
                      )}

                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                        <span className={`font-bold ${isSelected ? "text-coral" : "text-neutral-400"}`}>
                          [{item.index}] {item.period}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[9px] font-mono ${isSelected
                              ? "bg-coral/20 text-coral border border-coral/30"
                              : "bg-white/5 text-neutral-400"
                            }`}
                        >
                          {item.statusBadge}
                        </span>
                      </div>

                      <h3
                        className={`text-base font-bold tracking-tight transition-colors ${isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                          }`}
                      >
                        {item.role}
                      </h3>

                      <p className="text-xs font-sans text-neutral-400 mt-0.5">
                        {item.company}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Powerlifting Discipline & Operational Stamina Callout */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
              <div className="flex items-center gap-2 text-coral text-xs font-mono font-bold tracking-wider uppercase">
                <Dumbbell className="w-4 h-4 text-coral" />
                <span>DISCIPLINE &amp; OPERATIONAL STAMINA</span>
              </div>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed">
                Competitive powerlifter &amp; extreme endurance builder. Discipline in heavy barbell training translates into unwavering tenacity under complex debugging, architecture design, and high-pressure production incidents.
              </p>
            </div>
          </div>

          {/* Right Stage (Active Mission Dossier & System Architecture, 65%) */}
          <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-[#0B0C10]/95 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="space-y-8 h-full flex flex-col justify-between"
              >
                {/* Dossier Header Block */}
                <div className="space-y-3 border-b border-white/10 pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold text-coral tracking-widest uppercase">
                      STAGE {activeMilestone.index} // {activeMilestone.category}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {activeMilestone.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                      {activeMilestone.role}
                    </h3>
                    <p className="text-sm sm:text-base font-sans font-medium text-neutral-400 mt-1">
                      {activeMilestone.company}
                    </p>
                  </div>
                </div>

                {/* Embedded Interactive Architecture Node Flow Mesh */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase">
                    <div className="flex items-center gap-1.5 text-white">
                      <Activity className="w-3.5 h-3.5 text-coral" />
                      <span className="font-semibold">SYSTEM ARCHITECTURE &amp; DATA FLOW MESH</span>
                    </div>
                    <span className="text-coral">DETERMINISTIC TELEMETRY</span>
                  </div>

                  {/* Horizontal Interactive Node Chain */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 p-3 rounded-2xl bg-black/60 border border-white/10">
                    {activeMilestone.architectureNodes.map((node, nIdx) => {
                      const NodeIcon = node.icon;
                      return (
                        <div
                          key={nIdx}
                          className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-coral/50 transition-colors flex flex-col justify-between group"
                        >
                          <div className="flex items-center justify-between text-neutral-400 mb-2">
                            <span className="text-[9px] font-mono text-coral font-bold">
                              0{nIdx + 1}
                            </span>
                            <NodeIcon className="w-3.5 h-3.5 text-neutral-300 group-hover:text-coral transition-colors" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-white block uppercase leading-tight">
                              {node.label}
                            </span>
                            <span className="text-[9px] font-sans text-neutral-400 block mt-0.5 leading-snug">
                              {node.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Deep Technical Narrative (3 Core Engineering Pillars) */}
                <div className="space-y-3.5">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase block font-semibold">
                    CORE ENGINEERING ACHIEVEMENTS
                  </span>
                  <div className="space-y-3">
                    {activeMilestone.pillars.map((pillar, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                      >
                        <span className="text-xs font-mono font-bold text-coral mt-0.5">
                          [0{pIdx + 1}]
                        </span>
                        <div className="space-y-1">
                          <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                            {pillar.title}
                          </h4>
                          <p className="text-xs font-sans text-neutral-300 leading-relaxed">
                            {pillar.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Telemetry Spec Table (3 Unboxed Metric Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {activeMilestone.telemetry.map((metric, mIdx) => (
                    <div key={mIdx} className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                        {metric.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-mono font-black text-white block">
                        {metric.value}
                      </span>
                      <span className="text-[10px] font-sans text-neutral-500 block">
                        {metric.subtext}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Ledger: Minimal Inline Monospace Stack */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-neutral-400 mr-2 uppercase">
                    STACK:
                  </span>
                  {activeMilestone.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-coral/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
