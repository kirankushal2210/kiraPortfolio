"use client";

import React from "react";

export default function FolioClients() {
  const ecosystems = [
    "LangChain",
    "PyTorch",
    "React Native",
    "PostgreSQL",
    "Docker",
    "Claude API",
    "OpenAI",
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-black border-b border-white/[0.06]">
      <div className="w-[92%] max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
        {/* Label (Left): Ecosystems & Tech I Work With */}
        <div className="font-sans font-medium text-[12px] tracking-widest text-[#A0A0A0] uppercase whitespace-nowrap">
          Ecosystems &amp; Tech I Work With
        </div>

        {/* Ticker/Logos (Right): Clean horizontal white-monochrome icon strip */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-7 md:gap-9">
          {ecosystems.map((eco, idx) => (
            <React.Fragment key={eco}>
              <span className="text-white/85 text-sm sm:text-base lg:text-lg font-bold tracking-tight hover:text-coral transition-colors select-none font-sans">
                {eco}
              </span>
              {idx < ecosystems.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 inline-block select-none" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
