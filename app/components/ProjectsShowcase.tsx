'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

const ProjectsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const scrollWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const tl = gsap.to(containerRef.current, {
      x: -(scrollWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollWidth - viewportWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animation for individual project cards
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card: any, i) => {
      gsap.fromTo(card.querySelector('.project-content'), 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            containerAnimation: tl,
            trigger: card,
            start: "left center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative h-screen overflow-hidden bg-gray-50"
    >
      {/* Background Text */}
      <div className="absolute top-10 left-10 z-0 opacity-5 pointer-events-none">
        <h1 className="text-[12vw] font-black leading-none tracking-tighter text-gray-900">
          WORK
        </h1>
      </div>

      <div className="absolute top-12 left-8 md:left-20 z-10">
        <p className="text-sm tracking-widest uppercase font-semibold text-[#442d5c] mb-2">
          Selected Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Recent Masterpieces
        </h2>
      </div>

      <div 
        ref={containerRef} 
        className="flex h-full items-center pl-8 md:pl-20 pr-8 md:pr-20 gap-8 md:gap-16 pt-32"
        style={{ width: 'fit-content' }}
      >
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            className="project-card relative w-[80vw] md:w-[600px] h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl shrink-0 group cursor-pointer block"
          >
            {/* Background Gradient/Image */}
            <div 
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{ background: project.gradient }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

            {/* Content */}
            <div className="project-content absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4">
              <div className="overflow-hidden">
                <p className="text-sm font-bold tracking-wider uppercase mb-2 text-[#a855f7]">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-200 max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="text-sm font-bold uppercase tracking-widest">View Detail</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        {/* End Card */}
        <div className="w-[40vw] md:w-[400px] h-[50vh] md:h-[60vh] flex items-center justify-center shrink-0">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Want to see more?</h3>
              <Link href="/projects" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-[#a855f7]/30 hover:bg-gradient-to-r hover:from-[#2b1b3a] hover:via-[#442d5c] hover:to-[#6b4ca8] hover:border hover:border-white/10">
                View All Projects
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
