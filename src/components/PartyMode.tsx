'use client';

import { useRef } from 'react';

interface PartyModeProps {
  onTurnOff: () => void;
}

const PartyMode = ({ onTurnOff }: PartyModeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white p-8"
    >
      <h1 className="neon-title text-6xl font-bold text-center mb-12 animate-neon">
        VIBE IS ON
      </h1>

      <div className="dance-floor relative w-full h-[60vh] rounded-lg overflow-hidden mb-8 animate-gradient">
        {/* Dancing Animals */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="dancing-animal w-32 h-32 animate-dance" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#FF69B4" />
            <circle cx="35" cy="40" r="5" fill="white" />
            <circle cx="65" cy="40" r="5" fill="white" />
            <path d="M35 65 Q 50 75 65 65" stroke="white" strokeWidth="3" fill="none" />
          </svg>

          <svg className="dancing-animal w-32 h-32 animate-dance delay-200" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="#00FFDE" />
            <circle cx="40" cy="40" r="5" fill="white" />
            <circle cx="60" cy="40" r="5" fill="white" />
            <path d="M30 70 Q 50 80 70 70" stroke="white" strokeWidth="3" fill="none" />
          </svg>

          <svg className="dancing-animal w-32 h-32 animate-dance delay-400" viewBox="0 0 100 100">
            <polygon points="50,20 80,80 20,80" fill="#FF00DE" />
            <circle cx="40" cy="40" r="5" fill="white" />
            <circle cx="60" cy="40" r="5" fill="white" />
            <path d="M35 60 Q 50 70 65 60" stroke="white" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Art Deco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
          <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30" />
          <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30" />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onTurnOff}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-xl hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg transform hover:scale-105"
        >
          TURN VIBES OFF
        </button>
      </div>
    </div>
  );
};

export default PartyMode; 