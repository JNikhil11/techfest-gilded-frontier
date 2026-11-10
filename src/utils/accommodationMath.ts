export interface AccommodationQuote {
  guests: number;
  baseRatePerPerson: number;
  originalRatePerPerson: number;
  discountPerPerson: number;
  finalRatePerPerson: number;
  totalCost: number;
  totalSavings: number;
  tierLabel: string;
}

export const BASE_ACCOMMODATION_RATE = 3599;
export const ORIGINAL_ACCOMMODATION_RATE = 4499;

/**
 * Computes official Techfest accommodation quote based on verified group rules:
 * - 1 to 4 persons: ₹3,599 / person
 * - 5 to 12 persons: Flat ₹150 off per person (₹3,449 / person)
 * - 13 to 20 persons: Flat ₹300 off per person (₹3,299 / person)
 * - Min group size: 1, Max group size: 20
 */
export function calculateAccommodationQuote(guestsInput: number): AccommodationQuote {
  const guests = Math.max(1, Math.min(20, Math.round(guestsInput || 1)));

  let discountPerPerson = 0;
  let tierLabel = "Standard Delegate Rate";

  if (guests >= 13) {
    discountPerPerson = 300;
    tierLabel = "Mega Group Tier (> 12 persons: ₹300 off/person)";
  } else if (guests >= 5) {
    discountPerPerson = 150;
    tierLabel = "Group Advantage Tier (> 4 persons: ₹150 off/person)";
  }

  const finalRatePerPerson = BASE_ACCOMMODATION_RATE - discountPerPerson;
  const totalCost = guests * finalRatePerPerson;
  const totalSavings = guests * (ORIGINAL_ACCOMMODATION_RATE - finalRatePerPerson);

  return {
    guests,
    baseRatePerPerson: BASE_ACCOMMODATION_RATE,
    originalRatePerPerson: ORIGINAL_ACCOMMODATION_RATE,
    discountPerPerson,
    finalRatePerPerson,
    totalCost,
    totalSavings,
    tierLabel,
  };
}
