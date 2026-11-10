import { describe, it, expect } from 'vitest';
import {
  calculateAccommodationQuote,
  BASE_ACCOMMODATION_RATE,
  ORIGINAL_ACCOMMODATION_RATE,
} from '../../src/utils/accommodationMath';

describe('Accommodation Math & Group Discount Tiers', () => {
  it('applies standard base rate for 1 to 4 individuals (no extra group discount)', () => {
    const single = calculateAccommodationQuote(1);
    expect(single.guests).toBe(1);
    expect(single.finalRatePerPerson).toBe(BASE_ACCOMMODATION_RATE);
    expect(single.totalCost).toBe(BASE_ACCOMMODATION_RATE);
    expect(single.discountPerPerson).toBe(0);

    const group4 = calculateAccommodationQuote(4);
    expect(group4.guests).toBe(4);
    expect(group4.finalRatePerPerson).toBe(BASE_ACCOMMODATION_RATE);
    expect(group4.totalCost).toBe(4 * BASE_ACCOMMODATION_RATE);
    expect(group4.discountPerPerson).toBe(0);
  });

  it('applies Flat ₹150 off per person for groups of 5 to 12 people', () => {
    const group5 = calculateAccommodationQuote(5);
    expect(group5.guests).toBe(5);
    expect(group5.discountPerPerson).toBe(150);
    expect(group5.finalRatePerPerson).toBe(BASE_ACCOMMODATION_RATE - 150);
    expect(group5.totalCost).toBe(5 * (BASE_ACCOMMODATION_RATE - 150));
    expect(group5.tierLabel).toContain('> 4 persons');

    const group12 = calculateAccommodationQuote(12);
    expect(group12.discountPerPerson).toBe(150);
  });

  it('applies Flat ₹300 off per person for groups of 13 to 20 people', () => {
    const group13 = calculateAccommodationQuote(13);
    expect(group13.guests).toBe(13);
    expect(group13.discountPerPerson).toBe(300);
    expect(group13.finalRatePerPerson).toBe(BASE_ACCOMMODATION_RATE - 300);
    expect(group13.totalCost).toBe(13 * (BASE_ACCOMMODATION_RATE - 300));
    expect(group13.tierLabel).toContain('> 12 persons');
  });

  it('clamps input values to [1, 20]', () => {
    const negative = calculateAccommodationQuote(-5);
    expect(negative.guests).toBe(1);

    const overflow = calculateAccommodationQuote(50);
    expect(overflow.guests).toBe(20);
    expect(overflow.discountPerPerson).toBe(300);
  });

  it('correctly calculates total savings against original ₹4,499 rate', () => {
    const quote = calculateAccommodationQuote(10);
    const expectedSavings = 10 * (ORIGINAL_ACCOMMODATION_RATE - (BASE_ACCOMMODATION_RATE - 150));
    expect(quote.totalSavings).toBe(expectedSavings);
  });
});
