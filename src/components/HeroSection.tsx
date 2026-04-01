"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const accentLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = accentLineRef.current;
    if (!el) return;
    el.style.transition = "height 1.2s 0.4s ease, opacity 1.2s 0.4s ease";
    el.style.height = "220px";
    el.style.opacity = "1";
  }, []);

  useEffect(() => {
    const accentLine = document.querySelector('[data-accent-line]') as HTMLElement;
    if (!accentLine) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const zigzagAmount = Math.sin(scrollY * 0.01) * 40; // Creates snake/zig-zag effect
      accentLine.style.transform = `translateX(${zigzagAmount}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      suppressHydrationWarning
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden bg-[#060608]"
    >
      <div
        aria-hidden="true"
        suppressHydrationWarning
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 40%, #2a0a4a 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 50% 60%, #1a0630 0%, transparent 60%)",
        }}
      />

      <div
        aria-hidden="true"
        suppressHydrationWarning
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute top-0 bottom-0 w-px opacity-40"
          style={{
            left: "calc(50% - 80px)",
            background:
              "linear-gradient(to bottom, transparent 0%, #f97316 30%, #9333ea 60%, transparent 100%)",
            animation: "linePulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-0 bottom-0 w-px opacity-25"
          style={{
            left: "calc(50% + 80px)",
            background:
              "linear-gradient(to bottom, transparent 0%, #9333ea 30%, #f97316 60%, transparent 100%)",
            animation: "linePulse 4s ease-in-out 1s infinite",
          }}
        />
        <div
          className="absolute top-0 bottom-0 w-px opacity-15"
          style={{
            left: "calc(50% - 160px)",
            background:
              "linear-gradient(to bottom, transparent 0%, #7c3aed 40%, transparent 100%)",
            animation: "linePulse 6s ease-in-out 0.5s infinite",
          }}
        />
        <div
          className="absolute top-0 bottom-0 w-px opacity-15"
          style={{
            left: "calc(50% + 160px)",
            background:
              "linear-gradient(to bottom, transparent 0%, #7c3aed 40%, transparent 100%)",
            animation: "linePulse 6s ease-in-out 2s infinite",
          }}
        />
      </div>

      <div
        ref={accentLineRef}
        data-accent-line
        aria-hidden="true"
        suppressHydrationWarning
        className="absolute left-4 md:left-12 top-[55%] w-[3px] rounded-full"
        style={{
          height: "0px",
          opacity: "0",
          background:
            "linear-gradient(to bottom, #f97316, #7c3aed, transparent)",
        }}
      />

      <div suppressHydrationWarning className="relative z-10 max-w-2xl flex flex-col items-center">
        <p
          className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-orange-500 mb-4"
          style={{ animation: "fadeUp 0.7s ease both" }}
        >
          Advanced Materials
        </p>

        <h1
          className="font-display text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-5"
          style={{ animation: "fadeUp 0.9s 0.1s ease both" }}
        >
          Future of Advanced
          <br />
          Materials
        </h1>

        <p
          className="text-white/80 text-[0.9rem] max-w-md mx-auto mb-8 leading-relaxed"
          style={{ animation: "fadeUp 0.9s 0.2s ease both" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et.
        </p>

        <div
          className="flex items-center gap-3"
          style={{ animation: "fadeUp 0.9s 0.35s ease both" }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded px-5 py-2.5 text-[0.78rem] font-medium transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(249,115,22,0.4)]"
            aria-label="Get Started"
          >
            Get Started
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 11L11 1M11 1H4M11 1V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#solutions"
            className="inline-flex items-center border border-white/20 hover:border-white/40 text-white/70 hover:text-white rounded px-5 py-2.5 text-[0.78rem] transition-all duration-200"
            aria-label="Learn More"
          >
            Learn More
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        suppressHydrationWarning
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
        style={{ animation: "fadeUp 1s 0.8s ease both" }}
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <div
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          style={{ animation: "scrollLine 1.8s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}