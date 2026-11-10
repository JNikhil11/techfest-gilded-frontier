import React from 'react';
import { ExternalLink, Award, Globe, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#FAF8F2] border-t border-[rgba(198,160,74,0.22)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1-5, Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="text-eyebrow">
              The Institutional Legacy • Since 1998
            </div>

            <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
              Thirty Editions of Defining India&apos;s Scientific Horizon.
            </h2>

            <p className="text-base text-[#5C584F] leading-relaxed">
              Founded in 1998 by the student fraternity at the Indian Institute of Technology Bombay, Techfest has grown into Asia&apos;s preeminent scientific gathering. Over three decades, it has served as an autonomous launchpad for breakthrough technology, international diplomacy, and student-driven engineering marvels.
            </p>

            <div className="pt-2">
              <a
                href="https://techfest.org/ignite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5B1E] hover:text-[#24221E] px-4 py-2.5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-full transition-all hover:border-[#C6A04A]"
              >
                <span>Learn About Campus Accreditation (Ignite)</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Official Institutional Seal Framing */}
            <div className="p-5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl shadow-sm flex items-center gap-4">
              <img
                src="/iitb-logo.png"
                alt="IIT Bombay Seal"
                className="h-12 w-auto object-contain"
                width={48}
                height={48}
              />
              <div className="text-xs">
                <div className="font-bold text-[#24221E] uppercase tracking-wide">
                  Indian Institute of Technology Bombay
                </div>
                <div className="text-[#7A5B1E] font-medium">
                  Autonomous National Institute of Eminence • Powai, Mumbai
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12, Editorial Story Cards) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Story Panel 1: Innovation Ecosystem */}
            <div className="p-8 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl shadow-sm space-y-4 hover:border-[#C6A04A] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#C6A04A]/40 flex items-center justify-center text-[#7A5B1E]">
                <Cpu size={20} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#24221E]">
                National Deep-Tech Problem Statements
              </h3>
              <p className="text-sm text-[#5C584F] leading-relaxed">
                Techfest partners directly with premier government ministries and industry consortia—including the Ministry of Electronics and Information Technology (MeitY), the Ministry of Heavy Industries, and ICAT. Challenges range from ₹25.5 Lakh cycloidal rotor propulsion grants to open-source LLM clinical safety on IIT Bombay&apos;s indigenous AyurParam model.
              </p>
              <div className="text-xs font-semibold text-[#7A5B1E] tracking-wider uppercase">
                Govt. Grants • Indigenous AI • Aerospace R&amp;D
              </div>
            </div>

            {/* Story Panel 2: Global Reach & City Zonals */}
            <div className="p-8 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl shadow-sm space-y-4 hover:border-[#C6A04A] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#C6A04A]/40 flex items-center justify-center text-[#7A5B1E]">
                <Globe size={20} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#24221E]">
                From City Zonals to the Powai Grand Finale
              </h3>
              <p className="text-sm text-[#5C584F] leading-relaxed">
                Every year, student innovators compete in multi-city Zonal Qualifiers across India. Top-ranking teams earn all-expense paid invitations to the Grand Finale inside the verdant 550-acre IIT Bombay campus, competing alongside international champions from 20+ participating nations.
              </p>
              <div className="text-xs font-semibold text-[#7A5B1E] tracking-wider uppercase">
                20+ Participating Nations • 35,000+ Competitors
              </div>
            </div>

            {/* Story Panel 3: Institutional Luminaries & Heritage */}
            <div className="p-8 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl shadow-sm space-y-4 hover:border-[#C6A04A] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F2] border border-[#C6A04A]/40 flex items-center justify-center text-[#7A5B1E]">
                <Award size={20} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#24221E]">
                Three Decades of Global Thought Leadership
              </h3>
              <p className="text-sm text-[#5C584F] leading-relaxed">
                Techfest has welcomed some of humanity&apos;s greatest minds to IIT Bombay&apos;s Convocation Hall: Bharat Ratna Dr. A.P.J. Abdul Kalam, Wing Commander Rakesh Sharma (India&apos;s first astronaut), Nobel laureates in Physics and Chemistry, and ISRO leadership during landmark Chandrayaan missions.
              </p>
              <div className="text-xs font-semibold text-[#7A5B1E] tracking-wider uppercase">
                Nobel Laureates • Space Pioneers • World Leaders
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

