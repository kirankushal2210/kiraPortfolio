"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  NodeJsIcon,
  PostgresIcon,
  SupabaseIcon,
  AuthShieldIcon,
  PaymentGatewayIcon,
  DockerIcon,
  AwsIcon,
  AgenticAiIcon,
  GenAiIcon,
  LlmBrainIcon,
  ReactIcon,
} from "@/components/TechIcons";
import { Globe, Code2 } from "lucide-react";

export interface WorkflowItem {
  id: string;
  name: string;
  stage: string;
  category: "Language" | "Runtime" | "Database" | "Auth & Commerce" | "DevOps & Cloud" | "AI & LLM";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glow: string;
}

export const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    id: "typescript",
    name: "TypeScript",
    stage: "01. Types",
    category: "Language",
    icon: TypeScriptIcon,
    color: "text-[#3178C6]",
    glow: "rgba(49, 120, 198, 0.4)",
  },
  {
    id: "javascript",
    name: "JavaScript",
    stage: "02. The web",
    category: "Language",
    icon: JavaScriptIcon,
    color: "text-[#F7DF1E]",
    glow: "rgba(247, 223, 30, 0.4)",
  },
  {
    id: "react",
    name: "React / Next.js",
    stage: "03. Interfaces",
    category: "Runtime",
    icon: ReactIcon,
    color: "text-[#61DAFB]",
    glow: "rgba(97, 218, 251, 0.4)",
  },
  {
    id: "python",
    name: "Python",
    stage: "04. Pipelines and ML",
    category: "Language",
    icon: PythonIcon,
    color: "text-[#FFD43B]",
    glow: "rgba(255, 212, 59, 0.4)",
  },
  {
    id: "nodejs",
    name: "Node.js",
    stage: "05. APIs",
    category: "Runtime",
    icon: NodeJsIcon,
    color: "text-[#5FA04E]",
    glow: "rgba(95, 160, 78, 0.4)",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    stage: "06. Schemas",
    category: "Database",
    icon: PostgresIcon,
    color: "text-[#4169E1]",
    glow: "rgba(65, 105, 225, 0.4)",
  },
  {
    id: "supabase",
    name: "Supabase",
    stage: "07. Auth, storage and RLS",
    category: "Database",
    icon: SupabaseIcon,
    color: "text-[#3ECF8E]",
    glow: "rgba(62, 207, 142, 0.4)",
  },
  {
    id: "auth",
    name: "Authentication",
    stage: "08. Sign-in and roles",
    category: "Auth & Commerce",
    icon: AuthShieldIcon,
    color: "text-[#E11D48]",
    glow: "rgba(225, 29, 72, 0.4)",
  },
  {
    id: "payments",
    name: "Payment Gateways",
    stage: "09. Subscriptions",
    category: "Auth & Commerce",
    icon: PaymentGatewayIcon,
    color: "text-[#635BFF]",
    glow: "rgba(99, 91, 255, 0.4)",
  },
  {
    id: "docker",
    name: "Docker",
    stage: "10. Containers",
    category: "DevOps & Cloud",
    icon: DockerIcon,
    color: "text-[#2496ED]",
    glow: "rgba(36, 150, 237, 0.4)",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    stage: "11. CI builds",
    category: "DevOps & Cloud",
    icon: Code2,
    color: "text-[#326CE5]",
    glow: "rgba(50, 108, 229, 0.4)",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    stage: "12. Cloud",
    category: "DevOps & Cloud",
    icon: AwsIcon,
    color: "text-[#FF9900]",
    glow: "rgba(255, 153, 0, 0.4)",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    stage: "13. Multi-agent workflows",
    category: "AI & LLM",
    icon: AgenticAiIcon,
    color: "text-coral",
    glow: "rgba(255, 87, 34, 0.4)",
  },
  {
    id: "gen-ai",
    name: "Generative AI",
    stage: "14. Text and vision models",
    category: "AI & LLM",
    icon: GenAiIcon,
    color: "text-[#F43F5E]",
    glow: "rgba(244, 63, 94, 0.4)",
  },
  {
    id: "llms",
    name: "LLMs & Fine-Tuning",
    stage: "15. LLM APIs",
    category: "AI & LLM",
    icon: LlmBrainIcon,
    color: "text-[#A855F7]",
    glow: "rgba(168, 85, 247, 0.4)",
  },
];

