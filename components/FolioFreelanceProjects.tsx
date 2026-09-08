"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DemoItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  videoSrc?: string;
  posterSrc: string;
  tech: string[];
}

const DEMO_ITEMS: DemoItem[] = [
  {
    id: "healthos",
    title: "HealthOS Mobile Application",
    client: "Healthcare & Clinical Client",
    category: "React Native + Expo Mobile App",
    description:
      "Engineered an offline-first biological telemetry OS with real-time biometric intake, sub-200ms diagnostic latency, and 60-FPS rendering across complex diagnostic charts.",
    videoSrc: "/videos/healthos.mp4",
    posterSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    tech: ["React Native", "Expo", "TypeScript", "Mobile UI/UX", "REST APIs"],
  },
  {
    id: "topicpilot",
    title: "TopicPilot Autonomous Research",
    client: "Enterprise Advisory Client",
    category: "Applied AI & Agentic RAG",
    description:
      "Built a multi-agent consensus system querying thousands of clinical papers via Hybrid-RAG, reducing neuromuscular AI hallucinations to zero via Claude API.",
    videoSrc: "/videos/multi-agent-research.mp4",
    posterSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tech: ["FastAPI", "Python", "LangChain", "OpenAI", "Next.js", "ChromaDB"],
  },
  {
    id: "ai-news",
    title: "AI News & Intelligence Aggregator",
    client: "Tech Media Client",
    category: "Real-Time AI Ingestion",
    description:
      "Automated end-to-end data pipeline scraping 100+ sources via Webshare proxies and Docling, aggregating 5,000+ weekly technical data points into high-density summaries.",
    videoSrc: "/videos/ai-news-aggregator.mp4",
    posterSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    tech: ["React.js", "Tailwind CSS", "Next.js", "RESTful APIs", "Node.js"],
  },
  {
    id: "real-estate",
    title: "Narsimha Luxury Real Estate",
    client: "Commercial Real Estate Client",
    category: "Interactive Property Discovery",
    description:
      "Engineered an aerial drone tour platform and interactive boundary mapping suite with frictionless listing filters and responsive property portfolios.",
    videoSrc: "/videos/real-estate.mp4",
    posterSrc: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    tech: ["React.js", "Tailwind CSS", "TypeScript", "Next.js", "REST APIs"],
  },
  {
    id: "ngo-platform",
    title: "Community Outreach & NGO Platform",
    client: "Faith Organization & NGO Client",
    category: "Non-Profit Community Platform",
    description:
      "Developed high-traffic React workflows for project indexing, research asset downloads, and responsive donor storytelling with smooth API integration.",
    videoSrc: "/videos/church-and-ngo.mp4",
    posterSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML5 Video"],
  },
  {
    id: "creative-studio",
    title: "Creative Studio & Brand Asset Showcase",
    client: "Creative Agency Client",
    category: "High-End Portfolio Showcase",
    description:
      "Interactive studio portfolio emphasizing editorial typographic rhythm, custom video players, and smooth physics-driven transition states.",
    videoSrc: "/videos/graphic-design-portfolio.mp4",
    posterSrc: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    tech: ["React.js", "Tailwind CSS", "CSS Grid", "HTML5 Video", "TypeScript"],
  },
];

export default function ProjectDemosShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? DEMO_ITEMS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === DEMO_ITEMS.length - 1 ? 0 : prevIdx + 1));
  };

  const activeDemo = DEMO_ITEMS[currentIndex];

  return (
    <section id="freelance" className="w-full min-h-[640px] py-24 sm:py-32 px-6 md:px-16 flex flex-col items-center justify-center bg-white text-[#121212] select-none border-t border-neutral-200">
      
      {/* Top Section Header */}
      <div className="w-full max-w-5xl mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-widest text-coral uppercase block">
            SECTION 04.5 // CLIENT COMMISSIONS &amp; DEPLOYMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-1 text-[#121212]">
            Live Production Demos.
          </h2>
        </div>
        <p className="text-xs font-sans font-medium text-neutral-500 max-w-xs tracking-wide">
          Interactive showcase of production-grade client web platforms, mobile telemetry OS, and AI systems.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Stacked Depth Media Card */}
        <div className="md:col-span-6 relative flex items-center justify-center isolate">
          {/* Depth Layer 2 (Furthest Back) */}
          <div className="absolute w-72 sm:w-80 md:w-96 aspect-square rounded-[32px] bg-neutral-200/90 rotate-6 translate-x-5 -translate-y-2 scale-90 -z-20 shadow-sm" />

          {/* Depth Layer 1 (Middle Offset) */}
          <div className="absolute w-72 sm:w-80 md:w-96 aspect-square rounded-[32px] bg-neutral-300/80 -rotate-6 -translate-x-5 -translate-y-1 scale-95 -z-10 shadow-md" />

          {/* Front Active Media Card */}
          <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-[32px] overflow-hidden bg-black shadow-2xl z-10 border border-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                {activeDemo.videoSrc ? (
                  <video
                    src={activeDemo.videoSrc}
                    poster={activeDemo.posterSrc}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={activeDemo.posterSrc}
                    alt={activeDemo.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-black/75 text-coral backdrop-blur-md border border-white/10 shadow-lg">
                    {activeDemo.category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Editorial Details & Controls */}
        <div className="md:col-span-6 flex flex-col justify-between h-full space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <span className="text-xs font-sans font-semibold text-coral uppercase tracking-wider block">
                  {activeDemo.client}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141414] mt-1">
                  {activeDemo.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-normal pt-1">
                {activeDemo.description}
              </p>

              {/* Minimal inline stack badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeDemo.tech.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-sans font-medium px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200 hover:border-coral/50 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Controls: Circular Black Arrow Buttons & Capsule Dots */}
          <div className="flex items-center gap-4 pt-4 border-t border-black/10">
            <button
              onClick={prev}
              aria-label="Previous demo"
              className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center hover:bg-black transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={next}
              aria-label="Next demo"
              className="w-12 h-12 rounded-full bg-[#161616] text-white flex items-center justify-center hover:bg-black transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 ml-2">
              {DEMO_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to demo ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? "w-8 bg-[#161616]" 
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-sans font-medium text-neutral-500 ml-auto font-mono">
              0{currentIndex + 1} / 0{DEMO_ITEMS.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
