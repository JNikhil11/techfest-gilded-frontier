import React, { useRef } from 'react';
import confetti from 'canvas-confetti';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  variant?: 'gold-foil' | 'porcelain' | 'subtle';
  isExternal?: boolean;
  withConfetti?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'gold-foil',
  isExternal = true,
  withConfetti = false,
}) => {
  const btnRef = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = 'translate(0px, 0px)';
    btnRef.current.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseEnter = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transition = 'transform 0.1s ease-out';
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (withConfetti && !prefersReduced && typeof window !== 'undefined') {
      try {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 18,
          spread: 45,
          origin: { x, y },
          colors: ['#C6A04A', '#E6D2A3', '#FAF8F2', '#99752D'],
          disableForReducedMotion: true,
          scalar: 0.8,
        });
      } catch {
        // Fallback silently if confetti fails
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-sans font-semibold text-sm tracking-wide transition-all duration-300 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C6A04A] focus-visible:outline-offset-2';

  const variantStyles = {
    'gold-foil':
      'bg-gradient-to-r from-[#99752D] via-[#C6A04A] to-[#7A5B1E] text-[#FFFDF7] px-6 py-3.5 rounded-full shadow-[0_4px_16px_rgba(153,117,45,0.25)] hover:shadow-[0_6px_24px_rgba(198,160,74,0.4)] active:scale-[0.98] border border-[#E6D2A3]/50',
    porcelain:
      'bg-[#FFFEFC] text-[#24221E] px-6 py-3.5 rounded-full border border-[rgba(198,160,74,0.35)] hover:border-[#C6A04A] hover:bg-[#FAF8F2] shadow-[0_2px_8px_rgba(36,34,30,0.04)] active:scale-[0.98]',
    subtle:
      'bg-transparent text-[#7A5B1E] hover:text-[#24221E] px-4 py-2 rounded-lg hover:bg-[#FAF8F2] underline-offset-4 hover:underline',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type="button"
      className={combinedClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
