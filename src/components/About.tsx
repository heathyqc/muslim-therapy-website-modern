
import React from 'react';
import { Award, GraduationCap, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-therapy-cream to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900 mb-6">
                About Muslim Therapy
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We understand that mental health care is most effective when it aligns with your 
                cultural values and spiritual beliefs. Our team of licensed professionals combines 
                evidence-based therapeutic approaches with deep respect for Islamic principles.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-therapy-teal-light/20 rounded-full mt-1">
                  <Heart className="w-6 h-6 text-therapy-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Culturally Competent Care</h3>
                  <p className="text-gray-600">
                    Our therapists understand the unique challenges faced by the Muslim community 
                    and provide care that respects your cultural and religious identity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-therapy-gold/20 rounded-full mt-1">
                  <Award className="w-6 h-6 text-therapy-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed Professionals</h3>
                  <p className="text-gray-600">
                    All our therapists are licensed mental health professionals with specialized 
                    training in working with Muslim clients and faith-integrated therapy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-therapy-sage/30 rounded-full mt-1">
                  <Users className="w-6 h-6 text-therapy-sage" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
                  <p className="text-gray-600">
                    We work closely with local mosques, Islamic centers, and community leaders 
                    to provide comprehensive support for mental health and spiritual wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Professional therapy office"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <div className="bg-therapy-teal text-white p-6 rounded-xl">
                  <h4 className="text-2xl font-bold mb-2">500+</h4>
                  <p className="text-therapy-cream">Clients Served</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-therapy-gold text-white p-6 rounded-xl">
                  <h4 className="text-2xl font-bold mb-2">15+</h4>
                  <p className="text-therapy-gold-light">Years Experience</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Diverse therapy team"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Floating credential badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl border-4 border-therapy-cream">
              <GraduationCap className="w-8 h-8 text-therapy-teal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
