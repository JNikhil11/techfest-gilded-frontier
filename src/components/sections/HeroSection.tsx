import React from 'react';
import { TECHFEST_METADATA } from '../../data/techfestData';
import { GoldSparkleCanvas } from '../canvas/GoldSparkleCanvas';
import { HeroAstrolabeSvg } from '../canvas/HeroAstrolabeSvg';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 bg-[#FFFEFC] overflow-hidden"
    >
      {/* 2D Canvas Gold Dust Sparkle Field */}
      <GoldSparkleCanvas density="normal" />

      {/* Ambient Radial Golden Aura Background */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[960px] md:h-[960px] rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(244, 233, 203, 0.55) 0%, rgba(230, 210, 163, 0.18) 45%, rgba(255, 254, 252, 0) 72%)',
        }}
      />

      {/* Main 12-Column Hero Content Grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Cols 1-7): Monumental Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF8F2] border border-[rgba(198,160,74,0.4)] shadow-[0_2px_8px_rgba(36,34,30,0.02)]">
              <Sparkles size={14} className="text-[#C6A04A]" />
              <span className="text-[11px] md:text-xs font-semibold tracking-wider text-[#7A5B1E] uppercase">
                {TECHFEST_METADATA.edition} • {TECHFEST_METADATA.officialTheme} • {TECHFEST_METADATA.dates.finalsDisplay}
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-hero font-serif font-normal text-[#24221E] tracking-tight">
              <span>Where Science Enters</span>
              <br />
              <em className="gilded-italic-foil font-serif">The Gilded Frontier.</em>
            </h1>

            {/* Editorial Lead Description */}
            <p className="text-lead text-[#5C584F] font-normal leading-relaxed">
              Experience the 30th Milestone Edition of Asia&apos;s Largest Science and Technology Festival — <em>&ldquo;{TECHFEST_METADATA.officialTheme}&rdquo;</em>. Three days of international combat robotics, autonomous AI agent challenges, IIT Bombay certified workshops, and global keynote conclaves at Powai, Mumbai.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                href="https://techfest.org/competitions"
                variant="gold-foil"
                withConfetti={true}
                className="!text-sm uppercase tracking-wider font-bold !px-7 !py-4"
              >
                Explore Competitions &amp; Register ↗
              </MagneticButton>

              <MagneticButton
                href="https://techfest.org/workshops"
                variant="porcelain"
                className="!text-sm font-semibold !px-6 !py-4"
              >
                Browse IIT Bombay Workshops ↗
              </MagneticButton>
            </div>

            {/* Institutional Assurance Badge */}
            <div className="flex items-center gap-2 pt-2 text-xs text-[#7A5B1E] font-medium">
              <ShieldCheck size={16} className="text-[#1E5E3A]" />
              <span>{TECHFEST_METADATA.venue.entryPolicy}</span>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Gilded Astrolabe & IITB Medallion */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <HeroAstrolabeSvg className="w-full max-w-[460px] lg:max-w-[540px]" />
          </div>
        </div>

        {/* Quick-Jump Anchor */}
        <div className="pt-8 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-xs font-semibold tracking-widest text-[#7A5B1E] hover:text-[#24221E] uppercase transition-colors"
          >
            <span>Scroll to Discover the 30th Edition</span>
            <ArrowDown
              size={14}
              className="text-[#C6A04A] group-hover:translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Bottom Viewport Ledger Strip */}
      <div className="relative z-10 w-full border-t border-[rgba(198,160,74,0.22)] bg-[rgba(255,254,252,0.92)] backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(198,160,74,0.22)] py-4">
            {TECHFEST_METADATA.verifiedMetrics.map((metric, idx) => (
              <div key={idx} className="px-4 py-2.5 flex flex-col">
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#24221E]">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-[#7A5B1E] uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-[11px] text-[#77736A] mt-0.5 line-clamp-1">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
