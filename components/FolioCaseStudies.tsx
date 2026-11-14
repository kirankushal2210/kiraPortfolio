"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import GenerativeArchitectureMesh from "@/components/GenerativeArchitectureMesh";
import ArcwellCaseStudy from "@/components/ArcwellCaseStudy";

export default function FolioCaseStudies() {
  // Add `demoUrl: "https://..."` to an entry to show its Live Demo button.
  const caseStudies: Array<{ id: string; index: string; title: string; period: string; category: string; tagline: string; image: string; imageAlt: string; stack: string[]; highlights: string[]; metrics: { label: string; value: string }[]; repoUrl?: string; demoUrl?: string }> = [
    {
      id: "healthos",
      index: "01",
      title: "HealthOS",
      period: "Mar 2026",
      category: "AI system · Prototype",
      tagline: "An offline-first health app prototype covering nutrition, training, recovery and an AI coach backed by research papers.",
      image: "/images/healthos.png",
      imageAlt: "HealthOS onboarding screen for connecting Apple Health, Health Connect and other providers",
      stack: [
        "React Native",
        "Expo",
        "Node.js",
        "PostgreSQL",
        "LangChain",
        "LlamaIndex",
        "Pinecone",
        "PyTorch",
        "PEFT",
        "vLLM",
        "Claude API",
      ],
      highlights: [
        "A React Native app with a Node.js and PostgreSQL backend. It works offline and syncs when it can.",
        "A 16-question onboarding drives each person's daily targets.",
        "Hybrid retrieval (LangChain, LlamaIndex, Pinecone) over research papers, so the coach's training and recovery answers come from sources rather than the model's memory.",
        "Experiments fine-tuning a smaller model with PyTorch and PEFT for regional food analysis, served with vLLM.",
        "A deterministic calculator runs beside the AI and keeps calorie and macro targets inside safe bounds, whatever the model says.",
      ],
      metrics: [
        { label: "Onboarding", value: "16 questions" },
        { label: "App areas", value: "4" },
        { label: "Retrieval", value: "Pinecone" },
        { label: "Serving", value: "vLLM" },
      ],
      repoUrl: "https://github.com/kirankushal22",
    },
    {
      id: "ai-news",
      index: "02",
      title: "AI News Aggregator",
      period: "Dec 2025 – Feb 2026",
      category: "AI system · Data pipeline",
      tagline: "Scrapes AI news from blogs, feeds and YouTube transcripts and turns it into ranked daily summaries.",
      image: "/images/ai_news_aggregator.png",
      imageAlt: "The AI news feed: article cards in columns with a sidebar of sources",
      stack: [
        "Python",
        "UV",
        "Docker",
        "PostgreSQL",
        "LangChain",
        "GPT-4o",
        "Docling",
        "Webshare",
      ],
      highlights: [
        "Scrapers pull from company blogs, RSS feeds and YouTube transcripts, through rotating Webshare proxies to avoid rate limits.",
        "Docling turns messy pages and documents into clean text, stored in PostgreSQL with its source and date.",
        "A LangChain workflow with GPT-4o writes a short summary per item.",
        "Each item is scored against a user profile and the feed is sorted by that score. Runs in Docker, with dependencies pinned by UV.",
      ],
      metrics: [
        { label: "Sources", value: "Blogs, RSS, YouTube" },
        { label: "Parsing", value: "Docling" },
        { label: "Storage", value: "PostgreSQL" },
        { label: "Summaries", value: "GPT-4o" },
      ],
      repoUrl: "https://github.com/kirankushal22",
    },
    {
      id: "ai-tools",
      index: "03",
      title: "AI Tools Discovery",
      period: "Jun – Aug 2025",
      category: "Web app",
      tagline: "A directory for finding AI tools by domain, task and pricing, with search and filters.",
      image: "/images/ai_tools_discovery_ui.jpg",
      imageAlt: "Design of the AI tools directory: a grid of tool cards with category filters",
      stack: ["React", "Node.js", "Tailwind CSS", "Context API", "Docker", "GitHub Actions"],
      highlights: [
        "Lists AI tools by domain, what they do and whether they're free or paid. Search and filters narrow the list.",
        "A reading-first interface inspired by Medium.",
        "Shared state through React Context and responsive layouts in Tailwind.",
        "Docker images and a GitHub Actions pipeline for builds.",
      ],
      metrics: [
        { label: "Filters", value: "Domain, task, price" },
        { label: "State", value: "Context API" },
        { label: "CI", value: "GitHub Actions" },
        { label: "UI", value: "Medium-inspired" },
      ],
      repoUrl: "https://github.com/kirankushal22",
    },
    {
      id: "topicpilot",
      index: "04",
      title: "TopicPilot",
      period: "2025",
      category: "AI system · Multi-agent",
      tagline: "A multi-agent research assistant that plans, searches, checks its sources and writes a cited brief.",
      image: "/images/multi_agent_research.png",
      imageAlt: "TopicPilot's start screen with a topic field and a Generate Summary button",
      stack: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI", "Next.js", "SSE"],
      highlights: [
        "Planner: splits the question into sub-questions that can be researched in parallel.",
        "Searcher: pulls documents from web and academic sources and stores chunks in a temporary ChromaDB index.",
        "Critic: checks each claim against its retrieved source and drops what it can't support. Writer: writes a structured brief with citations.",
        "A FastAPI backend streams each agent's steps to the Next.js front end over Server-Sent Events, so long runs never look frozen.",
      ],
      metrics: [
        { label: "Agents", value: "4" },
        { label: "Backend", value: "FastAPI + SSE" },
        { label: "Vector store", value: "ChromaDB" },
        { label: "Front end", value: "Next.js" },
      ],
      repoUrl: "https://github.com/kirankushal22",
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
            <span className="text-neutral-400 text-xs sm:text-sm font-mono font-medium tracking-widest uppercase block">
              Case studies
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Selected projects
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm max-w-md font-sans text-left md:text-right">
            What each project does, how it is built, and the stack behind it.
          </p>
        </div>

        {/* High-Contrast Edge-to-Edge Cards */}
        <div className="space-y-12">
          <ArcwellCaseStudy />
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="group bg-[#141518]/90 rounded-[32px] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Media Column (Left on Large screens) */}
              <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-black/40">
                <Image
                  src={cs.image}
                  alt={cs.imageAlt}
                  fill
                  className="object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141518]" />

                {/* Index Pill */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-xs font-mono font-medium text-white">
                  <span className="text-white font-bold">{cs.index}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/80">{cs.period}</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Tagline */}
                  <div className="space-y-1">
                    <span className="text-neutral-400 text-xs font-mono font-semibold tracking-widest uppercase block">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
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
                        <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Stack Pills & Glassy Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] sm:text-xs text-white/90 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* High-End Glassy Liquid Metal Action Buttons */}
                  <div className="flex items-center gap-3">
                    {cs.repoUrl && (
                      <a
                        href={cs.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-liquid-glass px-4 py-1.5 text-xs flex items-center gap-2 no-underline text-white cursor-pointer"
                        title="GitHub profile"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-neutral-300" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {cs.demoUrl && (
                      <a
                        href={cs.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-liquid-glass px-4 py-1.5 text-xs flex items-center gap-2 cursor-pointer font-medium text-white shadow-md transition-colors"
                        title="Launch Live Demo"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
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
