import React, { useState } from 'react';
import { SPECIAL_EXPERIENCES_DATA } from '../../data/techfestData';
import { MagneticButton } from '../ui/MagneticButton';
import { Swords, ShieldAlert, Users, Zap, ExternalLink } from 'lucide-react';

interface WeightClassSpec {
  weight: string;
  categoryName: string;
  dimensions: string;
  weaponSpeed: string;
  arenaRules: string;
  suitableFor: string;
}

const ROBOWARS_SPECS: Record<string, WeightClassSpec> = {
  '8 KGS': {
    weight: '8 KGS (Featherweight)',
    categoryName: 'High-Agility Kinetic Class',
    dimensions: 'Max 450mm x 450mm x 450mm',
    weaponSpeed: 'Up to 6,000 RPM Bar / Drum Spinners',
    arenaRules: '3-Minute Combat Rounds • Pit Hazards Active',
    suitableFor: 'Collegiate engineering teams & nimble kinetic flippers.',
  },
  '15 KGS': {
    weight: '15 KGS (Middleweight Class)',
    categoryName: 'Reinforced Armor & Pneumatics',
    dimensions: 'Max 600mm x 600mm x 600mm',
    weaponSpeed: 'Up to 8,000 RPM Hardened Steel Discs',
    arenaRules: 'Double Elimination • Bulletproof Polycarbonate Enclosure',
    suitableFor: 'Precision pneumatic launchers and hardened vertical discs.',
  },
  '30 KGS': {
    weight: '30 KGS (Heavyweight Contender)',
    categoryName: 'National Championship Division',
    dimensions: 'Max 800mm x 800mm x 800mm',
    weaponSpeed: 'Over 10,000 RPM Kinetic Energy Storage',
    arenaRules: 'Full Arena Kinetic Traps • Pushout Zones',
    suitableFor: 'Experienced combat roboticists with destructive kinetic drums.',
  },
  '60 KGS': {
    weight: '60 KGS (Super Heavyweight Apex)',
    categoryName: 'International Clash of Titans',
    dimensions: 'Max 1000mm x 1000mm x 1000mm',
    weaponSpeed: 'Industrial Hydraulic & Combustion Kinetic Weapons',
    arenaRules: 'Reinforced Multi-Layer Steel & Bulletproof Glass Arena',
    suitableFor: 'International combat champions and maximum-energy kinetic crushers.',
  },
};

export const RobowarsAndExhibitionsSection: React.FC = () => {
  const [selectedWeight, setSelectedWeight] = useState<string>('30 KGS');
  const spec = ROBOWARS_SPECS[selectedWeight];
  const { robowars } = SPECIAL_EXPERIENCES_DATA;

  return (
    <section id="experiences" className="py-24 bg-[#F5F0E4] border-t border-[rgba(198,160,74,0.3)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-eyebrow">
            Kinetic Spectacle &amp; Living Exhibitions
          </div>
          <h2 className="text-h1 font-serif text-[#24221E] tracking-tight">
            International Robowars Arena.
          </h2>
          <p className="text-lead text-[#5C584F]">
            India&apos;s most celebrated combat robotics championship. Armored kinetic machines clash before 20,000+ roaring spectators inside a reinforced bulletproof battleground.
          </p>
        </div>

        {/* Interactive Weight Category Showcase */}
        <div className="p-8 md:p-12 bg-[#FFFEFC] border border-[rgba(198,160,74,0.35)] rounded-3xl shadow-[0_12px_40px_rgba(36,34,30,0.06)] mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[rgba(198,160,74,0.2)]">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B1E] flex items-center gap-1.5 mb-1">
                <Swords size={16} /> Select Weight Category
              </div>
              <h3 className="font-serif text-3xl font-semibold text-[#24221E]">
                Combat Specifications &amp; Armor Rules
              </h3>
            </div>

            {/* Weight Class Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {robowars.weightCategories.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setSelectedWeight(w)}
                  className={`text-xs md:text-sm font-bold px-4 py-2.5 rounded-full border transition-all ${
                    selectedWeight === w
                      ? 'bg-[#7A5B1E] text-[#FFFDF7] border-[#7A5B1E] shadow-sm'
                      : 'bg-[#FAF8F2] text-[#5C584F] border-[rgba(198,160,74,0.3)] hover:border-[#C6A04A]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Spec Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A5B1E] flex items-center gap-1">
                <ShieldAlert size={13} /> Class Division
              </div>
              <div className="font-serif text-xl font-bold text-[#24221E]">{spec.weight}</div>
              <div className="text-xs text-[#5C584F]">{spec.categoryName}</div>
            </div>

            <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A5B1E] flex items-center gap-1">
                <Zap size={13} /> Weapon &amp; RPM Standard
              </div>
              <div className="font-serif text-xl font-bold text-[#24221E]">{spec.weaponSpeed}</div>
              <div className="text-xs text-[#5C584F]">Kinetic energy storage rating</div>
            </div>

            <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A5B1E] flex items-center gap-1">
                <Users size={13} /> Arena Environment
              </div>
              <div className="font-serif text-xl font-bold text-[#24221E]">{spec.dimensions}</div>
              <div className="text-xs text-[#5C584F]">{spec.arenaRules}</div>
            </div>

            <div className="p-5 bg-[#FAF8F2] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A5B1E]">
                Audience Scale
              </div>
              <div className="font-serif text-xl font-bold text-[#99752D]">
                {robowars.spectators}
              </div>
              <div className="text-xs text-[#5C584F]">Live arena matches at Gymkhana</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(198,160,74,0.2)] mt-8">
            <div className="text-xs text-[#5C584F]">
              <span className="font-semibold text-[#24221E]">Robowars Manager:</span> Om Umekar (
              <a href="mailto:om.umekar@techfest.org" className="hover:text-[#99752D] underline">
                om.umekar@techfest.org
              </a>
              )
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton
                href={robowars.url}
                variant="gold-foil"
                withConfetti={true}
                className="!text-xs uppercase tracking-wider font-bold !px-6 !py-3"
              >
                Register Combat Team ↗
              </MagneticButton>
              <a
                href={robowars.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#7A5B1E] hover:text-[#24221E] flex items-center gap-1"
              >
                <span>Arena Safety Rules</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Exhibitions & Evening Cultural Shows Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
              Exhibitions
            </div>
            <h4 className="font-serif text-2xl font-semibold text-[#24221E]">
              International Full Throttle
            </h4>
            <p className="text-xs text-[#5C584F] leading-relaxed">
              RC nitro buggy off-road racing championship featuring dirt jumps, hairpin banking, and telemetry speed runs.
            </p>
          </div>

          <div className="p-6 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
              Robotics
            </div>
            <h4 className="font-serif text-2xl font-semibold text-[#24221E]">
              International Micromouse
            </h4>
            <p className="text-xs text-[#5C584F] leading-relaxed">
              Sub-second autonomous maze-solving robots executing flood-fill algorithms with extreme centrifugal acceleration.
            </p>
          </div>

          <div className="p-6 bg-[#FFFEFC] border border-[rgba(198,160,74,0.25)] rounded-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7A5B1E]">
              Cultural Atmosphere
            </div>
            <h4 className="font-serif text-2xl font-semibold text-[#24221E]">
              Technoholix &amp; EDM Night
            </h4>
            <p className="text-xs text-[#5C584F] leading-relaxed">
              Massive evening productions featuring synchronized laser choreographies and international headline EDM artists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
