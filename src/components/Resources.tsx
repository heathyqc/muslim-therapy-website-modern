
import React from 'react';
import { BookOpen, Video, Headphones, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Islamic Mental Health Articles',
      description: 'Evidence-based articles on mental health from an Islamic perspective.',
      type: 'Articles',
      count: '25+ Resources'
    },
    {
      icon: Video,
      title: 'Guided Meditation Videos',
      description: 'Islamic mindfulness and meditation practices for stress reduction.',
      type: 'Videos',
      count: '15+ Sessions'
    },
    {
      icon: Headphones,
      title: 'Mental Health Podcasts',
      description: 'Expert discussions on mental health topics relevant to Muslims.',
      type: 'Podcasts',
      count: '30+ Episodes'
    },
    {
      icon: Download,
      title: 'Self-Care Worksheets',
      description: 'Downloadable resources for personal reflection and growth.',
      type: 'Worksheets',
      count: '20+ Tools'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900 mb-6">
            Mental Health Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our curated collection of Islamic mental health resources to support 
            your journey of healing and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group bg-therapy-cream rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-therapy-teal rounded-lg flex items-center justify-center mb-4 group-hover:bg-therapy-teal-light transition-colors duration-300">
                <resource.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {resource.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-therapy-teal font-semibold text-sm">
                  {resource.count}
                </span>
                <span className="bg-therapy-gold/20 text-therapy-gold px-3 py-1 rounded-full text-xs font-medium">
                  {resource.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Resource */}
        <div className="bg-gradient-to-r from-therapy-teal to-therapy-teal-light rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-semibold mb-4">
                Free Mental Health Guide
              </h3>
              <p className="text-therapy-cream text-lg leading-relaxed mb-6">
                Download our comprehensive guide: "Mental Health in Islam: A Holistic Approach to 
                Wellness." This 40-page resource covers everything from Islamic perspectives on 
                mental health to practical coping strategies.
              </p>
              <Button 
                className="bg-white text-therapy-teal hover:bg-therapy-cream transition-colors duration-200 px-8 py-3"
              >
                Download Free Guide
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Mental health guide book"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-therapy-gold text-white px-4 py-2 rounded-full font-semibold text-sm">
                FREE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
