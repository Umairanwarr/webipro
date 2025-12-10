'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#a855f7] font-bold tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            All Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A collection of our work ranging from web applications to mobile apps and system designs.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="project-card relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer block transform transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: project.gradient }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4">
                <div className="overflow-hidden">
                  <p className="text-sm font-bold tracking-wider uppercase mb-2 text-[#a855f7]">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
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
        </div>
      </div>
    </main>
  );
}
