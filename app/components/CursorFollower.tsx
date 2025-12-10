"use client";

import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

export function CursorFollower() {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const padding = 12;
      const maxX = window.innerWidth - padding;
      const maxY = window.innerHeight - padding;

      const x = Math.min(maxX, Math.max(padding, event.clientX));
      const y = Math.min(maxY, Math.max(padding, event.clientY));

      targetRef.current = {
        x,
        y,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((previous) => {
        const ease = 0.12; // smaller value = more delay / trailing
        const dx = targetRef.current.x - previous.x;
        const dy = targetRef.current.y - previous.y;

        return {
          x: previous.x + dx * ease,
          y: previous.y + dy * ease,
        };
      });

      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="cursor-follower"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
