'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skills = [
  { label: 'AI', value: 100 },
  { label: 'Data Science', value: 100 },
  { label: 'Development', value: 100 },
  { label: 'Designing', value: 100 },
];

const AboutSkills = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const fills = gsap.utils.toArray<HTMLElement>('.about-skill-bar-fill');
      const valueEls = gsap.utils.toArray<HTMLElement>('.about-skill-value');
      if (!fills.length) return;

      // Start bars from 0 and fill to 100% when About section enters view
      gsap.set(fills, { scaleX: 0, transformOrigin: 'left center' });

      gsap.to(fills, {
        scaleX: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // Animate numeric values from 0 to the target percentage
      valueEls.forEach((el) => {
        const finalValue = Number(el.dataset.value ?? '100');
        const obj = { val: 0 };

        gsap.to(obj, {
          val: finalValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}%`;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="about-skills-grid">
      {skills.map((skill) => (
        <div key={skill.label} className="about-skill">
          <div className="about-skill-header">
            <span>{skill.label}</span>
            <span
              className="about-skill-value"
              data-value={skill.value}
            >
              0%
            </span>
          </div>
          <div className="about-skill-bar">
            <span className="about-skill-bar-fill" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
