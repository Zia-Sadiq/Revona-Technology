import React from 'react';
import revona from '../../public/revona.jpg';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={revona} 
                alt="Revona Technologies" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Revona Technologies</h3>
                <p className="text-gray-400 text-sm">Software Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We are a leading software house dedicated to delivering innovative technology solutions 
              that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/revona-technologies" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/revona_technologies/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/revona.technologies" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="../pages/About.tsx" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="../pages/Services.tsx" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="../pages/Portfolio.tsx" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="../pages/Contact.tsx" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300">info@revona.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300">+923457358388</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Bahawalpur, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Revona Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
