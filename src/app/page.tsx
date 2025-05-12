'use client';

import { useState } from 'react';
import SharkSVG from '@/components/SharkSVG';
import PartyMode from '@/components/PartyMode';
import BritishMode from '@/components/BritishMode';

export default function Home() {
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [isBritishMode, setIsBritishMode] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      {!isPartyMode && !isBritishMode ? (
        <div className="normal-mode flex flex-col items-center justify-center min-h-screen transition-opacity duration-1000 ease-in-out">
          <div className="w-64 h-64">
            <SharkSVG />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsPartyMode(true)}
              className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full font-bold text-xl hover:bg-pink-600 transition-colors shadow-lg"
            >
              TURN VIBES ON
            </button>
            <button
              onClick={() => setIsBritishMode(true)}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 via-white to-blue-800 text-black rounded-full font-bold text-xl hover:opacity-90 transition-colors shadow-lg"
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
