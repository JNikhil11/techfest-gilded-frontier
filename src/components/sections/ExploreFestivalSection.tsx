import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Trophy, Swords, Sparkles, GraduationCap, Mic, Landmark, Eye, Music } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  url: string;
  ctaText: string;
  badge: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'competitions',
    icon: <Trophy size={18} />,
    title: 'National & International Competitions',
    shortDesc: 'Up to ₹25.5 Lakhs in research grants and ₹1L–₹3.8L cash prize pools.',
    longDesc: 'From autonomous line-following maze solvers (Meshmerize) and prompt engineering challenges (ZeroCode) to deep-tech aerospace R&D supported by MeitY and the Ministry of Heavy Industries.',
    highlights: ['Prize pools up to INR 25.5 Lakhs', 'City Zonals across India', 'Finale at IIT Bombay (Dec 16–18)'],
    url: 'https://techfest.org/competitions',
    ctaText: 'Explore All Competitions',
    badge: 'Flagship Track',
  },
  {
    id: 'robowars',
    icon: <Swords size={18} />,
    title: 'International Robowars Arena',
    shortDesc: 'Armored kinetic combat machines in 8kg, 15kg, 30kg, and 60kg weight classes.',
    longDesc: 'India&apos;s largest combat robotics spectacle held inside a custom bulletproof battle arena with spinning steel drums, pneumatic launchers, and hydraulic crushers before 20,000+ live spectators.',
    highlights: ['4 Weight Categories (8kg – 60kg)', '20,000+ Arena Spectators', 'International Team Clashes'],
    url: 'https://techfest.org/robowars',
    ctaText: 'View Robowars Rules',
    badge: 'Arena Combat',
  },
  {
    id: 'ai-agents',
    icon: <Sparkles size={18} />,
    title: 'AI Agents & Prompt Engineering',
    shortDesc: 'ZeroCode 70-minute Gemini Flash sprint and production agent orchestration.',
    longDesc: 'Build autonomous coding assistants on TrueForge, enterprise service workflow agents, and zero-manual-code web apps using Google AI Studio under tight mathematical scoring matrices.',
    highlights: ['Google AI Studio (Gemini Flash)', 'TrueForge VS Code Harness', 'Sub-Second Agent Latency'],
    url: 'https://techfest.org/competitions/zero-code',
    ctaText: 'Discover AI Challenges',
    badge: 'Autonomous AI',
  },
  {
    id: 'workshops',
    icon: <GraduationCap size={18} />,
    title: 'IIT Bombay Certified Workshops',
    shortDesc: '20+ technical tracks & Dual-Certificate combos with free all-access festival pass.',
    longDesc: 'Direct hands-on training taught by industry experts in AI, Machine Learning, Drone Technology, Full Stack, and Algorithmic Trading with official certification from Techfest, IIT Bombay.',
    highlights: ['Professional IIT Bombay Certificate', 'Free EDM & Festival Pass Included', 'Hands-On Hardware Kits'],
    url: 'https://techfest.org/workshops',
    ctaText: 'Browse Workshop Catalogue',
    badge: 'Dual Certifications',
  },
  {
    id: 'summit',
    icon: <Mic size={18} />,
    title: 'International Summit & Keynote Conclave',
    shortDesc: 'Associate Partner CoinDCX, Powered by Juspay • Early Bird ₹999.',
    longDesc: 'Global leadership conclave gathering technology founders, venture partners, aerospace innovators, and policymakers inside IIT Bombay’s iconic Convocation Hall.',
    highlights: ['Associate Partner: CoinDCX', 'Powered by: Juspay', 'Early Bird Pass INR 999'],
    url: 'https://techfest.org/summit',
    ctaText: 'Book Summit Pass',
    badge: 'Global Leadership',
  },
  {
    id: 'twmun',
    icon: <Landmark size={18} />,
    title: 'Techfest World MUN (TWMUN)',
    shortDesc: 'December 17–18, 2026 • International diplomatic deliberations at IIT Bombay.',
    longDesc: 'Two days of high-level geopolitical debate debating science ethics, autonomous weapon systems governance, orbital space debris treaties, and international technology policy.',
    highlights: ['Dec 17–18, 2026', 'Global Youth Delegates', 'Policy & Ethics Focus'],
    url: 'https://techfest.org/twmun',
    ctaText: 'Explore TWMUN',
    badge: 'Diplomacy',
  },
  {
    id: 'exhibitions',
    icon: <Eye size={18} />,
    title: 'Technical Exhibitions & Defense Demos',
    shortDesc: 'Cutting-edge international robotics, defense innovations, and aerospace prototypes.',
    longDesc: 'Curated showcases of state-of-the-art humanoid robotics, unmanned autonomous ground vehicles, bionic prosthetics, and defense research exhibits from leading global institutions.',
    highlights: ['Global Tech Displays', 'Defense Innovations', 'Open Public Showcase'],
    url: 'https://techfest.org/',
    ctaText: 'Explore Exhibitions',
    badge: 'Live Showcase',
  },
  {
    id: 'technoholix',
    icon: <Music size={18} />,
    title: 'Technoholix & Cultural Nights',
    shortDesc: 'Visual laser spectacles, international illusionists, and high-octane EDM finale.',
    longDesc: 'When the scientific sessions conclude, Techfest transforms the open-air Gymkhana grounds with sensory pyro-technic displays, laser mapping, and headline EDM artists.',
    highlights: ['Open-Air Gymkhana Grounds', 'Free with Workshop/Accommodation', 'International EDM Artists'],
    url: 'https://techfest.org/accommodation',
    ctaText: 'View Festival Passes',
    badge: 'Evening Spectacle',
  },
];

