import { describe, it, expect } from 'vitest';
import { calculateIstCountdown, IST_FINALE_START_MS, IST_FINALE_END_MS } from '../../src/utils/istTime';

describe('Asia/Kolkata IST Countdown Engine', () => {
  it('returns UPCOMING with positive days when current timestamp is before Dec 16, 2026', () => {
    // Nov 10, 2026
    const mockNow = Date.parse('2026-11-10T12:00:00+05:30');
    const result = calculateIstCountdown(mockNow);

    expect(result.status).toBe('UPCOMING');
    expect(result.days).toBeGreaterThan(0);
    expect(result.hours).toBeGreaterThanOrEqual(0);
    expect(result.minutes).toBeGreaterThanOrEqual(0);
    expect(result.seconds).toBeGreaterThanOrEqual(0);
    expect(result.formattedIstTarget).toContain('December 16, 2026');
  });

  it('calculates exact countdown 1 hour before Grand Finale opening day', () => {
    const oneHourBefore = IST_FINALE_START_MS - 3600 * 1000;
    const result = calculateIstCountdown(oneHourBefore);

    expect(result.status).toBe('UPCOMING');
    expect(result.days).toBe(0);
    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it('returns LIVE during festival dates (Dec 16 to Dec 18 IST)', () => {
    // Dec 17, 2026 14:00 IST
    const mockLive = Date.parse('2026-12-17T14:00:00+05:30');
    const result = calculateIstCountdown(mockLive);

    expect(result.status).toBe('LIVE');
    expect(result.days).toBe(0);
  });

  it('returns CONCLUDED after Dec 18, 2026 23:59:59 IST', () => {
    const mockConcluded = IST_FINALE_END_MS + 1000;
    const result = calculateIstCountdown(mockConcluded);

    expect(result.status).toBe('CONCLUDED');
    expect(result.days).toBe(0);
  });
});
