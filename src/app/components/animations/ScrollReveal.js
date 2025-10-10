'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';

export default function AIGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Your 5 images
  const images = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    src: `/images/ai-${i + 1}.jpg`,
    alt: `AI Generated Design ${i + 1}`,
    title: `Design ${i + 1}`,
    description: 'Created with AI prompt engineering'
  }));

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="ai-design" className="min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="numbered-heading text-gray-100">
            AI DESIGN GALLERY
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Exploring the intersection of code and creativity. Each piece created using advanced AI tools 
            and prompt engineering—no templates, no stock images, just vision and technology working together.
          </p>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal delay={200}>
          <div className="mt-12">
            {/* Main Image Display with Animation */}
            <div className="relative aspect-video md:aspect-[16/9] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 group">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold mb-1"
                    >
                      {images[currentIndex].title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-300"
                    >
                      {images[currentIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-green-500/80 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-green-500/80 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Top Controls */}
              <div className="absolute top-4 right-4 flex items-center gap-3 z-20">
                {/* Auto-play Toggle */}
                <motion.button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-mono hover:bg-green-500/80 transition-all"
                >
                  {isAutoPlay ? '⏸ Pause' : '▶ Play'}
                </motion.button>
                
                {/* Image Counter */}
                <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-mono">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>

              {/* Progress Bar */}
              {isAutoPlay && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div
                    key={currentIndex}
                    className="h-full bg-green-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <motion.button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-green-500 ring-2 ring-green-500/50'
                      : 'border-zinc-700 hover:border-green-500/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeThumb"
                      className="absolute inset-0 bg-green-500/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-gray-600 text-sm font-mono">
              <p className="hidden md:block">
                ← → to navigate
              </p>
              <span className="hidden md:block text-gray-700">•</span>
              <p className="hidden md:block">
                SPACE to pause/play
              </p>
              <span className="hidden md:block text-gray-700">•</span>
              <p>
                Tap thumbnails to jump
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}