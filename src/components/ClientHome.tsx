'use client';

import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Hammer, Award, MessageSquare } from 'lucide-react';
import PaintingShowcase from '@/components/PaintingShowcase';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const ClientHome: React.FC = () => {
  const [userIntent, setUserIntent] = useState('');

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section with improved mobile layout */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <CldImage
          width="1920"
          height="1080"
          alt="Hero background image"
          src="BloomingFurniture/image_46_otypus"
          quality="80"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
          className="absolute z-0 object-cover w-full h-full"
          priority
          sizes="100vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/img/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 bg-dark-wood opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white-daisy px-4 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
          >
            Revive Your Memories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Expert furniture restoration that breathes new life into your cherished pieces
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-golden-center text-dark-wood py-3 px-8 rounded-full font-semibold text-lg hover:bg-daisy-cream transition duration-300 inline-flex items-center">
              Start Your Restoration <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-10 w-10 text-white-daisy" />
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-daisy-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-dark-wood">Our Restoration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Assessment", description: "We carefully evaluate each piece to determine the best restoration approach." },
              { icon: Hammer, title: "Restoration", description: "Our skilled artisans use time-honored techniques to restore your furniture." },
              { icon: Award, title: "Quality Check", description: "We meticulously inspect every detail to ensure perfection." },
              { icon: MessageSquare, title: "Client Approval", description: "We keep you involved throughout the process for your complete satisfaction." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white-daisy p-6 rounded-lg shadow-md text-center"
              >
                <step.icon className="h-12 w-12 mx-auto mb-4 text-forest-green" />
                <h3 className="text-xl font-semibold mb-2 text-dark-wood">{step.title}</h3>
                <p className="text-forest-green">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <PaintingShowcase />

      {/* Testimonials */}
      <section className="py-20 bg-forest-green text-white-daisy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl italic mb-4">"Blooming Furniture brought my grandmother's old rocking chair back to life. It's now the centerpiece of our living room!"</p>
              <footer className="font-semibold">- Sarah J.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golden-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-dark-wood">Ready to Restore Your Treasures?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-forest-green">Let's bring your cherished furniture back to its former glory. Our expert team is ready to start your restoration journey.</p>
          <Link href="/contact" className="bg-forest-green text-white-daisy py-3 px-8 rounded-full font-semibold text-lg hover:bg-dark-wood transition duration-300 inline-flex items-center">
            Get Your Free Consultation <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientHome;