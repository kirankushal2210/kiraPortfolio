"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StackCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  gradient: string;
  skills: string[];
}

const STACKS: StackCard[] = [
  {
    id: "ai-ml",
    tag: "AI",
    title: "AI and machine learning",
    subtitle: "Multi-agent workflows, retrieval over documents, and some fine-tuning with PEFT.",
    gradient: "from-[#020B14] via-[#06243A] to-[#00F0FF]/40",
    skills: ["Claude API", "OpenAI", "Groq", "LangChain", "LlamaIndex", "ChromaDB", "Pinecone", "PyTorch", "PEFT", "vLLM"],
  },
  {
    id: "frontend",
    tag: "Front end",
    title: "Web and mobile front end",
    subtitle: "Web apps in Next.js and Android apps in React Native with Expo.",
    gradient: "from-[#140207] via-[#3B0719] to-[#FF3B69]/50",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    tag: "Back end",
    title: "Back end and databases",
    subtitle: "APIs, Postgres schemas, row-level security and the tests that prove it.",
    gradient: "from-[#020514] via-[#0A1647] to-[#2B6CB0]/40",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "SQLite", "MongoDB"],
  },
  {
    id: "devops",
    tag: "Infra",
    title: "Infrastructure and tooling",
    subtitle: "Docker, CI builds and deploys, plus Claude Code and Codex for day-to-day building.",
    gradient: "from-[#080B10] via-[#102229] to-[#20B2AA]/40",
    skills: ["Docker", "GitHub Actions", "AWS", "Vercel", "Linux", "Claude Code", "Codex"],
  },
];

export default function TechnicalArsenalCoverflow() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((cur) => (cur === 0 ? STACKS.length - 1 : cur - 1));
  const next = () => setActive((cur) => (cur === STACKS.length - 1 ? 0 : cur + 1));

  return (
    <section id="systems" className="relative w-full py-28 bg-[#040404] text-white overflow-hidden flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800/80 pb-6">
        <div>
          <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase">
            06 · Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mt-1 text-white">
            What I build with
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-400 max-w-sm tracking-wide">
          The tools I use in my own projects, grouped by where they sit.
        </p>
      </div>

      {/* 3D Horizon Stage */}
      <div className="relative w-full max-w-6xl h-[380px] md:h-[440px] flex items-center justify-center [perspective:1400px]">
        {STACKS.map((stack, idx) => {
          const offset = idx - active;
          const isActive = offset === 0;

          // Compute 3D Cylindrical Transforms
          const xOffset = offset * 280;
          const zOffset = -Math.abs(offset) * 140;
          const rotateY = -offset * 32;
          const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.28;
          const scale = 1 - Math.abs(offset) * 0.12;

          return (
            <motion.div
              key={stack.id}
              onClick={() => setActive(idx)}
              animate={{
                x: xOffset,
                z: zOffset,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                zIndex: 30 - Math.abs(offset) * 5,
              }}
              transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute will-change-transform w-[86vw] max-w-[540px] aspect-[16/10] rounded-2xl md:rounded-3xl cursor-pointer p-8 flex flex-col justify-between border border-white/10 shadow-2xl overflow-hidden select-none"
            >
              {/* Mesh Layer */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${stack.gradient} opacity-90`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_0%,rgba(0,0,0,0.85)_100%)]" />

              {/* Card Meta Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-sans font-medium tracking-widest text-white/70 uppercase">
                  {stack.tag}
                </span>
                <span className="text-white/40 text-xs font-sans font-medium">
                  0{idx + 1} / 0{STACKS.length}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                  {stack.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                  {stack.subtitle}
                </p>

                {/* Micro Pill Skills (Revealed on active slide) */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-wrap gap-1.5 pt-3"
                  >
                    {stack.skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15"
                      >
                        {skill}
                      </span>
                    ))}
                    {stack.skills.length > 5 && (
                      <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-transparent text-white/50">
                        +{stack.skills.length - 5} more
                      </span>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Side Chevrons */}
        <button
          onClick={prev}
          aria-label="Previous card"
          className="absolute left-4 md:left-12 z-40 w-12 h-12 btn-liquid-metal flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-200 stroke-[2.5]" />
        </button>
        <button
          onClick={next}
          aria-label="Next card"
          className="absolute right-4 md:right-12 z-40 w-12 h-12 btn-liquid-metal flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 text-neutral-200 stroke-[2.5]" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2.5 mt-8 z-30">
        {STACKS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              active === i ? "w-8 btn-liquid-metal" : "w-2.5 bg-neutral-800 hover:bg-neutral-600 border border-white/10"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
