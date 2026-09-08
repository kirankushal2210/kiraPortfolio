"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/portfolioData";
import { Cpu, Smartphone, Server, Cloud, CheckCircle2 } from "lucide-react";

export default function FolioResumeSkills() {
  const skills = RESUME_DATA.technicalSkills;

  const categories = [
    {
      id: "ai",
      data: skills.aiAndMl,
      icon: Cpu,
      accent: "from-coral/20 to-transparent",
    },
    {
      id: "frontend",
      data: skills.frontendAndMobile,
      icon: Smartphone,
      accent: "from-sky-500/20 to-transparent",
    },
    {
      id: "backend",
      data: skills.backendAndApis,
      icon: Server,
      accent: "from-emerald-500/20 to-transparent",
    },
    {
      id: "devops",
      data: skills.devOpsAndCloud,
      icon: Cloud,
      accent: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 bg-black border-t border-white/5">
      <div className="w-[92%] max-w-[1400px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-4">
          <div>
            <span className="text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Technical Arsenal // ATS Verified
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Skills &amp; Frameworks
            </h2>
          </div>
          <p className="text-muted text-sm max-w-md">
            Specialized in autonomous multi-agent orchestration, offline-first mobile engineering, and production model inference.
          </p>
        </div>

        {/* 4-Category Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-charcoal rounded-[32px] p-8 border border-white/5 hover:border-white/15 transition-all shadow-xl space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-coral">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {cat.data.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.data.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-medium tracking-wide hover:border-coral/50 hover:text-coral transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
