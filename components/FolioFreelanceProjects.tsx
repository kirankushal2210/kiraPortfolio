"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Film, 
  Sparkles,
  Tv,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

interface DemoItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  videoSrc?: string;
  posterSrc: string;
  tech: string[];
  deliverables: string[];
  clientOutcome: string;
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
    deliverables: [
      "Offline SQLite WASM database sync with 0 dropped packets",
      "Dynamic biometric charting running at 60 FPS on mobile chips",
      "Full HIPAA-compliant encrypted client profile storage"
    ],
    clientOutcome: "Validated with 200+ clinical intake records with sub-200ms roundtrip response."
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
    deliverables: [
      "Multi-agent consensus pipeline (Planner, Critic, Synthesizer)",
      "Hybrid-RAG engine scanning 10,000+ indexed PubMed dissertations",
      "Deterministic AST validation layer preventing clinical hallucinations"
    ],
    clientOutcome: "Sustained a verified 0.0% hallucination drift across benchmarked advisory trials."
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
    deliverables: [
      "Distributed scraping engine bypassing rate limits with rotating residential proxies",
      "Automated markdown summarization pipeline with semantic deduplication",
      "High-density responsive feed rendering sub-100ms on desktop and mobile"
    ],
    clientOutcome: "Aggregates over 5,000 weekly intelligence reports automatically with zero manual triage."
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
    deliverables: [
      "Smooth 4K video background streaming with smart lazy-load buffering",
      "Interactive boundary coordinates mapping with dynamic parcel overlays",
      "Custom lead generation form integrated with direct WhatsApp & CRM webhooks"
    ],
    clientOutcome: "Boosted high-net-worth investor engagement by 3.4x during initial property launch."
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
    deliverables: [
      "Zero cumulative layout shift (CLS) dynamic media gallery",
      "Seamless multi-part contribution workflows with instant receipt generation",
      "Full mobile-responsive community news and event calendar"
    ],
    clientOutcome: "Supported over 12,000 monthly active community visitors with 99.9% uptime."
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
    deliverables: [
      "Custom HTML5 video engine with fluid hover scrubbing",
      "Kinetic layout animations powered by Framer Motion",
      "Ultra-crisp dark editorial aesthetic tailored for luxury visual showcases"
    ],
    clientOutcome: "Secured tier-one brand design contracts for the creative agency within 30 days."
  },
];

