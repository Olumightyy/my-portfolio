'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';

export default function AIGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: '/images/ai-1.png',
      alt: 'AI Generated Design 1',
      title: 'Digital Dreams',
      category: 'Abstract'
    },
    {
      id: 2,
      src: '/images/ai-2.png',
      alt: 'AI Generated Design 2',
      title: 'Neon Future',
      category: 'Cyberpunk'
    },
    {
      id: 3,
      src: '/images/ai-3.png',
      alt: 'AI Generated Design 3',
      title: 'Organic Tech',
      category: 'Nature'
    },
    {
      id: 4,
      src: '/images/ai-4.png',
      alt: 'AI Generated Design 4',
      title: 'Minimalist Vision',
      category: 'Abstract'
    },
    {
      id: 5,
      src: '/images/ai-5.png',
      alt: 'AI Generated Design 5',
      title: 'Digital Identity',
      category: 'Portrait'
    },
  ];

  return (
    <section id="ai-design" className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <h2 className="numbered-heading text-gray-100">
            AI DESIGN GALLERY
          </h2>
        </ScrollReveal>

        <ScrollReveal>
            <div className="mb-20">
                <h2 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">
                  AI Design
             </h2>
                 <p className="text-gray-500 font-mono text-sm">
             Prompt engineering / Visual creativity / Zero templates
                </p>
            </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-green-500 text-xs font-mono uppercase tracking-wider mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Click to view full size
                  </p>
                </motion.div>
              </div>

              {/* Green border glow on hover */}
              <div className="absolute inset-0 border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Used */}
        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm font-mono mb-4">TOOLS USED</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Midjourney', 'DALL-E', 'Stable Diffusion', 'ChatGPT'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-gray-400 text-sm hover:border-green-500 hover:text-green-500 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-green-500 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Full Size Image */}
              <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <span className="text-green-500 text-xs font-mono uppercase tracking-wider mb-2 block">
                  {selectedImage.category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}