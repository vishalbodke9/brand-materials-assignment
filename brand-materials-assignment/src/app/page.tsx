"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import {TrustSection} from "@/components/TrustSection";
import {AboutSection} from "@/components/AboutSection";
import {SolutionsSection} from "@/components/SolutionsSection";
import {LuminescenceBanner} from "@/components/LuminescenceBanner";
import {ScienceSection} from "@/components/ScienceSection";
import {SustainabilitySection} from "@/components/SustainabilitySection";
import {NewsSection} from "@/components/NewsSection";
import {CtaSection} from "@/components/CtaSection";
import {Footer} from "@/components/Footer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="relative bg-black">
        {/* Background pipe line - separate from content */}
        <svg
          className="fixed left-0 top-0 w-full h-full pointer-events-none z-[1]"
          preserveAspectRatio="none"
          viewBox="0 0 1600 10000"
          style={{ opacity: 1 }}
        >
          <defs>
            <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0.25 }} />
              <stop offset="30%" style={{ stopColor: '#f97316', stopOpacity: 0.25 }} />
              <stop offset="60%" style={{ stopColor: '#7c3aed', stopOpacity: 0.25 }} />
              <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.25 }} />
            </linearGradient>
            
            <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
              <stop offset="30%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
              <stop offset="60%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Vertical pipe - starts around section 2, extends to bottom */}
          <path
            d="M 50 400 L 50 2500 Q 50 2800, 300 2800 L 1550 2800 L 1550 9500"
            stroke="url(#pipeGradient)"
            strokeWidth="24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.35"
          />
          
          {/* Bright flowing light - main effect */}
          <path
            d="M 50 400 L 50 2500 Q 50 2800, 300 2800 L 1550 2800 L 1550 9500"
            stroke="url(#lightGradient)"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="1"
            filter="url(#glow)"
            style={{
              strokeDasharray: "5500",
              strokeDashoffset: `${5500 - (scrollProgress / 100) * 5500}`,
              transition: "stroke-dashoffset 0.08s linear",
            }}
          />

          {/* Bright glow halo around line */}
          <path
            d="M 50 400 L 50 2500 Q 50 2800, 300 2800 L 1550 2800 L 1550 9500"
            stroke="url(#lightGradient)"
            strokeWidth="32"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.12"
            style={{
              strokeDasharray: "5500",
              strokeDashoffset: `${5500 - (scrollProgress / 100) * 5500}`,
              transition: "stroke-dashoffset 0.08s linear",
            }}
          />
        </svg>

        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <TrustSection />
          <AboutSection />
          <SolutionsSection />
          <LuminescenceBanner />
          <ScienceSection />
          <SustainabilitySection />
          <NewsSection />
          <CtaSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
