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
        <h2 id="about-heading" className="font-display text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.25] mb-4 text-white">
          Our Journey Towards Innovation and Excellence
        </h2>
        <p className="text-white/85 text-[0.85rem] mb-7">
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