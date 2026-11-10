import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Editorial motion hook orchestrating smooth, hardware-accelerated reveals
 * while strictly respecting prefers-reduced-motion.
 */
export function useGsapEditorialMotion(
  scopeRef: React.RefObject<HTMLElement | null>,
  setupFn?: (context: gsap.Context) => void,
  dependencies: unknown[] = []
): void {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined' || !scopeRef.current) return;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (setupFn) {
        setupFn(ctx);
      }
    }, scopeRef);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced, ...dependencies]);
}
