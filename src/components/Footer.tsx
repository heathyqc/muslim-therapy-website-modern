
import React from 'react';
import { Scale, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const services = [
    'Unfair Dismissal',
    'Discrimination Claims',
    'Employment Contracts',
    'Tribunal Representation',
    'Whistleblowing',
    'Workplace Harassment'
  ];

  const legalPages = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Complaints Procedure',
    'Professional Standards',
    'Regulatory Information'
  ];

  return (
    <footer className="bg-law-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-law-gold p-2 rounded-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Employment Law</h3>
                <p className="text-sm text-gray-300">Practitioners</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading employment law specialists providing expert legal representation 
              for employees and employers across the UK for over 25 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-law-gold" />
                <span>020 7123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-law-gold" />
                <span>info@employmentlawpractitioners.co.uk</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-law-gold" />
                <span>123 Legal Quarter, London EC4M 7RF</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm">Our Team</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm">Resources</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm">News & Updates</a></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal Information</h4>
            <ul className="space-y-3 mb-6">
              {legalPages.map((page, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-law-gold transition-colors duration-200 text-sm"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-law-navy-light p-4 rounded-lg">
              <p className="text-xs text-gray-300 mb-2">
                Regulated by the Solicitors Regulation Authority
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">SRA Number:</span>
                <span className="text-xs text-law-gold font-semibold">123456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-law-navy-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 Employment Law Practitioners. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-law-gold transition-colors duration-200">
                <ExternalLink className="w-5 h-5" />
              </a>
              <div className="text-xs text-gray-400">
                Website designed for WordPress integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
