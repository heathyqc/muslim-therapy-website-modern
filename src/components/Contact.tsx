
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create mailto link with form data
    const recipient = 'n-aslam@outlook.com';
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get expert employment law advice. Contact us for a free consultation 
            and let us help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-law-navy mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-law-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-law-navy mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      ELP<br />
                      Ancoats Street<br />
                      Manchester<br />
                      Lancashire<br />
                      M4 6DN<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-law-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-law-navy mb-1">Phone</h4>
                    <p className="text-gray-600">0161 505 1736</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-law-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-law-navy mb-1">Email</h4>
                    <p className="text-gray-600">admin@employmentlawpractitioners.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-law-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-law-navy mb-1">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Emergency only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-law-navy text-white p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Free Consultation</h4>
              <p className="text-sm text-gray-300 mb-4">
                Get expert legal advice for your employment matter. No obligation, completely confidential.
              </p>
              <button className="bg-law-gold text-law-navy px-6 py-2 rounded-lg hover:bg-law-gold-dark transition-colors duration-200 font-semibold">
                Book Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-law-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold text-law-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-law-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-law-gold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-law-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-law-gold focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-law-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-law-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-law-navy mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-law-gold focus:outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="unfair-dismissal">Unfair Dismissal</option>
                      <option value="discrimination">Discrimination</option>
                      <option value="contract-review">Contract Review</option>
                      <option value="tribunal-representation">Tribunal Representation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-law-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-law-gold focus:outline-none resize-none"
                    placeholder="Please describe your legal matter in detail..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-law-navy text-white px-8 py-4 rounded-lg hover:bg-law-navy-light transition-colors duration-200 font-semibold flex items-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
