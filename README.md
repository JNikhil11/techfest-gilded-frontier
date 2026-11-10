# Techfest 2026–27 | IIT Bombay — The Gilded Frontier (30th Edition)

[![CI Verification](https://github.com/JNikhil11/techfest-gilded-frontier/actions/workflows/ci-verification.yml/badge.svg)](https://github.com/JNikhil11/techfest-gilded-frontier/actions/workflows/ci-verification.yml)
[![CodeQL Analysis](https://github.com/JNikhil11/techfest-gilded-frontier/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/JNikhil11/techfest-gilded-frontier/actions/workflows/codeql-analysis.yml)

The official landing page for **Techfest, IIT Bombay — 30th Edition (December 16–18, 2026)**, Asia's Largest Science & Technology Festival held inside the campus of the **Indian Institute of Technology Bombay, Powai, Mumbai**.

---

## 🏛️ Creative Direction: "The Gilded Frontier"

- **Luminous White & Warm Ivory Architecture:** Pure porcelain (`#FFFEFC`) alternating with warm ivory (`#FAF8F2`) and architectural hairlines (`rgba(198, 160, 74, 0.24)`).
- **The Moving Gold-Light Signature (`<GoldLightSignature />`):** A continuous, mathematically parameterized Bézier golden light trail and specular pulse connecting the Hero, Competitions Showcase, and Final CTA.
- **2D Canvas Gold Dust Sparkle Engine (`<GoldSparkleCanvas />`):** Subtle hardware-accelerated 2D Canvas glints (capped at 28-36 particles desktop / 15 mobile) that pause offscreen via `IntersectionObserver` and respect `prefers-reduced-motion`.
- **Zero 3D Bloat:** Strictly zero Three.js, WebGL 3D, or heavy `.glb`/`.gltf` meshes.

---

## 🎯 Verified Factual Programme Corpus (`https://techfest.org/`)

- **Dates:** December 16–18, 2026 (Accommodation: Dec 15, 6 AM – Dec 19, 10 AM IST; TWMUN: Dec 17–18, 2026).
- **Venue:** Indian Institute of Technology Bombay (Powai, Mumbai, Maharashtra 400076).
- **Scale:** 1,80,000+ Footfall, 35,000+ Competitors, 20+ Participating Countries.
- **Competitions (12 Verified Tracks):** Meshmerize (₹1,00,000), ZeroCode (₹1,00,000, 70-min Gemini Flash sprint), Autonomous AI Agents (₹3,00,000), Aeromodelling (₹1,50,000), AyushTech AI (₹1,00,000), TrueForge VS Code Agent (₹1,00,000), MeitY Cycloidal Rotor Drone (₹25,50,000), MeitY Forensics (₹25,50,000), etc.
- **Workshops (20 Verified Tracks):** Dual-Certificate Combos (AI+ML, Drone+Robotics, Deep Learning+ML, etc.) and individual tracks with 3 official guarantees: Professional IIT Bombay Certificate, Free All-Access Pass (EDM, Robowars, Keynotes), and Internship opportunities.
- **International Summit:** Associate Partner CoinDCX, Powered by Juspay, Early Bird ₹999.
- **International Robowars:** 4 weight categories (8kg, 15kg, 30kg, 60kg).
- **On-Campus Accommodation:** ₹3,599 for 4D/4N inside IIT Bombay campus with interactive group discount calculator.

---

## 🛠️ Tech Stack & Verification Architecture

- **Framework:** React 19 + TypeScript 5.8 + Vite 6
- **Styling:** Tailwind CSS v4 + Design System Tokens (`tokens.css`)
- **Animation:** GSAP 3.12 (ScrollTrigger) + 2D Canvas Sparkle Engine + `canvas-confetti`
- **Unit & Integration Suite:** Vitest + React Testing Library + JSDOM (`npm run test:unit`)
- **End-to-End Suite:** Playwright 5-viewport verification (`Mobile`, `Tablet`, `Laptop`, `Desktop`, `4K`) (`npx playwright test`)
- **Static Analysis & Anti-Regression:** Semgrep custom rules + strict TypeScript AST checks

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run static analysis & blacklist verification
npm run lint:semgrep

# Run TypeScript AST check
npx tsc --noEmit

# Run Vitest unit & component test suite
npm run test:unit

# Build production bundle
npm run build

# Run Playwright E2E across 5 viewports
npx playwright test
```

---

## 📜 Third-Party Notices & Attributions

See [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) for licenses and attributions regarding `basmilius/sparkle` (MIT), `tsparticles` (MIT), `jaydickinson/free-gsap-effects` (MIT), and `canvas-confetti` (ISC).
