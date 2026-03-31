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
        <h2 id="science-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-[1.25] max-w-sm reveal text-white">
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
              <h4 className="font-display text-[1rem] font-semibold mb-3 text-white">{card.title}</h4>
              <p className="text-white/85 text-[0.78rem] leading-relaxed">{card.body}</p>
            </div>
            <p className="text-[0.75rem]" style={{ color: card.footerColor }}>{card.footer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}