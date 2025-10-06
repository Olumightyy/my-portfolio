'use client';

import { useEffect } from 'react';

export default function MobileMenu({ isOpen, setIsOpen }) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = ['About', 'Experience', 'Projects', 'Contact'];

  const handleClick = (item) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[75vw] max-w-sm bg-slate-800 z-50 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-slate-400 hover:text-cyan-400 transition"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item, i) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="text-2xl font-bold text-slate-300 hover:text-cyan-400 transition uppercase tracking-wider relative group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-cyan-400 text-sm mr-2">0{i + 1}.</span>
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="mt-8 px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition uppercase tracking-wider text-sm"
          >
            Resume
          </a>
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <a
              key={social}
              href={`https://${social.toLowerCase()}.com/yourusername`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition text-sm"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}   