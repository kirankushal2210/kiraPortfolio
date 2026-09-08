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
  KubernetesIcon,
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
    stage: "01. Strict Typing",
    category: "Language",
    icon: TypeScriptIcon,
    color: "text-[#3178C6]",
    glow: "rgba(49, 120, 198, 0.4)",
  },
  {
    id: "javascript",
    name: "JavaScript",
    stage: "02. Web Architecture",
    category: "Language",
    icon: JavaScriptIcon,
    color: "text-[#F7DF1E]",
    glow: "rgba(247, 223, 30, 0.4)",
  },
  {
    id: "react",
    name: "React / Next.js",
    stage: "03. 60-FPS Reactive UI",
    category: "Runtime",
    icon: ReactIcon,
    color: "text-[#61DAFB]",
    glow: "rgba(97, 218, 251, 0.4)",
  },
  {
    id: "python",
    name: "Python",
    stage: "04. Fast Ingestion & ML",
    category: "Language",
    icon: PythonIcon,
    color: "text-[#FFD43B]",
    glow: "rgba(255, 212, 59, 0.4)",
  },
  {
    id: "nodejs",
    name: "Node.js",
    stage: "05. High-Throughput APIs",
    category: "Runtime",
    icon: NodeJsIcon,
    color: "text-[#5FA04E]",
    glow: "rgba(95, 160, 78, 0.4)",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    stage: "06. Relational Schemas",
    category: "Database",
    icon: PostgresIcon,
    color: "text-[#4169E1]",
    glow: "rgba(65, 105, 225, 0.4)",
  },
  {
    id: "supabase",
    name: "Supabase",
    stage: "07. Real-time BaaS",
    category: "Database",
    icon: SupabaseIcon,
    color: "text-[#3ECF8E]",
    glow: "rgba(62, 207, 142, 0.4)",
  },
  {
    id: "auth",
    name: "Authentication",
    stage: "08. OAuth / JWT Security",
    category: "Auth & Commerce",
    icon: AuthShieldIcon,
    color: "text-[#E11D48]",
    glow: "rgba(225, 29, 72, 0.4)",
  },
  {
    id: "payments",
    name: "Payment Gateways",
    stage: "09. Stripe & Webhooks",
    category: "Auth & Commerce",
    icon: PaymentGatewayIcon,
    color: "text-[#635BFF]",
    glow: "rgba(99, 91, 255, 0.4)",
  },
  {
    id: "docker",
    name: "Docker",
    stage: "10. Containerization",
    category: "DevOps & Cloud",
    icon: DockerIcon,
    color: "text-[#2496ED]",
    glow: "rgba(36, 150, 237, 0.4)",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    stage: "11. Cluster Orchestration",
    category: "DevOps & Cloud",
    icon: KubernetesIcon,
    color: "text-[#326CE5]",
    glow: "rgba(50, 108, 229, 0.4)",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    stage: "12. Cloud Practitioner",
    category: "DevOps & Cloud",
    icon: AwsIcon,
    color: "text-[#FF9900]",
    glow: "rgba(255, 153, 0, 0.4)",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    stage: "13. Autonomous Workflows",
    category: "AI & LLM",
    icon: AgenticAiIcon,
    color: "text-coral",
    glow: "rgba(255, 87, 34, 0.4)",
  },
  {
    id: "gen-ai",
    name: "Generative AI",
    stage: "14. Multi-Modal Synthesis",
    category: "AI & LLM",
    icon: GenAiIcon,
    color: "text-[#F43F5E]",
    glow: "rgba(244, 63, 94, 0.4)",
  },
  {
    id: "llms",
    name: "LLMs & Fine-Tuning",
    stage: "15. GPT-4o, Claude & vLLM",
    category: "AI & LLM",
    icon: LlmBrainIcon,
    color: "text-[#A855F7]",
    glow: "rgba(168, 85, 247, 0.4)",
  },
];

