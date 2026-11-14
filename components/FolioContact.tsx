"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowUp, Check, Copy } from "lucide-react";

const CONTACT_EMAIL = "kirankushal2211@gmail.com";

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

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(key);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard unavailable (insecure context / permission denied) — don't claim success.
    }
  };

  // No backend: open the visitor's mail client with the message pre-filled.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (!name || !email || !message) return;
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
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
              Open to AI engineering roles
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tighter text-white uppercase leading-[0.95]">
            Let&apos;s talk <br />
            about work.
          </h2>
        </div>

        {/* 3-Column Structural Grid (Completely Containerless) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pt-8 border-t border-neutral-800/80">
          
          {/* Column 1: Direct Access Links (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase block">
              01 · Email and phone
            </span>

            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-1">
                <p className="text-[11px] font-sans font-medium text-neutral-400 uppercase">Email</p>
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
                <p className="text-[11px] font-sans font-medium text-neutral-400 uppercase">Phone</p>
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
                I build multi-agent and RAG products end to end, from the Postgres schema to the prompt. Currently building Arcwell.
              </p>
            </div>
          </div>

          {/* Column 2: System Telemetry & Coordinates (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-8">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase block">
              02 · Elsewhere
            </span>

            <div className="space-y-6 text-xs font-sans font-medium">
              <div className="space-y-1">
                <p className="text-neutral-400 uppercase">Location</p>
                <p className="text-white">Hyderabad, Telangana</p>
                <p className="text-neutral-400">India</p>
              </div>

              <div className="space-y-1">
                <p className="text-neutral-400 uppercase">Local Time</p>
                <p className="text-white tabular-nums">{currentTime || "--:--:--"} IST (UTC+5:30)</p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-neutral-400 uppercase">Links</p>
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
                    href="https://github.com/kirankushal2210"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <span>github.com/kirankushal2210</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Unboxed Dispatch Portal (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[11px] font-sans font-medium tracking-widest text-neutral-400 uppercase block">
              03 · Send a message
            </span>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="contact-name" className="text-[10px] font-sans font-medium text-neutral-400 uppercase">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-email" className="text-[10px] font-sans font-medium text-neutral-400 uppercase">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-neutral-800 focus:border-white py-2 text-sm text-white placeholder-neutral-700 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-[10px] font-sans font-medium text-neutral-400 uppercase">Message</label>
                <textarea
                  id="contact-message"
                  rows={2}
                  required
                  maxLength={2000}
                  placeholder="What would you like to talk about?"
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
                    <span className="text-white">Opening your email app…</span>
                  </>
                ) : (
                  <>
                    <span className="text-neutral-200">Send message</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 stroke-[2.5]" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-neutral-500" aria-live="polite">
                {submitted
                  ? `Didn't open? Email me directly at ${CONTACT_EMAIL}.`
                  : "Opens your email app with this message pre-filled."}
              </p>
            </form>
          </div>

        </div>

        {/* Minimal Swiss Legal Rail */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-medium text-neutral-400">
          <div>
            <span className="text-white font-medium">Munigonda Kiran</span> — Full-stack engineer building AI systems
          </div>

          <div className="flex items-center gap-6">
            <span>Hyderabad, India</span>
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