export const ExploreFestivalSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<Pillar>(PILLARS[0]);

  return (
    <section id="explore" className="py-24 bg-[#FFFEFC] border-t border-[rgba(198,160,74,0.22)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 space-y-3">
          <div className="text-eyebrow">
            Explore the 30th Edition Hub
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            Eight Pillars of Scientific Renaissance.
          </h2>
          <p className="text-lead text-[#5C584F]">
            Every dimension of Techfest is curated to provide unprecedented depth—from competitive robotics combat to policy diplomacy and hands-on laboratory mastery.
          </p>
        </div>

        {/* 12-Column Interactive Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Cols 1-5): 8-Pillar Interactive Index */}
          <div className="lg:col-span-5 space-y-2" role="tablist" aria-label="Techfest Festival Pillars">
            {PILLARS.map((pillar) => {
              const isSelected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActivePillar(pillar)}
                  onMouseEnter={() => setActivePillar(pillar)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#FAF8F2] border-[#C6A04A] shadow-[0_4px_16px_rgba(198,160,74,0.15)]'
                      : 'bg-transparent border-transparent hover:bg-[#FAF8F2]/60 hover:border-[rgba(198,160,74,0.2)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-[#FFFEFC] text-[#99752D] border border-[#C6A04A]/40'
                          : 'bg-[#FAF8F2] text-[#77736A] group-hover:text-[#24221E]'
                      }`}
                    >
                      {pillar.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#24221E] group-hover:text-[#99752D] transition-colors">
                        {pillar.title}
                      </div>
                      <div className="text-xs text-[#77736A] line-clamp-1 mt-0.5">
                        {pillar.shortDesc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-200 ${
                      isSelected
                        ? 'text-[#C6A04A] translate-x-1'
                        : 'text-[#77736A]/40 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column (Cols 6-12): Dynamic Editorial Showcase Stage */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-3xl shadow-[0_8px_32px_rgba(36,34,30,0.04)] space-y-6">
              <div className="flex items-center justify-between gap-4 border-b border-[rgba(198,160,74,0.2)] pb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFFEFC] border border-[#C6A04A]/50 text-[#7A5B1E]">
                  {activePillar.badge}
                </span>
                <span className="text-xs text-[#77736A] font-medium">
                  Official 2026–27 Programme
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#24221E]">
                  {activePillar.title}
                </h3>
                <p className="text-base text-[#5C584F] leading-relaxed">
                  {activePillar.longDesc}
                </p>
              </div>

              {/* Highlights Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activePillar.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-xl text-xs font-semibold text-[#24221E] flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6A04A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <MagneticButton
                  href={activePillar.url}
                  variant="gold-foil"
                  withConfetti={true}
                  className="!text-xs uppercase tracking-wider font-bold !px-6 !py-3.5"
                >
                  {activePillar.ctaText} ↗
                </MagneticButton>

                <a
                  href={activePillar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1 transition-colors"
                >
                  <span>Visit techfest.org</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

