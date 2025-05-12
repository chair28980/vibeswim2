'use client';

import { useState } from 'react';
import SharkSVG from '@/components/SharkSVG';
import PartyMode from '@/components/PartyMode';
import BritishMode from '@/components/BritishMode';

export default function Home() {
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [isBritishMode, setIsBritishMode] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {!isPartyMode && !isBritishMode ? (
        <div className="normal-mode flex flex-col items-center justify-center min-h-screen transition-opacity duration-1000 ease-in-out">
          <div className="w-64 h-64 rainbow">
            <SharkSVG />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsPartyMode(true)}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-full font-bold text-xl hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-lg animate-neon"
            >
              TURN VIBES ON
            </button>
            <button
              onClick={() => setIsBritishMode(true)}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 via-white to-blue-800 text-black rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-lg animate-pulse"
            >
              🇬🇧 BRITISH MODE
            </button>
          </div>
        </div>
      ) : isPartyMode ? (
        <div className="party-mode transition-opacity duration-1000 ease-in-out">
          <PartyMode onTurnOff={() => setIsPartyMode(false)} />
        </div>
      ) : (
        <div className="british-mode transition-opacity duration-1000 ease-in-out">
          <BritishMode onTurnOff={() => setIsBritishMode(false)} />
        </div>
      )}
    </main>
  );
}
