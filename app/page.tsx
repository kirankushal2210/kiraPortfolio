"use client";

import React, { useState } from "react";
import FolioNavbar from "@/components/FolioNavbar";
import FolioHero from "@/components/FolioHero";
import FolioClients from "@/components/FolioClients";
import FolioCaseStudies from "@/components/FolioCaseStudies";
import FolioFreelanceProjects from "@/components/FolioFreelanceProjects";
import FolioResumeProjects from "@/components/FolioResumeProjects";
import FolioBehindSystems from "@/components/FolioBehindSystems";
import FolioTechnicalArsenal from "@/components/FolioTechnicalArsenal";
import FolioCredentials from "@/components/FolioCredentials";
import FolioContact from "@/components/FolioContact";
import FolioFooter from "@/components/FolioFooter";
import FolioResumeModal from "@/components/FolioResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-coral selection:text-white">
      {/* SECTION 1: Fixed Navigation Bar */}
      <FolioNavbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* SECTION 2: The Backlit Hero Canvas (90% Viewport Rounded Card) */}
      <FolioHero onOpenResume={() => setIsResumeOpen(true)} />

      {/* SECTION 3: Client & Ecosystem Validation Bar */}
      <FolioClients />

      {/* SECTION 4: High-Impact Engineering Architectures (Includes AI Tools Discovery Platform) */}
      <FolioCaseStudies />

      {/* FREELANCE PROJECTS & LIVE DEMOS (Positioned Above Selected Architectures) */}
      <FolioFreelanceProjects />

      {/* SELECTED ARCHITECTURES & BUILDS: All 6 Verified Projects Deep-Dive Drawer */}
      <FolioResumeProjects />

      {/* SECTION 5: "Behind the Systems" (Experience & Timeline) */}
      <FolioBehindSystems />

      {/* SECTION 6: Complete Technical Arsenal */}
      <FolioTechnicalArsenal />

      {/* SECTION 7: Education, Credentials & Hackathon Honors */}
      <FolioCredentials />

      {/* SECTION 8: Minimal Direct Contact */}
      <FolioContact />

      {/* Terminal Colophon Footer */}
      <FolioFooter />

      {/* Interactive Full ATS Master Resume Modal */}
      <FolioResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}
