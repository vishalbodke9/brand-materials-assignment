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
      <h2 id="news-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-center mb-8 reveal relative z-10 text-white">
        What&apos;s New at Brand
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {newsItems.map((item, i) => (
          <article
            key={i}
            className="bg-[#111118] border border-white/[0.07] rounded-xl p-6 transition-all duration-200 hover:border-orange-500/30 hover:-translate-y-1 reveal"
          >
            <p className="text-[0.7rem] text-orange-500 tracking-[0.08em] mb-2">{item.date}</p>
            <h4 className="font-display text-[0.9rem] font-semibold mb-3 leading-[1.35] text-white">{item.title}</h4>
            <p className="text-white/85 text-[0.78rem] leading-relaxed mb-3">{item.body}</p>
            <a href="#" className="text-[0.75rem] text-white font-medium border-b border-white/[0.07] pb-px hover:text-orange-500 hover:border-orange-500 transition-colors duration-200">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}