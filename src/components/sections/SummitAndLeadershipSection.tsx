import React from 'react';
import { SPECIAL_EXPERIENCES_DATA } from '../../data/techfestData';
import { MagneticButton } from '../ui/MagneticButton';
import { ExternalLink, Mic, Landmark, Flame, Sparkles } from 'lucide-react';

export const SummitAndLeadershipSection: React.FC = () => {
  const { summit, twmun, ignite } = SPECIAL_EXPERIENCES_DATA;

  const pastLuminaries = [
    { name: 'Dr. A.P.J. Abdul Kalam', role: 'Former President of India & Aerospace Scientist' },
    { name: 'Sqn Ldr Rakesh Sharma', role: 'First Indian Astronaut in Space (Hero of the Soviet Union)' },
    { name: 'S. Somanath', role: 'Chairman, Indian Space Research Organisation (ISRO)' },
    { name: 'Akash Ambani', role: 'Chairman, Reliance Jio Infocomm' },
  ];

  return (
    <section id="summit" className="py-24 bg-[#FAF8F2] border-t border-[rgba(198,160,74,0.22)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-eyebrow">
            Global Conclave &amp; Leadership Forums
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            The Confluence of Science, Diplomacy &amp; Industry.
          </h2>
          <p className="text-lead text-[#5C584F]">
            Where international policymakers, aerospace visionaries, and student leaders assemble at IIT Bombay to define the future of technology governance.
          </p>
        </div>

        {/* PART A: INTERNATIONAL SUMMIT SPOTLIGHT */}
        <div className="p-8 md:p-12 bg-[#FFFEFC] border border-[#C6A04A]/60 rounded-3xl shadow-[0_12px_40px_rgba(153,117,45,0.08)] mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A04A]/50 text-[#7A5B1E] flex items-center gap-1.5">
                  <Mic size={14} /> {summit.title}
                </span>
                <span className="text-xs font-semibold text-[#5C584F]">
                  Associate Partner: <strong className="text-[#24221E]">{summit.associatePartner}</strong>
                </span>
                <span className="text-xs text-[#77736A]">•</span>
                <span className="text-xs font-semibold text-[#5C584F]">
                  Powered by: <strong className="text-[#24221E]">{summit.poweredBy}</strong>
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#24221E]">
                Keynote Conclave at Convocation Hall
              </h3>

              <p className="text-sm md:text-base text-[#5C584F] leading-relaxed max-w-2xl">
                {summit.description}
              </p>

              {/* Distinguished Past Speakers Hall */}
              <div className="pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A5B1E] mb-3 flex items-center gap-1">
                  <Sparkles size={12} /> Distinguished Past Techfest Keynote Luminaries
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pastLuminaries.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-xl"
                    >
                      <div className="text-xs font-bold text-[#24221E]">{speaker.name}</div>
                      <div className="text-[11px] text-[#77736A]">{speaker.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & Booking Card */}
            <div className="lg:col-span-4 p-6 bg-[#FAF8F2] border border-[rgba(198,160,74,0.35)] rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EEF6F0] text-[#1E5E3A] border border-[#1E5E3A]/20">
                  Early Bird Delegate Offer
                </span>
                <div className="pt-2">
                  <span className="font-serif text-4xl font-bold text-[#24221E]">
                    ₹{summit.earlyBirdPriceINR}
                  </span>
                  <span className="text-sm text-[#77736A] line-through ml-2">
                    ₹{summit.regularPriceINR}
                  </span>
                </div>
                <div className="text-xs text-[#5C584F]">
                  Full access pass to all keynote tracks, fireside chats, and networking sessions.
                </div>
              </div>

              <div className="space-y-3">
                <MagneticButton
                  href={summit.url}
                  variant="gold-foil"
                  withConfetti={true}
                  className="w-full text-center !text-xs uppercase tracking-wider font-bold !py-3.5"
                >
                  Register for Summit Pass ↗
                </MagneticButton>
                <div className="text-center">
                  <a
                    href={summit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] inline-flex items-center gap-1"
                  >
                    <span>View Summit Agenda</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART B: TWMUN & TECHFEST IGNITE DUAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TWMUN Card */}
          <div className="p-8 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-3xl space-y-5 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A04A]/40 text-[#7A5B1E] flex items-center gap-1.5">
                  <Landmark size={14} /> {twmun.title}
                </span>
                <span className="text-xs font-semibold text-[#7A5B1E]">
                  {twmun.dates}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#24221E]">
                Techfest World Model United Nations
              </h3>

              <p className="text-sm text-[#5C584F] leading-relaxed">
                {twmun.description}
              </p>

              <div className="p-4 bg-[#FAF8F2] border border-[rgba(198,160,74,0.2)] rounded-xl space-y-1">
                <div className="text-xs font-bold text-[#24221E]">
                  Committees &amp; Deliberation Tracks
                </div>
                <div className="text-xs text-[#5C584F]">
                  UNCOPUOS (Space Governance), ITU (Cyber Law &amp; Autonomous AI), and UNESCO (Ethical Engineering).
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <MagneticButton
                href={twmun.url}
                variant="gold-foil"
                withConfetti={true}
                className="!text-xs uppercase tracking-wider font-bold !px-6 !py-3"
              >
                Register for TWMUN ↗
              </MagneticButton>
              <a
                href={twmun.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
              >
                <span>Delegate Handbook</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Techfest Ignite Card */}
          <div className="p-8 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-3xl space-y-5 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A04A]/40 text-[#7A5B1E] flex items-center gap-1.5">
                  <Flame size={14} /> Techfest Ignite
                </span>
                <span className="text-xs font-bold text-[#1E5E3A] bg-[#EEF6F0] px-2.5 py-0.5 rounded-full">
                  ₹1 Lakh Seed Grant
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#24221E]">
                National Technical Alliance &amp; Seed Grants
              </h3>

              <p className="text-sm text-[#5C584F] leading-relaxed">
                Accredit your college festival under official IIT Bombay mentorship. Ignite bridges student tech communities nationwide with grant pools, operational blueprints, and main-stage recognition.
              </p>

              <div className="space-y-2">
                {ignite.tracks.map((track, i) => (
                  <div key={i} className="p-3 bg-[#FAF8F2] border border-[rgba(198,160,74,0.2)] rounded-xl">
                    <div className="text-xs font-bold text-[#24221E]">{track.name}</div>
                    <div className="text-[11px] text-[#5C584F] mt-0.5">{track.perks}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <MagneticButton
                href={ignite.url}
                variant="gold-foil"
                withConfetti={true}
                className="!text-xs uppercase tracking-wider font-bold !px-6 !py-3"
              >
                Apply for Ignite Accreditation ↗
              </MagneticButton>
              <a
                href={ignite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
              >
                <span>Ignite Guidelines</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

