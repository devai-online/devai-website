import React, { useEffect } from 'react';

export const CursorTrail: React.FC = () => {
  useEffect(() => {
    // Create trail elements
    const trailCount = 5;
    const trails: HTMLElement[] = [];

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.position = 'fixed';
      trail.style.pointerEvents = 'none';
      trail.style.zIndex = '9999';
      trail.style.width = '20px';
      trail.style.height = '20px';
      trail.style.borderRadius = '50%';
      trail.style.background = `radial-gradient(circle, rgba(0, 255, 163, ${0.6 - i * 0.1}) 0%, transparent 70%)`;
      trail.style.transform = 'translate(-50%, -50%)';
      trail.style.transition = 'all 0.1s ease';
      document.body.appendChild(trail);
      trails.push(trail);
    }

    let mouseX = 0;
    let mouseY = 0;
    const positions: Array<{x: number, y: number}> = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      positions.unshift({ x: mouseX, y: mouseY });
      if (positions.length > trailCount) {
        positions.pop();
      }
    };

    const updateTrails = () => {
      trails.forEach((trail, index) => {
        const position = positions[index];
        if (position) {
          trail.style.left = `${position.x}px`;
          trail.style.top = `${position.y}px`;
          trail.style.opacity = (1 - index * 0.15).toString();
          trail.style.transform = `translate(-50%, -50%) scale(${1 - index * 0.1})`;
        }
      });
      requestAnimationFrame(updateTrails);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateTrails();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return null;
};