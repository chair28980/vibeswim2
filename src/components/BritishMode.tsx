interface BritishModeProps {
  onTurnOff: () => void;
}

export default function BritishMode({ onTurnOff }: BritishModeProps) {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-white to-blue-800 flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* British Redcoat Soldiers */}
        <div className="absolute left-1/4 flex flex-col items-center">
          <svg width="120" height="200" viewBox="0 0 120 200" className="animate-float">
            {/* Soldier Body */}
            <g transform="translate(60, 100)">
              {/* Uniform */}
              <path
                d="M-30 -80 L30 -80 L35 -40 L35 60 L-35 60 L-35 -40 Z"
                fill="#8B0000"
                stroke="#000"
                strokeWidth="2"
              />
              {/* White Cross Belts */}
              <path
                d="M-35 -40 L35 -40 M-35 -20 L35 -20"
                fill="none"
                stroke="#FFF"
                strokeWidth="4"
              />
              {/* Gold Buttons */}
              <circle cx="-20" cy="-60" r="3" fill="#FFD700" />
              <circle cx="0" cy="-60" r="3" fill="#FFD700" />
              <circle cx="20" cy="-60" r="3" fill="#FFD700" />
              {/* Head */}
              <circle cx="0" cy="-100" r="20" fill="#FFE4C4" />
              {/* Tricorn Hat */}
              <path
                d="M-25 -110 L25 -110 L20 -130 L-20 -130 Z"
                fill="#000"
                stroke="#000"
                strokeWidth="2"
              />
              {/* Arms */}
              <path
                d="M-35 -40 L-50 0 M35 -40 L50 0"
                fill="none"
                stroke="#8B0000"
                strokeWidth="8"
              />
              {/* Musket */}
              <path
                d="M50 0 L70 0"
                fill="none"
                stroke="#8B4513"
                strokeWidth="4"
              />
            </g>
          </svg>
          <span className="mt-2 text-white font-bold">j</span>
        </div>
        
        <div className="absolute right-1/4 flex flex-col items-center">
          <svg width="120" height="200" viewBox="0 0 120 200" className="animate-float delay-200">
            {/* Soldier Body */}
            <g transform="translate(60, 100)">
              {/* Uniform */}
              <path
                d="M-30 -80 L30 -80 L35 -40 L35 60 L-35 60 L-35 -40 Z"
                fill="#8B0000"
                stroke="#000"
                strokeWidth="2"
              />
              {/* White Cross Belts */}
              <path
                d="M-35 -40 L35 -40 M-35 -20 L35 -20"
                fill="none"
                stroke="#FFF"
                strokeWidth="4"
              />
              {/* Gold Buttons */}
              <circle cx="-20" cy="-60" r="3" fill="#FFD700" />
              <circle cx="0" cy="-60" r="3" fill="#FFD700" />
              <circle cx="20" cy="-60" r="3" fill="#FFD700" />
              {/* Head */}
              <circle cx="0" cy="-100" r="20" fill="#FFE4C4" />
              {/* Tricorn Hat */}
              <path
                d="M-25 -110 L25 -110 L20 -130 L-20 -130 Z"
                fill="#000"
                stroke="#000"
                strokeWidth="2"
              />
              {/* Arms */}
              <path
                d="M-35 -40 L-50 0 M35 -40 L50 0"
                fill="none"
                stroke="#8B0000"
                strokeWidth="8"
              />
              {/* Musket */}
              <path
                d="M50 0 L70 0"
                fill="none"
                stroke="#8B4513"
                strokeWidth="4"
              />
            </g>
          </svg>
          <span className="mt-2 text-white font-bold">simon</span>
        </div>
      </div>

      <button
        onClick={onTurnOff}
        className="mt-8 px-6 py-3 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200 transition-colors shadow-lg"
      >
        Back to Normal
      </button>
    </div>
  );
} 