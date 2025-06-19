import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false,
}) => {
  const baseClasses = 'bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6';
  const hoverClasses = hover ? 'card-hover cursor-pointer' : '';
  const glowClasses = glow ? 'border-glow' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};