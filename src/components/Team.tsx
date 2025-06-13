import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      title: 'Senior Partner',
      speciality: 'Employment Tribunal Specialist',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop',
      email: 'sarah.johnson@employmentlawpractitioners.co.uk',
      phone: '020 7123 4568'
    },
    {
      name: 'Michael Chen',
      title: 'Partner',
      speciality: 'Discrimination & Harassment',
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
      email: 'michael.chen@employmentlawpractitioners.co.uk',
      phone: '020 7123 4569'
    },
    {
      name: 'Emma Williams',
      title: 'Associate Solicitor',
      speciality: 'Contract & Dismissal Law',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
      email: 'emma.williams@employmentlawpractitioners.co.uk',
      phone: '020 7123 4570'
    }
  ];

  return (
    <section id="team" className="py-20 bg-law-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
            Our Expert Legal Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our experienced employment law specialists who are dedicated to protecting 
            your rights and achieving the best possible outcomes for your case.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-law-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {member.experience}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-law-navy mb-1">{member.name}</h3>
                  <p className="text-law-gold font-semibold mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.speciality}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-law-navy text-white py-2 rounded-lg hover:bg-law-navy-light transition-colors duration-200 font-medium">
                  Contact {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
