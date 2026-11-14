"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#systems", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#freelance", label: "Freelance" },
  { href: "#about", label: "About" },
];

interface FolioNavbarProps {
  onOpenResume: () => void;
}

export default function FolioNavbar({ onOpenResume }: FolioNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 py-3.5 border-b border-white/[0.08]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-[92%] max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Mark (Left): kiran. in bold white type with pulsing status node (#FF5722) */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="text-white text-2xl font-black tracking-tight group-hover:text-coral transition-colors">
            kiran<span className="text-coral">.</span>
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coral"></span>
          </span>
        </a>

        {/* Navigation Links (Center): Systems, Experience, Case Studies, About */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-coral transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions (Right): Resume PDF + Get in touch Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="/Munigonda_Kiran_Resume.pdf"
            download="Munigonda_Kiran_Resume.pdf"
            className="btn-liquid-glass px-4 py-1.5 text-xs flex items-center gap-2 no-underline text-white cursor-pointer"
            title="Download Munigonda Kiran Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-coral" />
            <span className="hidden sm:inline">Resume (PDF)</span>
            <span className="sm:hidden">CV</span>
          </a>

          <a
            href="#contact"
            className="btn-liquid-glass-coral px-4 sm:px-5 py-1.5 text-xs sm:text-sm flex items-center gap-2"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden p-1.5 rounded-md text-white/90 hover:text-coral transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden w-[92%] mx-auto mt-3 rounded-2xl border border-white/10 bg-black/95 p-2 flex flex-col"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-white/85 hover:bg-white/5 hover:text-coral transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
