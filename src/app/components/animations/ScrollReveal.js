'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', 'fade'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directions = {
    up: { from: 'translate-y-20', to: 'translate-y-0' },
    down: { from: '-translate-y-20', to: 'translate-y-0' },
    left: { from: 'translate-x-20', to: 'translate-x-0' },
    right: { from: '-translate-x-20', to: 'translate-x-0' },
    fade: { from: '', to: '' },
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible
          ? `opacity-100 ${directions[direction].to}`
          : `opacity-0 ${directions[direction].from}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}