import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every solution is tailored to your specific business needs and objectives.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Rapid prototyping and deployment with agile methodologies.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with Sophos, Cisco, and advanced threat protection.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals in AI, DevOps, security, and web development.',
  },
];

export const About: React.FC = () => {
  return (
    <Section id="about" background="dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Building the Future of
                <span className="gradient-text block">Intelligent Business</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  We're not just developers—we're architects of digital transformation. 
                  With deep expertise in artificial intelligence, cloud infrastructure, 
                  cybersecurity, and modern web development, we help businesses leap into the future.
                </p>
                
                <p>
                  Our comprehensive approach combines cutting-edge AI technologies with 
                  enterprise-grade security solutions, robust networking infrastructure, 
                  and stunning web applications to create solutions that don't just work—they excel, 
                  scale, and adapt to your growing needs.
                </p>
                
                <p>
                  From Fortune 500 companies to innovative startups, we've delivered 
                  mission-critical systems that process millions of transactions, 
                  serve millions of users, protect against cyber threats, and generate millions in value.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '6+', label: 'Projects Delivered' },
                { number: '15+', label: 'Expert Team' },
                { number: '99.9%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <Card key={index} className="text-center space-y-4" hover glow>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-accent-500 to-neon-cyan rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};