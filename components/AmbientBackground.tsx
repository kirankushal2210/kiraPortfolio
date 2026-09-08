"use client";

import React, { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Ambient static gradient accents */}
      <div className="absolute -top-40 left-1/4 w-[700px] h-[450px] bg-emerald-950/15 rounded-full blur-[160px]" />
      <div className="absolute top-[35%] -right-40 w-[600px] h-[500px] bg-sky-950/15 rounded-full blur-[170px]" />
      <div className="absolute bottom-10 left-1/3 w-[800px] h-[400px] bg-emerald-950/10 rounded-full blur-[180px]" />

      {/* Cyber Grid Masked */}
      <div className="cyber-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
    </div>
  );
}
