'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { projects } from '../../data/projects';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const project = projects.find(p => p.id === Number(params.id));
  const images = project ? (project.gallery ?? (project.image ? [project.image] : [])) : [];

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link 
            href="/#projects" 
            className="px-6 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-gray-50 pt-20">
      {/* Back Button */}
      <div className="fixed top-24 left-8 z-50">
        <button 
          onClick={() => router.back()}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:-translate-x-1 transition-transform duration-300"
          >
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 md:mb-20 text-center">
            <p className="text-[#a855f7] font-bold tracking-widest uppercase mb-4">
              {project.category}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Hero Image Slider (click to open preview) */}
          <div 
            ref={imageRef}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-16 bg-black cursor-zoom-in"
            onClick={() => images.length > 0 && setIsPreviewOpen(true)}
          >
            {images.length > 0 && (
              <Image
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            )}

            {images.length > 1 && (
              <>
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <span className="sr-only">Previous image</span>
                  &#8592;
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((prev) => (prev + 1) % images.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <span className="sr-only">Next image</span>
                  &#8594;
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-white w-4'
                          : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Fullscreen Preview */}
          {isPreviewOpen && images.length > 0 && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
              onClick={() => setIsPreviewOpen(false)}
            >
              <div
                className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  key={images[currentIndex] + '-preview'}
                  src={images[currentIndex]}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority
                />

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                >
                  <span className="sr-only">Close preview</span>
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Content Grid */}
          <div ref={contentRef} className="grid md:grid-cols-3 gap-12 md:gap-20">
            {/* Left Column - Description */}
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">About the Project</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Right Column - Tech Stack */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 text-sm font-semibold text-gray-700 hover:border-[#a855f7]/50 hover:text-[#a855f7] transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
