import ScrollReveal from './animations/ScrollReveal';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 lg:pt-0 pb-16 lg:pb-0 relative"
    >
      <div className="max-w-4xl w-full">
        <ScrollReveal delay={100}>
          <p className="text-green-500 font-mono mb-4 md:mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Hi, My name is
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 mb-2 md:mb-3 leading-tight">
           OLUMIDE
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-500 mb-4 md:mb-6 leading-tight">
            I build things for the web.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl leading-relaxed">
            I'm a software developer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products at{' '}
            <a href="#" className="text-green-500 hover:underline transition">D Global GrowthField Limited</a>.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={500}>
          <a 
            href="#projects"
            className="inline-block px-6 py-3 md:px-8 md:py-4 border border-green-500 text-green-500 rounded hover:bg-green-500/10 transition font-mono text-sm md:text-base btn-glow"
          >
            Check out my work!
          </a>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator - Hidden on mobile/tablet */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}