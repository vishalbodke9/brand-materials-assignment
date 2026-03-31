export function CtaSection() {
  return (
    <section id="cta-section" aria-label="Contact and links" className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
      <div className="relative overflow-hidden flex flex-col justify-center p-10 md:p-14">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a0a3a, #0e1040, #1a0628)" }} aria-hidden="true" />
        <div className="absolute w-[250px] h-[250px] -top-12 -left-12 rounded-full blur-[40px] opacity-60 animate-[blobMove_10s_ease-in-out_infinite_alternate]" style={{ background: "radial-gradient(#7c3aed, #4f46e5)" }} aria-hidden="true" />
        <div className="absolute w-[200px] h-[200px] -bottom-14 right-5 rounded-full blur-[40px] opacity-60 animate-[blobMove_10s_ease-in-out_infinite_alternate_reverse]" style={{ background: "radial-gradient(#f97316, #db2777)" }} aria-hidden="true" />
        <div className="relative z-10 reveal">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold mb-3 bg-gradient-to-r from-orange-400 to-purple-300 bg-clip-text text-transparent\">
            Have Questions?<br />Let&apos;s Talk!
          </h2>
          <p className="text-white/80 text-[0.82rem] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum consectetur.</p>
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