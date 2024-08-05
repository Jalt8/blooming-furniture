"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-daisy-cream pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-dark-wood mb-12">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white-daisy shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-dark-wood mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-forest-green mr-4" />
                  <span className="text-dark-wood">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-forest-green mr-4" />
                  <span className="text-dark-wood">info@timelesstouch.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-forest-green mr-4" />
                  <span className="text-dark-wood">123 Restoration St, Furniture City, FC 12345</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-forest-green mr-4" />
                  <span className="text-dark-wood">Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
                </div>
              </div>
            </div>
            <div className="bg-golden-center p-4">
              <h3 className="text-dark-wood text-lg font-semibold mb-2">Quick Response Promise</h3>
              <p className="text-forest-green">We aim to respond to all inquiries within 24 hours.</p>
            </div>
          </div>

          <div className="bg-white-daisy shadow-lg rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8">
              <h2 className="text-2xl font-semibold text-dark-wood mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-wood mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-golden-center rounded-md shadow-sm placeholder-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-wood mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-golden-center rounded-md shadow-sm placeholder-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-wood mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-3 py-2 border border-golden-center rounded-md shadow-sm placeholder-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-wood mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={4}
                    className="w-full px-3 py-2 border border-golden-center rounded-md shadow-sm placeholder-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-forest-green text-white-daisy py-3 px-4 rounded-md hover:bg-dark-wood focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-green flex items-center justify-center transition duration-150 ease-in-out"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white-daisy shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-dark-wood mb-6">Visit Our Workshop</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1961868213017!2d-73.98631932403373!3d40.74881524332175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1685144985191!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;