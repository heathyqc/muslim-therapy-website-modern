
import React from 'react';
import { ArrowRight, Shield, Award, Users, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-law-navy to-law-navy-light text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Expert Employment Law
                <span className="text-law-gold block">Representation</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Protecting employee rights and employer interests with over 25 years of combined experience in UK employment law.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-law-gold text-law-navy px-8 py-4 rounded-lg hover:bg-law-gold-dark transition-colors duration-200 font-semibold flex items-center justify-center group">
                Free Case Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-law-navy transition-colors duration-200 font-semibold">
                Call Now: 0161 505 1736
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-law-navy-light">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-law-gold" />
                </div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-law-gold" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-law-gold" />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-gray-300">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-law-gray rounded-2xl p-8 shadow-2xl">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Professional lawyer consultation"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-law-gold text-law-navy p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold">Free Consultation</div>
                <div className="text-xs">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
