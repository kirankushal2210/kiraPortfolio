"use client";

import React from "react";
import { 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Layers, 
  CheckCircle2 
} from "lucide-react";

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
  metrics: { label: string; value: string; subtext: string }[];
  stack: string[];
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
    metrics: [
      { label: "INGESTION", value: "< 200ms", subtext: "16-pt intake" },
      { label: "ACCURACY", value: "0.0% RAG", subtext: "Clinical grounding" },
      { label: "vLLM GAIN", value: "+40%", subtext: "PEFT / LoRA boost" },
    ],
    stack: ["Python", "Next.js", "React", "vLLM", "LangChain", "PostgreSQL"],
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
    metrics: [
      { label: "STORE SLA", value: "99.98%", subtext: "Uptime lock" },
      { label: "VELOCITY", value: "-65% MTTR", subtext: "Triage trees" },
      { label: "CONTINUITY", value: "100%", subtext: "Zero cabling drops" },
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
      "Engineered dynamic React frontend workflows for an academic PhD research repository featuring real-time project search, listing, and multi-part upload pipelines with zero layout drift.",
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
];

export default function FolioBehindSystems() {
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
          Verified professional track record across autonomous AI engineering, enterprise infrastructure reliability, and reactive web platforms.
        </p>
      </div>

      {/* 3 Display Cards Side-by-Side (No Side-to-Side Carousel Controls) */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-[32px] bg-white border border-black/[0.08] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group min-h-[500px]"
            >
              {/* Subtle top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

              {/* Top Header / Meta Line */}
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-3.5 text-xs font-mono">
                <span className="text-neutral-500 font-bold uppercase text-[10px]">
                  [{exp.index}] {exp.period}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-600 font-medium">
                  {exp.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-4 my-auto pt-4 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#121212] group-hover:text-coral transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Unboxed Engineering Highlight (Clean Hairline Accent, No Grey Box) */}
                <div className="border-l-2 border-neutral-300 pl-3.5 space-y-1">
                  <h4 className="text-xs font-bold text-[#121212] tracking-tight">
                    {exp.highlightTitle}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {exp.highlightText}
                  </p>
                </div>

                {/* 3 Telemetry Metric Columns */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-black/[0.06]">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block truncate">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-mono font-bold text-[#121212] block">
                        {m.value}
                      </span>
                      <span className="text-[9px] font-sans text-neutral-500 block truncate">
                        {m.subtext}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack - Clean Minimalist Transparent Tags */}
              <div className="pt-3.5 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-neutral-200 text-neutral-600 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
