'use client';

import { useEffect, useState } from 'react';
import './LoadingAnimation.css';

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lettersVisible, setLettersVisible] = useState<boolean[]>([]);

  const word = 'WebiPro';
  const letterCount = word.length;

  useEffect(() => {
    // Initialize all letters as not visible
    setLettersVisible(new Array(letterCount).fill(false));

    // Show letters sequentially
    const timers: NodeJS.Timeout[] = [];
    word.split('').forEach((_, index) => {
      const timer = setTimeout(() => {
        setLettersVisible((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 150); // 150ms delay between each letter
      timers.push(timer);
    });

    // Hide the entire loading screen after all animations complete
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, letterCount * 150 + 1300); // Wait for all letters to animate + 1.2 seconds

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(hideTimer);
    };
  }, [letterCount, word]);

  if (!isVisible) return null;

  return (
    <div className="loading-container">
      <div className="loading-word">
        {word.split('').map((letter, index) => {
          // Gradient boldness: first letter boldest (900), decreasing to 400
          // Valid font weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
          const weights = [900, 800, 700, 600, 500, 500, 400, 400];
          const fontWeight = weights[index] || 400;
          
          return (
            <span
              key={index}
              className={`loading-letter ${lettersVisible[index] ? 'visible' : ''}`}
              style={{
                fontWeight: fontWeight,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}

