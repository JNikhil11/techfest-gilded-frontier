import React, { useState } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { Menu, X, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Explore', href: '#explore' },
    { label: 'Competitions', href: '#competitions' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Summit & MUN', href: '#summit' },
    { label: 'Robowars & Stay', href: '#experiences' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-[rgba(255,254,252,0.88)] backdrop-blur-md border-b border-[rgba(198,160,74,0.22)] transition-all">
      <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Lockup: IITB Crest + Techfest Official Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#C6A04A]"
          aria-label="Techfest, IIT Bombay — Home"
        >
          <img
            src="/iitb-logo.png"
            alt="IIT Bombay Crest"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            width={40}
            height={40}
          />
          <div className="h-6 w-[1px] bg-[rgba(198,160,74,0.3)] hidden sm:block" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-bold text-base tracking-wider text-[#24221E] group-hover:text-[#99752D] transition-colors">
                TECHFEST
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#FAF8F2] border border-[#C6A04A]/40 rounded text-[#7A5B1E]">
                30TH
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-[#7A5B1E] uppercase font-semibold">
              IIT Bombay • 2026–27
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#5C584F] hover:text-[#24221E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C6A04A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop Action Group */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://ca.techfest.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wider uppercase text-[#7A5B1E] hover:text-[#24221E] px-3 py-2 rounded transition-colors flex items-center gap-1"
          >
            CA Portal <ExternalLink size={12} className="opacity-70" />
          </a>
          <MagneticButton
            href="https://techfest.org/competitions"
            variant="gold-foil"
            withConfetti={true}
            className="!px-5 !py-2.5 !text-xs uppercase tracking-wider font-bold"
          >
            Register for 2026 ↗
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#24221E] hover:bg-[#FAF8F2] transition-colors focus-visible:outline-2 focus-visible:outline-[#C6A04A]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFEFC] border-b border-[rgba(198,160,74,0.3)] shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[rgba(198,160,74,0.15)]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#24221E] hover:text-[#99752D] py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://ca.techfest.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wider uppercase text-[#7A5B1E] py-2 flex items-center justify-between"
              >
                <span>Campus Ambassador Portal</span>
                <ExternalLink size={14} />
              </a>
              <MagneticButton
                href="https://techfest.org/competitions"
                variant="gold-foil"
                withConfetti={true}
                className="w-full text-center py-3 text-xs uppercase tracking-wider font-bold"
              >
                Register for 2026 ↗
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
