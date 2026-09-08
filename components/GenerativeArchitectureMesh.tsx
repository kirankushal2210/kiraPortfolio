"use client";

import React, { useEffect, useRef } from "react";

export default function GenerativeArchitectureMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const section = document.getElementById("case-studies");

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let lastMouseTime = 0;

    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width || canvas.clientWidth || (section ? section.clientWidth : window.innerWidth);
      height = rect.height || canvas.clientHeight || (section ? section.clientHeight : window.innerHeight);
      
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      if (ctx.resetTransform) {
        ctx.resetTransform();
      } else {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    // Resize observer to ensure canvas always matches the full height of section 4
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        setupCanvas();
      });
      if (section) resizeObserver.observe(section);
    }

    const handleWindowResize = () => {
      setupCanvas();
    };
    window.addEventListener("resize", handleWindowResize);

    // Initial node position
    let nodeX = width / 2;
    let nodeY = height > 0 ? Math.min(height * 0.35, 450) : 350;
    let targetX = nodeX;
    let targetY = nodeY;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // Track cursor position inside Section 4
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        lastMouseTime = Date.now();
      }
    };

    const handleScroll = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // When scrolling, if user isn't hovering with mouse, node gracefully follows the visible screen
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        if (Date.now() - lastMouseTime > 1200) {
          const viewportCenterInCanvas = -rect.top + window.innerHeight * 0.45;
          targetY = Math.max(100, Math.min(height - 100, viewportCenterInCanvas));
          targetX = width / 2;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let time = 0;
    const lineCount = 56;

    const render = () => {
      time += 0.012;

      // Smooth lerp node toward target coordinates
      nodeX += (targetX - nodeX) * 0.08;
      nodeY += (targetY - nodeY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      if (width <= 0 || height <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const spacing = width / (lineCount - 1);
      const segments = Math.max(80, Math.floor(height / 20));
      const segmentHeight = height / segments;

      for (let i = 0; i < lineCount; i++) {
        const baseX = i * spacing;
        ctx.beginPath();
        ctx.lineWidth = 1;

        // Gradient opacity from center outwards
        const distFromCenter = Math.abs(baseX - width / 2) / (width / 2);
        const alpha = Math.max(0.09, (1 - distFromCenter * 0.65) * 0.42);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;

        for (let j = 0; j <= segments; j++) {
          const y = j * segmentHeight;

          // Continuous harmonic wave from top to bottom of section 4
          const wave1 = Math.sin(y * 0.005 + time + i * 0.14) * 8;
          const wave2 = Math.cos(y * 0.01 - time * 0.7 + i * 0.18) * 5;

          // Gravitational pull & oval parting around the central tracking node
          const dx = baseX - nodeX;
          const dy = y - nodeY;
          const maxInfluenceY = 250;
          const maxInfluenceX = 180;

          let gravityOffset = 0;
          if (Math.abs(dy) < maxInfluenceY && Math.abs(dx) < maxInfluenceX) {
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxInfluence = 250;
            if (distance < maxInfluence) {
              const force = (1 - distance / maxInfluence) * 44;
              const direction = dx >= 0 ? 1 : -1;
              const verticalFalloff = Math.cos((dy / maxInfluenceY) * (Math.PI / 2));
              gravityOffset = direction * force * verticalFalloff;
            }
          }

          const currentX = baseX + wave1 + wave2 + gravityOffset;

          if (j === 0) {
            ctx.moveTo(currentX, y);
          } else {
            ctx.lineTo(currentX, y);
          }
        }
        ctx.stroke();
      }

      // Draw the central white focal node
      ctx.save();
      ctx.shadowColor = "#FFFFFF";
      ctx.shadowBlur = 18;
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Soft lateral vignette for high-contrast obsidian depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      {/* Seamless seam blends at the very top and bottom borders of Section 4 */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
