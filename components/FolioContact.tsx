"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowUp, Check, Copy } from "lucide-react";

export default function ArchitecturalFooter() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#050505] text-[#EDEDED] pt-32 pb-12 px-6 md:px-12 lg:px-20 border-t border-neutral-900 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Massive Typographic Anchor (Single Typeface, No Slop) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase">
              OPEN FOR AI ARCHITECTURE &amp; FULL-STACK ROLES // 2026
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tighter text-white uppercase leading-[0.95]">
            Let&apos;s engineer <br />
            what&apos;s next.
          </h2>
        </div>

        {/* 3-Column Structural Grid (Completely Containerless) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pt-8 border-t border-neutral-800/80">
          
          {/* Column 1: Direct Access Links (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase block">
              01 // DIRECT CHANNELS
            </span>

            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-1">
                <p className="text-[11px] font-sans font-medium text-neutral-400 uppercase">Direct Email</p>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:kirankushal2211@gmail.com"
                    className="text-lg md:text-xl font-light text-white hover:text-neutral-300 tracking-tight transition-colors border-b border-neutral-800 pb-0.5"
                  >
                    kirankushal2211@gmail.com
                  </a>
                  <button
                    onClick={() => handleCopy("kirankushal2211@gmail.com", "email")}
                    aria-label="Copy email"
                    className="p-1.5 rounded text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <p className="text-[11px] font-sans font-medium text-neutral-400 uppercase">Telephone</p>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919010300676"
                    className="text-lg md:text-xl font-light text-white hover:text-neutral-300 tracking-tight transition-colors border-b border-neutral-800 pb-0.5"
                  >
                    +91-9010300676
                  </a>
                  <button
                    onClick={() => handleCopy("+91-9010300676", "phone")}
                    aria-label="Copy phone number"
                    className="p-1.5 rounded text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm pt-2">
                Specialized in multi-agent orchestration, offline-first health telemetry (HithOS), and distributed backend architectures.
              </p>
            </div>
          </div>

          {/* Column 2: System Telemetry & Coordinates (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-8">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase block">
              02 // TELEMETRY &amp; SOCIAL
            </span>

            <div className="space-y-6 text-xs font-sans font-medium">
              <div className="space-y-1">
                <p className="text-neutral-400 uppercase">Location</p>
                <p className="text-white">Hyderabad, Telangana</p>
                <p className="text-neutral-400">17.4435° N, 78.4482° E</p>
              </div>

              <div className="space-y-1">
                <p className="text-neutral-400 uppercase">Local Time</p>
                <p className="text-white tabular-nums">{currentTime || "02:45:00"} IST (UTC+5:30)</p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-neutral-400 uppercase">Networks</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://linkedin.com/in/MunigondaKiran"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <span>linkedin.com/in/MunigondaKiran</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/kirankushal22"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <span>github.com/kirankushal22</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Unboxed Dispatch Portal (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase block">
              03 // TRANSMISSION DISPATCH
            </span>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-sans font-medium text-neutral-400 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-sans font-medium text-neutral-400 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-sans font-medium text-neutral-400 uppercase">Project Scope / Message</label>
                <textarea
                  rows={2}
                  required
                  placeholder="System requirements, timeline, or consultation scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 btn-liquid-metal text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
                    <span className="text-white">TRANSMISSION RECORDED</span>
                  </>
                ) : (
                  <>
                    <span className="text-neutral-200">SEND TRANSMISSION</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Minimal Swiss Legal Rail */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-medium text-neutral-400">
          <div>
            <span className="text-white font-medium">Munigonda Kiran</span> — Applied AI Systems &amp; Full-Stack Engineering
          </div>

          <div className="flex items-center gap-6">
            <span>RELEASE 2026.09</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
