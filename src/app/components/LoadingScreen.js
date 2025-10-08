'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted (client-side only)
    setIsMounted(true);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    // Minimum display time to ensure it shows on all devices
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
        <div className="text-4xl md:text-6xl font-bold font-mono text-green-500 animate-pulse">
          CALEX DIGITAL
        </div>
      </div>
    );
  }

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo - Responsive text size */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono mb-8 text-green-500 animate-pulse px-4 text-center">
        CALEX DIGITAL
      </div>
      
      {/* Loading Bar - Responsive width */}
      <div className="w-48 sm:w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <div className="mt-4 text-green-500 font-mono text-sm">
        {progress}%
      </div>
    </div>
  );
}