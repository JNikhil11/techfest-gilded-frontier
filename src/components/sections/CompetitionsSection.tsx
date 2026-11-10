import React, { useState, useMemo } from 'react';
import { VERIFIED_COMPETITIONS, CompetitionItem } from '../../data/techfestData';
import { MagneticButton } from '../ui/MagneticButton';
import { Search, ChevronDown, ChevronUp, ExternalLink, Bot, Sparkles, Phone, Mail } from 'lucide-react';

type DomainCategory =
  | 'ALL'
  | 'Robotics & Hardware'
  | 'AI & Software Agents'
  | 'Aerospace & DeepTech'
  | 'Quant, Coding & Sustainability';

type StatusFilter = 'ALL' | 'OPEN' | 'CLOSED';

export const CompetitionsSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainCategory>('ALL');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredCompetitions = useMemo(() => {
    return VERIFIED_COMPETITIONS.filter((comp) => {
      const matchDomain = selectedDomain === 'ALL' || comp.category === selectedDomain;
      const matchStatus = statusFilter === 'ALL' || comp.status === statusFilter;
      const matchSearch =
        searchQuery === '' ||
        comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDomain && matchStatus && matchSearch;
    });
  }, [selectedDomain, statusFilter, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const meshmerize = VERIFIED_COMPETITIONS.find((c) => c.id === 'meshmerize');
  const zeroCode = VERIFIED_COMPETITIONS.find((c) => c.id === 'zero-code');

  return (
    <section id="competitions" className="py-24 bg-[#FAF8F2] border-t border-[rgba(198,160,74,0.22)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-eyebrow">
            Official Competitions &amp; Challenges
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            High-Stakes Arenas of Autonomous Engineering.
          </h2>
          <p className="text-lead text-[#5C584F]">
            Compete across city zonals and the Powai Grand Finale for over ₹35+ Lakhs in cumulative national prize pools and government deep-tech grants.
          </p>
        </div>

        {/* TIER 1: DUAL FLAGSHIP SPOTLIGHTS (Meshmerize & ZeroCode) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Spotlight 1: Meshmerize */}
          {meshmerize && (
            <div className="p-8 md:p-10 bg-[#FFFEFC] border border-[#C6A04A]/60 rounded-3xl shadow-[0_8px_32px_rgba(153,117,45,0.08)] relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E6D2A3]/30 to-transparent pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF6F0] border border-[#1E5E3A]/30 text-[#1E5E3A] text-xs font-bold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-[#1E5E3A] animate-pulse" />
                    Live Registration Open
                  </div>
                  <div className="font-serif text-3xl font-bold text-[#99752D]">
                    {meshmerize.prizePool}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7A5B1E] flex items-center gap-1.5">
                    <Bot size={15} /> Autonomous Robotics Flagship
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-[#24221E]">
                    {meshmerize.title}
                  </h3>
                  <p className="text-sm text-[#5C584F] leading-relaxed">
                    {meshmerize.shortSummary}
                  </p>
                </div>

                {/* Mathematical Scoring Box */}
                <div className="p-4 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-xl space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A5B1E]">
                    Deterministic Scoring Equation
                  </div>
                  <code className="block text-xs font-mono text-[#24221E] font-semibold break-words">
                    Score = 25·N_cp + 30_dry + (180 - t_dry) + 30_short + 5_led + (150 - t_actual) - Penalties
                  </code>
                </div>

                {/* Coordinator Direct Contact */}
                {meshmerize.contactPerson && (
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C584F] pt-1">
                    <span className="font-semibold text-[#24221E]">
                      Lead: {meshmerize.contactPerson.name}
                    </span>
                    <a
                      href={`tel:${meshmerize.contactPerson.phone}`}
                      className="hover:text-[#99752D] flex items-center gap-1 transition-colors"
                    >
                      <Phone size={12} /> {meshmerize.contactPerson.phone}
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-6 flex items-center gap-4">
                <MagneticButton
                  href={meshmerize.registerUrl}
                  variant="gold-foil"
                  withConfetti={true}
                  className="!text-xs uppercase tracking-wider font-bold !px-6 !py-3.5"
                >
                  Register on Techfest.org ↗
                </MagneticButton>
                <a
                  href={meshmerize.exploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
                >
                  <span>Detailed Rules</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          )}

          {/* Spotlight 2: ZeroCode */}
          {zeroCode && (
            <div className="p-8 md:p-10 bg-[#FFFEFC] border border-[#C6A04A]/60 rounded-3xl shadow-[0_8px_32px_rgba(153,117,45,0.08)] relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E6D2A3]/30 to-transparent pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF6F0] border border-[#1E5E3A]/30 text-[#1E5E3A] text-xs font-bold uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-[#1E5E3A] animate-pulse" />
                    Live Registration Open
                  </div>
                  <div className="font-serif text-3xl font-bold text-[#99752D]">
                    {zeroCode.prizePool}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#7A5B1E] flex items-center gap-1.5">
                    <Sparkles size={15} /> Prompt Engineering &amp; AI Studio
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-[#24221E]">
                    {zeroCode.title}
                  </h3>
                  <p className="text-sm text-[#5C584F] leading-relaxed">
                    {zeroCode.shortSummary}
                  </p>
                </div>

                {/* Scoring Rubric Box */}
                <div className="p-4 bg-[#FAF8F2] border border-[rgba(198,160,74,0.3)] rounded-xl space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A5B1E]">
                    70-Minute Build Rubric (Gemini Flash)
                  </div>
                  <div className="text-xs text-[#24221E] font-medium">
                    Features (50 pts) + Interactivity (15 pts) + Clarity (15 pts) + Stability (10 pts) + Creativity (10 pts)
                  </div>
                </div>

                {/* Coordinator Direct Contact */}
                {zeroCode.contactPerson && (
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C584F] pt-1">
                    <span className="font-semibold text-[#24221E]">
                      Lead: {zeroCode.contactPerson.name}
                    </span>
                    <a
                      href={`mailto:${zeroCode.contactPerson.email}`}
                      className="hover:text-[#99752D] flex items-center gap-1 transition-colors"
                    >
                      <Mail size={12} /> {zeroCode.contactPerson.email}
                    </a>
                    <a
                      href={`tel:${zeroCode.contactPerson.phone}`}
                      className="hover:text-[#99752D] flex items-center gap-1 transition-colors"
                    >
                      <Phone size={12} /> {zeroCode.contactPerson.phone}
                    </a>
                  </div>
                )}
              </div>

              <div className="pt-6 flex items-center gap-4">
                <MagneticButton
                  href={zeroCode.registerUrl}
                  variant="gold-foil"
                  withConfetti={true}
                  className="!text-xs uppercase tracking-wider font-bold !px-6 !py-3.5"
                >
                  Register on Techfest.org ↗
                </MagneticButton>
                <a
                  href={zeroCode.exploreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
                >
                  <span>Detailed Rules</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* TIER 2: INTERACTIVE FILTER CONTROLS & COMPETITION LEDGER */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(198,160,74,0.2)]">
            {/* Domain Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {(
                [
                  'ALL',
                  'Robotics & Hardware',
                  'AI & Software Agents',
                  'Aerospace & DeepTech',
                  'Quant, Coding & Sustainability',
                ] as DomainCategory[]
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedDomain(cat)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all ${
                    selectedDomain === cat
                      ? 'bg-[#24221E] text-[#FFFDF7] border-[#24221E]'
                      : 'bg-[#FFFEFC] text-[#5C584F] border-[rgba(198,160,74,0.3)] hover:border-[#C6A04A]'
                  }`}
                >
                  {cat === 'ALL' ? 'All Domains (12)' : cat}
                </button>
              ))}
            </div>

            {/* Status & Search */}
            <div className="flex items-center gap-3">
              <select
                aria-label="Filter by registration status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                className="text-xs font-medium bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-lg px-3 py-2 text-[#24221E] focus:outline-none focus:border-[#C6A04A]"
              >
                <option value="ALL">All Statuses</option>
                <option value="OPEN">Live Registration Open</option>
                <option value="CLOSED">Archived / Closed</option>
              </select>

              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#77736A]" />
                <input
                  type="text"
                  placeholder="Search challenges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-[#FFFEFC] border border-[rgba(198,160,74,0.3)] rounded-lg text-[#24221E] focus:outline-none focus:border-[#C6A04A] w-40 md:w-52"
                />
              </div>
            </div>
          </div>

          {/* Ledger Table / Rows */}
          <div className="space-y-3">
            {filteredCompetitions.map((comp: CompetitionItem) => {
              const isExpanded = expandedId === comp.id;
              const isOpen = comp.status === 'OPEN';

              return (
                <div
                  key={comp.id}
                  className="bg-[#FFFEFC] border border-[rgba(198,160,74,0.22)] rounded-2xl overflow-hidden hover:border-[#C6A04A] transition-colors"
                >
                  <div
                    onClick={() => toggleExpand(comp.id)}
                    className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-1 md:max-w-xl">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            isOpen
                              ? 'bg-[#EEF6F0] text-[#1E5E3A] border border-[#1E5E3A]/20'
                              : 'bg-[#F3F0EA] text-[#6E685F] border border-[#6E685F]/20'
                          }`}
                        >
                          {isOpen ? 'Registration Open' : 'Closed / Evaluation'}
                        </span>
                        <span className="text-xs text-[#7A5B1E] font-medium">
                          {comp.category}
                        </span>
                      </div>
                      <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#24221E]">
                        {comp.title}
                      </h4>
                      <p className="text-xs text-[#5C584F] line-clamp-1">
                        {comp.shortSummary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6">
                      <div className="text-right">
                        <div className="text-[10px] text-[#77736A] uppercase font-semibold">
                          Prize Pool
                        </div>
                        <div className="font-serif text-xl font-bold text-[#99752D]">
                          {comp.prizePool}
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#FAF8F2] text-[#7A5B1E]">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Technical Brief Drawer */}
                  {isExpanded && (
                    <div className="px-5 md:px-6 pb-6 pt-2 border-t border-[rgba(198,160,74,0.15)] bg-[#FAF8F2]/50 space-y-4">
                      <div>
                        <div className="text-xs font-bold text-[#7A5B1E] uppercase tracking-wider mb-2">
                          Technical Guidelines &amp; Format
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#5C584F]">
                          {comp.technicalHighlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A04A] mt-1.5 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <MagneticButton
                          href={comp.registerUrl}
                          variant="gold-foil"
                          withConfetti={true}
                          className="!text-xs uppercase tracking-wider font-bold !px-5 !py-2.5"
                        >
                          {isOpen ? 'Register on Techfest.org ↗' : 'View Official Archive ↗'}
                        </MagneticButton>

                        <a
                          href={comp.exploreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
                        >
                          <span>Explore Problem Statement</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

