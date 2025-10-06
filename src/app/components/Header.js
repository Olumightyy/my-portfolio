'use client';

import { useState, useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';
import MobileMenu from './MobileMenu';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const activeSection = useScrollSpy(['home', 'about', 'experience', 'projects', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-green-500/10' : 'bg-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Animated Logo */}
          <a href="#home" className="inline-block">
            <AnimatedLogo />
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-mono text-sm">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`transition relative group uppercase tracking-wider ${
                    activeSection === item.id ? 'text-green-500' : 'text-gray-400 hover:text-green-500'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="hidden md:block px-5 py-2.5 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500/10 transition text-sm font-mono uppercase tracking-wider btn-glow"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-green-500 text-2xl hover:scale-110 transition-transform"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </>
  );
}