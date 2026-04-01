"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Who We Are", href: "#about" },
  { label: "Technology", href: "#solutions" },
  { label: "Solutions", href: "#science" },
  { label: "Newsroom", href: "#news" },
  { label: "Careers", href: "#cta-section" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16 bg-[#060608]/85 backdrop-blur-xl border-b border-white/[0.07] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <Link href="/" className="font-display font-bold text-[1.1rem] tracking-[0.08em] uppercase text-white">
          LOGO
        </Link>

        <ul className="hidden md:flex items-center gap-8" role="navigation" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[#6b6b80] hover:text-white text-[0.8rem] font-normal tracking-[0.03em] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#cta-section" className="hidden md:inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2 text-[0.78rem] font-medium transition-all duration-200 hover:-translate-y-px">
          Get Started ↗
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      <div
        id="mobileMenu"
        className={`md:hidden fixed top-16 left-0 right-0 z-40 flex flex-col bg-[#060608]/97 backdrop-blur-xl border-b border-white/[0.07] px-6 py-4 gap-2 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[#6b6b80] hover:text-white py-3 text-[0.9rem] border-b border-white/[0.07] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cta-section"
          onClick={() => setMenuOpen(false)}
          className="mt-2 w-fit bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2 text-[0.78rem] font-medium transition-colors duration-200"
        >
          Get Started
        </a>
      </div>
    </>
  );
}
