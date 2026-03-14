'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Hammer, Award, MessageSquare, Star, Shield, TruckIcon, Users } from 'lucide-react';
import PaintingShowcase from '@/components/PaintingShowcase';

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
        <Image
          fill
          alt="Furniture restoration workshop showcasing expert craftsmanship"
          src="/images/hero/furniture-restoration-hero.png"
          quality={80}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
          className="absolute z-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-wood opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white-daisy px-4 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
          >
            Expert Furniture Restoration & Repair
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
            <Link href="/contact" className="bg-golden-center text-dark-wood py-3 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg hover:bg-daisy-cream transition duration-300 inline-flex items-center min-h-[44px]">
              Start Your Restoration <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Trust Badges Section */}
      <section className="py-12 bg-white-daisy border-b border-golden-center/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Award className="h-10 w-10 text-forest-green mx-auto mb-2" />
              <div className="text-3xl font-bold text-forest-green">10+</div>
              <div className="text-sm text-dark-wood">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Users className="h-10 w-10 text-forest-green mx-auto mb-2" />
              <div className="text-2xl font-bold text-forest-green">Countless</div>
              <div className="text-sm text-dark-wood">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Clock className="h-10 w-10 text-forest-green mx-auto mb-2" />
              <div className="text-3xl font-bold text-forest-green">10+</div>
              <div className="text-sm text-dark-wood">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Shield className="h-10 w-10 text-forest-green mx-auto mb-2" />
              <div className="text-lg font-bold text-forest-green">100%</div>
              <div className="text-sm text-dark-wood">Satisfaction Guaranteed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services with Pricing */}
      <section className="py-16 bg-daisy-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-dark-wood">Popular Restoration Services</h2>
          <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
            From minor repairs to complete transformations, we bring your furniture back to life
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Wood Furniture Repair Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white-daisy rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/portfolio/Chest1.jpg"
                  alt="Wood furniture repair service"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-wood/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <Hammer className="h-8 w-8 text-white-daisy" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-wood mb-2">Wood Furniture Repair</h3>
                <p className="text-forest-green mb-6 text-sm">Fix broken legs, loose joints, cracks and structural damage</p>
                <Link
                  href="/wood-furniture-repair"
                  className="block text-center bg-forest-green text-white-daisy py-3 rounded-lg hover:bg-dark-wood transition duration-300 min-h-[44px] flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Furniture Refinishing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white-daisy rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group ring-2 ring-golden-center"
            >
              <div className="bg-golden-center text-dark-wood text-xs font-bold py-1 px-3 text-center">
                MOST POPULAR
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/portfolio/Lime-Wash1.jpg"
                  alt="Furniture refinishing service"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-wood/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <Award className="h-8 w-8 text-white-daisy" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-wood mb-2">Furniture Refinishing</h3>
                <p className="text-forest-green mb-6 text-sm">Transform with custom stains, paints & coastal-resistant finishes</p>
                <Link
                  href="/furniture-refinishing"
                  className="block text-center bg-golden-center text-dark-wood py-3 rounded-lg hover:bg-white-daisy transition duration-300 font-semibold min-h-[44px] flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Antique Restoration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white-daisy rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/portfolio/sunbed1.jpg"
                  alt="Antique restoration service"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-wood/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <Award className="h-8 w-8 text-white-daisy" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-wood mb-2">Antique Restoration</h3>
                <p className="text-forest-green mb-6 text-sm">Preserve family heirlooms with period-appropriate techniques</p>
                <Link
                  href="/antique-restoration"
                  className="block text-center bg-forest-green text-white-daisy py-3 rounded-lg hover:bg-dark-wood transition duration-300 min-h-[44px] flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block text-forest-green hover:text-dark-wood font-semibold underline"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white-daisy">
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

      {/* CTA Section */}
      <section className="bg-golden-center py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-dark-wood">Ready to Restore Your Treasures?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-forest-green">Let's bring your cherished furniture back to its former glory. Our expert team is ready to start your restoration journey.</p>
          <Link href="/contact" className="bg-forest-green text-white-daisy py-3 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg hover:bg-dark-wood transition duration-300 inline-flex items-center min-h-[44px]">
            Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientHome;