"use client";

import React from "react";
import { RESUME_DATA } from "@/lib/portfolioData";
import { Briefcase, GraduationCap, Award, Trophy, Dumbbell } from "lucide-react";

export default function FolioResumeExperience() {
  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 bg-black border-t border-white/5">
      <div className="w-[92%] max-w-[1400px] mx-auto space-y-24">
        {/* 1. Professional Experience Section */}
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Career Trajectory // Verified History
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            {RESUME_DATA.experience.map((exp) => (
              <div
                key={exp.company}
                className="bg-charcoal rounded-[32px] p-8 sm:p-10 border border-white/5 hover:border-white/15 transition-all shadow-xl space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {exp.role} <span className="text-coral font-medium">@ {exp.company}</span>
                    </h3>
                    <div className="text-xs text-muted font-mono mt-1">{exp.location}</div>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-semibold px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                    {exp.period}
                  </span>
                </div>

                {/* Verbatim Bullets from Resume PDF */}
                <ul className="space-y-2.5 text-sm sm:text-base text-[#CCCCCC] leading-relaxed pt-2">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-coral font-bold select-none mt-1">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-xs text-muted font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Education Section (All 3 Tiers from PDF) */}
        <div id="education" className="space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Academic Background // All 3 Tiers
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESUME_DATA.education.map((edu) => (
              <div
                key={edu.institution}
                className="bg-charcoal rounded-[32px] p-8 border border-white/5 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-coral font-semibold">
                    <span className="font-mono">{edu.period}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-coral/10 border border-coral/30">
                      {edu.score}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-xs text-white/50 pt-3 border-t border-white/5 font-mono">
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Achievements, Certifications & Leadership */}
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Honors &amp; Recognized Milestones
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Achievements &amp; Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.achievements.map((ach) => (
              <div
                key={ach.title}
                className="bg-charcoal rounded-[32px] p-7 border border-white/5 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-muted mb-2">
                    <span>{ach.category}</span>
                    <span className="text-coral font-semibold font-mono text-[11px] px-2 py-0.5 rounded-full bg-coral/10 border border-coral/20">
                      {ach.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {ach.title}
                  </h4>
                  <div className="text-xs text-coral font-medium mt-0.5">{ach.issuer}</div>
                  <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Athletic Discipline & Outside The Code */}
        <div className="bg-charcoal rounded-[32px] p-8 sm:p-12 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs text-coral font-bold tracking-widest uppercase flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              <span>Athletic Discipline &amp; Hobbies</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Under The Barbell &amp; Beyond
            </h3>
            <p className="text-sm text-muted max-w-2xl leading-relaxed">
              Applying progressive overload, mechanical leverage, and absolute consistency to both competitive powerlifting benchmarks (Squat, Bench Press, Deadlift) and distributed autonomous AI systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:max-w-xs">
            {RESUME_DATA.hobbies.map((h) => (
              <span
                key={h}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
