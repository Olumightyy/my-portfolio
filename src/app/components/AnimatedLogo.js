'use client';

import { useState, useEffect } from 'react';

export default function AnimatedLogo() {
  const [chars, setChars] = useState(['SOFTWARE', 'ENGINEER']);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const original = ['SOFTWARE', 'ENGINEER'];

  useEffect(() => {
    // Make the animation very slow and subtle
    const intervals = chars.map((_, index) => {
      return setInterval(() => {
        setChars(prev => {
          const newChars = [...prev];
          newChars[index] = letters[Math.floor(Math.random() * letters.length)];
          return newChars;
        });

        // Return to original after a longer moment
        setTimeout(() => {
          setChars(prev => {
            const newChars = [...prev];
            newChars[index] = original[index];
            return newChars;
          });
        }, 1200); // much slower revert
      }, 12000 + index * 4000); // much slower and more staggered
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <span className="text-2xl font-bold font-mono relative inline-block cursor-pointer group select-none">
      <span
        className="inline-block transition-all duration-100"
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #a78bfa, #f472b6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: chars[0] !== original[0] ? '0 0 20px rgba(6, 182, 212, 0.8)' : 'none',
        }}
      >
        {chars[0]}
      </span>
      <span className="inline-block w-3" /> {/* Adds spacing */}
      <span
        className="inline-block transition-all duration-100"
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #a78bfa, #f472b6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: chars[1] !== original[1] ? '0 0 20px rgba(6, 182, 212, 0.8)' : 'none',
        }}
      >
        {chars[1]}
      </span>
      <span className="absolute -inset-2 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 animate-pulse"></span>
    </span>
  );
}