# Future of Advanced Materials — Brand Website

A fully responsive, production-grade web application built from a Figma design, showcasing advanced bio-luminescent materials and integrative solutions.

---

## Project Overview

This project transforms the provided Figma design into a pixel-accurate, fully responsive Next.js web application. It features:

- Animated hero section with light curtain effects
- Floating iridescent bubble banner
- Science cards with gradient backgrounds
- Scroll-reveal animations throughout
- Mobile-first responsive layout
- Fully accessible semantic HTML with ARIA roles

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework & SSR |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **React 18** | UI components |
| **GitHub** | Version control |
| **Vercel** | Deployment |

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/brand-materials.git
cd brand-materials

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page — composes all sections
│   └── globals.css         # Global styles, Tailwind imports, fonts
├── components/
│   ├── Navbar.tsx          # Fixed nav with mobile hamburger menu
│   ├── HeroSection.tsx     # Animated hero with light curtains
│   ├── TrustSection.tsx    # Partner logos grid
│   ├── AboutSection.tsx    # Purple gradient about panel
│   ├── SolutionsSection.tsx# Product solutions list
│   ├── LuminescenceBanner.tsx # Floating bubbles banner
│   ├── ScienceSection.tsx  # 2×2 gradient science cards
│   ├── SustainabilitySection.tsx # Split layout with sphere
│   ├── NewsSection.tsx     # 2×2 news card grid
│   ├── CtaSection.tsx      # Contact + partnerships/careers links
│   └── Footer.tsx          # Full footer with nav columns
└── hooks/
    └── useScrollReveal.ts  # IntersectionObserver scroll animations
```

---

## Design System

### Colors
```
Background:  #060608
Surface:     #0d0d12
Card:        #111118
Orange:      #f97316  (primary CTA)
Purple:      #7c3aed  (accent)
Muted text:  #6b6b80
```

### Typography
- **Display / Headings**: Syne (700, 800)
- **Body**: DM Sans (300, 400, 500)

### Animations
- `fadeUp` — hero text entrance
- `float` — bubble elements
- `blobMove` — CTA background blobs
- `revealUp` — scroll-triggered section reveals

---

## Deployment Instructions

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link to your GitHub repo
# Production URL will be assigned automatically
```

### Or via Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

The application will be live at `https://your-project.vercel.app`

---

## Git Workflow

```bash
git init
git add .
git commit -m "feat: initial project setup with Next.js and Tailwind"

git add src/components/
git commit -m "feat: implement all page sections matching Figma design"

git add src/hooks/
git commit -m "feat: add scroll reveal animations via IntersectionObserver"

git remote add origin https://github.com/your-username/brand-materials.git
git push -u origin main
```

---

## Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA roles and labels on all interactive elements
- Keyboard-navigable mobile menu with `aria-expanded`
- Descriptive `aria-label` on all buttons and links
- Color contrast meets WCAG AA for all body text

---

## License

MIT
