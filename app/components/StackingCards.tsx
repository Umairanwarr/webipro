'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Unlock the power of data with our advanced AI and Machine Learning solutions. We build intelligent systems that automate processes, predict trends, and drive decision-making.',
    color: '#0d0b13', // matches the darkest end of the CTA gradient
    textColor: '#ffffff'
  },
  {
    id: 2,
    title: 'Web & Mobile Development',
    description: 'Create seamless digital experiences with our custom web and mobile development services. We use the latest technologies to build scalable, secure, and high-performing applications.',
    color: '#2b1b3a', // aligns with CTA gradient start
    textColor: '#f5eefe'
  },
  {
    id: 3,
    title: 'Data Science & Analytics',
    description: 'Transform raw data into actionable insights. Our data science experts help you understand your business better through comprehensive analysis and visualization tools.',
    color: '#442d5c', // CTA gradient middle
    textColor: '#f8f4ff'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Captivate your audience with intuitive and beautiful designs. We focus on user-centric design principles to ensure your digital products are both functional and aesthetically pleasing.',
    color: '#6b4ca8', // CTA gradient end
    textColor: '#ffffff' // maintain contrast on the bright purple
  }
];

const StackingCards = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      // Get container height for proper positioning
      const containerEl = sectionRef.current?.querySelector('.cards-container');
      const containerHeight = containerEl?.getBoundingClientRect().height || 500;

      // Initial state: all cards start below the container, only first card visible
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0 });
        } else {
          // Position cards just below the container (hidden by overflow:hidden)
          gsap.set(card, { y: containerHeight });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => '+=' + window.innerHeight * cards.length * 0.8, // Faster scroll distance
          scrub: 0.8, // Faster scrub
          pin: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        // Each card slides up from bottom into position
        tl.to(
          card,
          {
            y: 0,
            duration: 1,
            ease: 'power2.out',
          },
          (index - 1) * 1 // Stagger timing
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services-section relative py-24"
      style={{ overflow: 'clip' }}
    >
      <div className="w-full">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase font-semibold text-[#442d5c] mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Solutions We Provide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital services tailored to elevate your business in the modern era.
          </p>
        </div>

        <div
          className="cards-container relative overflow-hidden"
          style={{
            height: '70vh',
            maxHeight: '600px',
            minHeight: '400px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute left-0 rounded-3xl shadow-2xl overflow-hidden"
              style={{
                backgroundColor: service.color,
                color: service.textColor,
                zIndex: index + 1,
                marginLeft: `${index * 8.5}rem`,
                width: `calc(100% - ${index * 8.5}rem)`,
                height: '100%',
                top: 0,
                transformOrigin: 'top left',
              }}
            >
              <div className="p-6 md:p-8 flex h-full">
                {/* Left side - Title at top */}
                <div className="flex flex-col justify-start" style={{ width: '5.5rem', minWidth: '5.5rem', paddingRight: '1rem' }}>
                  <h3 className="text-sm md:text-base font-bold leading-tight">{service.title}</h3>
                </div>
                
                {/* Right side - Description at top */}
                <div className="flex-1 flex flex-col justify-start pl-8">
                  <p className="text-base md:text-lg leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackingCards;
