'use client';

import { useState } from 'react';
import ScrollReveal from './animations/ScrollReveal';

export default function Experience() {
  const jobs = [
    {
      company: 'Wragby Business Solutions',
      title: 'Software Engineering Intern',
      duration: 'May 2023 - October 2023',
      url: 'https://www.wragbysolutions.com',
      responsibilities: [
        'Contributed to the development of enterprise software solutions that improved workflow efficiency and business operations.',
        'Partnered with cross-functional teams to deliver scalable, secure, and user-friendly applications tailored to client needs.',
        'Supported the integration of APIs and third-party services, enabling seamless business process automation.',
        'Participated in code reviews, testing, and debugging to ensure high-quality software delivery.',
        'Developed and maintained features for enterprise applications using HTML, CSS, JavaScript, and Python.'
      ]
    },
    {
      company: 'D Global GrowthField Limited',
      title: 'Frontend Developer',
      duration: 'May 2025 - Present',
      url: 'https://dglobalgrowthfield.com',
      responsibilities: [
        'Designed, built, and maintained responsive websites using HTML, CSS, JavaScript, and modern frameworks, ensuring seamless performance across devices.',
        'Supported integration of digital tools and ensured smooth functionality of web-based platforms.',
        'Collaborated with designers to translate mockups into functional web applications',
        'Supported deployment and version control with Git/GitHub while following Agile development practices.',
      ]
    },
    {
      company: 'Google Developers Club',
      title: 'Frontend Developer',
      duration: 'Jan 2019 - May 2020',
      url: 'https://company3.com',
      responsibilities: [
        'Assisted in the development of responsive websites using HTML, CSS, and JavaScript',
        'Participated in code reviews and learned best practices from senior developers',
        'Fixed bugs and implemented small features across multiple projects',
      ]
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="min-h-screen px-6 py-24 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="numbered-heading text-gray-100">
            Where I've Worked
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {/* Company Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-gray-800">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all ${
                    activeTab === index
                      ? 'border-green-500 bg-green-500/5 text-green-500 md:-ml-0.5'
                      : 'border-transparent text-gray-400 hover:bg-green-500/5 hover:text-green-500'
                  }`}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Job Details */}
            <div className="flex-grow min-h-[300px]">
              <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">
                {jobs[activeTab].title}{' '}
                <a 
                  href={jobs[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  @ {jobs[activeTab].company}
                </a>
              </h3>
              
              <p className="font-mono text-sm text-gray-400 mb-6">
                {jobs[activeTab].duration}
              </p>

              <ul className="space-y-4">
                {jobs[activeTab].responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-400 group">
                    <svg className="w-2 h-2 text-green-500 mr-3 mt-2 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor">
                      <polygon points="0,0 8,4 0,8" />
                    </svg>
                    <span className="group-hover:text-gray-300 transition">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}