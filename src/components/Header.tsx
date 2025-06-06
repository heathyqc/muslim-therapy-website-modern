
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-therapy-teal border-b border-therapy-cream">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@muslimtherapy.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-therapy-teal">
              Muslim Therapy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-therapy-teal transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-therapy-teal hover:bg-therapy-teal-light text-white px-6 py-2">
              Book Consultation
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-therapy-cream">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-therapy-teal transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-therapy-teal hover:bg-therapy-teal-light text-white w-full mt-4">
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
