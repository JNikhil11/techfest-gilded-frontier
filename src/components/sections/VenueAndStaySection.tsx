import React, { useState } from 'react';
import { SPECIAL_EXPERIENCES_DATA, TECHFEST_METADATA } from '../../data/techfestData';
import { calculateAccommodationQuote } from '../../utils/accommodationMath';
import { IstCountdown } from '../ui/IstCountdown';
import { MagneticButton } from '../ui/MagneticButton';
import { MapPin, Users, Calendar, ShieldCheck, Phone, Mail, ExternalLink } from 'lucide-react';

export const VenueAndStaySection: React.FC = () => {
  const [guests, setGuests] = useState<number>(4);
  const quote = calculateAccommodationQuote(guests);
  const { accommodation } = SPECIAL_EXPERIENCES_DATA;

  return (
    <section id="venue" className="py-24 bg-[#FFFEFC] border-t border-[rgba(198,160,74,0.22)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-eyebrow">
            Venue, Schedule &amp; On-Campus Hospitality
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            Stay Inside the Historic IIT Bombay Campus.
          </h2>
          <p className="text-lead text-[#5C584F]">
            Enjoy 4 Days &amp; 4 Nights of accommodation in Powai, Mumbai. Seamless access to student hostels, food avenues, event arenas, and night sessions.
          </p>
        </div>

        {/* Real-time Asia/Kolkata Countdown Centerpiece */}
        <div className="p-8 md:p-10 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-3xl mb-14 shadow-sm flex flex-col items-center justify-center">
          <IstCountdown />
        </div>

        {/* 12-Column Grid: Campus Details vs Interactive Accommodation Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Cols 1-5): Campus Life & Window Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
                <MapPin size={16} /> Campus Location
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#24221E]">
                {TECHFEST_METADATA.venue.institution}
              </h3>
              <p className="text-sm text-[#5C584F] leading-relaxed">
                Situated between Powai Lake and the Sanjay Gandhi National Park in Mumbai, IIT Bombay offers a world-class academic environment, high-tech lecture halls, and secure student residences.
              </p>
              <div className="pt-2 text-xs text-[#7A5B1E] flex items-center gap-2 font-medium">
                <ShieldCheck size={16} className="text-[#1E5E3A]" />
                <span>{TECHFEST_METADATA.venue.entryPolicy}</span>
              </div>
            </div>

            <div className="p-7 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
                <Calendar size={16} /> Stay Window &amp; Duration
              </div>
              <div className="text-sm font-semibold text-[#24221E]">
                {accommodation.duration}
              </div>
              <p className="text-xs text-[#5C584F] leading-relaxed">
                Check-in starts Dec 15 at 6:00 AM IST. Check-out concludes Dec 19 at 10:00 AM IST. First-come, first-served allocation across IIT Bombay student hostels.
              </p>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Interactive Group Stay Calculator */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-[#FAF8F2] border border-[#C6A04A]/60 rounded-3xl shadow-[0_8px_32px_rgba(153,117,45,0.08)] space-y-6">
              <div className="flex items-center justify-between border-b border-[rgba(198,160,74,0.2)] pb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
                    Interactive Fare Calculator
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#24221E]">
                    Group Size &amp; Pricing Estimator
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EEF6F0] text-[#1E5E3A] border border-[#1E5E3A]/20">
                    Hostel Stays Available
                  </span>
                </div>
              </div>

              {/* Slider for Guest Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="group-size-slider" className="text-xs font-bold uppercase tracking-wider text-[#24221E] flex items-center gap-1.5">
                    <Users size={15} className="text-[#99752D]" /> Group Members
                  </label>
                  <span className="font-serif text-2xl font-bold text-[#99752D]">
                    {guests} {guests === 1 ? 'Person' : 'People'}
                  </span>
                </div>

                <input
                  id="group-size-slider"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-lg appearance-none cursor-pointer accent-[#C6A04A]"
                  aria-label="Select number of group members for accommodation"
                />

                <div className="flex justify-between text-[11px] text-[#77736A] font-medium">
                  <span>1 Individual</span>
                  <span>5 (₹150 off/person)</span>
                  <span>13+ (₹300 off/person)</span>
                  <span>20 Max</span>
                </div>
              </div>

              {/* Calculated Price Ledger */}
              <div className="p-5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs text-[#5C584F]">
                  <span>Tier Assessment</span>
                  <span className="font-semibold text-[#7A5B1E]">{quote.tierLabel}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#5C584F]">
                  <span>Rate Per Person</span>
                  <span className="font-serif text-lg font-bold text-[#24221E]">
                    ₹{quote.finalRatePerPerson.toLocaleString('en-IN')}{' '}
                    <span className="text-xs text-[#77736A] font-normal line-through">
                      ₹{quote.originalRatePerPerson.toLocaleString('en-IN')}
                    </span>
                  </span>
                </div>
                <div className="h-[1px] bg-[rgba(198,160,74,0.2)]" />
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#24221E]">
                      Estimated Total (4D / 4N)
                    </div>
                    <div className="text-[11px] text-[#1E5E3A] font-semibold">
                      Total Group Savings: ₹{quote.totalSavings.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="font-serif text-3xl font-bold text-[#99752D]">
                    ₹{quote.totalCost.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Booking CTA & Official Contact */}
              <div className="space-y-4 pt-2">
                <MagneticButton
                  href={accommodation.url}
                  variant="gold-foil"
                  withConfetti={true}
                  className="w-full text-center !text-xs uppercase tracking-wider font-bold !py-3.5"
                >
                  Book Official Accommodation on Techfest.org ↗
                </MagneticButton>

                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#5C584F] gap-2 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#24221E]">Hospitality Office:</span>
                    <a
                      href="tel:+919981146588"
                      className="hover:text-[#99752D] flex items-center gap-1 transition-colors"
                    >
                      <Phone size={12} /> +91 9981146588
                    </a>
                  </div>
                  <a
                    href="mailto:hospitality@techfest.org"
                    className="hover:text-[#99752D] flex items-center gap-1 transition-colors"
                  >
                    <Mail size={12} /> hospitality@techfest.org
                  </a>
                  <a
                    href={accommodation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
                  >
                    <span>Policy Details</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
