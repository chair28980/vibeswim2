'use client';

import { useRef } from 'react';

const SharkSVG = () => {
  const sharkRef = useRef<SVGSVGElement>(null);

  return (
    <svg
      ref={sharkRef}
      viewBox="0 0 400 400"
      className="w-full h-full"
    >
      {/* Shark Body */}
      <g id="shark-body" className="animate-float">
        <path
          d="M200 100 C 250 100, 300 150, 300 200 C 300 250, 250 300, 200 300 C 150 300, 100 250, 100 200 C 100 150, 150 100, 200 100"
          fill="#2C3E50"
          stroke="#34495E"
          strokeWidth="4"
        />
        
        {/* Shark Fin */}
        <path
          d="M250 150 L 280 100 L 250 180"
          fill="#2C3E50"
          stroke="#34495E"
          strokeWidth="4"
        />
        
        {/* Shark Eye */}
        <circle
          cx="250"
          cy="180"
          r="10"
          fill="white"
        />
        <circle
          cx="250"
          cy="180"
          r="5"
          fill="black"
        />
        
        {/* Shark Mouth */}
        <path
          d="M220 220 Q 200 240, 180 220"
          fill="none"
          stroke="#34495E"
          strokeWidth="4"
        />
      </g>

      {/* Headphones */}
      <g id="headphones" className="animate-sway">
        <path
          d="M150 150 C 100 150, 80 200, 100 250"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="8"
        />
        <path
          d="M250 150 C 300 150, 320 200, 300 250"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="8"
        />
        <circle
          cx="150"
          cy="150"
          r="20"
          fill="#E74C3C"
        />
        <circle
          cx="250"
          cy="150"
          r="20"
          fill="#E74C3C"
        />
        <path
          d="M150 150 L 250 150"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="8"
        />
      </g>
    </svg>
  );
};

export default SharkSVG; 