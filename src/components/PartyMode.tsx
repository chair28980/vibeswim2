'use client';

import { useRef, useEffect } from 'react';

interface PartyModeProps {
  onTurnOff: () => void;
}

const PartyMode = ({ onTurnOff }: PartyModeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (x - centerX) / 50;
        const angleY = (y - centerY) / 50;
        
        container.style.transform = `perspective(1000px) rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
      };

      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white p-8 transition-transform duration-200"
    >
      <h1 className="neon-title text-6xl font-bold text-center mb-12 animate-neon rainbow">
        VIBE IS ON
      </h1>

      <div className="dance-floor relative w-full h-[60vh] rounded-lg overflow-hidden mb-8 animate-gradient">
        {/* Dancing Animals */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="dancing-animal w-32 h-32 animate-dance" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#FF69B4" className="flash" />
            <circle cx="35" cy="40" r="5" fill="white" className="pulse" />
            <circle cx="65" cy="40" r="5" fill="white" className="pulse" />
            <path d="M35 65 Q 50 75 65 65" stroke="white" strokeWidth="3" fill="none" className="animate-gradient" />
          </svg>

          <svg className="dancing-animal w-32 h-32 animate-dance delay-200" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="#00FFDE" className="flash" />
            <circle cx="40" cy="40" r="5" fill="white" className="pulse" />
            <circle cx="60" cy="40" r="5" fill="white" className="pulse" />
            <path d="M30 70 Q 50 80 70 70" stroke="white" strokeWidth="3" fill="none" className="animate-gradient" />
          </svg>

          <svg className="dancing-animal w-32 h-32 animate-dance delay-400" viewBox="0 0 100 100">
            <polygon points="50,20 80,80 20,80" fill="#FF00DE" className="flash" />
            <circle cx="40" cy="40" r="5" fill="white" className="pulse" />
            <circle cx="60" cy="40" r="5" fill="white" className="pulse" />
            <path d="M35 60 Q 50 70 65 60" stroke="white" strokeWidth="3" fill="none" className="animate-gradient" />
          </svg>
        </div>

        {/* Art Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-gradient" />
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-gradient" />
          <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-gradient" />
          <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-gradient" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onTurnOff}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-full font-bold text-xl hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-lg transform hover:scale-105 animate-neon"
        >
          TURN VIBES OFF
        </button>
      </div>
    </div>
  );
};

export default PartyMode; 