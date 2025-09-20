import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import Zia from '../../public/Zia.jpg';
import Ali from '../../public/Ali.jpg';
import Khadeeja from '../../public/Khadeeja.jpg';
import Barfi from '../../public/Barfi.jpg';
import Mona from '../../public/Mona.jpg';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission-Driven',
      description: 'We are committed to delivering exceptional software solutions that exceed client expectations.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex problems.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships through trust and excellence.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards of quality in every project we undertake.'
    }
  ];

  const team = [
    {
      name: 'Zia Sadiq',
      // role: 'CEO && Founder',
      image: Zia
    },
    {
      name: 'Ali Irtza',
      // role: 'COO && CFO',
      image: Ali
    },
    {
      name: 'Khadeeja Shahid',
      // role: 'CPO',
      image: Khadeeja
    },
    {
      name: 'Mehvish Abbas',
      // role: 'CTO',
      image: Barfi
    },
    {
      name: 'Momna Naseem',
      // role: 'CHRO',
      image: Mona
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gray-600">Revona Technologies</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a passionate team of software engineers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2025, Revona Technologies emerged from a vision to bridge the gap between 
                innovative technology and practical business solutions. Our journey began with a small 
                team of passionate developers who believed that great software could transform businesses.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, we've grown into a full-service software house, serving clients across various 
                industries. Our commitment to excellence, innovation, and client satisfaction has been 
                the cornerstone of our success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We continue to evolve, embracing new technologies and methodologies to deliver solutions 
                that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working" 
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center cursor-pointer group"
              >
                <motion.div 
                  className="text-gray-700 mb-4 flex justify-center group-hover:text-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Co Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and a passion for innovation.
            </p>
          </motion.div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center"
                >
                  <motion.img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mx-auto mb-2 object-cover hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
