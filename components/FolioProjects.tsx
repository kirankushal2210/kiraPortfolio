"use client";

import React from "react";
import Image from "next/image";

export default function FolioProjects() {
  const projects = [
    {
      id: "project-01",
      title: "Alpine Outerwear 01",
      subtitle: "Apparel & Structural Packaging",
      year: "2025",
      src: "/images/project_jacket.jpg",
      alt: "Puffy winter jacket hanging on a minimalist rack",
    },
    {
      id: "project-02",
      title: "Aura Acoustics",
      subtitle: "Industrial Design & Identity",
      year: "2025",
      src: "/images/project_headphones.jpg",
      alt: "Wireless over-ear headphones on a model",
    },
    {
      id: "project-03",
      title: "Aeterna Botanical Serum",
      subtitle: "Luxury Cosmetics & Visual System",
      year: "2026",
      src: "/images/project_serum.jpg",
      alt: "Cosmetic serum bottle resting on black volcanic rock",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="w-[92%] max-w-[1400px] mx-auto space-y-8">
        {/* Triple Project Showcase: Tight 3-column horizontal grid with 32px corner radius */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-[32px] overflow-hidden aspect-[3/4] bg-charcoal cursor-pointer border border-white/5"
            >
              {/* High-Quality B&W Studio Photography */}
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Metadata Reveal (Title / Year) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-normal">
                    {project.subtitle}
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
