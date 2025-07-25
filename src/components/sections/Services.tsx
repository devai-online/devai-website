import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cloud, Code, Shield, BarChart3, Cpu, ArrowRight } from 'lucide-react';
import { services } from '../../data/content';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

const iconMap = {
  Bot: Bot,
  Cloud: Cloud,
  Code: Code,
  Shield: Shield,
  BarChart3: BarChart3,
  Cpu: Cpu,
};

export const Services: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="services" background="gradient">
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
            Our Core
            <span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in comprehensive technology solutions that drive modern business transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="h-full" hover glow>
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-neon-cyan rounded-2xl flex items-center justify-center glow-effect">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        onClick={scrollToContact}
                        className="w-full group"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your challenges and goals' },
              { step: '02', title: 'Strategy', desc: 'Crafting the perfect technical approach' },
              { step: '03', title: 'Build', desc: 'Rapid development with continuous feedback' },
              { step: '04', title: 'Scale', desc: 'Launch, monitor, and optimize for growth' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="text-5xl font-black text-accent-500/20 mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-gray-400">
                  {phase.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};