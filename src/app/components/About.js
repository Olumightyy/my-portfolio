'use client';

import ScrollReveal from './animations/ScrollReveal';
import StaggerContainer from './animations/StaggerContainer';

export default function About() {
  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Python',
    'PostgreSQL'
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="numbered-heading text-gray-100">
            About Me
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {/* Text Content */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm <span className="text-green-500 font-semibold">Olumide</span>, 
                a Computer Engineering graduate and Frontend Developer passionate about building modern, responsive, and user-friendly web applications
              </p>
              <p>
                With strong expertise in React.js, JavaScript (ES6+), TypeScript, and component-based architecture, I focus on creating digital solutions that enhance usability, drive engagement, and support business growth.
              </p>
              <p>
                Over the past few years, I’ve worked across internships, professional roles, academic research, and personal projects, each of which has helped me refine my technical skills and problem-solving mindset. From contributing to enterprise applications at Wragby Business Solutions, to developing responsive business tools 
              </p>
              
              {/* Tech Stack */}
              <div className="pt-6">
                <p className="mb-4">Here are a few technologies I've been working with recently:</p>
                <StaggerContainer staggerDelay={50}>
                  {technologies.map((tech) => (
                    <div key={tech} className="flex items-center mb-2 group">
                      <svg className="w-2 h-2 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor">
                        <polygon points="0,0 8,4 0,8" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-green-500 transition">{tech}</span>
                    </div>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Profile Image */}
          <ScrollReveal delay={200} direction="left" className="md:col-span-1 flex justify-center md:justify-end">
            <div className="relative group w-64 h-64">
              {/* Image Container */}
              <div className="relative w-full h-full rounded overflow-hidden z-10 border-2 border-green-500/50 group-hover:border-green-500 transition-all">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                  <img 
                    src="/portrait.png" 
                    alt="Display image" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-gray-600 font-mono text-sm">Your Photo</span>';
                    }}
                  />
                </div>
                Green Overlay
                <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
              </div>
              
              {/* Decorative Border */}
              {/* <div className="absolute top-6 left-6 w-full h-full border-2 border-green-500/30 rounded -z-10 group-hover:top-4 group-hover:left-4 transition-all"></div> */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}