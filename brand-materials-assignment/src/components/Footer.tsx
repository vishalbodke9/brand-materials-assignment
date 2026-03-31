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
          <p className="text-white/75 text-[0.78rem] leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing ipsum.</p>
          <div className="flex gap-2" aria-label="Social media links">
            {["f", "𝕏", "in"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-white/[0.07] rounded-md flex items-center justify-center text-white/60 text-[0.7rem] hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
                aria-label={["Facebook", "Twitter", "LinkedIn"][i]}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <nav key={heading} aria-label={`${heading} links`}>
            <h5 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white font-display mb-4">{heading}</h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-[0.78rem] hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/[0.07] pt-5 text-center text-white/60 text-[0.72rem]">
        © 2025 Brand. All rights reserved.
      </div>
    </footer>
  );
}