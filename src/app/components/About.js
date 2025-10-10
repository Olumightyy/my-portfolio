'use client';

import Image from 'next/image'; // ✅ ADD THIS
import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

export default function About() {
  const technologies = [
    'JavaScript (ES6+)',
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'AI Design Tools',
    'Prompt Engineering',
    'Node.js',
    'PostgreSQL'
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="numbered-heading text-gray-100">
            About Me
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-5 gap-12 mt-12 items-start">
          {/* Text Content - Takes 3 columns */}
          <div className="md:col-span-3">
            <ScrollReveal delay={100}>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Hello! I&apos;m <span className="text-green-500 font-semibold">Olumide</span>, 
                  a Frontend Developer who brings together clean code and stunning visuals. 
                  What sets me apart? I blend modern web development with AI-powered design to create 
                  digital experiences that are both technically excellent and visually unforgettable.
                </p>
                <p>
                  With expertise in <span className="text-green-500">React.js, TypeScript, and Next.js</span>, 
                  I build responsive, performance-optimized applications. But I don&apos;t stop at functionality—I 
                  leverage AI tools to create unique brand visuals, custom graphics, and design elements that 
                  make websites stand out in a sea of generic templates.
                </p>
                <p>
                  From contributing to enterprise applications at <span className="text-green-500">Wragby Business Solutions</span> to 
                  developing business tools at <span className="text-green-500">D Global GrowthField Ltd</span>, I&apos;ve 
                  continuously pushed the boundaries of what a frontend developer can deliver. Whether it&apos;s architecting 
                  scalable React applications or generating AI-enhanced brand assets, I focus on creating solutions that 
                  drive real business value.
                </p>
                <p>
                  Currently exploring the intersection of development, AI, and creative design—building a 
                  personal brand around <span className="text-green-500">tech innovation and aesthetic excellence</span>.
                </p>
                
                {/* Tech Stack */}
                <div className="pt-6">
                  <p className="mb-4">Here are a few technologies I&apos;ve been working with recently:</p>
                  <StaggerContainer staggerDelay={50}>
                    <ul className="grid grid-cols-2 gap-2">
                      {technologies.map((tech) => (
                        <li key={tech} className="flex items-center group">
                          <svg className="w-2 h-2 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor">
                            <polygon points="0,0 8,4 0,8" />
                          </svg>
                          <span className="font-mono text-sm group-hover:text-green-500 transition">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Profile Image - Takes 2 columns */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <ScrollReveal delay={200}>
              <div className="relative group w-64 h-64">
                {/* Green border that moves on hover */}
                <div className="absolute -inset-4 border-2 border-green-500 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded overflow-hidden">
                  <Image
                    src="/portrait.png"
                    alt="Olumide - Frontend Developer"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="256px"
                  />
                  {/* Green Overlay */}
                  <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}