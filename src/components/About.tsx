
import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest standard of legal representation.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work tirelessly for the best outcomes.'
    },
    {
      icon: Clock,
      title: 'Responsive',
      description: 'Quick response times and regular updates throughout your case.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Proven track record of successful outcomes for our clients.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
                Leading Employment Law Expertise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Employment Law Practitioners has been at the forefront of UK employment law for over two decades. 
                Our team of specialist solicitors provides expert legal advice and representation to both 
                employees and employers across all aspects of employment law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand that employment disputes can be stressful and complex. That's why we're committed 
                to providing clear, practical advice and strong representation to achieve the best possible 
                outcomes for our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-law-gold p-3 rounded-lg flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-law-navy mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-law-gray rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop"
                alt="Professional law office"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 bg-law-gold text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
