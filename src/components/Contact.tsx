
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-therapy-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to begin your healing journey? Contact us today to schedule a consultation 
            or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-therapy-teal-light/20 rounded-full">
                    <MapPin className="w-6 h-6 text-therapy-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">
                      123 Wellness Drive, Suite 200<br />
                      Muslim Quarter, MC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-therapy-gold/20 rounded-full">
                    <Phone className="w-6 h-6 text-therapy-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-therapy-sage/30 rounded-full">
                    <Mail className="w-6 h-6 text-therapy-sage" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@muslimtherapy.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-therapy-teal/20 rounded-full">
                    <Clock className="w-6 h-6 text-therapy-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 mb-2">Crisis Support</h4>
              <p className="text-red-700 text-sm mb-3">
                If you're experiencing a mental health emergency, please contact:
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-red-800 font-semibold">Crisis Hotline: 988</p>
                <p className="text-red-700">Emergency Services: 911</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your last name"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-therapy-teal focus:border-transparent">
                  <option>Select a service...</option>
                  <option>Individual Therapy</option>
                  <option>Couples Counseling</option>
                  <option>Family Therapy</option>
                  <option>Group Therapy</option>
                  <option>Youth & Adolescent</option>
                  <option>Spiritual Counseling</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Please tell us a bit about what brings you here and how we can help..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="text-sm text-gray-600">
                <p>
                  By submitting this form, you consent to us contacting you about our services. 
                  Your information is kept confidential and secure.
                </p>
              </div>

              <Button 
                type="submit"
                className="w-full bg-therapy-teal hover:bg-therapy-teal-light text-white py-3 text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
