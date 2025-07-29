import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2 } from 'lucide-react';
import { clients } from '../../data/content';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export const Clients: React.FC = () => {
  return (
    <Section id="clients" background="dots">
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
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud to partner with innovative companies across various industries, 
            delivering cutting-edge solutions that drive their success
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="h-full group" hover glow>
                <div className="space-y-6">
                  {/* Client Logo */}
                  <div className="relative overflow-hidden rounded-lg -mx-6 -mt-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <div className="h-48 flex items-center justify-center p-8">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                          client.name === "Picklout" ? "scale-150" : ""
                        }`}
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {client.category}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Client Name */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-neon-cyan rounded-xl flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {client.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {client.description}
                    </p>

                    {/* Visit Website Button */}
                    <div className="pt-4">
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors group"
                      >
                        <span className="font-semibold">Visit Website</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Client Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI, DevOps, 
              and web development expertise
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-neon-cyan text-black font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}; 