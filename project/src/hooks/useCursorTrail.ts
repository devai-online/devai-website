import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

export const useCursorTrail = () => {
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const trail = trailRef.current;
    const trailLength = 5;

    const handleMouseMove = (e: MouseEvent) => {
      trail.unshift({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      });

      if (trail.length > trailLength) {
        trail.splice(trailLength);
      }
    };

    const animate = () => {
      trail.forEach((point, index) => {
        point.opacity *= 0.9;
        if (point.opacity < 0.01) {
          trail.splice(index, 1);
        }
      });

      // Update DOM elements
      const trailElements = document.querySelectorAll('.cursor-trail');
      trailElements.forEach((element, index) => {
        const point = trail[index];
        if (point && element instanceof HTMLElement) {
          element.style.left = `${point.x - 10}px`;
          element.style.top = `${point.y - 10}px`;
          element.style.opacity = point.opacity.toString();
          element.style.transform = `scale(${point.opacity})`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return null;
};