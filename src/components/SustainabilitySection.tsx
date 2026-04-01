export function SustainabilitySection() {
  return (
    <section id="sustainability" aria-labelledby="sustainability-heading" className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="reveal">
        <h2 id="sustainability-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-[1.25] mb-4 text-white">
          Sustainability at the heart<br />of Innovation
        </h2>
        <p className="text-white/80 text-[0.85rem] mb-7 leading-relaxed">
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