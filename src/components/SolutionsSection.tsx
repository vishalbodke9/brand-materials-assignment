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
        <h2 id="solutions-heading" className="font-display text-[clamp(1.4rem,3vw,1.8rem)] font-bold leading-[1.25] text-white">
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
            <h3 className="font-display text-[1.05rem] font-semibold mb-3 text-white">{sol.heading}</h3>
            <p className="text-white/85 text-[0.82rem] leading-relaxed mb-4">{sol.body}</p>
            <a href="#" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2 text-[0.75rem] font-medium transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}