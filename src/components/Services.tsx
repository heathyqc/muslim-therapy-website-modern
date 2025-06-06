
import React from 'react';
import { Users, Heart, Brain, Home, Couple, Baby } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'One-on-one counseling sessions tailored to your unique needs, incorporating Islamic principles and values.',
      features: ['Anxiety & Depression', 'Trauma Recovery', 'Life Transitions', 'Identity & Faith']
    },
    {
      icon: Couple,
      title: 'Couples Counseling',
      description: 'Strengthen your marriage through Islamic guidance and professional therapeutic techniques.',
      features: ['Communication Skills', 'Conflict Resolution', 'Islamic Marriage Principles', 'Intimacy & Connection']
    },
    {
      icon: Home,
      title: 'Family Therapy',
      description: 'Healing and growth for the entire family unit, respecting Islamic family structures.',
      features: ['Parent-Child Relationships', 'Extended Family Dynamics', 'Cultural Integration', 'Generational Healing']
    },
    {
      icon: Users,
      title: 'Group Therapy',
      description: 'Connect with others in your community facing similar challenges in a supportive environment.',
      features: ['Support Groups', 'Skills Training', 'Community Building', 'Shared Experiences']
    },
    {
      icon: Baby,
      title: 'Youth & Adolescent',
      description: 'Specialized care for young Muslims navigating identity, faith, and modern challenges.',
      features: ['Identity Development', 'Academic Stress', 'Peer Relationships', 'Faith & Culture']
    },
    {
      icon: Heart,
      title: 'Spiritual Counseling',
      description: 'Integrate your spiritual beliefs with mental health care for holistic healing.',
      features: ['Faith-Based Healing', 'Spiritual Growth', 'Religious Struggles', 'Purpose & Meaning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health services designed to honor your faith while promoting 
            healing, growth, and well-being for individuals, couples, and families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-therapy-cream rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-therapy-teal rounded-full flex items-center justify-center mb-4 group-hover:bg-therapy-teal-light transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-therapy-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-therapy-gold/20">
                <button className="text-therapy-teal font-semibold hover:text-therapy-teal-light transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
