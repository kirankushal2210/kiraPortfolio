"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Activity, 
  Sparkles 
} from "lucide-react";

interface TelemetryPoint {
  label: string;
  value: string;
  detail: string;
}

interface ExperienceRecord {
  id: string;
  category: string;
  role: string;
  company: string;
  period: string;
  description: string;
  mediaImage: string;
  stack: string[];
  blueprintTitle: string;
  nodes: string[];
  telemetry: TelemetryPoint[];
}

const EXPERIENCES: ExperienceRecord[] = [
  {
    id: "independent-ai",
    category: "AUTONOMOUS AI & PRODUCT ARCHITECTURE",
    role: "Independent AI & Web Developer",
    company: "Independent Systems & Applied Research",
    period: "2025 — PRESENT",
    description:
      "Engineering an offline-first biological telemetry OS (HlthOS) managing 4 core metabolic pillars at strict 60-FPS rendering, while deploying multi-agent consensus pipelines with zero hallucinations.",
    mediaImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    blueprintTitle: "HlthOS AI Engine & Telemetry Pipeline",
    nodes: ["Client Ingestion", "16-Pt Diagnostic", "Hybrid-RAG Core", "vLLM Worker", "PostgreSQL Sink"],
    telemetry: [
      { label: "DIAGNOSTIC LATENCY", value: "< 200ms", detail: "Sub-200ms biometric schema intake" },
      { label: "TELEMETRY ENGINE", value: "Strict 60-FPS", detail: "Deterministic 4-pillar rendering" },
      { label: "INFERENCE GAIN", value: "+40%", detail: "vLLM serving with PEFT/LoRA" },
    ],
    stack: ["Python", "vLLM", "LangChain", "Claude API", "PostgreSQL", "React Native"],
  },
  {
    id: "tech-mahindra",
    category: "ENTERPRISE SYSTEMS & INFRASTRUCTURE",
    role: "Technical Associate",
    company: "Tech Mahindra",
    period: "OCT 2024 — APR 2025",
    description:
      "Restored mission-critical systems continuity for US retail chains, executing structured fault isolation across hardware, POS terminals, and physical network cabling bottlenecks.",
    mediaImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    blueprintTitle: "Enterprise Triage Topology",
    nodes: ["Store Terminal", "Physical Cabling", "Diagnostic Tree", "SLA Verification", "Restoration"],
    telemetry: [
      { label: "STORE UPTIME SLA", value: "99.98%", detail: "Mission-critical retail nodes" },
      { label: "RESOLUTION VELOCITY", value: "-65% MTTR", detail: "Structured diagnostic fault trees" },
      { label: "CABLING CONTINUITY", value: "100%", detail: "Hardware & cabling continuity" },
    ],
    stack: ["Enterprise Systems", "Network Diagnostics", "Hardware Continuity", "Systems SLA"],
  },
  {
    id: "suvidha-foundation",
    category: "FRONTEND ARCHITECTURE & DATA INTEGRATION",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    period: "MAY 2023 — JUN 2023",
    description:
      "Engineered responsive dynamic web workflows in React.js and Tailwind CSS for an academic PhD research asset platform with live search and multi-part upload pipelines.",
    mediaImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    blueprintTitle: "Reactive State & Upload Pipeline",
    nodes: ["Search Query", "React Hydration", "Tailwind Viewport", "REST Endpoint", "Asset Storage"],
    telemetry: [
      { label: "QUERY LATENCY", value: "sub-100ms", detail: "Optimized client state caching" },
      { label: "LAYOUT STABILITY", value: "0.00 CLS", detail: "Deterministic responsive layout" },
      { label: "DATA ACCURACY", value: "100% Flow", detail: "Multi-part upload pipeline" },
    ],
    stack: ["React.js", "Tailwind CSS", "RESTful Data Integration", "TypeScript"],
  },
];

