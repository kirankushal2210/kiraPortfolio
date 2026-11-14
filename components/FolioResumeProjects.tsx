"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModalDismiss } from "@/lib/useModalDismiss";
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

const AUTO_ADVANCE_MS = 5000;

export default function FolioResumeProjects() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // user's explicit Freeze toggle
  const [isHovered, setIsHovered] = useState(false); // temporary pause while pointer is over the stage
  const [activeInspector, setActiveInspector] = useState<ArtifactDetail | null>(null);
  useModalDismiss(activeInspector !== null, () => setActiveInspector(null));
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const artifacts: ArtifactDetail[] = [
    {
      id: "hithos",
      category: "AI system · 2026",
      title: "HealthOS",
      codename: "Project 01 · AI system",
      period: "Mar 2026",
      deck: "An offline-first health app prototype covering nutrition, training, recovery and an AI coach backed by research papers.",
      specs: [
        { label: "Onboarding", value: "16 questions" },
        { label: "Retrieval", value: "LlamaIndex + Pinecone" },
        { label: "Fine-tuning", value: "PyTorch + PEFT" },
        { label: "Serving", value: "vLLM" },
      ],
      stack: [
        "React Native",
        "Expo",
        "Node.js",
        "PostgreSQL",
        "LangChain",
        "LlamaIndex",
        "Pinecone",
        "PyTorch",
        "PEFT",
        "vLLM",
        "Claude API",
      ],
      bullets: [
        "A React Native app with a Node.js and PostgreSQL backend. A 16-question onboarding drives each person's daily targets.",
        "A hybrid retrieval setup (LangChain, LlamaIndex, Pinecone) over research papers, so the coach's training and recovery answers come from sources rather than the model's memory.",
        "Experiments fine-tuning a smaller model with PyTorch and PEFT for regional food analysis, served with vLLM.",
        "A deterministic calculator that runs beside the AI and keeps calorie and macro targets inside safe bounds, whatever the model says.",
      ],
      repoUrl: "https://github.com/kirankushal2210",
    },
    {
      id: "agentic-news",
      category: "AI system · 2025–26",
      title: "AI News Aggregator",
      codename: "Project 02 · AI system",
      period: "Dec 2025 – Feb 2026",
      deck: "A pipeline that scrapes AI news from blogs, feeds and YouTube transcripts and turns it into ranked daily summaries.",
      specs: [
        { label: "Sources", value: "Blogs, RSS, YouTube" },
        { label: "Parsing", value: "Docling" },
        { label: "Storage", value: "PostgreSQL" },
        { label: "Summaries", value: "GPT-4o via LangChain" },
      ],
      stack: [
        "Python",
        "UV",
        "Docker",
        "PostgreSQL",
        "LangChain",
        "GPT-4o",
        "Docling",
        "Webshare",
      ],
      bullets: [
        "Collect: scrapers pull from company blogs, RSS feeds and YouTube transcripts, through rotating Webshare proxies to avoid rate limits.",
        "Parse and store: Docling turns messy pages and documents into clean text, which lands in PostgreSQL with its source and date.",
        "Summarise and rank: a LangChain workflow with GPT-4o writes a short summary per item, and each item is scored against a user profile to sort the feed.",
        "The whole thing runs in Docker, with dependencies pinned by UV so a run is the same on any machine.",
      ],
      repoUrl: "https://github.com/kirankushal2210/ai-news-app",
    },
    {
      id: "municipal-qr",
      category: "Capstone · 2024",
      title: "QR Collection Tracking",
      codename: "Project 03 · B.Tech capstone",
      period: "2024",
      deck: "A mobile app that proves waste was collected, using geo-fenced QR checkpoints and an audit log.",
      specs: [
        { label: "Grade", value: "O (Outstanding)" },
        { label: "Check", value: "Geo-fenced QR scan" },
        { label: "Storage", value: "SQLite, offline-first" },
        { label: "App", value: "Java + QML" },
      ],
      stack: ["Java", "QML", "SQLite", "REST APIs"],
      bullets: [
        "Collection crews scan a QR code at each pickup point. A scan only counts inside that point's geo-fence, and every scan goes into an audit log, so collection claims can be checked.",
        "Signed QR tokens tied to collection points.",
        "An offline-first scanning app in Java and QML with a local SQLite store, plus the audit log and the API it syncs to.",
        "B.Tech capstone project, graded O (Outstanding).",
      ],
      repoUrl: "https://github.com/kirankushal2210",
    },
    {
      id: "phd-portal",
      category: "Web app · 2023",
      title: "PhD Research Portal",
      codename: "Project 04 · Internship, Suvidha Foundation",
      period: "May – Jun 2023",
      deck: "The front end of a portal where researchers upload, list and search research projects.",
      specs: [
        { label: "Role", value: "Front end" },
        { label: "Stack", value: "React + Tailwind" },
        { label: "Features", value: "Uploads, filters, search" },
        { label: "Context", value: "Internship" },
      ],
      stack: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
      bullets: [
        "Built during an internship at Suvidha Foundation. Researchers upload projects, browse listings and search by domain.",
        "The React front end with Tailwind styling.",
        "Faceted filters and multi-part file uploads, wired to the backend team's API.",
      ],
      repoUrl: "https://github.com/kirankushal2210",
    },
  ];

  // Helper function to advance to next card and restart timer
  const nextCard = () => {
    setActive((prev) => (prev + 1) % artifacts.length);
  };

  const prevCard = () => {
    setActive((prev) => (prev - 1 + artifacts.length) % artifacts.length);
  };

  // Auto-advance (pauses on hover, on Freeze, while the inspector is open, and for reduced-motion users)
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const isRotating = !isPaused && !isHovered && activeInspector === null && !reducedMotion;

  useEffect(() => {
    if (!isRotating) return;
    timerRef.current = setInterval(nextCard, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRotating, active]); // depending on `active` restarts the countdown after any manual move

  const handleStageClick = () => {
    nextCard();
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-36 px-4 sm:px-6 bg-black border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* Background Ambient 3D Depth Lighting */}

      <div className="w-[92%] max-w-[1400px] mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 gap-4">
          <div className="space-y-2">
            <span className="font-sans font-medium text-xs sm:text-sm font-semibold tracking-widest uppercase text-coral flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-coral " />
              More projects
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Other builds
            </h2>
          </div>

          {/* Telemetry Status & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 font-sans font-medium text-xs text-[#A0A0A0] bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full">
              <RotateCw className={`w-3.5 h-3.5 text-coral ${isRotating ? "animate-spin" : ""}`} />
              <span>{isRotating ? "Auto-advancing" : "Paused"}</span>
            </div>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="btn-liquid-glass-dark px-4 py-1.5 text-xs flex items-center gap-2"
            >
              {isPaused ? <Play className="w-3 h-3 text-coral" /> : <Pause className="w-3 h-3 text-amber-400" />}
              <span>{isPaused ? "Resume" : "Pause"}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3D STACKED DEPTH CAROUSEL STAGE                                            */}
        {/* ========================================================================= */}
        <div
          className="relative w-full max-w-5xl mx-auto h-[660px] sm:h-[680px] flex items-center justify-center cursor-pointer"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
                  e.stopPropagation();
                  if (!isActive) setActive(idx);
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
                        AI system · 2026
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-800 bg-[#E8E2D5] px-2 py-0.5 rounded-full text-[9px]">
                        <span>Prototype</span>
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <div className="flex items-baseline gap-2.5">
                        <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#121316] tracking-tight">
                          HealthOS.
                        </h3>
                        <span className="font-sans font-medium text-[10px] text-[#7A7870] uppercase">Mar 2026</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#3D3C38] leading-relaxed">
                        An offline-first health app prototype covering nutrition, training, recovery and an AI coach backed by research papers.
                      </p>
                    </div>

                    {/* Hero Visual: Biometric Waveform & Metabolic Rings */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#EBE5D8] border border-[#121316]/12 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-[#63615A] uppercase tracking-wider pb-2 border-b border-[#121316]/10">
                        <span className="flex items-center gap-1.5 font-bold text-[#121316]">
                          <Activity className="w-3 h-3 text-coral" />
                          Four areas
                        </span>
                        <span className="text-emerald-800 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded">
                          Offline-first
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
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">NUTRITION</span>
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">TRAINING</span>
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">RECOVERY</span>
                          <span className="bg-[#FAF6F0] px-1.5 py-0.5 rounded shadow border border-[#121316]/10">AI COACH</span>
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-[#63615A]">
                        <span>16-question onboarding</span>
                        <span className="font-bold text-[#121316]">Rule-checked targets</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-[#121316]/15 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">Onboarding</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">16 questions</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">Retrieval</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">LlamaIndex + Pinecone</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">Fine-tuning</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">PyTorch + PEFT</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#63615A] uppercase tracking-wider block">Serving</span>
                        <span className="font-bold text-[#121316] text-xs sm:text-sm">vLLM</span>
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
                        <span>View details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-coral" />
                      </button>
                    </div>

                    {/* Floating HUD Widget (Overlapping Bottom Corner) */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-[#121316] text-[#EDEDED] px-3.5 py-2.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2.5 z-30 font-sans font-medium text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-coral " />
                      <div>
                        <span className="text-white font-bold block text-[10px]">AI coach: Claude API</span>
                        <span className="text-white/60 text-[9px]">Fine-tune experiments on vLLM</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------------------- */}
                {/* CARD 02: Autonomous Synthesis (Cyber Violet & Neon Cyan)           */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "agentic-news" && (
                  <div className="relative bg-gradient-to-br from-[#12082A] via-[#1E0C44] to-[#0A041B] text-white rounded-[36px] p-7 sm:p-9 border border-violet-500/35 flex flex-col justify-between overflow-visible ">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-violet-300/70 border-b border-violet-500/20 pb-3.5">
                      <span className="text-violet-200 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 " />
                        AI system · 2025–26
                      </span>
                      <span className="text-cyan-400 font-sans font-medium bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full text-[9px]">
                        Dec 2025 – Feb 2026
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                        AI News Aggregator.
                      </h3>
                      <p className="text-xs sm:text-sm text-violet-200/80 leading-relaxed">
                        Scrapes AI news from blogs, feeds and YouTube transcripts and turns it into ranked daily summaries.
                      </p>
                    </div>

                    {/* Hero Visual: Topographic Mesh & Data Nodes */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#090316]/90 border border-violet-500/30 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-violet-300 uppercase tracking-wider pb-2 border-b border-violet-500/20">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <Boxes className="w-3 h-3 text-cyan-400" />
                          Collect → Parse → Store → Summarise
                        </span>
                        <span className="text-cyan-300 font-sans font-medium bg-violet-900/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
                          LANGCHAIN + GPT-4O
                        </span>
                      </div>

                      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center overflow-hidden my-1">
                        <svg viewBox="0 0 500 120" className="w-full h-full fill-none relative z-10">
                          <path d="M 0 35 Q 125 95 250 35 T 500 35" stroke="#A855F7" strokeWidth="1.6" className="opacity-40 " />
                          <path d="M 0 55 Q 125 115 250 55 T 500 55" stroke="#06B6D4" strokeWidth="1.8" className="opacity-70 " />
                          <path d="M 0 75 Q 125 25 250 75 T 500 75" stroke="#EC4899" strokeWidth="2.2" className="opacity-80" />
                          <path d="M 0 95 Q 125 45 250 95 T 500 95" stroke="#818CF8" strokeWidth="1.4" className="opacity-50" />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-around pointer-events-none z-20">
                          {[
                            { color: "bg-cyan-400", label: "WEBSHARE" },
                            { color: "bg-purple-400", label: "DOCLING" },
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
                        <span>Rotating proxies · Docker + UV</span>
                        <span className="text-cyan-300 font-bold">Ranked per reader</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-violet-500/20 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">Sources</span>
                        <span className="font-bold text-white text-xs sm:text-sm">Blogs, RSS, YouTube</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">Parsing</span>
                        <span className="font-bold text-cyan-300 text-xs sm:text-sm">Docling</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">Storage</span>
                        <span className="font-bold text-pink-400 text-xs sm:text-sm">PostgreSQL</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-violet-300 uppercase tracking-wider block">Summaries</span>
                        <span className="font-bold text-white text-xs sm:text-sm">GPT-4o via LangChain</span>
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
                        <span>View details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>

                    {/* Floating Terminal Overlay (Breaks Bottom-Left) */}
                    <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-3 bg-[#0B0418]/95 border border-violet-500/40 p-3.5 rounded-2xl shadow-xl font-sans font-medium text-xs text-white/90 space-y-1 z-30 max-w-xs">
                      <div className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1 pb-1 border-b border-white/10">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>Pipeline steps</span>
                      </div>
                      <p className="text-[10px] text-violet-200/90">&gt; collect → parse → store</p>
                      <p className="text-[10px] text-cyan-300 font-bold">&gt; summarise → rank <span className="">_</span></p>
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------------------- */}
                {/* CARD 03: Municipal Grid (Cyberpunk Matrix Emerald)               */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "municipal-qr" && (
                  <div className="relative bg-gradient-to-br from-[#021A11] via-[#053523] to-[#01140D] text-white rounded-[36px] p-7 sm:p-9 border border-emerald-500/35 flex flex-col justify-between overflow-visible ">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-emerald-300/70 border-b border-emerald-500/20 pb-3.5">
                      <span className="text-emerald-200 font-bold flex items-center gap-2">
                        Capstone · 2024
                      </span>
                      <span className="text-emerald-400 font-sans font-medium bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full text-[9px]">
                        B.Tech capstone
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        QR Tracking.
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                        A mobile app that proves waste was collected, using geo-fenced QR checkpoints and an audit log.
                      </p>
                    </div>

                    {/* Hero Visual: GIS Schematic Map */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#01110A]/90 border border-emerald-500/30 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-emerald-300 uppercase tracking-wider pb-2 border-b border-emerald-500/20">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          Collection route
                        </span>
                        <span className="text-emerald-400 font-bold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                          Grade O
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
                          <span className="bg-[#021A11] px-1.5 py-0.5 rounded border border-emerald-500/40">PICKUP 1</span>
                          <span className="bg-[#021A11] px-1.5 py-0.5 rounded border border-emerald-400 text-emerald-300 font-bold shadow-lg shadow-emerald-500/30">QR SCAN</span>
                          <span className="bg-[#021A11] px-1.5 py-0.5 rounded border border-emerald-500/40">PICKUP 3</span>
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-emerald-300/80">
                        <span>Offline SQLite store</span>
                        <span className="text-emerald-400 font-bold">Audit log</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-emerald-500/20 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">Grade</span>
                        <span className="font-bold text-white text-xs sm:text-sm">O (Outstanding)</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">Check</span>
                        <span className="font-bold text-emerald-300 text-xs sm:text-sm">Geo-fenced QR scan</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">Storage</span>
                        <span className="font-bold text-white text-xs sm:text-sm">SQLite, offline-first</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-emerald-300 uppercase tracking-wider block">App</span>
                        <span className="font-bold text-emerald-400 text-xs sm:text-sm">Java + QML</span>
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
                        <span>View details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                      </button>
                    </div>

                    {/* Floating Badge (Overlapping Bottom Corner) */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-emerald-950/95 text-emerald-200 border border-emerald-400/50 px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 z-30 font-sans font-medium text-[11px]">
                      <span className="font-bold">Graded O (Outstanding)</span>
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------------------- */}
                {/* CARD 04: Academic Research Hub (Electric Sapphire & Ultramarine)   */}
                {/* ----------------------------------------------------------------- */}
                {artifact.id === "phd-portal" && (
                  <div className="relative bg-gradient-to-br from-[#031433] via-[#07265E] to-[#020B1C] text-white rounded-[36px] p-7 sm:p-9 border border-blue-500/35 flex flex-col justify-between overflow-visible ">
                    {/* Top Identity */}
                    <div className="flex items-center justify-between font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-blue-300/70 border-b border-blue-500/20 pb-3.5">
                      <span className="text-blue-200 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        Web app · 2023
                      </span>
                      <span className="text-sky-300 font-sans font-medium bg-blue-950/80 border border-blue-500/40 px-2 py-0.5 rounded-full text-[9px]">
                        Internship
                      </span>
                    </div>

                    {/* Title & Deck */}
                    <div className="space-y-2 pt-4 pb-3">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        PhD Portal.
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                        The front end of a portal where researchers upload, list and search research projects.
                      </p>
                    </div>

                    {/* Hero Visual: Cascading Glass Taxonomy Cards */}
                    <div className="my-3 p-4 sm:p-5 rounded-2xl bg-[#020B1A]/90 border border-blue-500/30 relative overflow-hidden">
                      <div className="flex items-center justify-between font-sans font-medium text-[9px] text-blue-300 uppercase tracking-wider pb-2 border-b border-blue-500/20">
                        <span className="flex items-center gap-1.5 font-bold text-white">
                          <Layers className="w-3 h-3 text-sky-400" />
                          Upload · List · Search
                        </span>
                        <span className="text-sky-400 font-bold bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-500/30">
                          Front end
                        </span>
                      </div>

                      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center my-1">
                        <div className="relative w-full max-w-xs h-20 flex items-center justify-center">
                          <div className="absolute w-[80%] h-16 rounded-xl bg-blue-900/30 border border-blue-400/20 p-2.5 shadow-lg flex flex-col justify-between -translate-x-4 -rotate-2">
                            <span className="font-sans font-medium text-[8px] text-blue-300/80">FILE UPLOAD</span>
                            <div className="w-full bg-blue-950/60 rounded-full h-1 overflow-hidden">
                              <div className="bg-blue-400 h-full w-[85%]" />
                            </div>
                          </div>

                          <div className="absolute w-[88%] h-16 rounded-xl bg-[#061D47]/85 border border-blue-400/40 p-2.5 shadow-xl flex flex-col justify-between">
                            <div className="flex items-center justify-between font-sans font-medium text-[8px] text-blue-200">
                              <span>FILTERS</span>
                              <span className="text-emerald-400 font-bold">BY DOMAIN</span>
                            </div>
                            <div className="flex gap-1 font-sans font-medium text-[8px]">
                              <span className="bg-blue-500/20 text-blue-200 px-1.5 py-0.5 rounded">DOMAIN</span>
                              <span className="bg-blue-500/20 text-blue-200 px-1.5 py-0.5 rounded">PROJECTS</span>
                              <span className="bg-coral/20 text-coral px-1.5 py-0.5 rounded font-bold">SEARCH</span>
                            </div>
                          </div>

                          <div className="absolute w-[80%] h-16 rounded-xl bg-blue-600/20 border border-sky-400/40 p-2.5 shadow-2xl flex items-center justify-between translate-x-5 rotate-2">
                            <span className="font-sans font-medium text-[9px] text-white font-bold">INTERNSHIP</span>
                            <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center font-sans font-medium text-[10px] font-black text-white bg-black/60 shadow-lg">
                              '23
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-1.5 flex items-center justify-between font-sans font-medium text-[9px] text-blue-300/80">
                        <span>Wired to the backend team's API</span>
                        <span className="text-sky-300 font-bold">REACT + TAILWIND</span>
                      </div>
                    </div>

                    {/* Tactile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-blue-500/20 font-sans font-medium text-xs">
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">Role</span>
                        <span className="font-bold text-white text-xs sm:text-sm">Front end</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">Stack</span>
                        <span className="font-bold text-sky-300 text-xs sm:text-sm">React + Tailwind</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">Features</span>
                        <span className="font-bold text-white text-xs sm:text-sm">Uploads, filters, search</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-blue-300 uppercase tracking-wider block">Context</span>
                        <span className="font-bold text-blue-300 text-xs sm:text-sm">Internship</span>
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
                        <span>View details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-sky-300" />
                      </button>
                    </div>

                    {/* Floating Badge (Overlapping Bottom Corner) */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-blue-950/95 text-blue-200 border border-blue-400/50 px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 z-30 font-sans font-medium text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-blue-400 " />
                      <span className="font-bold">Suvidha Foundation internship</span>
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
                  <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? "bg-coral " : "bg-white/40"}`} />
                  <span>0{idx + 1} {item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Interaction Instruction Hint */}
          <span className="font-sans font-medium text-[11px] text-[#A0A0A0] text-center sm:text-right">
            Hover to pause · Click a card to step
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ARCHITECTURAL BLUEPRINT INSPECTOR MODAL                                   */}
      {/* ========================================================================= */}
      {activeInspector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 "
          role="dialog"
          aria-modal="true"
          aria-label={activeInspector.title}
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
                aria-label="Close project details"
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
                <span>Details</span>
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
                <span>Stack</span>
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
                  <span>GitHub profile</span>
                </a>
              )}
              <button
                onClick={() => setActiveInspector(null)}
                className="btn-liquid-glass-dark px-5 py-2.5 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
