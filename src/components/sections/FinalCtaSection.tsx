import React from 'react';
import { GoldSparkleCanvas } from '../canvas/GoldSparkleCanvas';
import { MagneticButton } from '../ui/MagneticButton';
import { Trophy, GraduationCap, Mic, Bed, ArrowUpRight } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const portalCards = [
    {
      title: 'Competitions & Zonals',
      desc: 'Over ₹35+ Lakhs in prize pools and national deep-tech R&D challenges.',
      url: 'https://techfest.org/competitions',
      cta: 'Register for Competitions',
      icon: <Trophy size={20} className="text-[#99752D]" />,
    },
    {
      title: 'IITB Certified Workshops',
      desc: 'Dual-certificate combos in AI, Robotics, and Full-Stack with free EDM pass.',
      url: 'https://techfest.org/workshops',
      cta: 'Enroll in Workshops',
      icon: <GraduationCap size={20} className="text-[#99752D]" />,
    },
    {
      title: 'International Summit',
      desc: 'Early Bird ₹999 pass for keynotes by aerospace and AI industry leaders.',
      url: 'https://techfest.org/summit',
      cta: 'Book Summit Pass',
      icon: <Mic size={20} className="text-[#99752D]" />,
    },
    {
      title: 'Campus Accommodation',
      desc: '4 Days & 4 Nights inside IIT Bombay student hostels starting at ₹3,599.',
      url: 'https://techfest.org/accommodation',
      cta: 'Reserve Hostel Stay',
      icon: <Bed size={20} className="text-[#99752D]" />,
    },
  ];

  return (
    <section className="relative py-28 bg-[#FAF8F2] border-t border-[rgba(198,160,74,0.3)] overflow-hidden">
      {/* Delicate Gold Sparkle Canvas */}
      <GoldSparkleCanvas density="dense" />

      {/* Luminous Golden Horizon Aura */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(230, 210, 163, 0.6) 0%, rgba(244, 233, 203, 0.25) 50%, rgba(250, 248, 242, 0) 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Monumental Headline */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-eyebrow">
            The 30th Milestone Awaits • December 16–18, 2026
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            Step Into the 30th Edition at IIT Bombay.
          </h2>
          <p className="text-lead text-[#5C584F] mx-auto">
            Join 1,80,000+ scientific minds, international roboticists, and visionary founders. Secure your participation across competitions, certifications, and campus stays today.
          </p>
        </div>

        {/* 4 Direct Gateway Portal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {portalCards.map((card, idx) => (
            <div
              key={idx}
              className="p-7 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-3xl shadow-[0_8px_24px_rgba(36,34,30,0.04)] flex flex-col justify-between hover:border-[#C6A04A] hover:shadow-[0_12px_32px_rgba(153,117,45,0.12)] transition-all group"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-[#FAF8F2] border border-[#C6A04A]/30">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#24221E] group-hover:text-[#99752D] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#5C584F] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[rgba(198,160,74,0.18)] mt-6">
                <MagneticButton
                  href={card.url}
                  variant="gold-foil"
                  withConfetti={true}
                  className="w-full text-center !text-xs uppercase tracking-wider font-bold !py-3 flex items-center justify-center gap-1.5"
                >
                  <span>{card.cta}</span>
                  <ArrowUpRight size={14} />
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Accreditation Pill */}
        <div className="pt-4 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-full text-xs text-[#7A5B1E] font-medium shadow-sm">
            <img src="/iitb-logo.png" alt="IITB" className="h-6 w-auto object-contain" width={24} height={24} />
            <span>Official Event Experience • Indian Institute of Technology Bombay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

