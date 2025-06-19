import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'gradient' | 'dots';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'default',
}) => {
  const backgrounds = {
    default: '',
    gradient: 'bg-gradient-to-br from-black via-gray-900 to-black',
    dots: 'bg-black bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,163,0.05)_1px,transparent_0)] bg-[length:20px_20px]',
  };

  return (
    <section
      id={id}
      className={`py-20 lg:py-32 relative overflow-hidden ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  );
};