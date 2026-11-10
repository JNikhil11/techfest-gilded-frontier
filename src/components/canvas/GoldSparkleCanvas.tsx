/**
 * GoldSparkleCanvas.tsx
 * Luminous 2D Canvas Particle Glint Engine for "The Gilded Frontier".
 *
 * Adapted from basmilius/sparkle (MIT License) & tsparticles (MIT License).
 * See THIRD_PARTY_NOTICES.md for complete copyright notices.
 */

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxAlpha: number;
  omega: number;
  phi: number;
  rotation: number;
  color: string;
}

const GOLD_PALETTE = ['#C6A04A', '#E6D2A3', '#99752D', '#FFFDF7', '#F4E9CB'];

interface GoldSparkleCanvasProps {
  className?: string;
  density?: 'sparse' | 'normal' | 'dense';
}

export const GoldSparkleCanvas: React.FC<GoldSparkleCanvasProps> = ({
  className = '',
  density = 'normal',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let time = 0;

    const isMobile = window.innerWidth < 768;
    const particleCap = prefersReduced
      ? 12
      : isMobile
      ? density === 'sparse' ? 8 : 15
      : density === 'sparse' ? 18 : density === 'dense' ? 36 : 28;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();

    // Create particles
    const particles: Particle[] = [];
    const width = canvas.getBoundingClientRect().width || window.innerWidth;
    const height = canvas.getBoundingClientRect().height || window.innerHeight;

    for (let i = 0; i < particleCap; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.36,
        vy: -0.12 - Math.random() * 0.22, // gentle thermal upward drift
        radius: 1.2 + Math.random() * 2.4,
        maxAlpha: 0.25 + Math.random() * 0.65,
        omega: 0.015 + Math.random() * 0.025,
        phi: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI,
        color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
      });
    }

    const draw4PointStar = (
      context: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      r: number,
      rot: number,
      alpha: number,
      color: string
    ) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rot);

      // Radial halo
      const grad = context.createRadialGradient(0, 0, 0, 0, 0, r * 2.4);
      grad.addColorStop(0, `rgba(230, 210, 163, ${alpha * 0.4})`);
      grad.addColorStop(1, 'rgba(255, 254, 252, 0)');
      context.fillStyle = grad;
      context.beginPath();
      context.arc(0, 0, r * 2.4, 0, Math.PI * 2);
      context.fill();

      // Star shape
      context.fillStyle = color;
      context.globalAlpha = alpha;
      context.beginPath();
      context.moveTo(0, -r * 1.5);
      context.quadraticCurveTo(0, 0, r * 1.5, 0);
      context.quadraticCurveTo(0, 0, 0, r * 1.5);
      context.quadraticCurveTo(0, 0, -r * 1.5, 0);
      context.quadraticCurveTo(0, 0, 0, -r * 1.5);
      context.closePath();
      context.fill();

      context.restore();
    };

    const render = () => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      time += 1;

      for (const p of particles) {
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += 0.005;

          // Wrap boundaries
          if (p.y < -10) p.y = h + 10;
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
        }

        const alpha = p.maxAlpha * Math.pow(Math.sin(time * p.omega + p.phi), 2);

        if (p.radius > 2.2) {
          draw4PointStar(ctx, p.x, p.y, p.radius, p.rotation, alpha, p.color);
        } else {
          // Subtle dust glint
          ctx.save();
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (!prefersReduced) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Pause when offscreen using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting && !document.hidden;
          if (isVisible && !prefersReduced) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReduced) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial render
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [density, prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="gold-sparkle-canvas"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};
