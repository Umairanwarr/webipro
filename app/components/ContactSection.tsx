'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    // Animate Info Side
    tl.fromTo(infoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate Form Side
    tl.fromTo(formRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Stagger form elements
    if (formRef.current) {
      const elements = formRef.current.querySelectorAll('.form-element');
      tl.fromTo(elements,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.5"
      );
    }

  }, []);

  // Countdown timer effect
  useLayoutEffect(() => {
    if (countdown === 0) return;
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setCountdown(5);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "18781516-5850-4bed-a843-bfef10cb9cdd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setResult("");
    }, 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative text-white overflow-hidden bg-gradient-to-br from-[#0f0b18] via-[#1a1227] to-[#0b0a16]"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#a855f7]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div ref={infoRef}>
            <p className="text-sm tracking-widest uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9b7bff] via-[#b490ff] to-[#d2c1ff] drop-shadow-[0_0_10px_rgba(107,76,168,0.35)] mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b7bff] via-[#b490ff] to-[#d2c1ff] drop-shadow-[0_0_12px_rgba(107,76,168,0.35)]">
                Conversation
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a project in mind? We'd love to hear about it. Send us a message and let's create something amazing together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:bg-[#a855f7]/20 group-hover:text-[#a855f7] transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Email Us</p>
                  <p className="text-xl font-medium text-white">contact@webipro.dev</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={onSubmit} className="bg-gray-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border-gray-700/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-element space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-900/50 border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-transparent focus:shadow-[0_0_0_1px_#2b1b3a,0_0_0_2px_#442d5c,0_0_0_3px_#6b4ca8] transition-all placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-element space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-900/50 border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-transparent focus:shadow-[0_0_0_1px_#2b1b3a,0_0_0_2px_#42d5c,0_0_0_3px_#6b4ca8] transition-all placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-element space-y-2 mb-6">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-400 ml-1">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full bg-gray-900/50 border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-transparent focus:shadow-[0_0_0_1px_#2b1b3a,0_0_0_2px_#442d5c,0_0_0_3px_#6b4ca8] transition-all"
              >
                <option value="">Select a topic</option>
                <option value="project">Start a Project</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="form-element space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-gray-900/50 border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-transparent focus:shadow-[0_0_0_1px_#2b1b3a,0_0_0_2px_#442d5c,0_0_0_3px_#6b4ca8] transition-all placeholder-gray-600 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`form-element relative isolate w-full overflow-hidden text-white font-bold py-4 rounded-xl border backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group ${
                isSubmitting 
                  ? 'bg-green-600/50 border-green-500/50 cursor-not-allowed shadow-[0_12px_40px_rgba(22,163,74,0.3)]'
                  : 'bg-gradient-to-r from-[#2b1b3a] via-[#442d5c] to-[#6b4ca8] border-white/10 shadow-[0_12px_40px_rgba(43,27,58,0.55)] hover:shadow-[0_16px_48px_rgba(43,27,58,0.65)] hover:scale-[1.02]'
              }`}
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.32),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.25),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(27,17,36,0.6),transparent_42%)] blur-2xl opacity-90"
              />
              {isSubmitting ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                    <path d="M9 16.17L4.83 12m0 0l-1.42 1.41L9 19 21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Sent! ({countdown}s)</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                    <path d="M10.8333 5L15.8333 10M15.8333 10L10.8333 15M15.8333 10L4.16667 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
