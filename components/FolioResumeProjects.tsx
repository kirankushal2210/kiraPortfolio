"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Activity,
  Terminal,
  Radio,
  Maximize2,
  X,
  Layers,
  CheckCircle2,
  Shield,
  Cpu,
  MapPin,
  QrCode,
  Compass,
  Boxes,
  ExternalLink,
  Code2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  RotateCw,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ArtifactDetail {
  id: string;
  category: string;
  title: string;
  codename: string;
  period: string;
  deck: string;
  specs: { label: string; value: string }[];
  stack: string[];
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export default function FolioResumeProjects() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeInspector, setActiveInspector] = useState<ArtifactDetail | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const artifacts: ArtifactDetail[] = [
    {
      id: "hithos",
      category: "BIOLOGICAL OPERATING SYSTEM // 01",
      title: "HithOS",
      codename: "PRJ-01 // METABOLIC-KERNEL",
      period: "March 2026 – Present",
      deck: "An offline-first biological OS managing 4 metabolic pillars with strict 60-FPS telemetry.",
      specs: [
        { label: "DIAGNOSTIC", value: "<200ms" },
        { label: "ACCURACY", value: "100% Deterministic" },
        { label: "RAG", value: "0% Hallucination" },
        { label: "INFERENCE", value: "+40% vLLM" },
      ],
      stack: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Python",
        "PyTorch",
        "LangChain",
        "LlamaIndex",
        "Pinecone",
        "vLLM",
        "Claude 3.5 Sonnet",
      ],
      bullets: [
        "Designed an offline-first biological management kernel processing 16-point metabolic biomarkers across 4 systemic pillars.",
        "Built Hybrid-RAG clinical pipeline (LangChain, LlamaIndex, Pinecone) vectorizing thousands of medical papers with zero generative hallucination.",
        "Engineered parallel deterministic mathematical engine running alongside the LLM inference layer to enforce rigid macro guardrails.",
        "Benchmarked local PEFT fine-tuned model via vLLM inference server, boosting prompt processing throughput by +40%.",
      ],
      repoUrl: "https://github.com/kirankushal22",
    },
    {
      id: "agentic-news",
      category: "NEURAL RETRIEVAL PIPELINE // 02",
      title: "Autonomous Synthesis",
      codename: "PRJ-02 // SYNTHESIS-MESH",
      period: "Dec 2025 – Feb 2026",
      deck: "Autonomous data extraction and multi-agent consensus engine processing 5,000+ weekly technical signals.",
      specs: [
        { label: "SOURCES", value: "100+ Proxied" },
        { label: "THROUGHPUT", value: "5,000+ Vectors/Wk" },
        { label: "READING TIME", value: "-80% Latency" },
        { label: "PRECISION", value: ">90% Vector Match" },
      ],
      stack: [
        "PostgreSQL",
        "Webshare",
        "UV",
        "Docker",
        "Docling",
        "LangChain",
        "Python",
        "OpenAI GPT-4o",
      ],
      bullets: [
        "Engineered distributed ingestion crawlers utilizing Webshare rotating proxy pools and Docling to overcome rate limits on 100+ technical feeds.",
        "Built a multi-agent LangChain workflow performing semantic deduplication, cross-validation, and executive summaries.",
        "Reduced executive technical brief reading latency by -80% while retaining >90% precision against primary documentation.",
        "Orchestrated containerized environment with Docker and UV package manager for deterministic zero-dependency execution.",
      ],
      repoUrl: "https://github.com/kirankushal22/ai-tools-discovery",
    },
    {
      id: "municipal-qr",
      category: "HARDWARE CIVIC TELEMETRY // 03",
      title: "Municipal Verification Grid",
      codename: "PRJ-03 // GEO-CRYPTOGRAPHIC",
      period: "University Major Capstone",
      deck: "Hardware-integrated civic waste routing with encrypted geo-stamped QR verification.",
      specs: [
        { label: "FRAUD RATE", value: "0.00% Verified" },
        { label: "AUDIT RATE", value: "100% Sequence Audit" },
        { label: "INFLUX", value: "<120ms Packet Ingestion" },
        { label: "FAILSAFE", value: "SQLite Offline Sync" },
      ],
      stack: [
        "Java",
        "QML",
        "Mobile Architecture",
        "FastAPI",
        "Next.js",
        "PostgreSQL",
        "SQLite",
        "Leaflet GIS",
      ],
      bullets: [
        "Engineered localized encrypted QR verification tokens cryptographically bound to physical GPS collection stations.",
        "Built responsive mobile client viewport in Java and QML capable of sub-120ms optical token decryption in low-light field conditions.",
        "Integrated offline-first SQLite buffer preventing packet loss in low-connectivity areas with automatic sequence syncing.",
        "Awarded Grade 'O' (Outstanding Distinction) for University Computer Science Capstone Project.",
      ],
      repoUrl: "https://github.com/kirankushal22/garbage-logistics-qr",
    },
    {
      id: "phd-portal",
      category: "FACETED TAXONOMY PORTAL // 04",
      title: "Academic Research Hub",
      codename: "PRJ-04 // REPOSITORY-INDEX",
      period: "Production Deployment",
      deck: "High-performance research repository with dynamic multi-parameter taxonomy and multipart ingestion.",
      specs: [
        { label: "LIGHTHOUSE", value: "94/100 Mobile" },
        { label: "INGESTION", value: "<250ms Multipart" },
        { label: "ACCURACY", value: "100% Filter Match" },
        { label: "ARCHITECTURE", value: "React + Tailwind" },
      ],
      stack: [
        "React.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "RESTful APIs",
        "HTML5 / CSS3",
        "Client Cache",
      ],
      bullets: [
        "Delivered modular React.js front-end architecture for academic research project upload, listing, and faceted querying.",
        "Collaborated with backend engineers to integrate secure multipart data upload pipelines and document indexing workflows.",
        "Engineered instant client-side query caching and responsive styling achieving a 94+ Lighthouse performance score.",
      ],
      repoUrl: "https://github.com/kirankushal22",
    },
  ];

  // Helper function to advance to next card and restart timer
  const nextCard = () => {
    setActive((prev) => (prev + 1) % artifacts.length);
  };

  const prevCard = () => {
    setActive((prev) => (prev - 1 + artifacts.length) % artifacts.length);
  };

  // 1000ms Auto-Advance Timer with Pause-on-Hover
  useEffect(() => {
    if (isPaused || activeInspector !== null) return;

    timerRef.current = setInterval(() => {
      nextCard();
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeInspector]);

  // Handle stage click (advances to next card and resets interval)
  const handleStageClick = () => {
    nextCard();
    if (timerRef.current) {
      clearInterval(timerRef.current);
      if (!isPaused && activeInspector === null) {
        timerRef.current = setInterval(nextCard, 1000);
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-36 px-4 sm:px-6 bg-black border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* Background Ambient 3D Depth Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-900/15 via-emerald-900/15 to-blue-900/15 blur-[160px] pointer-events-none" />

      <div className="w-[92%] max-w-[1400px] mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 gap-4">
          <div className="space-y-2">
            <span className="font-sans font-medium text-xs sm:text-sm font-semibold tracking-widest uppercase text-coral flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              Technical Builds // 3D Rotating Depth Stage
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Selected Architectures &amp; Builds
            </h2>
          </div>

          {/* Telemetry Status & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 font-sans font-medium text-xs text-[#A0A0A0] bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full">
              <RotateCw className={`w-3.5 h-3.5 text-coral ${!isPaused && !activeInspector ? "animate-spin" : ""}`} />
              <span>{isPaused ? "ROTATION PAUSED" : "ROTATING (1.0s STEP)"}</span>
            </div>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="btn-liquid-glass-dark px-4 py-1.5 text-xs flex items-center gap-2"
            >
              {isPaused ? <Play className="w-3 h-3 text-coral" /> : <Pause className="w-3 h-3 text-amber-400" />}
              <span>{isPaused ? "Resume Deck" : "Freeze Deck"}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3D STACKED DEPTH CAROUSEL STAGE                                            */}
        {/* ========================================================================= */}
        <div
          className="relative w-full max-w-5xl mx-auto h-[660px] sm:h-[680px] flex items-center justify-center cursor-pointer"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={handleStageClick}
        >
          {artifacts.map((artifact, idx) => {
            const offset = (idx - active + artifacts.length) % artifacts.length;

            // 4 Position Configs for 3D Layered Depth
            // 0: Active Front Stage
            // 1: Angled Right
            // 2: Deep Background Back-Center
            // 3: Angled Left
            const configs = [
              {
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotateY: 0,
                opacity: 1,
                zIndex: 40,
                blur: "blur(0px)",
                shadow: "0 30px 60px -15px rgba(0,0,0,0.85)",
              },
              {
                x: 160,
                y: 16,
                z: -120,
                scale: 0.9,
                rotateY: -12,
                opacity: 0.65,
                zIndex: 30,
                blur: "blur(1px)",
                shadow: "0 20px 40px -15px rgba(0,0,0,0.6)",
              },
              {
                x: 0,
                y: 30,
                z: -240,
                scale: 0.82,
                rotateY: 0,
                opacity: 0.35,
                zIndex: 20,
                blur: "blur(2.5px)",
                shadow: "0 15px 30px -15px rgba(0,0,0,0.5)",
              },
              {
                x: -160,
                y: 16,
                z: -120,
                scale: 0.9,
                rotateY: 12,
                opacity: 0.65,
                zIndex: 30,
                blur: "blur(1px)",
                shadow: "0 20px 40px -15px rgba(0,0,0,0.6)",
              },
            ];

            const cfg = configs[offset];
            const isActive = offset === 0;

            return (
              <motion.div
                key={artifact.id}
                animate={{
                  x: cfg.x,
                  y: cfg.y,
                  scale: cfg.scale,
                  rotateY: cfg.rotateY,
                  opacity: cfg.opacity,
                  zIndex: cfg.zIndex,
                  filter: cfg.blur,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 26 }}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: cfg.shadow,
                }}
                onClick={(e) => {
                  if (!isActive) {
                    e.stopPropagation();
                    setActive(idx);
                  }
                }}
                className={`absolute w-[92%] max-w-[480px] sm:max-w-[520px] rounded-[36px] transition-all duration-300 ${
                  isActive ? "cursor-default" : "cursor-pointer hover:opacity-80"
                }`}
              >
                {/* ----------------------------------------------------------------- */}
                {/* CARD 01: HithOS (Distinct Warm Cream Paper #F5F1E8)              */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "hithos" && (
                  <div className="relative bg-[#F5F1E8] text-[#121316] rounded-[36px] p-7 sm:p-9 border border-[#121316]/15 flex flex-col justify-between overflow-visible">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#63615A] border-b border-[#121316]/10 pb-3.5">
                      <span className="font-bold text-[#121316] flex items-center gap-2">
                        BIOLOGICAL OS // 01
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-800 bg-[#E8E2D5] px-2 py-0.5 rounded-full text-[9px]">
                        <span>60-FPS TELEMETRY</span>
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <div className="flex items-baseline gap-2.5">
                        <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#121316] tracking-tight">
                          HithOS.
                        </h3>
                        <span className="font-sans font-medium text-[10px] text-[#7A7870] uppercase">v2.4 Kernel</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3D3C38] leading-relaxed">
                        An offline-first biological OS managing 4 metabolic pillars with strict 60-FPS telemetry.
                      </p>
                    </div>

                    {/* Hero Visual: Biometric Waveform & Metabolic Rings */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#EBE5D8] border border-[#121316]/12 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-[#63615A] uppercase tracking-wider pb-2 border-b border-[#121316]/10">
                        <span className="flex items-center gap-1.5 font-bold text-[#121316]">
                          <Activity className="w-3 h-3 text-coral" />
                          ECG OSCILLOSCOPE
                        </span>
                        <span className="text-emerald-800 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded">
                          184ms LATENCY
                        </span>
                      </div>

                      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center my-1">
                        <svg viewBox="0 0 500 110" className="w-full h-full stroke-[#121316] fill-none relative z-10">
                          <path
                            d="M 0 55 L 70 55 L 85 45 L 100 70 L 115 15 L 130 95 L 145 45 L 160 55 L 240 55 L 255 42 L 270 72 L 285 20 L 300 88 L 315 48 L 330 55 L 410 55 L 425 40 L 440 75 L 455 18 L 470 90 L 500 55"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-95"
                          />
                          <line x1="0" y1="55" x2="500" y2="55" stroke="#121316" strokeWidth="0.6" strokeDasharray="4 4" className="opacity-25" />
                        </svg>

                        {/* Floating Metabolic Status Nodes */}
                        <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none font-sans font-medium text-[8px] font-bold text-[#121316]">
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">GLUCOSE</span>
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">SLEEP</span>
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">LOAD</span>
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">RECOVERY</span>
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-[#63615A]">
                        <span>SAMPLE: 16-PT BUFFER</span>
                        <span className="font-bold text-[#121316]">100% DETERMINISTIC</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-[#121316]/15 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">DIAGNOSTIC</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">&lt;200ms</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">ACCURACY</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">100% Deterministic</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">RAG</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">0% Hallucination</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">INFERENCE</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">+40% vLLM</span>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveInspector(artifact);
                        }}
                        className="font-sans font-medium text-xs text-[#121316] font-bold uppercase tracking-wider underline underline-offset-4 hover:text-coral transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inspect System Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-coral" />
                      </button>
                    </div>

                    {/* Floating HUD Widget (Overlapping Bottom Corner) */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-[#121316] text-[#EDEDED] px-3.5 py-2.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2.5 z-30 font-sans font-medium text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                      <div>
                        <span className="text-white font-bold block text-[10px]">Model: Claude 3.5 Sonnet</span>
                        <span className="text-white/60 text-[9px]">+ vLLM Local Engine</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------------------- */}
                {/* CARD 02: Autonomous Synthesis (Cyber Violet & Neon Cyan)           */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "agentic-news" && (
                  <div className="relative bg-gradient-to-br from-[#12082A] via-[#1E0C44] to-[#0A041B] text-white rounded-[36px] p-7 sm:p-9 border border-violet-500/35 flex flex-col justify-between overflow-visible shadow-[0_20px_50px_rgba(168,85,247,0.25)]">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-violet-300/70 border-b border-violet-500/20 pb-3.5">
                      <span className="text-violet-200 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        RETRIEVAL PIPELINE // 02
                      </span>
                      <span className="text-cyan-400 font-sans font-medium bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full text-[9px]">
                        LAT: 17.44° N · ACTIVE
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                        Autonomous Synthesis.
                      </h3>
                      <p className="text-xs sm:text-sm text-violet-200/80 leading-relaxed">
                        Autonomous data extraction and multi-agent consensus engine processing 5,000+ weekly signals.
                      </p>
                    </div>

                    {/* Hero Visual: Topographic Mesh & Data Nodes */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#090316]/90 border border-violet-500/30 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-violet-300 uppercase tracking-wider pb-2 border-b border-violet-500/20">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <Boxes className="w-3 h-3 text-cyan-400" />
                          VECTOR TOPOGRAPHIC MESH
                        </span>
                        <span className="text-cyan-300 font-sans font-medium bg-violet-900/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
                          LANGCHAIN + GPT-4O
                        </span>
                      </div>

                      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center overflow-hidden my-1">
                        <svg viewBox="0 0 500 120" className="w-full h-full fill-none relative z-10">
                          <path d="M 0 35 Q 125 95 250 35 T 500 35" stroke="#A855F7" strokeWidth="1.6" className="opacity-40 animate-pulse" />
                          <path d="M 0 55 Q 125 115 250 55 T 500 55" stroke="#06B6D4" strokeWidth="1.8" className="opacity-70 animate-pulse" />
                          <path d="M 0 75 Q 125 25 250 75 T 500 75" stroke="#EC4899" strokeWidth="2.2" className="opacity-80" />
                          <path d="M 0 95 Q 125 45 250 95 T 500 95" stroke="#818CF8" strokeWidth="1.4" className="opacity-50" />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-around pointer-events-none z-20">
                          {[
                            { color: "bg-cyan-400", label: "DOCLING" },
                            { color: "bg-purple-400", label: "WEBSHARE" },
                            { color: "bg-pink-400", label: "POSTGRES" },
                            { color: "bg-coral", label: "GPT-4O" },
                          ].map((node, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 font-sans font-medium text-[8px] text-white/90">
                              <div className={`w-2 h-2 rounded-full ${node.color}`} />
                              <span className="bg-black/80 px-1 py-0.5 rounded border border-white/20">{node.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-violet-300/80">
                        <span>ROTATING PROXY POOL · UV</span>
                        <span className="text-cyan-300 font-bold">PRECISION: &gt;90%</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-violet-500/20 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">SOURCES</span>
                        <span className="font-bold text-white text-xs sm:text-sm">100+ Proxied</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">THROUGHPUT</span>
                        <span className="font-bold text-cyan-300 text-xs sm:text-sm">5,000+ Vectors/Wk</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">READING TIME</span>
                        <span className="font-bold text-pink-400 text-xs sm:text-sm">-80% Latency</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">PRECISION</span>
                        <span className="font-bold text-white text-xs sm:text-sm">&gt;90% Vector Match</span>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveInspector(artifact);
                        }}
                        className="font-sans font-medium text-xs text-white font-bold uppercase tracking-wider underline underline-offset-4 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inspect Pipeline Schema</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>

                    {/* Floating Terminal Overlay (Breaks Bottom-Left) */}
                    <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 bg-[#0B0418]/95 backdrop-blur-xl border border-violet-500/40 p-3.5 rounded-2xl shadow-xl font-sans font-medium text-xs text-white/90 space-y-1 z-30 max-w-xs">
                      <div className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1 pb-1 border-b border-white/10">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>Active Telemetry Daemon</span>
                      </div>
                      <p className="text-[10px] text-violet-200/90">&gt; Ingesting: 100+ sources</p>
                      <p className="text-[10px] text-cyan-300 font-bold">&gt; Reading Latency: -80% <span className="animate-pulse">_</span></p>
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------------------- */}
                {/* CARD 03: Municipal Grid (Cyberpunk Matrix Emerald)               */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "municipal-qr" && (
                  <div className="relative bg-gradient-to-br from-[#021A11] via-[#053523] to-[#01140D] text-white rounded-[36px] p-7 sm:p-9 border border-emerald-500/35 flex flex-col justify-between overflow-visible shadow-[0_20px_50px_rgba(16,185,129,0.25)]">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-300/70 border-b border-emerald-500/20 pb-3.5">
                      <span className="text-emerald-200 font-bold flex items-center gap-2">
                        CIVIC TELEMETRY // 03
                      </span>
                      <span className="text-emerald-400 font-sans font-medium bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full text-[9px]">
                        CRYPTOGRAPHIC PROOF
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Municipal Grid.
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                        Hardware-integrated civic waste routing with encrypted geo-stamped QR verification.
                      </p>
                    </div>

                    {/* Hero Visual: GIS Schematic Map */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#01110A]/90 border border-emerald-500/30 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-emerald-300 uppercase tracking-wider pb-2 border-b border-emerald-500/20">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          ROUTE DISPATCH MESH
                        </span>
                        <span className="text-emerald-400 font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                          GRADE 'O' DISTINCTION
                        </span>
                      </div>

                      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center my-1">
                        <svg viewBox="0 0 400 110" className="w-full h-full stroke-emerald-500/40 fill-none relative z-10">
                          <path d="M 20 25 L 380 25 M 20 55 L 380 55 M 20 85 L 380 85" stroke="#059669" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-30" />
                          <path d="M 40 75 L 120 35 L 220 85 L 300 25 L 360 65" strokeWidth="2.5" strokeDasharray="8 4" className="stroke-emerald-400" />
                          <circle cx="40" cy="75" r="5" className="fill-emerald-500 stroke-emerald-200" strokeWidth="1.5" />
                          <circle cx="120" cy="35" r="6" className="fill-white stroke-emerald-400" strokeWidth="2.5" />
                          <circle cx="220" cy="85" r="5" className="fill-emerald-500 stroke-emerald-200" strokeWidth="1.5" />
                          <circle cx="300" cy="25" r="7" className="fill-coral stroke-white" strokeWidth="2.5" />
                          <circle cx="360" cy="65" r="5" className="fill-emerald-500 stroke-emerald-200" strokeWidth="1.5" />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none font-sans font-medium text-[8px] text-white/90 font-semibold z-20">
                          <span className="bg-[#021A11] px-1.5 py-0.5 rounded border border-emerald-500/40">NODE_01</span>
                          <span className="bg-[#021A11] px-1.5 py-0.5 rounded border border-emerald-400 text-emerald-300 font-bold shadow-lg shadow-emerald-500/30">QR_STAMPED</span>
                          <span className="bg-[#021A11] px-1.5 py-0.5 rounded border border-emerald-500/40">NODE_03</span>
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-emerald-300/80">
                        <span>OFFLINE SQLITE SYNC</span>
                        <span className="text-emerald-400 font-bold">FRAUD RATE: 0.00%</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-emerald-500/20 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">FRAUD RATE</span>
                        <span className="font-bold text-white text-xs sm:text-sm">0.00% Verified</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">AUDIT INTEGRITY</span>
                        <span className="font-bold text-emerald-300 text-xs sm:text-sm">100% Audit</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">PACKET INFLUX</span>
                        <span className="font-bold text-white text-xs sm:text-sm">&lt;120ms Ingestion</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">STORAGE</span>
                        <span className="font-bold text-emerald-400 text-xs sm:text-sm">SQLite Auto-Sync</span>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveInspector(artifact);
                        }}
                        className="font-sans font-medium text-xs text-white font-bold uppercase tracking-wider underline underline-offset-4 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inspect Hardware Protocol</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                      </button>
                    </div>

                    {/* Floating Badge (Overlapping Bottom Corner) */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-emerald-950/95 text-emerald-200 border border-emerald-400/50 px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 z-30 font-sans font-medium text-[11px]">
                      <span className="font-bold">100% Geo-Verified Route Audit</span>
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------------------- */}
                {/* CARD 04: Academic Research Hub (Electric Sapphire & Ultramarine)   */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "phd-portal" && (
                  <div className="relative bg-gradient-to-br from-[#031433] via-[#07265E] to-[#020B1C] text-white rounded-[36px] p-7 sm:p-9 border border-blue-500/35 flex flex-col justify-between overflow-visible shadow-[0_20px_50px_rgba(59,130,246,0.25)]">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-blue-300/70 border-b border-blue-500/20 pb-3.5">
                      <span className="text-blue-200 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        TAXONOMY PORTAL // 04
                      </span>
                      <span className="text-sky-300 font-sans font-medium bg-blue-950/80 border border-blue-500/40 px-2 py-0.5 rounded-full text-[9px]">
                        LIGHTHOUSE: 94/100
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Research Hub.
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                        High-performance research repository with dynamic multi-parameter taxonomy and multipart ingestion.
                      </p>
                    </div>

                    {/* Hero Visual: Cascading Glass Taxonomy Cards */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#020B1A]/90 border border-blue-500/30 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-blue-300 uppercase tracking-wider pb-2 border-b border-blue-500/20">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <Layers className="w-3 h-3 text-sky-400" />
                          FACETED INDEXING // QUERY CACHE
                        </span>
                        <span className="text-sky-400 font-bold bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-500/30">
                          &lt;250ms MULTIPART
                        </span>
                      </div>

                      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center my-1">
                        <div className="relative w-full max-w-xs h-20 flex items-center justify-center">
                          <div className="absolute w-[80%] h-16 rounded-xl bg-blue-900/30 border border-blue-400/20 p-2.5 shadow-lg flex flex-col justify-between -translate-x-4 -rotate-2">
                            <span className="font-sans font-medium text-[8px] text-blue-300/80">INGESTION // MULTIPART</span>
                            <div className="w-full bg-blue-950/60 rounded-full h-1 overflow-hidden">
                              <div className="bg-blue-400 h-full w-[85%]" />
                            </div>
                          </div>

                          <div className="absolute w-[88%] h-16 rounded-xl bg-[#061D47]/85 backdrop-blur-md border border-blue-400/40 p-2.5 shadow-xl flex flex-col justify-between">
                            <div className="flex items-center justify-between font-sans font-medium text-[8px] text-blue-200">
                              <span>FACETED TAXONOMY</span>
                              <span className="text-emerald-400 font-bold">100% MATCH</span>
                            </div>
                            <div className="flex gap-1 font-sans font-medium text-[8px]">
                              <span className="bg-blue-500/20 text-blue-200 px-1.5 py-0.5 rounded">AUTHORS</span>
                              <span className="bg-blue-500/20 text-blue-200 px-1.5 py-0.5 rounded">PEER-REVIEW</span>
                              <span className="bg-coral/20 text-coral px-1.5 py-0.5 rounded font-bold">PAPERS</span>
                            </div>
                          </div>

                          <div className="absolute w-[80%] h-16 rounded-xl bg-blue-600/20 border border-sky-400/40 p-2.5 shadow-2xl flex items-center justify-between translate-x-5 rotate-2">
                            <span className="font-sans font-medium text-[9px] text-white font-bold">LIGHTHOUSE</span>
                            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center font-sans font-medium text-[10px] font-black text-white bg-black/60 shadow-lg">
                              94
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-blue-300/80">
                        <span>CLIENT-SIDE QUERY CACHE</span>
                        <span className="text-sky-300 font-bold">REACT + TAILWIND</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-blue-500/20 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">LIGHTHOUSE</span>
                        <span className="font-bold text-white text-xs sm:text-sm">94/100 Mobile</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">INGESTION</span>
                        <span className="font-bold text-sky-300 text-xs sm:text-sm">&lt;250ms Multipart</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">ACCURACY</span>
                        <span className="font-bold text-white text-xs sm:text-sm">100% Filter Match</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">ARCHITECTURE</span>
                        <span className="font-bold text-blue-300 text-xs sm:text-sm">React + REST Cache</span>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveInspector(artifact);
                        }}
                        className="font-sans font-medium text-xs text-white font-bold uppercase tracking-wider underline underline-offset-4 hover:text-sky-300 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inspect Repository Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-sky-300" />
                      </button>
                    </div>

                    {/* Floating Badge (Overlapping Bottom Corner) */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-blue-950/95 text-blue-200 border border-blue-400/50 px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 z-30 font-sans font-medium text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                      <span className="font-bold">Lighthouse 94/100 Mobile</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE ROTATION DOCK CONTROLS & PROJECT INDICATORS                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.08]">
          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevCard}
              className="w-11 h-11 btn-liquid-metal flex items-center justify-center"
              title="Previous Card"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-200 stroke-[2.5]" />
            </button>
            <button
              onClick={nextCard}
              className="w-11 h-11 btn-liquid-metal flex items-center justify-center"
              title="Next Card"
            >
              <ChevronRight className="w-4 h-4 text-neutral-200 stroke-[2.5]" />
            </button>
          </div>

          {/* Quick Select Project Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {artifacts.map((item, idx) => {
              const isCurrent = active === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(idx)}
                  className={`px-4 py-1.5 rounded-full font-sans text-xs transition-all cursor-pointer flex items-center gap-2 ${
                    isCurrent
                      ? "btn-liquid-glass font-bold scale-105"
                      : "btn-liquid-glass-dark font-medium"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? "bg-coral animate-ping" : "bg-white/40"}`} />
                  <span>0{idx + 1} {item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Interaction Instruction Hint */}
          <span className="font-sans font-medium text-[11px] text-[#A0A0A0] text-center sm:text-right">
            Hover to Pause • Click Stage or Cards to Step
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ARCHITECTURAL BLUEPRINT INSPECTOR MODAL                                   */}
      {/* ========================================================================= */}
      {activeInspector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          onClick={() => setActiveInspector(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#121214] border border-white/20 rounded-[32px] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <span className="font-sans font-medium text-xs text-coral uppercase tracking-widest block">
                  {activeInspector.codename}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight pt-1">
                  {activeInspector.title}
                </h3>
                <p className="text-xs font-sans font-medium text-[#A0A0A0] pt-1">
                  {activeInspector.period}
                </p>
              </div>
              <button
                onClick={() => setActiveInspector(null)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Concise Deck */}
            <p className="text-base text-white/90 leading-relaxed font-light">
              {activeInspector.deck}
            </p>

            {/* Deep Engineering Achievements */}
            <div className="space-y-4">
              <h4 className="font-sans font-medium text-xs uppercase tracking-widest text-[#A0A0A0] flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-coral" />
                <span>Architectural Achievements &amp; Systems Verification</span>
              </h4>
              <div className="space-y-3">
                {activeInspector.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tech Stack */}
            <div className="space-y-3">
              <h4 className="font-sans font-medium text-xs uppercase tracking-widest text-[#A0A0A0] flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-coral" />
                <span>Verified Stack &amp; Infrastructure</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeInspector.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-sans font-medium text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {activeInspector.repoUrl && (
                <a
                  href={activeInspector.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-liquid-glass px-5 py-2.5 text-xs font-bold flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-coral" />
                  <span>Inspect Source Code</span>
                </a>
              )}
              <button
                onClick={() => setActiveInspector(null)}
                className="btn-liquid-glass-dark px-5 py-2.5 text-xs font-medium"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
