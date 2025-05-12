'use client';

import { useRef, useEffect } from 'react';

const SharkSVG = () => {
  const sharkRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const shark = sharkRef.current;
    if (shark) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = shark.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (x - centerX) / 20;
        const angleY = (y - centerY) / 20;
        
        shark.style.transform = `perspective(1000px) rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
      };

      shark.addEventListener('mousemove', handleMouseMove);
      return () => shark.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <svg
      ref={sharkRef}
      viewBox="0 0 400 400"
      className="w-full h-full transition-transform duration-200"
    >
      {/* Shark Body */}
      <g id="shark-body" className="animate-float">
        <path
          d="M200 100 C 250 100, 300 150, 300 200 C 300 250, 250 300, 200 300 C 150 300, 100 250, 100 200 C 100 150, 150 100, 200 100"
          fill="#2C3E50"
          stroke="#34495E"
          strokeWidth="4"
          className="flash"
        />
        
        {/* Shark Fin */}
        <path
          d="M250 150 L 280 100 L 250 180"
          fill="#2C3E50"
          stroke="#34495E"
          strokeWidth="4"
          className="animate-sway"
        />
        
        {/* Shark Eye */}
        <circle
          cx="250"
          cy="180"
          r="10"
          fill="white"
          className="pulse"
        />
        <circle
          cx="250"
          cy="180"
          r="5"
          fill="black"
          className="animate-neon"
        />
        
        {/* Shark Mouth */}
        <path
          d="M220 220 Q 200 240, 180 220"
          fill="none"
          stroke="#34495E"
          strokeWidth="4"
          className="animate-gradient"
        />
      </g>

      {/* Headphones */}
      <g id="headphones" className="animate-sway">
        <path
          d="M150 150 C 100 150, 80 200, 100 250"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="8"
          className="rainbow"
        />
        <path
          d="M250 150 C 300 150, 320 200, 300 250"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="8"
          className="rainbow"
        />
        <circle
          cx="150"
          cy="150"
          r="20"
          fill="#E74C3C"
          className="pulse"
        />
        <circle
          cx="250"
          cy="150"
          r="20"
          fill="#E74C3C"
          className="pulse"
        />
        <path
          d="M150 150 L 250 150"
          fill="none"
          stroke="#E74C3C"
          strokeWidth="8"
          className="rainbow"
        />
      </g>

      {/* Decorative Elements */}
      <g className="animate-float delay-200">
        <circle cx="100" cy="100" r="5" fill="#FF00DE" className="flash" />
        <circle cx="300" cy="100" r="5" fill="#00FFDE" className="flash" />
        <circle cx="100" cy="300" r="5" fill="#00FFDE" className="flash" />
        <circle cx="300" cy="300" r="5" fill="#FF00DE" className="flash" />
      </g>
    </svg>
  );
};

export default SharkSVG; 