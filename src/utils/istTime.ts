export interface IstCountdownResult {
  status: 'UPCOMING' | 'LIVE' | 'CONCLUDED';
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formattedIstTarget: string;
}

// Verified festival dates: December 16–18, 2026 in Asia/Kolkata (IST • UTC+05:30)
export const IST_FINALE_START_MS = Date.parse("2026-12-16T00:00:00+05:30");
export const IST_FINALE_END_MS = Date.parse("2026-12-18T23:59:59+05:30");

/**
 * Calculates countdown to Techfest opening day in Asia/Kolkata (IST, UTC+05:30).
 * Handles upcoming, live, and concluded states deterministically without inventing unverified times.
 */
export function calculateIstCountdown(nowMs: number = Date.now()): IstCountdownResult {
  const formattedIstTarget = "December 16, 2026 (Asia/Kolkata, IST)";

  if (nowMs < IST_FINALE_START_MS) {
    const diffMs = Math.max(0, IST_FINALE_START_MS - nowMs);
    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      status: 'UPCOMING',
      days,
      hours,
      minutes,
      seconds,
      formattedIstTarget,
    };
  } else if (nowMs <= IST_FINALE_END_MS) {
    return {
      status: 'LIVE',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      formattedIstTarget,
    };
  } else {
    return {
      status: 'CONCLUDED',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      formattedIstTarget,
    };
  }
}
