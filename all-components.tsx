// ─── TrustSection.tsx ───────────────────────────────────────────────────────
export function TrustSection() {
  const logos = [
    { icon: "grid", label: "Partner 1" },
    { text: "ïdylle", label: "Idylle" },
    { text: "M", serif: true, label: "Partner 3" },
    { text: "ïdylle", label: "Idylle 2" },
  ];

  return (
    <section
      id="trust"
      aria-label="Partners and trusted by"
      className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20"
    >
      <p className="font-display text-[clamp(1.5rem,3.5vw,2.1rem)] font-semibold leading-[1.3] reveal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod{" "}
        <em className="text-[#6b6b80] not-italic">
          sectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet.
        </em>
      </p>
      <div />
      <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3 reveal" aria-label="Partner logos">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="bg-[#111118] border border-white/[0.07] rounded-xl flex items-center justify-center p-4 min-h-[70px] transition-all duration-200 hover:border-orange-500/30 hover:bg-[#16161f]"
          >
            {logo.icon === "grid" ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label={logo.label}>
                {[6,12,18].flatMap(cy => [6,12,18].map(cx => (
                  <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="2" fill="white" />
                )))}
              </svg>
            ) : (
              <span
                className={`text-white/85 font-semibold tracking-[0.01em] ${logo.serif ? "font-serif text-2xl" : "italic text-[0.95rem] font-display"}`}
                aria-label={logo.label}
              >
                {logo.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── AboutSection.tsx ────────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-16 px-6 md:px-20 text-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, #3b0d6e 0%, #1a0a3d 40%, #060608 100%)",
      }}
    >
      <div className="relative z-10 max-w-lg mx-auto reveal">
        <p className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-orange-500 mb-2">About Brand</p>
        <h2 id="about-heading" className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.25] mb-4">
          Our Journey Towards Innovation and Excellence
        </h2>
        <p className="text-[#6b6b80] text-[0.85rem] mb-7">
          Brand is an advanced bio-luminescent materials company. Having a complex of first-edge materials to deliver solutions. Visit for particulars.
        </p>
        <a
          href="#solutions"
          className="inline-flex items-center border border-white/25 hover:border-orange-500 hover:bg-orange-500/8 text-white rounded px-5 py-2 text-[0.78rem] transition-all duration-200"
          aria-label="About Brand"
        >
          About Brand
        </a>
      </div>
    </section>
  );
}

