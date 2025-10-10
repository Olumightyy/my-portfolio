'use client';

import ScrollReveal from './animations/ScrollReveal';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <ScrollReveal>
            <p className="text-green-500 font-mono mb-5 uppercase tracking-widest text-sm">What&apos;s Next?</p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider gradient-text">
              Get In Touch
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              I&apos;m currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to 
              get back to you!
            </p>
          </ScrollReveal>

          {/* Quick Email Button */}
          <ScrollReveal delay={300}>
            <a
              href="mailto:adepojuolumide04@gmail.com"
              className="inline-block px-10 py-4 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500/10 transition font-mono uppercase tracking-wider btn-glow"
            >
              Say Hello
            </a>
          </ScrollReveal>
        </div>

        {/* Contact Form */}
        <ScrollReveal delay={400}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100 uppercase tracking-wider">
              Or Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}