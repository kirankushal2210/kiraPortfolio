"use client";

import React, { useState, useRef, useCallback } from "react";
import { useModalDismiss } from "@/lib/useModalDismiss";
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
  pct?: number;
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
    role: "Independent engineer",
    company: "Self-employed · Hyderabad, India",
    period: "2025 — NOW",
    tag: "AI PRODUCTS & CLIENT SITES",
    summary:
      "Building AI products (Arcwell, TopicPilot, the AI news aggregator) and client websites end to end.",
    highlightTitle: "Rules beside the model",
    highlightText:
      "In Arcwell, who may use AI and how often is checked in Postgres before any model is called, and the output is validated before the app sees it.",
    architectureType: "neural",
    systemBadge: "AI PRODUCTS · CLIENT SITES",
    metrics: [
      {
        label: "ROLE",
        value: "Solo",
        subtext: "Self-employed",
        detail: "I plan, build and ship each project myself, using Claude Code and Codex as coding agents.",
      },
      {
        label: "SINCE",
        value: "2025",
        subtext: "Full time",
        detail: "Left Tech Mahindra in 2025 to build my own products full time.",
      },
      {
        label: "WORK",
        value: "AI + web",
        subtext: "Products and sites",
        detail: "Multi-agent and RAG products, plus websites for clients (real estate, church and NGO, a design studio).",
      },
    ],
    stack: ["Python", "Next.js", "React Native", "LangChain", "PostgreSQL", "Supabase"],
    deepDive: {
      systemArchitecture: "Building my own AI products and client websites, from the database schema to the prompt.",
      runtimeTelemetry: [
        "Arcwell: a training, nutrition and recovery app for athletes and coaches, on Expo and Supabase",
        "TopicPilot: a multi-agent research assistant (Planner, Searcher, Critic, Writer) with cited briefs",
        "AI news aggregator: scrapes blogs, feeds and YouTube transcripts into ranked daily summaries"
      ],
      benchmarkQuote: "Also built client sites: a real estate site, a church and NGO platform, and a design studio portfolio."
    }
  },
  {
    id: "tech-mahindra",
    index: "02",
    role: "Technical Associate",
    company: "Tech Mahindra",
    period: "OCT 2024 — APR 2025",
    tag: "TECHNICAL SUPPORT",
    summary:
      "Technical support for a large US retail client: diagnosed hardware, software and network faults and worked with other teams on recurring issues.",
    highlightTitle: "Diagnosing faults",
    highlightText:
      "Worked through store issues step by step to find whether the cause was hardware, software or the network, then fixed it or passed it to the right team.",
    architectureType: "infrastructure",
    systemBadge: "RETAIL SUPPORT · US CLIENT",
    metrics: [
      {
        label: "CLIENT",
        value: "US retail",
        subtext: "Large retailer",
        detail: "Supported store systems for a large US retail client.",
      },
      {
        label: "FAULTS",
        value: "HW / SW",
        subtext: "Plus network",
        detail: "Diagnosed hardware, software and network faults in store systems.",
      },
      {
        label: "TEAMS",
        value: "Cross-team",
        subtext: "Recurring issues",
        detail: "Worked with other teams to track down issues that kept coming back.",
      },
    ],
    stack: ["Hardware support", "Networking", "Troubleshooting", "Linux"],
    deepDive: {
      systemArchitecture: "Technical support for the store systems of a large US retail client.",
      runtimeTelemetry: [
        "Diagnosed hardware, software and network faults reported by stores",
        "Worked with other teams on issues that kept recurring",
        "Fixed cabling faults on site using structured troubleshooting"
      ],
      benchmarkQuote: "Left in 2025 to build my own products full time."
    }
  },
  {
    id: "suvidha",
    index: "03",
    role: "Web Developer Intern",
    company: "Suvidha Foundation",
    period: "MAY 2023 — JUN 2023",
    tag: "FRONT-END INTERNSHIP",
    summary:
      "Built the React front end of a research-project portal where researchers upload, list and search projects.",
    highlightTitle: "Uploads, listings and search",
    highlightText:
      "Built faceted filters and multi-part file uploads in React and Tailwind CSS, wired to the backend team's API.",
    architectureType: "component-stack",
    systemBadge: "REACT FRONT END · RESEARCH PORTAL",
    metrics: [
      {
        label: "PART",
        value: "Front end",
        subtext: "React",
        detail: "I built the front end; the backend team owned the API.",
      },
      {
        label: "FEATURES",
        value: "Uploads",
        subtext: "Listings, search",
        detail: "Researchers upload projects, browse listings and search by domain.",
      },
      {
        label: "LENGTH",
        value: "2 months",
        subtext: "Internship",
        detail: "A May to June 2023 internship during my B.Tech.",
      },
    ],
    stack: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
    deepDive: {
      systemArchitecture: "The React front end of a portal where researchers upload, list and search research projects.",
      runtimeTelemetry: [
        "Project listings with faceted filters and search by domain",
        "Multi-part file uploads for research projects",
        "Tailwind CSS styling, wired to the backend team's REST API"
      ],
      benchmarkQuote: "My first web development role, during my B.Tech at Malla Reddy University."
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
          <circle cx="20" cy="20" r="3" fill="#FF5722" className="" />
        </svg>
        <Cpu className="absolute w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </div>

      {/* Orbiting Agent Nodes in 3D Space */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute -translate-x-12 -translate-y-6 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 border border-coral/40 text-[9px] font-mono text-coral shadow-md ">
          <span className="w-1.5 h-1.5 rounded-full bg-coral " />
          <span>PLANNER</span>
        </div>
        <div className="absolute translate-x-12 translate-y-6 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 border border-cyan-400/40 text-[9px] font-mono text-cyan-300 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>WRITER</span>
        </div>
      </div>

      {/* Telemetry HUD Badge */}
      <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-1.5">
        <span className="text-coral flex items-center gap-1">
          <Radio className="w-2.5 h-2.5 " /> AGENTS
        </span>
        <span className="text-neutral-300">RAG + LLMS</span>
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
                slot === 0 ? "bg-emerald-400 shadow-[0_0_6px_#34d399]" :
                slot === 1 ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]" :
                "bg-amber-400"
              }`} />
              <span className="text-[8px] font-mono text-neutral-400">
                {["HARDWARE", "SOFTWARE", "NETWORK"][slot]}
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
          <ShieldCheck className="w-2.5 h-2.5" /> RETAIL SUPPORT
        </span>
        <span className="text-neutral-300">FAULT DIAGNOSIS</span>
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
        <div className={`w-36 h-9 rounded-lg bg-blue-500/20 border border-blue-400/80 flex items-center justify-between px-3 shadow-lg -mb-3 transition-transform duration-500 ${
          isHovered ? "-translate-y-4 shadow-[0_10px_20px_rgba(59,130,246,0.3)] bg-blue-500/30" : ""
        }`}>
          <span className="text-[9px] font-mono text-blue-200 font-bold">REACT UI</span>
          <Layers className="w-3 h-3 text-blue-300" />
        </div>

        {/* Layer 2: Virtual DOM / Engine */}
        <div className={`w-36 h-9 rounded-lg bg-neutral-900/90 border border-neutral-700 flex items-center justify-between px-3 shadow-md -mb-3 transition-transform duration-500 ${
          isHovered ? "-translate-y-1.5 border-coral/60" : ""
        }`}>
          <span className="text-[9px] font-mono text-neutral-300">TAILWIND CSS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-coral " />
        </div>

        {/* Layer 1: Data Intake & Multi-Part API */}
        <div className="w-36 h-9 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between px-3 shadow-sm">
          <span className="text-[9px] font-mono text-neutral-400">RESEARCH API</span>
          <span className="text-[8px] font-mono text-emerald-400">REST</span>
        </div>
      </div>

      {/* Telemetry HUD Footer */}
      <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-1.5">
        <span className="text-blue-400 flex items-center gap-1">
          <Zap className="w-2.5 h-2.5" /> UPLOADS + SEARCH
        </span>
        <span className="text-neutral-300">LISTINGS</span>
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
        title="Click for details"
      >
        {exp.architectureType === "neural" && <Neural3DStage isHovered={isHovered} />}
        {exp.architectureType === "infrastructure" && <Infrastructure3DStage isHovered={isHovered} />}
        {exp.architectureType === "component-stack" && <ComponentStack3DStage isHovered={isHovered} />}

        {/* Hover Blueprint Quick-Trigger Pill */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 border border-white/20 text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="w-2.5 h-2.5 text-coral" />
          <span>DETAILS</span>
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
                className="absolute -top-16 inset-x-2 z-40 bg-neutral-900/95 text-white p-2.5 rounded-xl border border-neutral-700 shadow-2xl pointer-events-none"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-coral mb-1">
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5 " />
                    {activeMetricHover.label}: {activeMetricHover.value}
                  </span>
                  <span className="text-neutral-400">{activeMetricHover.subtext}</span>
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
          title="See details"
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
  useModalDismiss(true, onClose);
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${exp.role} at ${exp.company}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 select-none"
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
              Experience · {exp.index}
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
            aria-label="Close"
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
              The role
            </span>
            <p className="text-neutral-200 font-medium leading-relaxed">
              {exp.deepDive.systemArchitecture}
            </p>
          </div>

          {/* Operational Telemetry Points */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              What I did
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
            Section 05 · Work experience
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-1 text-[#121212]">
            Work Experience.
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-500 max-w-xs tracking-wide">
          Hover over a card to tilt it. Click a card for more detail.
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