export default function ProjectDemosShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullTheatreOpen, setIsFullTheatreOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const activeDemo = DEMO_ITEMS[currentIndex];

  // Auto-play video on hover in mini-theatre mode
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered, currentIndex]);

  // Track playback progress
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? DEMO_ITEMS.length - 1 : prevIdx - 1));
    setProgress(0);
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === DEMO_ITEMS.length - 1 ? 0 : prevIdx + 1));
    setProgress(0);
  };

  return (
    <section 
      id="freelance" 
      className="w-full min-h-[640px] py-24 sm:py-32 px-6 md:px-16 flex flex-col items-center justify-center bg-white text-[#121212] select-none border-t border-neutral-200 overflow-hidden"
    >
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
          Hover over the screen to activate <span className="font-semibold text-[#121212]">Mini-Theatre Mode</span>. Stream verified client builds in high definition.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Stacked Depth Media Card with Mini-Theatre Mode */}
        <div className="md:col-span-6 relative flex items-center justify-center isolate">
          {/* Depth Layer 2 (Furthest Back) */}
          <div className={`absolute w-72 sm:w-80 md:w-96 aspect-square rounded-[32px] bg-neutral-200/90 rotate-6 translate-x-5 -translate-y-2 scale-90 -z-20 shadow-sm transition-all duration-500 ${
            isHovered ? "rotate-8 translate-x-7 scale-85 opacity-60" : ""
          }`} />

          {/* Depth Layer 1 (Middle Offset) */}
          <div className={`absolute w-72 sm:w-80 md:w-96 aspect-square rounded-[32px] bg-neutral-300/80 -rotate-6 -translate-x-5 -translate-y-1 scale-95 -z-10 shadow-md transition-all duration-500 ${
            isHovered ? "-rotate-8 -translate-x-7 scale-90 opacity-75" : ""
          }`} />

          {/* Front Active Mini-Theatre Card */}
          <motion.div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsFullTheatreOpen(true)}
            animate={{
              scale: isHovered ? 1.05 : 1,
              boxShadow: isHovered 
                ? "0 35px 80px -15px rgba(0,0,0,0.45)" 
                : "0 20px 45px -10px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-[32px] overflow-hidden bg-black z-10 border border-black/10 cursor-pointer group"
          >
            {/* Ambient Cinematic Backlight Aura */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-20 pointer-events-none transition-opacity duration-300 ${
                isHovered ? "opacity-90" : "opacity-40"
              }`} 
            />

            {/* Top Bar: Mini Theatre Status Pill & Fullscreen Trigger */}
            <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between pointer-events-auto">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-black/80 text-coral backdrop-blur-md border border-white/15 shadow-lg flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full bg-coral ${isHovered ? "animate-ping" : ""}`} />
                {isHovered ? "MINI-THEATRE ACTIVE" : activeDemo.category}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullTheatreOpen(true);
                }}
                className="w-8 h-8 rounded-full bg-black/75 hover:bg-coral text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg transition-colors cursor-pointer"
                title="Open Full Cinema Mode"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Main Video / Poster Media Element */}
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
                    ref={videoRef}
                    src={activeDemo.videoSrc}
                    poster={activeDemo.posterSrc}
                    playsInline
                    muted={isMuted}
                    loop
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={activeDemo.posterSrc}
                    alt={activeDemo.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Mini-Theatre Controls HUD (Revealed on Hover) */}
            <div className={`absolute bottom-0 inset-x-0 z-30 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 transition-all duration-300 pointer-events-auto ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}>
              {/* Progress Scrubber Bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-coral transition-all duration-100" 
                  style={{ width: `${progress}%` }} 
                />
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between text-white text-xs pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-neutral-400" /> : <Volume2 className="w-3.5 h-3.5 text-coral" />}
                  </button>
                  <span className="text-[10px] font-mono text-neutral-300">
                    1080P PROD
                  </span>
                </div>

                <span className="text-[10px] font-mono text-coral hover:underline flex items-center gap-1">
                  FULL THEATRE <Maximize2 className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>

            {/* Resting Prompt (Shown when not hovering) */}
            <div className={`absolute bottom-4 inset-x-4 z-20 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}>
              <span className="text-[10px] font-mono tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-neutral-300 border border-white/10 shadow flex items-center gap-1.5">
                <Film className="w-3 h-3 text-coral" /> HOVER TO STREAM MINI-THEATRE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Details & Navigation */}
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

              {/* Verified Deliverables */}
              <div className="space-y-1.5 pt-1">
                {activeDemo.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

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

          {/* Bottom Controls: Circular Black Arrow Buttons, Dots & Theatre CTA */}
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
                  onClick={() => {
                    setCurrentIndex(idx);
                    setProgress(0);
                  }}
                  aria-label={`Jump to demo ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? "w-8 bg-[#161616]" 
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsFullTheatreOpen(true)}
              className="ml-auto btn-liquid-glass px-4 py-2 text-xs flex items-center gap-1.5 text-neutral-900 border border-neutral-300 hover:border-black font-semibold cursor-pointer"
            >
              <Tv className="w-3.5 h-3.5 text-coral" />
              <span>Full Theatre</span>
            </button>
          </div>
        </div>

      </div>

      {/* Quick Demo Preview Strip (Horizontal selector thumbnails) */}
      <div className="w-full max-w-5xl mt-12 pt-8 border-t border-black/[0.08]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            AVAILABLE CLIENT BUILDS (SELECT TO PREVIEW)
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            0{currentIndex + 1} OF 0{DEMO_ITEMS.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {DEMO_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setProgress(0);
              }}
              onMouseEnter={() => {
                setCurrentIndex(idx);
                setIsHovered(true);
              }}
              className={`p-2.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                currentIndex === idx 
                  ? "bg-[#161616] text-white border-black shadow-lg scale-[1.02]" 
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
              }`}
            >
              <span className={`text-[9px] font-mono block uppercase truncate ${
                currentIndex === idx ? "text-coral" : "text-neutral-400"
              }`}>
                0{idx + 1} // {item.client.split(" ")[0]}
              </span>
              <p className="text-xs font-bold truncate mt-0.5">
                {item.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN CINEMA THEATRE MODAL */}
      <AnimatePresence>
        {isFullTheatreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl select-none"
            onClick={() => setIsFullTheatreOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-5xl bg-[#0F1014] text-white rounded-[32px] border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14161C]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-coral/15 border border-coral/30 flex items-center justify-center">
                    <Tv className="w-4 h-4 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-white">
                      {activeDemo.title}
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-400 block">
                      CINEMA THEATRE • {activeDemo.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Demo switcher */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    <button
                      onClick={prev}
                      className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-neutral-400 px-2">
                      0{currentIndex + 1} / 0{DEMO_ITEMS.length}
                    </span>
                    <button
                      onClick={next}
                      className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => setIsFullTheatreOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 16:9 Large Cinema Viewport */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                {activeDemo.videoSrc ? (
                  <video
                    src={activeDemo.videoSrc}
                    poster={activeDemo.posterSrc}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeDemo.posterSrc}
                    alt={activeDemo.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Modal Footer Spec Sheet */}
              <div className="p-6 bg-[#14161C] border-t border-white/10 space-y-4 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-coral uppercase tracking-wider block">
                      CLIENT OUTCOME
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {activeDemo.clientOutcome}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {activeDemo.tech.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-mono text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

