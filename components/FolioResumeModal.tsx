"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Download, FileText } from "lucide-react";

interface FolioResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FolioResumeModal({ isOpen, onClose }: FolioResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl h-[92vh] bg-[#121316] border border-white/15 rounded-[28px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col z-10 overflow-hidden text-white font-sans">
        {/* Top Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16171B] relative z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-coral/10 border border-coral/30 flex items-center justify-center">
              <FileText className="w-4 h-4 text-coral" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                Munigonda Kiran — Official ATS Resume
              </h3>
              <span className="text-[10px] font-mono text-neutral-400 block">
                Verified 2-Page Technical Master • Full-Stack &amp; AI Systems
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/Munigonda_Kiran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid-glass-dark px-3.5 py-1.5 text-xs flex items-center gap-1.5 no-underline text-white"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-neutral-300" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            <a
              href="/Munigonda_Kiran_Resume.pdf"
              download="Munigonda_Kiran_Resume.pdf"
              className="btn-liquid-glass px-4 py-1.5 text-xs flex items-center gap-1.5 font-semibold text-white no-underline shadow-lg"
              title="Download Document"
            >
              <Download className="w-3.5 h-3.5 text-coral" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Actual PDF Viewer */}
        <div className="flex-1 w-full h-full bg-[#1e1e1e] relative overflow-hidden">
          <iframe
            src="/Munigonda_Kiran_Resume.pdf#toolbar=1"
            className="w-full h-full border-none"
            title="Munigonda Kiran Official Resume"
          />
        </div>
      </div>
    </div>
  );
}
