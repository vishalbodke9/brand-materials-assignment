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
      <p className="relative z-10 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-bold leading-[1.25] max-w-2xl px-6 py-8 reveal bg-gradient-to-r from-white via-purple-300 to-orange-400 bg-clip-text text-transparent">
        Revolutionizing luminescence to power the next generation of technology
      </p>
    </section>
  );
}