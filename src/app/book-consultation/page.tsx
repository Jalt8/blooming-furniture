'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, Clock, Hammer, Star } from 'lucide-react';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';

const BookConsultation: React.FC = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:+27793752588';
  };

  const handleWhatsAppNow = () => {
    window.open('https://wa.me/27793752588?text=Hi%20Blooming%20Furniture,%20I%27m%20interested%20in%20a%20free%20consultation%20for%20furniture%20restoration.', '_blank');
  };

  return (
    <div className="min-h-screen bg-daisy-cream">
      <header className="bg-forest-green text-white-daisy py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Transform Your Furniture in Minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Get Expert Advice Now - Free 15-Minute Consultation (Worth R500)
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={handleCallNow}
              className="bg-golden-center text-dark-wood py-3 px-8 rounded-full font-semibold text-lg hover:bg-daisy-cream transition duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2" /> Call Now - Instant Advice
            </button>
            <button
              onClick={handleWhatsAppNow}
              className="bg-green-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              <MessageCircle className="mr-2" /> WhatsApp - Quick Chat
            </button>
          </motion.div>
        </div>
      </header>

      <section className="py-16 bg-white-daisy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-dark-wood text-center mb-12">Why 100+ Clients Trust Blooming Furniture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "10+ Years of Mastery", description: "Unrivaled restoration expertise at your fingertips" },
              { icon: Hammer, title: "Tailored Solutions", description: "Unique approach for every treasured piece" },
              { icon: Star, title: "100% Satisfaction Promise", description: "We're not done until you're thrilled" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-golden-center p-6 rounded-lg shadow-md text-center"
              >
                <item.icon className="w-12 h-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-dark-wood">{item.title}</h3>
                <p className="text-forest-green">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-green py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center text-white-daisy">See the Blooming Furniture Magic</h2>
          <BeforeAfterGallery />
          <div className="mt-12 text-center">
            <p className="text-white-daisy text-xl mb-6">Ready to breathe new life into your cherished pieces?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleCallNow}
                className="bg-golden-center text-dark-wood py-3 px-8 rounded-full font-semibold text-lg hover:bg-daisy-cream transition duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" /> Call for Instant Transformation
              </button>
              <button
                onClick={handleWhatsAppNow}
                className="bg-green-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2" /> WhatsApp Your Vision Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-golden-center text-dark-wood py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8">Don't Let Your Family's Legacy Fade Away</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every moment counts. Your heirlooms deserve expert care now. Act quickly to preserve your family's history and create a legacy that lasts for generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleCallNow}
              className="bg-forest-green text-white-daisy py-3 px-8 rounded-full font-semibold text-lg hover:bg-dark-wood transition duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2" /> Call to Save Your Heirlooms
            </button>
            <button
              onClick={handleWhatsAppNow}
              className="bg-green-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              <MessageCircle className="mr-2" /> WhatsApp for Instant Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;