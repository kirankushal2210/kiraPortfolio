"use client";

import React, { useState } from "react";

type Phase = {
  id: string;
  label: string;
  state: "done" | "active" | "next";
  title: string;
  text: string;
};

// Facts from the Arcwell repo (docs/SPEC.md, docs/PLAN.md, git history). No screenshots: the app is pre-launch.
const PHASES: Phase[] = [
  { id: "spec", label: "Spec", state: "done", title: "Product spec", text: "Scope, users and rules written down and agreed before any code. It's the source of truth agents read first." },
  { id: "wf", label: "199", state: "done", title: "199 wireframe screens", text: "Low-fidelity wireframes across 18 flows, plus a numbered decision log (over 100 entries) that wins over every other document." },
  { id: "fe1", label: "FE-1", state: "done", title: "Coached loop", text: "Check-ins, progress and chat between athlete and coach." },
  { id: "fe2", label: "FE-2", state: "done", title: "Evidence rules", text: "One rules module behind every training and nutrition target, based on published research. Users can open the sources." },
  { id: "fe3", label: "FE-3", state: "done", title: "Training depth", text: "Programs, weekly sets per muscle, estimated 1RM and strength charts." },
  { id: "fe4", label: "FE-4", state: "done", title: "Subscription states", text: "Trial, payment problems, subscription ended and what changes on upgrade." },
  { id: "fe5", label: "FE-5", state: "done", title: "Extras", text: "Water tracking, reminders, messages to several clients and a gym directory." },
  { id: "fe6", label: "FE-6", state: "done", title: "AI screens on samples", text: "Every AI screen designed and built on clearly marked sample responses before any model was wired." },
  { id: "fe7", label: "FE-7", state: "done", title: "System states and QA", text: "Loading, error, offline and permission states, then a walk of every screen as each role." },
  { id: "fe8", label: "FE-8", state: "done", title: "Habits and cardio", text: "Daily habits, a VO2 max estimate, tests and an interval timer." },
  { id: "fe9", label: "FE-9", state: "done", title: "HYROX race track", text: "Race goal, simulator and a hybrid-race plan." },
  { id: "b1", label: "B1", state: "active", title: "Accounts and coach links", text: "Email-code sign-in, roles, invites and coach–client links on Supabase, with row-level security proven by pgTAP tests. In progress." },
  { id: "b2", label: "B2", state: "next", title: "Plans and templates", text: "Training programs, meal plans and recovery protocols. Coaches write, clients read." },
  { id: "b3", label: "B3", state: "next", title: "Workout logging", text: "Cached on the phone mid-workout and synced when the connection comes back." },
  { id: "b4", label: "B4", state: "next", title: "Food logging", text: "Food logs and saved foods." },
  { id: "b5", label: "B5", state: "next", title: "Check-ins and chat", text: "Weekly check-ins with photos, realtime chat with files, notifications." },
  { id: "b6", label: "B6", state: "next", title: "Progress and consent", text: "Weigh-ins, measurements, progress photos, export and delete." },
  { id: "b7", label: "B7", state: "next", title: "Billing", text: "Subscriptions with entitlements checked on the server." },
  { id: "b8", label: "B8", state: "next", title: "The AI layer", text: "Real models behind the FE-6 screens, with entitlement and daily-cap checks and output validated against the evidence rules." },
];

const FLOW = ["App", "Edge Function", "ai_entitled()", "ai_try_use()", "Groq vision", "Validate"];

const FACTS = [
  { label: "Wireframes", value: "199 screens" },
  { label: "Front end", value: "9 phases done" },
  { label: "Decisions logged", value: "100+" },
  { label: "Security", value: "RLS + pgTAP" },
];

const STACK = ["Expo SDK 58", "React Native", "TypeScript", "Supabase", "Postgres RLS", "Edge Functions", "pgTAP", "Groq"];

