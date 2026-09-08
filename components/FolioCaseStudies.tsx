"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Cpu, Database, Layers, ShieldCheck, Zap, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import GenerativeArchitectureMesh from "@/components/GenerativeArchitectureMesh";

export default function FolioCaseStudies() {
  const caseStudies = [
    {
      id: "hlthos",
      index: "01",
      title: "HlthOS: AI-Powered Biological Operating System",
      period: "March 2026 – Present",
      category: "Autonomous AI & Biological Intelligence",
      tagline: "Offline-First Telemetry & Clinical Hybrid-RAG",
      image: "/images/project_serum.jpg",
      stack: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Python",
        "PyTorch",
        "LangChain",
        "LlamaIndex",
        "Pinecone",
        "vLLM",
        "Claude API",
      ],
      highlights: [
        "Engineered an offline-first biological operating system managing 4 core pillars (Nutrition, Training, Recovery, AI Coaching) maintaining strict 60-FPS telemetry visualization.",
        "Architected a relational PostgreSQL database schema ingesting 16-point onboarding diagnostics and real-time biometrics with sub-200ms latency.",
        "Built a Hybrid-RAG architecture over peer-reviewed clinical documents, driving a 100% reduction in hallucinations for neuromuscular advice via Claude API.",
        "Fine-tuned domain LLMs via PyTorch & PEFT, deployed with vLLM to boost inference throughput by 40% for regional dietary analysis.",
        "Deployed a parallel deterministic mathematical fallback engine enforcing strict computational guardrails with 100% caloric and macronutrient bounding accuracy.",
      ],
      metrics: [
        { label: "Rendering Rate", value: "60-FPS Lock" },
        { label: "Biometric Latency", value: "< 200ms" },
        { label: "Hallucination Drop", value: "100%" },
        { label: "Inference Boost", value: "+40% vLLM" },
      ],
      repoUrl: "https://github.com/kirankushal22",
      demoUrl: "https://portfolio-kiran-one.vercel.app",
    },
    {
      id: "ai-news",
      index: "02",
      title: "End-to-End Agentic AI News Aggregator",
      period: "Dec 2025 – Feb 2026",
      category: "Autonomous Multi-Agent Ingestion",
      tagline: "Webshare Proxies, Docling & Multi-Modal Synthesis",
      image: "/images/project_headphones.jpg",
      stack: [
        "PostgreSQL",
        "Webshare Proxies",
        "UV",
        "Docker",
        "Docling",
        "LangChain",
        "Python",
        "GPT-4o",
      ],
      highlights: [
        "Engineered an automated ingestion pipeline utilizing Webshare rotating proxies and Docling to scrape and parse 100+ technical sources without rate limits.",
        "Developed a multi-modal extraction engine storing 5,000+ weekly datapoints across YouTube transcripts, engineering blogs, and developer RSS feeds in PostgreSQL.",
        "Designed a Dockerized multi-agent LangChain + GPT-4o workflow autonomously synthesizing high-fidelity briefings, reducing user reading time by 80%.",
        "Integrated dynamic vector scoring to cross-reference daily articles against user profiles, achieving a 90%+ content relevance match.",
      ],
      metrics: [
        { label: "Weekly Datapoints", value: "5,000+" },
        { label: "Reading Time Saved", value: "80%" },
        { label: "Sources Parsed", value: "100+ Live" },
        { label: "Relevance Match", value: "90%+" },
      ],
      repoUrl: "https://github.com/kirankushal22/ai-news-aggregator",
      demoUrl: "https://portfolio-kiran-one.vercel.app",
    },
    {
      id: "ai-tools-discovery",
      index: "03",
      title: "AI Tools Discovery Platform",
      period: "2025",
      category: "Full-Stack Web Architecture",
      tagline: "Directory, Curation & Editorial Search Engine",
      image: "/images/project_serum.jpg",
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Context API",
        "Docker",
        "GitHub Actions",
      ],
      highlights: [
        "Built a web application that helps users discover and explore AI tools categorised by domain, functionality, and pricing model (free or paid).",
        "Designed a search and filter system that allows users to quickly find tools relevant to their work or industry.",
        "Developed an intuitive UI inspired by Medium, emphasising readability and user engagement.",
        "Implemented Context API for efficient state management across components and responsive layouts using Tailwind CSS.",
      ],
      metrics: [
        { label: "Tool Taxonomy", value: "Multi-domain / Free & Paid" },
        { label: "State Engine", value: "Context API" },
        { label: "CI/CD", value: "Docker & GitHub Actions" },
        { label: "UX Inspiration", value: "Medium-Style Editorial" },
      ],
      repoUrl: "https://github.com/kirankushal22/ai-tools-discovery",
      demoUrl: "https://portfolio-kiran-one.vercel.app",
    },
    {
      id: "logistics-qr",
      index: "04",
      title: "QR-Based Municipal Logistics System & Client Products",
      period: "2024 – 2025",
      category: "Hardware & Distributed Logistics",
      tagline: "Traceable Waste Routing & Production Dashboards",
      image: "/images/project_jacket.jpg",
      stack: ["Java", "QML", "FastAPI", "Next.js", "PostgreSQL"],
      highlights: [
        "Engineered a hardware-integrated logistics platform for traceable municipal waste routing with encrypted geo-stamped QR verification at collection nodes.",
        "Built administrative dispatch control dashboards with real-time route optimization, driver verification, and municipal civic accountability reports.",
        "Shipped high-performance client workflow builds including automated data scrapers, research portals, and reactive front-end applications.",
      ],
      metrics: [
        { label: "Checkpoint Accuracy", value: "100% Geo-QR" },
        { label: "Latency", value: "< 150ms" },
        { label: "Uptime", value: "99.9%" },
        { label: "Route Efficiency", value: "+35%" },
      ],
      repoUrl: "https://github.com/kirankushal22/garbage-logistics-qr",
      demoUrl: "https://portfolio-kiran-one.vercel.app",
    },
  ];

  return (
    <section id="case-studies" className="relative py-20 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Background Generative String Harmonic Wave Matrix */}
      <GenerativeArchitectureMesh />

      <div className="relative z-10 w-[92%] max-w-[1400px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 gap-4">
          <div className="space-y-2">
            <span className="text-coral text-xs sm:text-sm font-sans font-medium tracking-widest uppercase block">
              Section 04 // Flagship Case Studies
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              High-Impact Engineering Architectures
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm max-w-md font-sans text-left md:text-right">
            Featuring AI Tools Discovery Platform, autonomous agent pipelines, clinical Hybrid-RAG, and production systems.
          </p>
        </div>

        {/* High-Contrast Edge-to-Edge Cards */}
        <div className="space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="group bg-[#141518]/90 backdrop-blur-xl rounded-[32px] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Media Column (Left on Large screens) */}
              <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-black/40">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141518]" />

                {/* Index Pill */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-sans font-medium text-white">
                  <span className="text-coral font-bold">{cs.index}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/80">{cs.period}</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Tagline */}
                  <div className="space-y-1">
                    <span className="text-coral text-xs font-sans font-medium tracking-wider uppercase block">
                      {cs.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {cs.title}
                    </h3>
                    <p className="text-sm font-sans font-medium text-white/60">
                      {cs.tagline}
                    </p>
                  </div>

                  {/* Highlights Bullet Ledger */}
                  <ul className="space-y-2.5 pt-2">
                    {cs.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Telemetry Key Metric Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                    {cs.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="bg-black/60 border border-white/[0.06] rounded-2xl p-3 flex flex-col justify-center"
                      >
                        <span className="text-[10px] uppercase font-sans font-medium text-white/40 tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Stack Pills & Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] sm:text-xs text-white/90 font-sans font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {cs.repoUrl && (
                      <a
                        href={cs.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-sans font-medium text-white transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-coral" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {cs.demoUrl && (
                      <a
                        href={cs.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-coral hover:bg-coral-hover text-white text-xs font-sans font-medium font-semibold transition shadow-md shadow-coral/30"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
