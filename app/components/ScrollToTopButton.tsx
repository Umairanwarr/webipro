'use client';

import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-[999] w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/90 text-gray-900 shadow-lg border border-gray-200 flex items-center justify-center backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#2b1b3a] hover:via-[#442d5c] hover:to-[#6b4ca8] hover:text-white hover:shadow-[0_16px_48px_rgba(43,27,58,0.65)] transition-all duration-300 hover:-translate-y-1"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15V5M10 5L5 10M10 5L15 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
