import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * GoldLightSignature.tsx
 * The Moving Visual Signature: A continuous, mathematically drafted golden light trail
 * that travels across the Hero, Competitions Showcase, and Final CTA sections.
 */
export const GoldLightSignature: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathRef = useRef<SVGPathElement | null>(null);
  const pulseRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (prefersReduced) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentScroll / docHeight)) : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReduced]);

  // Dashoffset calculation for travelling pulse
  const strokeLength = 3200;
  const pulseOffset = strokeLength * (1 - scrollProgress);

  return (
    <div
      data-testid="gold-light-signature"
      className="pointer-events-none fixed inset-0 z-[1] w-full h-full overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 3200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gilded-pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#99752D" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#C6A04A" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFDF7" stopOpacity="1" />
            <stop offset="70%" stopColor="#E6D2A3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#99752D" stopOpacity="0.2" />
          </linearGradient>

          <filter id="gold-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Etched Mathematical Spine Hairline */}
        <path
          ref={pathRef}
          d="M 280,80 C 720,240 1200,420 1120,780 C 1040,1140 320,1320 260,1720 C 200,2120 1280,2280 1180,2680 C 1080,2980 720,3120 720,3200"
          stroke="rgba(198, 160, 74, 0.18)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Dynamic Specular Kinetic Light Pulse */}
        <path
          ref={pulseRef}
          d="M 280,80 C 720,240 1200,420 1120,780 C 1040,1140 320,1320 260,1720 C 200,2120 1280,2280 1180,2680 C 1080,2980 720,3120 720,3200"
          stroke="url(#gilded-pulse-gradient)"
          strokeWidth="2.5"
          filter="url(#gold-glow-filter)"
          strokeDasharray="380 2820"
          strokeDashoffset={prefersReduced ? 0 : pulseOffset}
          style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
        />
      </svg>
    </div>
  );
};
