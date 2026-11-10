import React, { useEffect, useState } from 'react';
import { calculateIstCountdown, IstCountdownResult } from '../../utils/istTime';

export const IstCountdown: React.FC = () => {
  const [countdown, setCountdown] = useState<IstCountdownResult>(() => calculateIstCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateIstCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (countdown.status === 'LIVE') {
    return (
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#EEF6F0] border border-[#1E5E3A]/30 rounded-full shadow-sm">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E5E3A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1E5E3A]"></span>
        </span>
        <span className="font-sans font-semibold text-sm tracking-wider text-[#1E5E3A] uppercase">
          Techfest 30th Edition is Live Now at IIT Bombay
        </span>
      </div>
    );
  }

  if (countdown.status === 'CONCLUDED') {
    return (
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FAF8F2] border border-[#C6A04A]/30 rounded-full">
        <span className="font-sans font-medium text-sm tracking-wider text-[#5C584F] uppercase">
          Techfest 2026–27 Concluded • Explore Archives &amp; Highlights
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-eyebrow mb-3 text-center">
        Countdown to Opening Day at IIT Bombay (Asia/Kolkata)
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-6 text-center">
        <div className="flex flex-col items-center px-3 py-2.5 md:px-5 md:py-3.5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-xl shadow-[0_4px_12px_rgba(36,34,30,0.03)] min-w-[70px] md:min-w-[90px]">
          <span className="font-serif text-2xl md:text-4xl font-semibold text-[#24221E] tabular-nums">
            {String(countdown.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-[#7A5B1E] uppercase tracking-widest mt-1">
            Days
          </span>
        </div>

        <div className="flex flex-col items-center px-3 py-2.5 md:px-5 md:py-3.5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-xl shadow-[0_4px_12px_rgba(36,34,30,0.03)] min-w-[70px] md:min-w-[90px]">
          <span className="font-serif text-2xl md:text-4xl font-semibold text-[#24221E] tabular-nums">
            {String(countdown.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-[#7A5B1E] uppercase tracking-widest mt-1">
            Hours
          </span>
        </div>

        <div className="flex flex-col items-center px-3 py-2.5 md:px-5 md:py-3.5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-xl shadow-[0_4px_12px_rgba(36,34,30,0.03)] min-w-[70px] md:min-w-[90px]">
          <span className="font-serif text-2xl md:text-4xl font-semibold text-[#24221E] tabular-nums">
            {String(countdown.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-[#7A5B1E] uppercase tracking-widest mt-1">
            Minutes
          </span>
        </div>

        <div className="flex flex-col items-center px-3 py-2.5 md:px-5 md:py-3.5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-xl shadow-[0_4px_12px_rgba(36,34,30,0.03)] min-w-[70px] md:min-w-[90px]">
          <span className="font-serif text-2xl md:text-4xl font-semibold text-[#99752D] tabular-nums">
            {String(countdown.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-semibold text-[#7A5B1E] uppercase tracking-widest mt-1">
            Seconds
          </span>
        </div>
      </div>
      <div className="text-[11px] text-[#77736A] mt-2 font-sans tracking-wide">
        Asia/Kolkata (IST • UTC+05:30) • December 16–18, 2026
      </div>
    </div>
  );
};
