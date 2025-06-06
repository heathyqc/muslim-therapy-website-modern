
import React from 'react';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Employee Rights Guide',
      description: 'Comprehensive guide to understanding your rights in the workplace.',
      type: 'PDF Guide',
      date: 'Updated Dec 2024',
      icon: FileText
    },
    {
      title: 'Dismissal Procedures Checklist',
      description: 'Essential checklist for employers handling dismissal procedures.',
      type: 'Checklist',
      date: 'Updated Nov 2024',
      icon: Download
    },
    {
      title: 'Latest Employment Law Updates',
      description: 'Recent changes to UK employment legislation and their implications.',
      type: 'Article',
      date: 'Published Dec 2024',
      icon: ExternalLink
    },
    {
      title: 'Discrimination in the Workplace',
      description: 'Understanding different types of workplace discrimination and remedies.',
      type: 'Guide',
      date: 'Updated Oct 2024',
      icon: FileText
    }
  ];

  const events = [
    {
      title: 'Employment Law Webinar',
      date: 'January 15, 2025',
      time: '2:00 PM - 3:30 PM',
      description: 'Latest updates in UK employment law for 2025'
    },
    {
      title: 'Free Legal Clinic',
      date: 'January 22, 2025',
      time: '10:00 AM - 4:00 PM',
      description: 'Free 30-minute consultations for employment issues'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-law-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
            Legal Resources & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest guides, updates, and upcoming events 
            designed to help you navigate employment law matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-law-navy mb-6">Latest Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-law-navy p-3 rounded-lg flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-law-gold uppercase tracking-wide">
                          {resource.type}
                        </span>
                        <span className="text-xs text-gray-500">{resource.date}</span>
                      </div>
                      <h4 className="font-semibold text-law-navy mb-2">{resource.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                      <button className="text-law-navy hover:text-law-gold transition-colors duration-200 text-sm font-semibold">
                        Download →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-2xl font-bold text-law-navy mb-6">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-law-gold p-3 rounded-lg flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-law-navy mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                      <p className="text-sm text-gray-600 mb-3">{event.time}</p>
                      <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                      <button className="bg-law-navy text-white px-4 py-2 rounded-lg hover:bg-law-navy-light transition-colors duration-200 text-sm font-semibold">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
