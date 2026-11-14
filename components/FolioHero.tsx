"use client";

import React from "react";
import { Phone, Mail, MapPin, Download, ArrowDownRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/portfolioData";
import RevolvingWorkflow3D from "@/components/RevolvingWorkflow3D";

interface FolioHeroProps {
  onOpenResume: () => void;
}

export default function FolioHero({ onOpenResume }: FolioHeroProps) {
  const pillars = [
    { number: "*01", label: "Full-stack web and mobile apps" },
    { number: "*02", label: "Multi-agent systems and RAG" },
    { number: "*03", label: "Docker, GitHub Actions and AWS" },
    { number: "*04", label: "Postgres schemas and APIs" },
  ];

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-10 px-4 sm:px-6">
      {/* Dark Obsidian Charcoal Container with 32px / 40px Corner Radius */}
      <div className="w-full max-w-[1400px] mx-auto bg-[#161616] rounded-[32px] sm:rounded-[40px] relative overflow-hidden p-6 sm:p-10 lg:p-14 min-h-[760px] lg:min-h-[860px] flex flex-col justify-between border border-white/[0.08] shadow-2xl">

        {/* TOP HEADER GRID: Title (Left) + Value Statement & Contact HUD (Right) */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 sm:pt-4">
          {/* Main Display Title (Left Column) - Crisp and 100% Unobstructed */}
          <div className="lg:col-span-7 space-y-3">
            <span className="font-sans text-[12px] sm:text-[13px] tracking-widest text-[#A0A0A0] uppercase block font-medium">
              Hey, I&apos;m a
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[0.98]">
              Full Stack <br />
              <span className="text-white">
                Engineer
              </span>
            </h1>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-coral inline-block"></span>
              <span className="font-sans text-xs text-white/80 tracking-widest uppercase font-medium">
                Munigonda Kiran • Moving into AI engineering
              </span>
            </div>
          </div>

          {/* Value Statement & Quick Contact HUD (Right Column) */}
          <div className="lg:col-span-5 lg:pl-6 flex flex-col justify-end lg:pt-4 space-y-5">
            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-md">
              I build full-stack products and the AI systems inside them: multi-agent workflows, retrieval over real documents, and the backend that makes them work in production. Moving into AI engineering full time.
            </p>

            {/* Contact Metadata Bar */}
            <div className="space-y-2 text-xs text-white/80 font-sans bg-black/50 p-4 rounded-2xl border border-white/[0.08] max-w-md shadow-xl">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-coral" />
                <span>{RESUME_DATA.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-coral" />
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="hover:text-coral transition-colors"
                >
                  {RESUME_DATA.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>{RESUME_DATA.personal.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/Munigonda_Kiran_Resume.pdf"
                download="Munigonda_Kiran_Resume.pdf"
                className="btn-solid px-5 py-2.5 text-xs flex items-center gap-2 no-underline cursor-pointer"
                title="Download resume (PDF)"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={onOpenResume}
                className="btn-liquid-glass-dark px-4 py-2.5 text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white cursor-pointer"
                title="Preview resume"
              >
                <span>Preview resume</span>
              </button>
              <a
                href="#case-studies"
                className="btn-liquid-glass-dark px-5 py-2.5 text-xs flex items-center gap-1.5"
              >
                <span>Case Studies</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3D REVOLVING ICONS & FULL STACK DEVELOPMENT WORKFLOW SLIDE */}
        {/* Replaces the previous globe image completely with 3D revolving icons (TypeScript, Python, Postgres, Supabase, Auth, Payments, AWS, Docker, CI, AI, LLMs) */}
        <div className="relative z-10 my-4 sm:my-6 w-full">
          <RevolvingWorkflow3D />
        </div>

        {/* BOTTOM FOUR-COLUMN SERVICE/FOCUS MATRIX */}
        <div className="relative z-10 pt-4 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-white/[0.08] pt-6">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="flex items-center gap-2.5 group">
                <span className="text-coral font-bold text-sm sm:text-base font-sans">
                  {pillar.number}
                </span>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
