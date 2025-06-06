
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-therapy-cream to-white min-h-screen flex items-center">
      {/* Decorative Islamic pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="currentColor" />
            <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-gray-900 leading-tight">
            Culturally Sensitive
            <span className="text-therapy-teal block">Mental Health Care</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Professional therapy services that honor your faith and cultural values. 
            Find healing and growth in a safe, understanding environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-therapy-teal hover:bg-therapy-teal-light text-white px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-therapy-teal text-therapy-teal hover:bg-therapy-teal hover:text-white px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-therapy-teal-light/20 rounded-full">
                <Shield className="w-5 h-5 text-therapy-teal" />
              </div>
              <span className="text-sm font-medium text-gray-700">Licensed Professionals</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-therapy-teal-light/20 rounded-full">
                <Heart className="w-5 h-5 text-therapy-teal" />
              </div>
              <span className="text-sm font-medium text-gray-700">Faith-Integrated Care</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-therapy-teal-light/20 rounded-full">
                <Users className="w-5 h-5 text-therapy-teal" />
              </div>
              <span className="text-sm font-medium text-gray-700">Community Focused</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-therapy-sage to-therapy-teal-light rounded-2xl p-8 shadow-2xl animate-float">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Therapy session in a welcoming environment"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-playfair text-xl font-semibold text-gray-800">
                  Safe & Welcoming Space
                </h3>
                <p className="text-gray-600 mt-2">
                  Where faith and healing come together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
