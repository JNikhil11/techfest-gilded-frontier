import React from 'react';
import { GoldLightSignature } from './components/canvas/GoldLightSignature';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExploreFestivalSection } from './components/sections/ExploreFestivalSection';
import { CompetitionsSection } from './components/sections/CompetitionsSection';
import { WorkshopsSection } from './components/sections/WorkshopsSection';
import { SummitAndLeadershipSection } from './components/sections/SummitAndLeadershipSection';
import { RobowarsAndExhibitionsSection } from './components/sections/RobowarsAndExhibitionsSection';
import { VenueAndStaySection } from './components/sections/VenueAndStaySection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFEFC] text-[#24221E] selection:bg-[#E6D2A3]/40 selection:text-[#24221E]">
      {/* The Moving Gold-Light Signature Spine */}
      <GoldLightSignature />

      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* Main Editorial Flow */}
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExploreFestivalSection />
        <CompetitionsSection />
        <WorkshopsSection />
        <SummitAndLeadershipSection />
        <RobowarsAndExhibitionsSection />
        <VenueAndStaySection />
        <FinalCtaSection />
      </main>

      {/* Editorial Broadside Footer */}
      <Footer />
    </div>
  );
};

export default App;