export default function Section05Experience3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth gyroscopic spring physics for 3D card tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 320, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 320, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHoveringCard(false);
  };

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? EXPERIENCES.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === EXPERIENCES.length - 1 ? 0 : prevIdx + 1));
  };

  const active = EXPERIENCES[currentIndex];

  return (
    <section 
      id="experience" 
      className="w-full min-h-[760px] py-28 px-6 md:px-16 lg:px-24 bg-white text-[#0A0A0A] flex flex-col justify-center border-t border-neutral-200 select-none"
    >
      
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#FF3B00] uppercase font-semibold block">
            SECTION 05 // SYSTEM ROLES &amp; OPERATIONAL RECORD
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mt-1">
            Work Experience.
          </h2>
        </div>
        <p className="text-xs font-mono text-neutral-500 max-w-xs tracking-wide text-left md:text-right">
          Hover over the card stage to project real-time 3D telemetry blueprints and verified metrics.
        </p>
      </div>

      {/* Main Dual-Column Showcase */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: 3D Perspective Pop-Out Deck */}
        <div className="md:col-span-5 relative flex items-center justify-center [perspective:1200px]">
          
          {/* Depth Card 2 (Background Offset) */}
          <div className="absolute w-[290px] sm:w-[350px] aspect-square rounded-[36px] bg-neutral-200 -rotate-6 -translate-x-5 -translate-y-2 scale-95 -z-20 shadow-sm transition-transform" />

          {/* Depth Card 1 (Mid Layer Offset) */}
          <div className="absolute w-[290px] sm:w-[350px] aspect-square rounded-[36px] bg-neutral-300/80 rotate-6 translate-x-4 -translate-y-1 scale-98 -z-10 shadow-md transition-transform" />

          {/* Front Interactive 3D Card Stage */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringCard(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[290px] sm:w-[350px] aspect-square rounded-[36px] bg-black shadow-2xl z-10 border border-neutral-200 cursor-pointer overflow-hidden group"
          >
            {/* Background Master Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full relative"
              >
                <img
                  src={active.mediaImage}
                  alt={active.role}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Static Top-Left Pill Tag */}
            <div 
              style={{ transform: "translateZ(24px)" }}
              className="absolute top-4 left-4 z-20"
            >
              <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-3 py-1.5 rounded-full bg-black/70 text-white backdrop-blur-md border border-white/15">
                {active.period}
              </span>
            </div>

            {/* 3D POP-UP BLUEPRINT OVERLAY (Triggered on Hover) */}
            <AnimatePresence>
              {isHoveringCard && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  style={{ transform: "translateZ(48px)" }}
                  className="absolute inset-4 rounded-[26px] bg-black/90 backdrop-blur-xl border border-white/20 p-5 flex flex-col justify-between z-30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  {/* Blueprint Top Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#FF3B00]">
                      <span className="flex items-center gap-1.5 uppercase font-semibold">
                        <Activity className="w-3 h-3 animate-pulse" />
                        SYSTEM BLUEPRINT
                      </span>
                      <span className="text-white/40">3D TELEMETRY</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white tracking-tight">
                      {active.blueprintTitle}
                    </h4>
                  </div>

                  {/* Architecture Sequence Flow */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest block">
                      TOPOLOGY NODES
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {active.nodes.map((node, nIdx) => (
                        <span
                          key={nIdx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/10"
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified Spec Points */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-2.5">
                    {active.telemetry.map((t, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-[8px] font-mono text-white/50 uppercase block truncate">
                          {t.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-white block">
                          {t.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Baseline Cue when not hovered */}
            {!isHoveringCard && (
              <div 
                style={{ transform: "translateZ(20px)" }}
                className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between text-[11px] font-mono text-white/70"
              >
                <span>{active.company}</span>
                <span className="flex items-center gap-1 text-[10px] text-[#FF3B00] bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                  <Sparkles className="w-3 h-3" />
                  HOVER TO INSPECT
                </span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column: Editorial Copy & Interactive Triggers */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="space-y-4"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-[#FF3B00] uppercase tracking-wider block">
                  {active.category}
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] mt-1 leading-[1.1]">
                  {active.role}
                </h3>
                <p className="text-sm sm:text-base font-medium text-neutral-500 mt-1">
                  {active.company}
                </p>
              </div>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal pt-1">
                {active.description}
              </p>

              {/* Stack Badges Matching Section 04.5 */}
              <div className="flex flex-wrap gap-2 pt-3">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-xl bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls: Circular Black Buttons + Capsule Indicator */}
          <div className="flex items-center gap-6 pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous experience"
                className="w-12 h-12 rounded-full bg-[#121212] hover:bg-black text-white flex items-center justify-center transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={next}
                aria-label="Next experience"
                className="w-12 h-12 rounded-full bg-[#121212] hover:bg-black text-white flex items-center justify-center transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Pill Capsule Pagination Bar */}
            <div className="flex items-center gap-2">
              {EXPERIENCES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Jump to role ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i ? "w-7 bg-[#121212]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-mono text-neutral-400 ml-auto">
              0{currentIndex + 1} / 0{EXPERIENCES.length}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
