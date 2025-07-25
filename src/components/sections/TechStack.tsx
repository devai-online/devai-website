import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../../data/content';
import { Section } from '../ui/Section';

const categoryColors = {
  AI: 'from-purple-500 to-pink-500',
  DevOps: 'from-blue-500 to-cyan-500',
  Cloud: 'from-green-500 to-teal-500',
  'AI Database': 'from-indigo-500 to-purple-500',
  Security: 'from-red-500 to-orange-500',
  Networking: 'from-blue-600 to-indigo-600',
  Frontend: 'from-emerald-500 to-green-500',
  Backend: 'from-slate-500 to-gray-600',
  Development: 'from-violet-500 to-purple-600',
  Analytics: 'from-amber-500 to-yellow-500',
  Monitoring: 'from-cyan-500 to-blue-500'
};

export const TechStack: React.FC = () => {
  return (
    <Section id="tech-stack" background="gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Cutting-Edge
            <span className="gradient-text"> Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage the latest and most powerful technologies to build solutions that scale
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center transition-all duration-300 hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-500/10">
                {/* Tech Name */}
                <div className="text-white font-semibold mb-2 group-hover:text-accent-400 transition-colors">
                  {tech.name}
                </div>
                
                {/* Category Badge */}
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                  categoryColors[tech.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'
                } text-white`}>
                  {tech.category}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500/0 to-neon-cyan/0 group-hover:from-accent-500/5 group-hover:to-neon-cyan/5 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};