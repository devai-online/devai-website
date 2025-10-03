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
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various industries, 
            delivering cutting-edge solutions that drive their success
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="h-full group" hover>
                <div className="space-y-6">
                  {/* Client Logo */}
                  <div className="relative overflow-hidden rounded-lg -mx-4 -mt-4 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/60 dark:to-gray-900/60">
                    <div className="h-32 flex items-center justify-center p-4">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                          client.name === "Picklout" ? "scale-150" : ""
                        }`}
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-accent-500/80 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                        {client.category}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-3 h-3 text-gray-600" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Client Name */}
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-accent-500/80 to-neon-cyan/80 rounded-lg flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-gray-800" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {client.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-xs line-clamp-3">
                      {client.description}
                    </p>

                    {/* Visit Website Button */}
                    <div className="pt-2">
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-accent-400/80 hover:text-accent-300 transition-colors group text-xs"
                      >
                        <span className="font-medium">Visit Website</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ready to Join Our Client Success Stories?
            </h3>
            <p className="text-gray-400 mb-3 max-w-xl mx-auto text-sm">
              Let's discuss how we can help transform your business with our AI, DevOps, 
              and web development expertise
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500/80 to-neon-cyan/80 text-gray-900 font-medium px-4 py-2 rounded-lg hover:shadow-md hover:shadow-accent-500/20 transition-all duration-300 text-sm"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}; 