export default function RevolvingWorkflow3D() {
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<WorkflowItem | null>(null);
  const animRef = useRef<number | null>(null);

  // Smooth continuous 3D revolution around the page
  useEffect(() => {
    let lastTime = performance.now();
    const rotateSpeed = 0.00045; // Smooth rotation speed

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        setAngle((prev) => (prev + delta * rotateSpeed) % (Math.PI * 2));
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused]);

  // Radius of the 3D revolution ellipse
  const radiusX = 360;
  const radiusY = 85;

  return (
    <div className="relative w-full py-6 flex flex-col items-center justify-center select-none">
      {/* Dynamic 3D Revolving Stage */}
      <div
        className="relative w-full max-w-[1000px] h-[220px] sm:h-[260px] flex items-center justify-center [perspective:1200px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setActiveItem(null);
        }}
      >
        {/* Subtle glowing orbital guideline rings */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[150px] rounded-[50%] border border-coral/20 [transform:rotateX(72deg)] pointer-events-none opacity-40 shadow-[0_0_50px_rgba(255,87,34,0.15)]" />
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-[130px] rounded-[50%] border border-white/10 [transform:rotateX(72deg)] pointer-events-none opacity-30" />

        {/* Center Glow Nexus: The Creative Kinetic Web Core */}
        <div className="relative z-10 flex flex-col items-center justify-center group pointer-events-auto">
          {/* Ambient Orbital Radiance Aura */}
          <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-radial from-coral/30 via-[#E11D48]/15 to-transparent blur-2xl pointer-events-none -z-10 animate-pulse" />

          {/* Rotating Gyroscopic Horizon Ring with Latitude Ticks */}
          <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-coral/35 animate-[spin_24s_linear_infinite] pointer-events-none" />
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 [transform:rotateX(65deg)] pointer-events-none animate-[spin_18s_linear_infinite_reverse]" />

          {/* Main Kinetic Web Singularity Sphere */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#1C1E26] via-[#0D0E14] to-black border border-white/20 p-2 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,87,34,0.4)] backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-coral/70 overflow-hidden cursor-pointer">
            
            {/* Top Specular Rim Sheen */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            {/* Ambient Radial Core Light */}
            <div className="absolute inset-0 bg-gradient-radial from-coral/20 via-transparent to-transparent pointer-events-none" />

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
              <div className="flex items-center gap-1 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
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
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-coral shadow-[0_0_8px_#FF5722]" />
            </div>
          </div>

          {/* Floating Pill Beneath: Identifies the Web Gravitational Core */}
          <div className="absolute -bottom-8 whitespace-nowrap px-3.5 py-1 rounded-full bg-black/95 border border-coral/40 text-xs font-sans shadow-2xl flex items-center gap-2 backdrop-blur-md transition-all duration-200 pointer-events-none">
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
                <span className="text-neutral-400 font-mono text-[10px] hidden sm:inline">// ALL SYSTEMS CONVERGE HERE</span>
              </>
            )}
          </div>
        </div>

        {/* 3D Revolving Icons */}
        {WORKFLOW_ITEMS.map((item, idx) => {
          const itemAngle = angle + (idx / WORKFLOW_ITEMS.length) * Math.PI * 2;
          // Calculate 3D position
          const x = Math.cos(itemAngle) * radiusX;
          const y = Math.sin(itemAngle) * radiusY;
          // Z depth from -1 (far back) to +1 (front)
          const zDepth = (Math.sin(itemAngle) + 1) / 2;
          const scale = 0.72 + zDepth * 0.45;
          const opacity = 0.45 + zDepth * 0.55;
          const zIndex = Math.round(zDepth * 50);

          const Icon = item.icon;
          const isHovered = activeItem?.id === item.id;

          return (
            <div
              key={item.id}
              style={{
                transform: `translate3d(${x}px, ${y}px, 0px) scale(${isHovered ? scale * 1.25 : scale})`,
                opacity: isHovered ? 1 : opacity,
                zIndex: isHovered ? 100 : zIndex,
              }}
              onMouseEnter={() => setActiveItem(item)}
              className="absolute pointer-events-auto cursor-pointer transition-transform duration-100 ease-out"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/15 flex items-center justify-center shadow-2xl transition-all duration-300 group"
                style={{
                  boxShadow: isHovered
                    ? `0 0 30px ${item.glow}, inset 0 0 15px ${item.glow}`
                    : `0 10px 25px rgba(0,0,0,0.8)`,
                  borderColor: isHovered ? item.glow : "rgba(255,255,255,0.12)",
                }}
              >
                <Icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-md`}
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
            The Web As The Operating System
          </span>
          <span className="hidden sm:inline text-neutral-400 font-mono text-[11px] tracking-wide">
            TypeScript • React • Node • Python • Databases • Cloud Runtimes • All Revolving Around The Web
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
