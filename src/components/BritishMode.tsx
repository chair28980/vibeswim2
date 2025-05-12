'use client';

import { useState, useEffect } from 'react';

interface BritishModeProps {
  onTurnOff: () => void;
}

const britishPeople = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/67.jpg',
  'https://randomuser.me/api/portraits/women/90.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/women/33.jpg',
];

export default function BritishMode({ onTurnOff }: BritishModeProps) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle and select 4 random images
    const shuffled = [...britishPeople].sort(() => 0.5 - Math.random());
    setImages(shuffled.slice(0, 4));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-white to-blue-800 flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* British People Grid */}
        <div className="grid grid-cols-2 gap-8 p-8">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-110 animate-float">
                <img
                  src={image}
                  alt={`British person ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg animate-pulse">
                <span className="text-black font-bold">British Person {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-gradient" />
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-gradient" />
          <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-gradient" />
          <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-gradient" />
        </div>
      </div>

      <button
        onClick={onTurnOff}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 via-white to-blue-800 text-black rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-lg animate-neon"
      >
        Back to Normal
      </button>
    </div>
  );
} 