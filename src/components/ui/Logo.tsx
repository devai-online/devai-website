import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="relative w-10 h-10">
      {/* Lightning bolt with glow effect */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Main lightning bolt */}
        <path
          d="M13 2L4 14h6l-3 8 9-12h-6l3-8z"
          fill="currentColor"
          className="text-neon-cyan"
          filter="url(#glow)"
        />
        
        {/* Inner highlight */}
        <path
          d="M13 4L6 14h4l-2 6 7-10h-4l2-6z"
          fill="currentColor"
          className="text-accent-500"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}; 