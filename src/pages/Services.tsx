import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Settings, 
  Users,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: [
        'Enterprise Applications',
        'Desktop Software',
        'API Development',
        'System Integration',
        'Legacy System Modernization'
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications using the latest technologies and frameworks.',
      features: [
        'React & Next.js Applications',
        'E-commerce Platforms',
        'Content Management Systems',
        'Progressive Web Apps',
        'SEO Optimization'
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'iOS & Android Native Apps',
        'React Native Development',
        'Flutter Applications',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Database Solutions',
      description: 'Comprehensive database design, optimization, and management services for your data needs.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Database Security'
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your IT environment.',
      features: [
        'AWS & Azure Services',
        'Cloud Migration',
        'DevOps & CI/CD',
        'Serverless Architecture',
        'Cloud Security'
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and sensitive data.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Solutions',
        'Security Training',
        'Incident Response'
      ]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions about your IT investments.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Architecture Review',
        'Process Optimization',
        'Technology Roadmaps'
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance services to keep your systems running smoothly.',
      features: [
        '24/7 Technical Support',
        'System Monitoring',
        'Regular Updates',
        'Performance Optimization',
        'Bug Fixes & Patches'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the system architecture and user experience.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies and rigorous testing.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-600">Services</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive software development services designed to accelerate your digital transformation 
              and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <motion.div 
                  className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center"
              >
                <motion.div 
                  className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how we can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;