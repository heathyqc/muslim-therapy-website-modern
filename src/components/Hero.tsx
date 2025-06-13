
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-law-navy to-law-navy-light text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Expert Employment Law
                <span className="text-law-gold block">Representation</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Protecting employee rights and employer interests with over 25 years of combined experience in UK employment law.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-law-gold text-law-navy px-8 py-4 rounded-lg hover:bg-law-gold-dark transition-colors duration-200 font-semibold flex items-center justify-center group">
                Free Case Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-law-navy transition-colors duration-200 font-semibold">
                Call Now: 0161 505 1736
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
