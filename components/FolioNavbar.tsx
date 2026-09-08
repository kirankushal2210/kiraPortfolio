"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { RESUME_DATA } from "@/lib/portfolioData";

interface FolioNavbarProps {
  onOpenResume: () => void;
}

export default function FolioNavbar({ onOpenResume }: FolioNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md py-3.5 border-b border-white/[0.08]"
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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coral"></span>
          </span>
        </a>

        {/* Navigation Links (Center): Systems, Experience, Case Studies, About */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a
            href="#systems"
            className="hover:text-coral transition-colors tracking-wide"
          >
            Systems
          </a>
          <a
            href="#experience"
            className="hover:text-coral transition-colors tracking-wide"
          >
            Experience
          </a>
          <a
            href="#case-studies"
            className="hover:text-coral transition-colors tracking-wide"
          >
            Case Studies
          </a>
          <a
            href="#freelance"
            className="hover:text-coral transition-colors tracking-wide"
          >
            Freelance
          </a>
          <a
            href="#about"
            className="hover:text-coral transition-colors tracking-wide"
          >
            About
          </a>
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
            <span>Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            className="btn-liquid-glass-coral px-4 sm:px-5 py-1.5 text-xs sm:text-sm flex items-center gap-2"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