// ─── SolutionsSection.tsx ────────────────────────────────────────────────────
const solutions = [
  {
    icon: "idylle",
    heading: "Securing every physical product for counterfeit protection.",
    body: "Floyd™ makes it easy for brand owners and governments to effectively identify counterfeits, secure revenues and preserve brand integrity.",
  },
  {
    icon: "grid",
    heading: "Accelerating biomedical research with next-generation bio-probes",
    body: "Luminoah empowers researchers to achieve breakthroughs at a faster pace by pioneering high-end imaging and deep tissue bio-imaging.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="px-6 md:px-20 py-12">
      <div className="mb-10 reveal">
        <h2 id="solutions-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-[1.25]">
          Advanced Materials and<br />Integrative Solutions
        </h2>
      </div>
      {solutions.map((sol, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-8 border-b border-white/[0.07] last:border-none reveal"
        >
          <div className="flex items-center gap-3">
            <div className="w-[42px] h-[42px] bg-[#111118] border border-white/[0.07] rounded-lg flex items-center justify-center flex-shrink-0">
              {sol.icon === "idylle" ? (
                <span className="italic text-white/85 font-display text-sm font-semibold">ï</span>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {[6,12,18].flatMap(cy => [6,12,18].map(cx => (
                    <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="2" fill="white" opacity="0.7" />
                  )))}
                </svg>
              )}
            </div>
            {sol.icon === "idylle" && (
              <span className="italic font-display font-semibold">ïdylle</span>
            )}
          </div>
          <div>
            <h3 className="font-display text-[1.05rem] font-semibold mb-3">{sol.heading}</h3>
            <p className="text-[#6b6b80] text-[0.82rem] leading-relaxed mb-4">{sol.body}</p>
            <a href="#" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2 text-[0.75rem] font-medium transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

// ─── LuminescenceBanner.tsx ──────────────────────────────────────────────────
const bubbles = [
  { size: 180, top: "10%", left: "5%", delay: "0s" },
  { size: 120, top: "50%", left: "25%", delay: "1.5s" },
  { size: 200, top: "20%", left: "45%", delay: "0.8s" },
  { size: 90, top: "60%", left: "65%", delay: "2s" },
  { size: 150, top: "5%", left: "75%", delay: "0.4s" },
  { size: 70, top: "70%", left: "85%", delay: "3s" },
];

export function LuminescenceBanner() {
  return (
    <section id="luminescence" aria-label="Luminescence banner" className="relative min-h-[340px] flex items-center justify-center text-center overflow-hidden bg-[#050508]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10 animate-[float_8s_ease-in-out_infinite]"
            style={{
              width: b.size, height: b.size,
              top: b.top, left: b.left,
              animationDelay: b.delay,
              background: "radial-gradient(circle at 35% 35%, rgba(180,100,255,0.6), rgba(50,200,255,0.3) 40%, rgba(255,100,50,0.15) 70%, transparent 100%)",
            }}
          />
        ))}
      </div>
      <p className="relative z-10 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-bold leading-[1.25] max-w-2xl px-6 py-8 reveal">
        Revolutionizing luminescence to power the next generation of technology
      </p>
    </section>
  );
}

// ─── ScienceSection.tsx ──────────────────────────────────────────────────────
const scienceCards = [
  {
    title: "Synthesis",
    body: "Lorem dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut et dolore magna aliqua.",
    bg: "linear-gradient(135deg, #0e0e1a 0%, #1a1240 40%, #2d0d5a 100%)",
    footerColor: "rgba(180,160,255,0.6)",
  },
  {
    title: "Formulations",
    body: "Lorem dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    bg: "linear-gradient(135deg, #0e0e1a 0%, #1c1010 40%, #3a1500 100%)",
    footerColor: "rgba(255,180,120,0.6)",
  },
  {
    title: "Diverse Materials",
    body: "Lorem dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut et dolore magna aliqua.",
    bg: "linear-gradient(135deg, #091a09 0%, #0e2a10 40%, #1a4020 100%)",
    footerColor: "rgba(120,220,150,0.6)",
  },
  {
    title: "Manipulation of Light",
    body: "Lorem dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    footer: "consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    bg: "linear-gradient(135deg, #0e0e1a 0%, #1a1040 60%, #2a0870 100%)",
    footerColor: "rgba(160,140,255,0.6)",
  },
];

export function ScienceSection() {
  return (
    <section id="science" aria-labelledby="science-heading" className="px-6 md:px-20 py-12">
      <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
        <h2 id="science-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-[1.25] max-w-sm reveal">
          The Science Behind Our<br />Innovative Solutions
        </h2>
        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2 text-[0.75rem] font-medium mt-1 transition-colors duration-200 reveal">
          Learn More
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scienceCards.map((card, i) => (
          <article
            key={i}
            className="rounded-2xl p-6 min-h-[220px] flex flex-col justify-between border border-white/[0.07] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/25 reveal"
            style={{ background: card.bg }}
            aria-label={card.title}
          >
            <div>
              <h4 className="font-display text-[1rem] font-semibold mb-3">{card.title}</h4>
              <p className="text-[#6b6b80] text-[0.78rem] leading-relaxed">{card.body}</p>
            </div>
            <p className="text-[0.75rem]" style={{ color: card.footerColor }}>{card.footer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── SustainabilitySection.tsx ───────────────────────────────────────────────
export function SustainabilitySection() {
  return (
    <section id="sustainability" aria-labelledby="sustainability-heading" className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="reveal">
        <h2 id="sustainability-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-[1.25] mb-4">
          Sustainability at the heart<br />of Innovation
        </h2>
        <p className="text-[#6b6b80] text-[0.85rem] mb-7 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt ut labore et dolore ut dolore magnus.
        </p>
        <a
          href="#"
          className="inline-flex items-center border border-white/25 hover:border-orange-500 hover:bg-orange-500/8 text-white rounded px-5 py-2 text-[0.78rem] transition-all duration-200"
          aria-label="See the Details"
        >
          See the Details
        </a>
      </div>

      <div className="reveal relative h-[280px] md:h-[320px] rounded-2xl border border-white/[0.07] flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        <div
          className="w-[180px] h-[180px] rounded-full relative"
          aria-label="Iridescent sphere illustration"
          style={{
            background: "conic-gradient(from 0deg, #e879f9, #818cf8, #22d3ee, #34d399, #fbbf24, #f97316, #e879f9)",
            filter: "brightness(0.75)",
          }}
        >
          <div className="absolute inset-1 rounded-full" style={{ background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), transparent 60%)" }} />
        </div>
      </div>
    </section>
  );
}

// ─── NewsSection.tsx ─────────────────────────────────────────────────────────
const newsItems = [
  {
    date: "March 09, 2022",
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt, consectetur.",
  },
  {
    date: "March 08, 2025",
    title: "LumiLab — Exploring the science and innovation behind luminescent materials.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt, consectetur.",
  },
  {
    date: "March 08, 2025",
    title: "The Blow Factor — Trends, discoveries, and applications in photonic materials.",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing.",
  },
  {
    date: "March 09, 2022",
    title: "Brand Unveils Breakthrough in Product Authentication Technology",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt, consectetur.",
  },
];

export function NewsSection() {
  return (
    <section id="news" aria-labelledby="news-heading" className="relative px-6 md:px-20 py-12">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(100,30,200,0.12), transparent 60%)" }} aria-hidden="true" />
      <h2 id="news-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-center mb-8 reveal relative z-10">
        What&apos;s New at Brand
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {newsItems.map((item, i) => (
          <article
            key={i}
            className="bg-[#111118] border border-white/[0.07] rounded-xl p-6 transition-all duration-200 hover:border-orange-500/30 hover:-translate-y-1 reveal"
          >
            <p className="text-[0.7rem] text-orange-500 tracking-[0.08em] mb-2">{item.date}</p>
            <h4 className="font-display text-[0.9rem] font-semibold mb-3 leading-[1.35]">{item.title}</h4>
            <p className="text-[#6b6b80] text-[0.78rem] leading-relaxed mb-3">{item.body}</p>
            <a href="#" className="text-[0.75rem] text-white font-medium border-b border-white/[0.07] pb-px hover:text-orange-500 hover:border-orange-500 transition-colors duration-200">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── CtaSection.tsx ──────────────────────────────────────────────────────────
export function CtaSection() {
  return (
    <section id="cta-section" aria-label="Contact and links" className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
      <div className="relative overflow-hidden flex flex-col justify-center p-10 md:p-14">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a0a3a, #0e1040, #1a0628)" }} aria-hidden="true" />
        <div className="absolute w-[250px] h-[250px] -top-12 -left-12 rounded-full blur-[40px] opacity-60 animate-[blobMove_10s_ease-in-out_infinite_alternate]" style={{ background: "radial-gradient(#7c3aed, #4f46e5)" }} aria-hidden="true" />
        <div className="absolute w-[200px] h-[200px] -bottom-14 right-5 rounded-full blur-[40px] opacity-60 animate-[blobMove_10s_ease-in-out_infinite_alternate_reverse]" style={{ background: "radial-gradient(#f97316, #db2777)" }} aria-hidden="true" />
        <div className="relative z-10 reveal">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-3">
            Have Questions?<br />Let&apos;s Talk!
          </h2>
          <p className="text-white/70 text-[0.82rem] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum consectetur.</p>
          <a href="#" className="inline-flex items-center border border-white/25 hover:border-orange-500 hover:bg-orange-500/8 text-white rounded px-5 py-2 text-[0.78rem] transition-all duration-200">
            Get Started
          </a>
        </div>
      </div>

      <nav className="flex flex-col" aria-label="Quick links">
        {[{ label: "Partnerships" }, { label: "Careers" }].map((link) => (
          <a
            key={link.label}
            href="#"
            className="flex-1 border-l border-b border-white/[0.07] last:border-b-0 px-10 py-8 flex items-center justify-between bg-[rgba(20,20,30,0.5)] hover:bg-orange-500/5 transition-colors duration-200 group"
            aria-label={link.label}
          >
            <h3 className="font-display text-[1.2rem] font-semibold">{link.label}</h3>
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-200">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </nav>
    </section>
  );
}

// ─── Footer.tsx ──────────────────────────────────────────────────────────────
const footerLinks = {
  Nature: ["About", "Carnival"],
  Solutions: ["Bio Market", "Technology", "Newsroom", "Careers"],
  "Who We Are": ["Brand's Alliance", "About Brand", "Our Team", "Portfolios", "Sustainability & Brand report"],
};

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#0d0d12] border-t border-white/[0.07] px-6 md:px-20 pt-10 pb-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 mb-8">
        <span className="text-[0.82rem] text-white/70">info@brand.com</span>
        <span className="text-[0.82rem] text-white/70">+65 8808 2199</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-8">
        <div>
          <div className="font-display text-[1.3rem] font-bold tracking-[0.08em] mb-3">LOGO</div>
          <p className="text-[#6b6b80] text-[0.78rem] leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing ipsum.</p>
          <div className="flex gap-2" aria-label="Social media links">
            {["f", "𝕏", "in"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-white/[0.07] rounded-md flex items-center justify-center text-[#6b6b80] text-[0.7rem] hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
                aria-label={["Facebook", "Twitter", "LinkedIn"][i]}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <nav key={heading} aria-label={`${heading} links`}>
            <h5 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#6b6b80] font-display mb-4">{heading}</h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/55 text-[0.78rem] hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/[0.07] pt-5 text-center text-[#6b6b80] text-[0.72rem]">
        © 2025 Brand. All rights reserved.
      </div>
    </footer>
  );
}
