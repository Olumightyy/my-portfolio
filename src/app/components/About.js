'use client';

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
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="numbered-heading text-gray-100">
            ABOUT ME
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {/* Text Content */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm <span className="text-green-500 font-semibold">Olumide</span>, 
                a Frontend Developer who brings together clean code and stunning visuals. 
                What sets me apart? I blend modern web development with AI-powered design to create 
                digital experiences that are both technically excellent and visually unforgettable.
              </p>
              <p>
                With expertise in <span className="text-green-500">React.js, TypeScript, and Next.js</span>, 
                I build responsive, performance-optimized applications. But I don't stop at functionality—I 
                leverage AI tools to create unique brand visuals, custom graphics, and design elements that 
                make websites stand out in a sea of generic templates.
              </p>
              <p>
                From contributing to enterprise applications at <span className="text-green-500">Wragby Business Solutions</span> to 
                developing business tools at <span className="text-green-500">D Global GrowthField Ltd</span>, I've 
                continuously pushed the boundaries of what a frontend developer can deliver. Whether it's architecting 
                scalable React applications or generating AI-enhanced brand assets, I focus on creating solutions that 
                drive real business value.
              </p>
              <p>
                Currently exploring the intersection of development, AI, and creative design—building a 
                personal brand around <span className="text-green-500">tech innovation and aesthetic excellence</span>.
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
                {/* Green Overlay */}
                <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}