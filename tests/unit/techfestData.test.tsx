import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../../src/App';
import {
  VERIFIED_COMPETITIONS,
  VERIFIED_WORKSHOPS,
  TECHFEST_METADATA,
  SPECIAL_EXPERIENCES_DATA,
} from '../../src/data/techfestData';

describe('Verified Factual Corpus & Data Dictionary Integrity', () => {
  it('contains exactly 12 verified competitions with positive prize pools and valid URLs', () => {
    expect(VERIFIED_COMPETITIONS.length).toBe(12);

    for (const comp of VERIFIED_COMPETITIONS) {
      expect(comp.id).toBeTruthy();
      expect(comp.title).toBeTruthy();
      expect(comp.prizePool).toBeTruthy();
      expect(comp.prizeValueNumeric).toBeGreaterThan(0);
      expect(comp.exploreUrl).toMatch(/^https:\/\/techfest\.org/);
      expect(comp.registerUrl).toMatch(/^https:\/\/techfest\.org/);
      expect(['OPEN', 'CLOSED']).toContain(comp.status);
    }
  });

  it('contains verified Meshmerize & ZeroCode specifications', () => {
    const meshmerize = VERIFIED_COMPETITIONS.find((c) => c.id === 'meshmerize');
    expect(meshmerize).toBeDefined();
    expect(meshmerize?.prizePool).toBe('INR 1,00,000');
    expect(meshmerize?.scoringOrRulesSummary).toContain('Total Score');
    expect(meshmerize?.contactPerson?.name).toBe('Harshil Anjara');

    const zeroCode = VERIFIED_COMPETITIONS.find((c) => c.id === 'zero-code');
    expect(zeroCode).toBeDefined();
    expect(zeroCode?.prizePool).toBe('INR 1,00,000');
    expect(zeroCode?.scoringOrRulesSummary).toContain('Core Feature Completion');
    expect(zeroCode?.contactPerson?.name).toBe('Siddhi Jain');
  });

  it('contains exactly 20 verified workshops with currentPrice < originalPrice', () => {
    expect(VERIFIED_WORKSHOPS.length).toBe(20);

    for (const ws of VERIFIED_WORKSHOPS) {
      expect(ws.id).toBeTruthy();
      expect(ws.title).toBeTruthy();
      expect(ws.currentPriceINR).toBeGreaterThan(0);
      expect(ws.originalPriceINR).toBeGreaterThan(ws.currentPriceINR);
      expect(ws.exploreUrl).toMatch(/^https:\/\/techfest\.org\/workshops/);
    }
  });

  it('verifies metadata dates and venue match 30th Edition at IIT Bombay', () => {
    expect(TECHFEST_METADATA.edition).toBe('30th Edition');
    expect(TECHFEST_METADATA.editionNumber).toBe(30);
    expect(TECHFEST_METADATA.venue.institution).toContain('IIT Bombay');
    expect(TECHFEST_METADATA.dates.finalsDisplay).toBe('December 16–18, 2026');
    expect(SPECIAL_EXPERIENCES_DATA.summit.earlyBirdPriceINR).toBe(999);
    expect(SPECIAL_EXPERIENCES_DATA.accommodation.discountedFeeINR).toBe(3599);
  });
});

describe('Rendered DOM & Anti-Regression Invariant Verification', () => {
  it('renders without pseudo-technical clutter (SYS.ACTIVE, SYSTEM ONLINE, 01 //)', () => {
    const { container } = render(<App />);
    const htmlText = container.textContent || '';

    expect(htmlText).not.toMatch(/\b(SYS\.ACTIVE|SYSTEM ONLINE|SIGNAL \d+%|0[1-9]\s*\/\/\s*[A-Z]+)\b/i);
    expect(htmlText).toContain('The Gilded Frontier');
    expect(htmlText).toContain('Meshmerize');
    expect(htmlText).toContain('ZeroCode');
  });

  it('allows clicking category filters in Competitions without crashing', () => {
    render(<App />);

    const aeroFilterBtn = screen.getByRole('button', { name: /Aerospace & DeepTech/i });
    expect(aeroFilterBtn).toBeInTheDocument();

    fireEvent.click(aeroFilterBtn);
    expect(screen.getByText(/National Aeromodelling Challenge/i)).toBeInTheDocument();
  });

  it('allows switching tracks in Workshops without crashing', () => {
    render(<App />);

    const engFilterBtn = screen.getByRole('button', { name: /Engineering & Robotics/i });
    expect(engFilterBtn).toBeInTheDocument();

    fireEvent.click(engFilterBtn);
    expect(screen.getByText(/IoT using Arduino or Raspberry Pi/i)).toBeInTheDocument();
  });
});
