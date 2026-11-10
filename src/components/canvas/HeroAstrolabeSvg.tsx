import React from 'react';

interface HeroAstrolabeSvgProps {
  className?: string;
}

export const HeroAstrolabeSvg: React.FC<HeroAstrolabeSvgProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 640 640"
        className="w-full h-full max-w-[580px] max-h-[580px] select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="astrolabe-foil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#99752D" />
            <stop offset="25%" stopColor="#C6A04A" />
            <stop offset="50%" stopColor="#E6D2A3" />
            <stop offset="55%" stopColor="#FFFDF7" />
            <stop offset="75%" stopColor="#C6A04A" />
            <stop offset="100%" stopColor="#99752D" />
          </linearGradient>

          <linearGradient id="astrolabe-subtle" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6D2A3" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#C6A04A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#99752D" stopOpacity="0.3" />
          </linearGradient>

          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(244, 233, 203, 0.45)" />
            <stop offset="60%" stopColor="rgba(230, 210, 163, 0.12)" />
            <stop offset="100%" stopColor="rgba(255, 254, 252, 0)" />
          </radialGradient>
        </defs>

        {/* Soft Ambient Radiance Core */}
        <circle cx="320" cy="320" r="280" fill="url(#center-glow)" />

        {/* Outer Fixed Architectural Frame */}
        <circle
          cx="320"
          cy="320"
          r="290"
          stroke="url(#astrolabe-foil)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="320"
          cy="320"
          r="282"
          stroke="url(#astrolabe-subtle)"
          strokeWidth="0.75"
          strokeDasharray="2 6"
          fill="none"
        />

        {/* Clockwise Rotating Astrolabe Degree Ring */}
        <g className="astrolabe-spin-cw" style={{ transformOrigin: '320px 320px' }}>
          <circle
            cx="320"
            cy="320"
            r="255"
            stroke="url(#astrolabe-foil)"
            strokeWidth="1.25"
            fill="none"
          />
          {/* Vernier scale graduation marks */}
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i * 360) / 48;
            const isMajor = i % 4 === 0;
            const r1 = isMajor ? 245 : 250;
            const r2 = 255;
            const rad = (angle * Math.PI) / 180;
            const x1 = 320 + r1 * Math.cos(rad);
            const y1 = 320 + r1 * Math.sin(rad);
            const x2 = 320 + r2 * Math.cos(rad);
            const y2 = 320 + r2 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#C6A04A"
                strokeWidth={isMajor ? 1.5 : 0.75}
                strokeOpacity={isMajor ? 0.9 : 0.5}
              />
            );
          })}
          {/* 4 Cardinal Orbital Nodes */}
          <circle cx="320" cy="65" r="5" fill="#C6A04A" />
          <circle cx="575" cy="320" r="5" fill="#C6A04A" />
          <circle cx="320" cy="575" r="5" fill="#C6A04A" />
          <circle cx="65" cy="320" r="5" fill="#C6A04A" />
        </g>

        {/* Counter-Clockwise Rotating Celestial Ring */}
        <g className="astrolabe-spin-ccw" style={{ transformOrigin: '320px 320px' }}>
          <circle
            cx="320"
            cy="320"
            r="215"
            stroke="url(#astrolabe-subtle)"
            strokeWidth="1"
            strokeDasharray="4 8"
            fill="none"
          />
          <circle
            cx="320"
            cy="320"
            r="175"
            stroke="url(#astrolabe-foil)"
            strokeWidth="1.25"
            fill="none"
          />
          {/* Constellation Crossbars */}
          <line
            x1="145"
            y1="320"
            x2="495"
            y2="320"
            stroke="url(#astrolabe-subtle)"
            strokeWidth="0.75"
          />
          <line
            x1="320"
            y1="145"
            x2="320"
            y2="495"
            stroke="url(#astrolabe-subtle)"
            strokeWidth="0.75"
          />
          <line
            x1="196"
            y1="196"
            x2="444"
            y2="444"
            stroke="url(#astrolabe-subtle)"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />
          <line
            x1="196"
            y1="444"
            x2="444"
            y2="196"
            stroke="url(#astrolabe-subtle)"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />
        </g>

        {/* Inner Golden Precision Aperture */}
        <circle
          cx="320"
          cy="320"
          r="125"
          stroke="url(#astrolabe-foil)"
          strokeWidth="2"
          fill="#FFFEFC"
        />
        <circle
          cx="320"
          cy="320"
          r="115"
          stroke="rgba(198, 160, 74, 0.3)"
          strokeWidth="1"
          strokeDasharray="2 4"
          fill="#FAF8F2"
        />

        {/* Center Iconic Techfest 30th Milestone Diptych Ring */}
        <circle cx="320" cy="320" r="95" fill="#FFFEFC" stroke="#C6A04A" strokeWidth="1.5" />

        {/* Decorative Compass Rose Star */}
        <path
          d="M 320,235 L 327,313 L 405,320 L 327,327 L 320,405 L 313,327 L 235,320 L 313,313 Z"
          fill="url(#astrolabe-foil)"
          opacity="0.9"
        />
        <circle cx="320" cy="320" r="14" fill="#24221E" />
        <circle cx="320" cy="320" r="6" fill="#FFFDF7" />

        {/* Subtle Text Ring Label */}
        <text
          x="320"
          y="205"
          textAnchor="middle"
          fontSize="9"
          letterSpacing="3"
          fontWeight="700"
          fill="#7A5B1E"
          fontFamily="system-ui, sans-serif"
        >
          TECHFEST • 30TH EDITION • IIT BOMBAY
        </text>
        <text
          x="320"
          y="442"
          textAnchor="middle"
          fontSize="8.5"
          letterSpacing="2.5"
          fontWeight="600"
          fill="#99752D"
          fontFamily="system-ui, sans-serif"
        >
          DECEMBER 16–18, 2026
        </text>
      </svg>
    </div>
  );
};
