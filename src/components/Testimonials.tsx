
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'James Morrison',
      role: 'Marketing Manager',
      company: 'Tech Solutions Ltd',
      content: 'Employment Law Practitioners helped me through a difficult unfair dismissal case. Their expertise and support were invaluable, and we achieved an excellent settlement.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Thompson',
      role: 'HR Director',
      company: 'Global Manufacturing',
      content: 'As an employer, we rely on their guidance for complex employment matters. Their practical advice has helped us avoid costly disputes and maintain good employee relations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b6bb8534?w=150&h=150&fit=crop'
    },
    {
      name: 'David Kumar',
      role: 'Software Developer',
      company: 'Innovation Hub',
      content: 'They successfully handled my discrimination case with professionalism and compassion. I felt supported throughout the entire process and the outcome exceeded my expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            our employment law services and the results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-law-gray rounded-xl p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-law-gold opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-law-gold fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-law-navy">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-law-gold">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-law-gold text-white px-8 py-4 rounded-lg hover:bg-law-gold-dark transition-colors duration-200 font-semibold">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
