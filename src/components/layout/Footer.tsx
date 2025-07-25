import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

const socialLinks = [
  { icon: Github, href: 'https://github.com/devai-online', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/devai-online', label: 'LinkedIn' },
  
];

const quickLinks = [
  { name: 'AI Solutions', href: '#services' },
  { name: 'DevOps Services', href: '#services' },
  { name: 'About Us', href: '#about' },
];

const contactInfo = [
  { icon: Mail, text: 'contact@devai.online', href: 'mailto:contact@devai.online' },
  { icon: Phone, text: '+91 9989498462', href: 'https://wa.me/919989498462' },
  { icon: MapPin, text: 'Hyderabad, India', href: '#' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-neon-cyan/20 blur-xl rounded-lg" />
                <div className="relative">
                  <Logo />
                </div>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-accent-500 to-neon-cyan bg-clip-text text-transparent">
                DevAI
              </h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through AI innovation, cybersecurity, web development, 
              and cloud-native infrastructure. Building the future, one intelligent solution at a time.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-400 hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>AI Agent Development</li>
              <li>Cloud Migration</li>
              <li>DevOps Automation</li>
              <li>Cybersecurity Solutions</li>
              <li>Web Development</li>
              <li>Dashboard & Analytics</li>
              <li>Network Infrastructure</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-accent-400 transition-colors group"
                  >
                    <item.icon size={24} className="text-white" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} DevAI. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};