import React from 'react';
import { TECHFEST_METADATA, SPECIAL_EXPERIENCES_DATA } from '../../data/techfestData';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#FAF8F2] border-t border-[rgba(198,160,74,0.3)] pt-16 pb-12 text-[#24221E] overflow-hidden">
      {/* Decorative Top Specular Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C6A04A] to-transparent opacity-60" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[rgba(198,160,74,0.2)]">
          {/* Col 1 & 2: Brand & Institution */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex flex-wrap items-center gap-3.5">
              <img
                src="/iitb-logo.png"
                alt="IIT Bombay Logo"
                className="h-14 w-auto object-contain"
                width={56}
                height={56}
              />
              <div className="h-10 w-[1px] bg-[rgba(198,160,74,0.35)]" />
              <div className="px-3 py-1.5 bg-[#24221E] rounded-lg border border-[rgba(198,160,74,0.35)] shadow-xs">
                <img
                  src="/techfest-logo.png"
                  alt="Techfest Official Logo"
                  className="h-6 w-auto object-contain"
                  width={120}
                  height={24}
                />
              </div>
            </div>

            <p className="text-sm text-[#5C584F] leading-relaxed max-w-md">
              Techfest is Asia&apos;s Largest Science and Technology Festival, uniting 1,80,000+ visitors, 35,000+ competitors, and global technology pioneers at IIT Bombay in Powai, Mumbai.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#7A5B1E] font-medium">
              <MapPin size={15} className="shrink-0 text-[#99752D]" />
              <span>IIT Bombay Campus, Powai, Mumbai, Maharashtra 400076, India</span>
            </div>

            <div className="pt-2">
              <div className="inline-block px-3 py-1.5 bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-lg text-xs font-semibold text-[#7A5B1E]">
                {TECHFEST_METADATA.venue.entryPolicy}
              </div>
            </div>
          </div>

          {/* Col 3: Programme Pillars */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A5B1E]">
              Festival Pillars
            </h4>
            <ul className="space-y-2.5 text-sm text-[#5C584F]">
              <li>
                <a
                  href="https://techfest.org/competitions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Competitions</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/workshops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>IITB Workshops</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/summit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>International Summit</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/robowars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Robowars Arena</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/twmun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Techfest World MUN</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/ignite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Ignite Technical Alliance</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visitor & Campus Access */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A5B1E]">
              Visitor &amp; Hospitality
            </h4>
            <ul className="space-y-2.5 text-sm text-[#5C584F]">
              <li>
                <a
                  href="https://techfest.org/accommodation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Campus Accommodation</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://ca.techfest.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Campus Ambassador Portal</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/contactus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24221E] transition-colors flex items-center justify-between group"
                >
                  <span>Contact Techfest Team</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#24221E] transition-colors"
                >
                  About the 30th Edition
                </a>
              </li>
              <li>
                <a
                  href="#competitions"
                  className="hover:text-[#24221E] transition-colors"
                >
                  Flagship Challenges
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Official Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A5B1E]">
              Official Coordinators
            </h4>
            <div className="space-y-3 text-xs text-[#5C584F]">
              <div>
                <div className="font-semibold text-[#24221E]">Workshops &amp; Training</div>
                <div>Aryan Tamboli • Aditya Jaswani</div>
                <div className="flex items-center gap-1 text-[#7A5B1E] mt-0.5">
                  <Phone size={11} /> +91 9702276874 / 9131765512
                </div>
              </div>

              <div>
                <div className="font-semibold text-[#24221E]">Hospitality &amp; Stay</div>
                <div>Ashutosh Agrawal • Vishesh Srivastava</div>
                <div className="flex items-center gap-1 text-[#7A5B1E] mt-0.5">
                  <Mail size={11} /> hospitality@techfest.org
                </div>
              </div>

              <div>
                <div className="font-semibold text-[#24221E]">Competitions Desk</div>
                <div>Harshil Anjara (Meshmerize)</div>
                <div className="flex items-center gap-1 text-[#7A5B1E] mt-0.5">
                  <Phone size={11} /> +91 9726797878
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#77736A]">
          <div>
            &copy; 1998–2026 Techfest, IIT Bombay. All rights reserved. 30th Edition Official Experience.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={SPECIAL_EXPERIENCES_DATA.officialLinks.home}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#24221E] transition-colors"
            >
              techfest.org
            </a>
            <span>•</span>
            <a
              href="https://ca.techfest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#24221E] transition-colors"
            >
              ca.techfest.org
            </a>
            <span>•</span>
            <a
              href="https://techfest.org/contactus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#24221E] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