export default function RevolvingWorkflow3D() {
  // The angle lives in a ref and the loop writes transforms straight to the DOM,
  // so the orbit never re-renders React 60 times a second.
  const angleRef = useRef(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<WorkflowItem | null>(null);
  const animRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [stageWidth, setStageWidth] = useState(1000);

  // Only animate while on screen, and respect reduced-motion preferences
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    io.observe(el);
    const ro = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width));
    ro.observe(el);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      io.disconnect();
      ro.disconnect();
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const shouldAnimate = !isPaused && isVisible && !reducedMotion;

  // Radius of the 3D revolution ellipse (shrinks to fit narrow screens)
  const radiusX = Math.max(120, Math.min(360, stageWidth / 2 - 40));
  const radiusY = 85;

  const placeItem = (idx: number) => {
    const itemAngle = angleRef.current + (idx / WORKFLOW_ITEMS.length) * Math.PI * 2;
    const zDepth = (Math.sin(itemAngle) + 1) / 2; // 0 = far back, 1 = front
    return {
      x: Math.cos(itemAngle) * radiusX,
      y: Math.sin(itemAngle) * radiusY,
      scale: 0.72 + zDepth * 0.45,
      opacity: 0.45 + zDepth * 0.55,
      zIndex: Math.round(zDepth * 50),
    };
  };

  // Smooth continuous 3D revolution (rAF stops entirely when paused/offscreen; browsers also
  // suspend rAF in background tabs)
  useEffect(() => {
    if (!shouldAnimate) return;
    let lastTime = performance.now();
    const rotateSpeed = 0.00045; // Smooth rotation speed

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 100); // avoid a jump after the tab was hidden
      lastTime = time;
      angleRef.current = (angleRef.current + delta * rotateSpeed) % (Math.PI * 2);
      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const p = placeItem(idx);
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.scale})`;
        el.style.opacity = String(p.opacity);
        el.style.zIndex = String(p.zIndex);
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
    // placeItem only depends on the radius, which is captured below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAnimate, stageWidth]);

  return (
    <div className="relative w-full py-6 flex flex-col items-center justify-center select-none">
      {/* Dynamic 3D Revolving Stage */}
      <div
        ref={stageRef}
        className="relative w-full max-w-[1000px] h-[220px] sm:h-[260px] flex items-center justify-center [perspective:1200px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setActiveItem(null);
        }}
      >
        {/* Subtle glowing orbital guideline rings */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[150px] rounded-[50%] border border-coral/20 [transform:rotateX(72deg)] pointer-events-none opacity-40" />
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-[130px] rounded-[50%] border border-white/10 [transform:rotateX(72deg)] pointer-events-none opacity-30" />

        {/* Center Glow Nexus: The Creative Kinetic Web Core */}
        <div className="relative z-10 flex flex-col items-center justify-center group pointer-events-auto">
          {/* Rotating Gyroscopic Horizon Ring with Latitude Ticks */}
          <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-coral/35 animate-[spin_24s_linear_infinite] pointer-events-none" />
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 [transform:rotateX(65deg)] pointer-events-none animate-[spin_18s_linear_infinite_reverse]" />

          {/* Main Kinetic Web Singularity Sphere */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#1C1E26] via-[#0D0E14] to-black border border-white/20 p-2 flex flex-col items-center justify-center transition-colors duration-300 group-hover:border-coral/70 overflow-hidden cursor-pointer">
            
            {/* Top Specular Rim Sheen */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            {/* Rotating Holographic Geodesic Web Wireframe */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 animate-[spin_18s_linear_infinite] pointer-events-none"
              viewBox="0 0 80 80"
              fill="none"
            >
              <circle cx="40" cy="40" r="36" stroke="rgba(255, 87, 34, 0.6)" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="40" cy="40" rx="36" ry="14" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
              <ellipse cx="40" cy="40" rx="14" ry="36" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
              <line x1="4" y1="40" x2="76" y2="40" stroke="rgba(255, 87, 34, 0.7)" strokeWidth="1" />
            </svg>

            {/* Counter-rotating Inner Meridian Ellipse */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 animate-[spin_12s_linear_infinite_reverse] pointer-events-none"
              viewBox="0 0 80 80"
              fill="none"
            >
              <ellipse cx="40" cy="40" rx="28" ry="20" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" strokeDasharray="4 2" />
            </svg>

            {/* Center Web Glyph Assembly (< Globe />) */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-white">
                <span className="text-[11px] font-mono text-coral font-bold">&lt;</span>
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2]" />
                <span className="text-[11px] font-mono text-coral font-bold">/&gt;</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-neutral-300 uppercase mt-0.5">
                WWW
              </span>
            </div>

            {/* Orbiting Packet Spark */}
            <div className="absolute inset-1 rounded-full animate-[spin_3.5s_linear_infinite] pointer-events-none">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-coral" />
            </div>
          </div>

          {/* Floating Pill Beneath: Identifies the Web Gravitational Core */}
          <div className="absolute -bottom-8 whitespace-nowrap px-3.5 py-1 rounded-full bg-black/95 border border-coral/40 text-xs font-sans flex items-center gap-2 transition-all duration-200 pointer-events-none">
            {activeItem ? (
              <>
                <span className="font-semibold text-white">{activeItem.name}</span>
                <span className="text-white/40">•</span>
                <span className="text-coral font-mono text-[11px]">{activeItem.stage}</span>
              </>
            ) : (
              <>
                <Globe className="w-3.5 h-3.5 text-coral animate-[spin_8s_linear_infinite]" />
                <span className="font-mono font-bold text-white text-[11px]">&lt;web.core /&gt;</span>
                <span className="text-neutral-400 font-mono text-[10px] hidden sm:inline">hover an icon</span>
              </>
            )}
          </div>
        </div>

        {/* 3D Revolving Icons */}
        {WORKFLOW_ITEMS.map((item, idx) => {
          const { x, y, scale, opacity, zIndex } = placeItem(idx);

          const Icon = item.icon;
          const isHovered = activeItem?.id === item.id;

          return (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              style={{
                transform: `translate3d(${x}px, ${y}px, 0px) scale(${isHovered ? scale * 1.25 : scale})`,
                opacity: isHovered ? 1 : opacity,
                zIndex: isHovered ? 100 : zIndex,
              }}
              onMouseEnter={() => setActiveItem(item)}
              className="absolute pointer-events-auto cursor-pointer will-change-transform"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B0B0D] border border-white/15 flex items-center justify-center transition-colors duration-200 group"
                style={{
                  borderColor: isHovered ? item.glow : "rgba(255,255,255,0.12)",
                }}
              >
                <Icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              {/* Hover Tooltip Pill */}
              {isHovered && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-black/95 border border-coral text-[11px] font-sans font-semibold text-white shadow-xl z-50 animate-fade-in tracking-wide">
                  {item.name}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Horizontal Continuous Workflow Slide Track */}
      <div className="w-full max-w-[1300px] mt-4 border-t border-white/[0.08] pt-4 overflow-hidden relative">
        <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-sans tracking-wider text-white/60">
          <span className="text-coral uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-coral inline-block animate-[spin_8s_linear_infinite]" />
            Tools I build with
          </span>
          <span className="hidden sm:inline text-neutral-400 font-mono text-[11px] tracking-wide">
            TypeScript • React • Node • Python • Postgres • Docker • LLM APIs
          </span>
        </div>

        {/* Sliding Ribbon */}
        <div className="relative flex overflow-x-hidden group mask-radial">
          <div className="flex gap-3 py-2 animate-marquee whitespace-nowrap">
            {WORKFLOW_ITEMS.concat(WORKFLOW_ITEMS).map((wf, idx) => {
              const WfIcon = wf.icon;
              return (
                <div
                  key={`${wf.id}-${idx}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-coral/50 transition-colors"
                >
                  <WfIcon className={`w-4 h-4 ${wf.color}`} />
                  <span className="text-xs font-sans font-medium text-white/90">
                    {wf.name}
                  </span>
                  <span className="text-[10px] font-sans text-neutral-400">
                    {wf.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
