"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";
import { Award, ShieldCheck, Trophy, Sparkles, GraduationCap } from "lucide-react";

export default function CredentialsHud() {
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case "Award":
        return "bg-amber-950/40 text-amber-300 border-amber-500/30";
      case "Certification":
        return "bg-sky-950/40 text-sky-300 border-sky-500/30";
      case "Cohort":
        return "bg-emerald-950/40 text-emerald-300 border-emerald-500/30";
      case "Hackathon":
        return "bg-purple-950/40 text-purple-300 border-purple-500/30";
      default:
        return "bg-white/10 text-slate-300 border-white/10";
    }
  };

  return (
    <section id="credentials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-phosphor-bright tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-phosphor" />
              <span>VERIFIED PEDIGREE // HUD REGISTRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Credentials, Cohorts &amp; Competitions
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Rigorous full-stack cohorts, cloud infrastructure certifications, and championship pitching honors.
          </p>
        </div>

        {/* 2-Column Tabular HUD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.credentials.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-[#0F1217] border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top status line */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.issuer}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500">{item.year}</span>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${getBadgeStyle(
                        item.category
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                {/* Details */}
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Telemetry ID */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>REC_ID: {item.id.toUpperCase()}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </span>
              </div>
            </div>
          ))}

          {/* Academic Background HUD Box */}
          <div className="p-5 rounded-xl bg-[#0D1015] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  MALLA REDDY UNIVERSITY
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border bg-emerald-950/40 text-emerald-300 border-emerald-500/30">
                  CGPA 8.06 / 10.0
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-phosphor-bright" />
                <span>B.Tech in Computer Science &amp; Engineering</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Graduated 2024. Core focus in distributed systems, algorithms, AI pipelines, and database optimization.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>CLASS OF 2024 // HYDERABAD</span>
              <span className="text-slate-400">STATUS: CONFERRED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
