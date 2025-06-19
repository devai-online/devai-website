import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  projectType: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    projectType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const res = await fetch('https://formspree.io/f/xeoklqkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
          projectType: formData.projectType,
        }),
      });
  
      if (!res.ok) throw new Error('Failed to send');
  
      alert("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        projectType: '',
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }
  
    setIsSubmitting(false);
  };
  
  

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@devai.online',
      href: 'mailto:contact@devai.online',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9989498462',
      href: 'https://wa.me/919989498462',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, India',
      href: '#',
    },
    {
      icon: Calendar,
      title: 'Response Time',
      value: '< 24 hours',
      href: '#',
    },
  ];

  return (
    <Section id="contact" background="gradient">
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
            Ready to Transform
            <span className="gradient-text"> Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and explore how AI and modern infrastructure can accelerate your growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8" glow>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                      placeholder="e.g.₹50,000 - ₹1,00,000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                  >
                    <option value="">Select project type</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="devops-setup">DevOps Setup</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="full-stack-app">Full-Stack Application</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-colors"
                    placeholder="Tell us about your project, challenges, and goals..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={Send}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to discuss your next big project? We're here to help you navigate 
                the complexities of AI integration and cloud transformation. Let's build 
                something amazing together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="block"
                >
                  <Card className="text-center space-y-4" hover>
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-accent-500 to-neon-cyan rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="p-6 text-center" glow>
              <h4 className="text-xl font-bold text-white mb-4">
                Need immediate assistance?
              </h4>
              <p className="text-gray-300 mb-6">
                For urgent projects or quick questions, reach out directly
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  onClick={() => window.open('mailto:contact@devai.online')}
                  className="flex-1"
                >
                  Quick Email
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://wa.me/919989498462')}
                  className="flex-1"
                >
                  WhatsApp
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};