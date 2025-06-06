
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-therapy-gold">
              Muslim Therapy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional mental health services that honor your faith and cultural values. 
              We provide culturally competent therapy for the Muslim community with compassion, 
              understanding, and respect for Islamic principles.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-therapy-teal" />
                <span className="text-gray-300">123 Wellness Drive, Suite 200, MC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-therapy-teal" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-therapy-teal" />
                <span className="text-gray-300">info@muslimtherapy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-therapy-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Our Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">About Us</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Resources</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Contact</a></li>
              <li><a href="/appointments" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Book Appointment</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-therapy-gold">Services</h4>
            <ul className="space-y-3">
              <li><a href="/individual-therapy" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Individual Therapy</a></li>
              <li><a href="/couples-counseling" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Couples Counseling</a></li>
              <li><a href="/family-therapy" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Family Therapy</a></li>
              <li><a href="/group-therapy" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Group Therapy</a></li>
              <li><a href="/youth-counseling" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Youth Counseling</a></li>
              <li><a href="/spiritual-counseling" className="text-gray-300 hover:text-therapy-teal transition-colors duration-200">Spiritual Counseling</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-therapy-teal transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-therapy-teal transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-therapy-teal transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-therapy-teal transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Muslim Therapy. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2">
                <a href="/privacy" className="text-gray-400 hover:text-therapy-teal text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-therapy-teal text-sm transition-colors duration-200">Terms of Service</a>
                <a href="/hipaa" className="text-gray-400 hover:text-therapy-teal text-sm transition-colors duration-200">HIPAA Notice</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
