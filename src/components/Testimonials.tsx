
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha M.",
      role: "Individual Therapy Client",
      content: "Finding a therapist who understood both my faith and my struggles was life-changing. The care I received here helped me heal while staying true to my Islamic values.",
      rating: 5
    },
    {
      name: "Omar & Fatima K.",
      role: "Couples Counseling",
      content: "Our marriage was strengthened through counseling that honored our Islamic principles. We learned better communication while deepening our spiritual connection.",
      rating: 5
    },
    {
      name: "Zainab A.",
      role: "Family Therapy",
      content: "The family therapy sessions helped us navigate cultural differences between generations. Our therapist understood the unique challenges Muslim families face.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-therapy-teal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-therapy-cream max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who found healing and growth through our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-therapy-gold mb-4" />
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-therapy-gold text-therapy-gold" />
                  ))}
                </div>
              </div>

              <p className="text-therapy-cream leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              <div className="border-t border-white/20 pt-6">
                <h4 className="font-semibold text-white text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-therapy-cream text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 rounded-full px-8 py-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-therapy-gold text-therapy-gold" />
              ))}
            </div>
            <div className="border-l border-white/30 pl-4">
              <p className="text-white font-semibold">4.9/5 Average Rating</p>
              <p className="text-therapy-cream text-sm">Based on 200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
