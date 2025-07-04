

import React from 'react';
import { Briefcase, Users, FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Unfair Dismissal',
      description: 'Expert representation for wrongful termination cases, ensuring your rights are protected.',
      features: ['Constructive dismissal', 'Redundancy claims', 'Disciplinary procedures', 'Settlement negotiations']
    },
    {
      icon: Users,
      title: 'Discrimination Claims',
      description: 'Fighting workplace discrimination based on protected characteristics.',
      features: ['Age discrimination', 'Disability discrimination', 'Gender discrimination', 'Race discrimination']
    },
    {
      icon: FileText,
      title: 'Employment Contracts',
      description: 'Comprehensive contract review and drafting services for employers and employees.',
      features: ['Contract negotiation', 'Terms review', 'Non-compete clauses', 'Severance packages']
    },
    {
      icon: Scale,
      title: 'Employment Tribunals',
      description: 'Expert representation at employment tribunals with proven success rates.',
      features: ['Tribunal preparation', 'Legal representation', 'Evidence gathering', 'Appeal procedures']
    },
    {
      icon: Shield,
      title: 'Whistleblowing',
      description: 'Protection for employees reporting wrongdoing in the workplace.',
      features: ['Protected disclosures', 'Detriment claims', 'Confidential advice', 'Legal protection']
    },
    {
      icon: AlertTriangle,
      title: 'Workplace Harassment',
      description: 'Addressing bullying and harassment in the workplace with sensitive approach.',
      features: ['Harassment claims', 'Bullying incidents', 'Hostile environment', 'Preventive measures']
    }
  ];

  return (
    <section id="services" className="py-20 bg-law-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
            Our Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive employment law services for both employees and employers, 
            delivered with expertise, integrity, and unwavering commitment to justice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-law-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-law-gold transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-law-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-law-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

