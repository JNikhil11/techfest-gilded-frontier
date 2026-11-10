import React, { useState, useMemo } from 'react';
import { VERIFIED_WORKSHOPS, WorkshopItem, SPECIAL_EXPERIENCES_DATA } from '../../data/techfestData';
import { MagneticButton } from '../ui/MagneticButton';
import { Award, Ticket, Briefcase, Phone, Mail, ArrowUpRight } from 'lucide-react';

type WorkshopTrack =
  | 'Dual-Certificate Combos'
  | 'AI & Data'
  | 'Engineering & Robotics'
  | 'Technology & Cybersecurity'
  | 'Business, Finance & Management';

export const WorkshopsSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<WorkshopTrack>('Dual-Certificate Combos');

  const filteredWorkshops = useMemo(() => {
    return VERIFIED_WORKSHOPS.filter((ws) => ws.track === selectedTrack);
  }, [selectedTrack]);

  const tracks: WorkshopTrack[] = [
    'Dual-Certificate Combos',
    'AI & Data',
    'Engineering & Robotics',
    'Technology & Cybersecurity',
    'Business, Finance & Management',
  ];

  return (
    <section id="workshops" className="py-24 bg-[#FFFEFC] border-t border-[rgba(198,160,74,0.22)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-eyebrow">
            IIT Bombay Certified Training Catalogue
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            Master the Frontiers of Applied Science.
          </h2>
          <p className="text-lead text-[#5C584F]">
            Direct hands-on technical workshops certified by Techfest, IIT Bombay. Every participant receives credentials, direct industry mentorship, and all-access festival entry.
          </p>
        </div>

        {/* 3 Core Official Workshop Guarantees Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#FFFEFC] text-[#99752D] border border-[#C6A04A]/30 shrink-0">
              <Award size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#24221E]">
                Professional IIT Bombay Certificate
              </div>
              <div className="text-xs text-[#5C584F] mt-1 leading-relaxed">
                Awarded upon full session completion with verifiable institutional credentials.
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#FFFEFC] text-[#99752D] border border-[#C6A04A]/30 shrink-0">
              <Ticket size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#24221E]">
                Free All-Access Festival Pass
              </div>
              <div className="text-xs text-[#5C584F] mt-1 leading-relaxed">
                Covers EDM Night, Robowars Arena, Technical Exhibitions, and Keynote Sessions.
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#FFFEFC] text-[#99752D] border border-[#C6A04A]/30 shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#24221E]">
                Internship &amp; Career Growth
              </div>
              <div className="text-xs text-[#5C584F] mt-1 leading-relaxed">
                Direct portfolio reviews and placement assistance with sponsoring tech partners.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Track Switcher */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[rgba(198,160,74,0.2)] mb-10">
          {tracks.map((track) => (
            <button
              key={track}
              type="button"
              onClick={() => setSelectedTrack(track)}
              className={`text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full border transition-all ${
                selectedTrack === track
                  ? 'bg-[#24221E] text-[#FFFDF7] border-[#24221E] shadow-sm'
                  : 'bg-[#FFFEFC] text-[#5C584F] border-[rgba(198,160,74,0.3)] hover:border-[#C6A04A]'
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((ws: WorkshopItem) => {
            const savings = ws.originalPriceINR - ws.currentPriceINR;
            const savingsPercent = Math.round((savings / ws.originalPriceINR) * 100);

            return (
              <div
                key={ws.id}
                className="p-6 md:p-7 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl flex flex-col justify-between hover:border-[#C6A04A] hover:bg-[#FAF8F2]/90 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    {ws.badge ? (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFFEFC] border border-[#C6A04A]/40 text-[#7A5B1E]">
                        {ws.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-[#77736A] uppercase tracking-wider">
                        {ws.track}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-[#1E5E3A] bg-[#EEF6F0] px-2 py-0.5 rounded">
                      Save {savingsPercent}%
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#24221E] group-hover:text-[#99752D] transition-colors">
                    {ws.title}
                  </h3>

                  <p className="text-xs text-[#5C584F] leading-relaxed">
                    {ws.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[rgba(198,160,74,0.18)] mt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold text-[#24221E]">
                        ₹{ws.currentPriceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#77736A] line-through ml-2">
                        ₹{ws.originalPriceINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#7A5B1E] font-medium">
                      + Free Festival Pass
                    </span>
                  </div>

                  <MagneticButton
                    href={ws.registerUrl}
                    variant="gold-foil"
                    withConfetti={true}
                    className="w-full text-center !text-xs uppercase tracking-wider font-bold !py-3 flex items-center justify-center gap-1.5"
                  >
                    <span>Explore &amp; Register</span>
                    <ArrowUpRight size={14} />
                  </MagneticButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Workshop Coordinators Strip */}
        <div className="mt-14 p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#24221E] uppercase tracking-wider">
              Workshops Helpdesk:
            </span>
            <span className="text-[#5C584F]">
              Have questions regarding course modules, kit deliveries, or combo registrations?
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#7A5B1E]">
            {SPECIAL_EXPERIENCES_DATA.verifiedContacts.slice(0, 2).map((contact, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-semibold text-[#24221E]">{contact.name}</span>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#24221E] flex items-center gap-1 transition-colors"
                >
                  <Phone size={12} /> {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#24221E] flex items-center gap-1 transition-colors"
                >
                  <Mail size={12} /> {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