export default function ArcwellCaseStudy() {
  const [selected, setSelected] = useState("b1");
  const phase = PHASES.find((p) => p.id === selected)!;

  return (
    <article
      aria-labelledby="arcwell-title"
      className="bg-[#141518] rounded-[32px] border border-white/[0.08] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
    >
      {/* Words */}
      <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-coral" aria-hidden />
            Now building · Product
          </div>
          <h3 id="arcwell-title" className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Arcwell
          </h3>
          <p className="text-base text-white/70 leading-relaxed">
            A training, nutrition and recovery app for athletes, with a client-management platform for coaches and an
            optional AI coach for people who train on their own.
          </p>
          <p className="text-sm text-[#A0A0A0] leading-relaxed">
            Built spec first, with AI coding agents doing most of the typing. Plain files decide what gets built: a
            spec, a decision log, a phased plan and an AGENTS.md of rules agents can&apos;t break. Every phase ends with
            lint, typecheck and database tests, then a commit.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-3">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-black/60 border border-white/[0.06] rounded-2xl p-3">
              <dt className="text-[10px] uppercase font-mono text-white/40 tracking-wider">{f.label}</dt>
              <dd className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-1.5">
          {STACK.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] sm:text-xs text-white/90 font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Build log */}
      <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-8">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-neutral-400">Build log</h4>
          <span className="text-[11px] font-mono text-white/40">Nov 2026 → now · pick a step</span>
        </div>

        {/* Rail */}
        <div>
          <div role="tablist" aria-label="Arcwell build phases" className="grid grid-cols-7 sm:grid-cols-10 gap-1.5">
            {PHASES.map((p) => {
              const isSel = p.id === selected;
              const base =
                p.state === "done"
                  ? "bg-white/[0.08] border-white/[0.14] text-white/85"
                  : p.state === "active"
                    ? "bg-coral/10 border-coral/70 text-white"
                    : "bg-transparent border-dashed border-white/[0.14] text-white/40";
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isSel}
                  aria-controls="arcwell-phase"
                  onClick={() => setSelected(p.id)}
                  onMouseEnter={() => setSelected(p.id)}
                  className={`h-11 rounded-xl border text-[11px] font-mono transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${base} ${
                    isSel ? "ring-1 ring-white/60" : "hover:border-white/30"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-mono text-white/45">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-white/[0.12] border border-white/[0.2]" aria-hidden /> Done</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-coral/20 border border-coral/70" aria-hidden /> In progress</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm border border-dashed border-white/30" aria-hidden /> Next</span>
          </div>
        </div>

        {/* Selected phase */}
        <div id="arcwell-phase" role="tabpanel" aria-live="polite" className="bg-black/60 border border-white/[0.06] rounded-2xl p-5 min-h-[124px]">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider">
            <span className="text-white/50">{phase.label}</span>
            <span className="text-white/25">·</span>
            <span className={phase.state === "done" ? "text-white/50" : phase.state === "active" ? "text-coral" : "text-white/40"}>
              {phase.state === "done" ? "Done" : phase.state === "active" ? "In progress" : "Next"}
            </span>
          </div>
          <p className="mt-2 text-lg font-bold text-white">{phase.title}</p>
          <p className="mt-1 text-sm text-[#A0A0A0] leading-relaxed">{phase.text}</p>
        </div>

        {/* AI request path */}
        <div>
          <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-neutral-400">
            The one real AI feature: meal photo scan
          </h4>
          <ol className="mt-4 flex flex-wrap items-center gap-y-2 text-[11px] sm:text-xs font-mono">
            {FLOW.map((step, i) => (
              <li key={step} className="flex items-center">
                <span className="px-2.5 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-white/85">{step}</span>
                {i < FLOW.length - 1 && <span className="mx-1.5 text-white/30" aria-hidden>→</span>}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-[#A0A0A0] leading-relaxed">
            Who may use AI and how often is checked in Postgres, not in the app. The model sits behind one swappable
            interface, the output is validated before the app sees it, and no health data goes into logs.
          </p>
        </div>
      </div>
    </article>
  );
}
