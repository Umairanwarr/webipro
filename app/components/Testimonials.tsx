'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  {
    id: 1,
    name: "Abu Saad Abdullah Yahya",
    role: "Islamic teacher, Arraheeq",
    text: "WebiPro helped transform our Islamic teaching website into a modern, efficient learning platform. Their expertise in digital tools and smart automation made our online classes smoother, faster, and more engaging for our students.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Bilal Khan",
    role: "CEO, London Consultants",
    text: "Working with WebiPro was a great experience. Their team understood exactly what we wanted, and they built our real estate website clearly and smoothly from start to finish.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Anish Hamayoon",
    role: "Director, Quickdate",
    text: "The data analytics dashboard WebiPro built for us is simply incredible. It's intuitive, fast, and handles our massive datasets with ease. Highly recommended!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current.filter(Boolean);

    // Animate title
    gsap.fromTo('.testimonial-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Staggered card animation
    gsap.fromTo(cards,
      { y: 100, opacity: 0, rotation: 5 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );

    // Floating animation for cards
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: -20,
        duration: 2 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
    });

  }, []);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 testimonial-title">
          <p className="text-sm tracking-widest uppercase font-semibold text-[#442d5c] mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl mx-auto">
            Trusted by Innovative Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
              <div className="relative h-full bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H10C10.5304 21 11.0391 20.7893 11.4142 20.4142C11.7893 20.0391 12 19.5304 12 19V13C12 12.4696 11.7893 11.9609 11.4142 11.5858C11.0391 11.2107 10.5304 11 10 11ZM10 11V7C10 5.93913 10.4214 4.92172 11.1716 4.17157C11.9217 3.42143 12.9391 3 14 3M20 11H16C15.4696 11 14.9609 11.2107 14.5858 11.5858C14.2107 11.9609 14 12.4696 14 13V19C14 19.5304 14.2107 20.0391 14.5858 20.4142C14.9609 20.7893 15.4696 21 16 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V13C22 12.4696 21.7893 11.9609 21.4142 11.5858C21.0391 11.2107 20.5304 11 20 11ZM20 11V7C20 5.93913 20.4214 4.92172 21.1716 4.17157C21.9217 3.42143 22.9391 3 24 3" stroke="#442d5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-1">
                  "{testimonial.text}"
                </p>

                <div className="flex flex-col mt-auto">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
