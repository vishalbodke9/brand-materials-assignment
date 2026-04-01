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
      <p className="font-display text-[clamp(1.5rem,3.5vw,2.1rem)] font-semibold leading-[1.3] reveal text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod{" "}
        <em className="text-white/85 not-italic">
          sectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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