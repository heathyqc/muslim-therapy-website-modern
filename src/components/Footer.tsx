
import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    'Unfair Dismissal',
    'Discrimination Claims',
    'Employment Contracts',
    'Tribunal Representation',
    'Whistleblowing',
    'Workplace Harassment'
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:admin@employmentlawpractitioners.co.uk';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:01615051736';
  };

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
                <h3 className="text-xl font-bold">Akamai Legal</h3>
                <p className="text-sm text-gray-300">Employment Law Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading employment law specialists providing expert legal representation 
              for employees and employers across the UK for over 25 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm cursor-pointer" onClick={handlePhoneClick}>
                <Phone className="w-4 h-4 text-law-gold" />
                <span>0161 505 1736</span>
              </div>
              <div className="flex items-center space-x-3 text-sm cursor-pointer" onClick={handleEmailClick}>
                <Mail className="w-4 h-4 text-law-gold" />
                <span>admin@employmentlawpractitioners.co.uk</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-law-gold" />
                <span>Akamai Legal, Ancoats Street, Manchester, Lancashire M4 6DN</span>
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
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Ready to discuss your employment law needs? Contact us today for expert advice.
              </p>
              <button 
                onClick={handleEmailClick}
                className="bg-law-gold text-law-navy px-6 py-3 rounded-lg hover:bg-law-gold-dark transition-colors duration-200 font-semibold w-full"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-law-navy-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 Akamai Legal. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
