'use client';

import ScrollReveal from './animations/ScrollReveal';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application for managing tasks and projects. Features include user authentication, real-time updates, and a beautiful drag-and-drop interface. Built with modern technologies and best practices.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
      image: '/project1.jpg',
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with payment integration, inventory management, and admin dashboard. Implemented advanced features like product recommendations and analytics.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
      image: '/project2.jpg',
    },
    {
      title: 'Project Three',
      description: 'A mobile-first social media application that allows users to share photos, follow friends, and discover content. Features include infinite scroll, image optimization, and push notifications.',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
      image: '/project3.jpg',
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Title - NO NUMBERING, UPPERCASE */}
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 flex items-center uppercase tracking-wider">
            <span className="gradient-text">Development Projects</span>
            <div className="ml-6 h-1 bg-gradient-to-r from-green-500/50 to-transparent flex-grow max-w-md rounded-full"></div>
          </h2>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={100}>
              <div 
                className={`relative grid md:grid-cols-12 gap-4 items-center group ${
                  index % 2 === 0 ? '' : 'md:dir-rtl'
                }`}
              >
                {/* Project Image with gradient border */}
                <div className="md:col-span-7 relative">
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden border-2 border-green-500/20 bg-green-500/5 hover:border-green-500/40 transition-all">
                    <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="text-gray-600 font-mono">Project Screenshot</span>';
                        }}
                      />
                    </div>
                    {/* Green overlay */}
                    <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply group-hover:opacity-0 transition-opacity rounded-lg"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-green-500 font-mono text-sm mb-2 uppercase tracking-wider">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 text-gray-100 hover:text-green-500 transition inline-block">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  
                  {/* Description Box with gradient border */}
                  <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 mb-4 shadow-xl border border-gray-800 hover:border-green-500/40 transition">
                    <p className="text-gray-400">{project.description}</p>
                  </div>

                  {/* Tech Stack with colors */}
                  <ul className={`flex flex-wrap gap-3 font-mono text-sm mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {project.tech.map((tech) => (
                      <li key={tech} className="text-gray-400 hover:text-green-500 transition">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Links with hover effects */}
                  <div className={`flex gap-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition transform hover:scale-110">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition transform hover:scale-110">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}