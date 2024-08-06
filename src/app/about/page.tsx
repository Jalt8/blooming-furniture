// pages/about.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Wrench, Leaf, Heart } from 'lucide-react';
import ServiceArea from '@/components/ServiceArea';

const AboutPage = () => {
  return (
    <div className="bg-daisy-cream min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-dark-wood text-center mb-12"
        >
          About Blooming Furniture
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/blooming-furniture.png"
              alt="Master craftsman at work"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-forest-green leading-relaxed">
              At Blooming Furniture, we breathe new life into cherished furniture pieces, preserving memories and crafting legacies. Our passion for restoration goes beyond mere repair; we&apos;re custodians of history, weaving stories of the past into the fabric of the present.
            </p>
            {/* <p className="text-lg text-forest-green leading-relaxed">
              Founded in 2005 by master craftsman Jonathan Hartley, Blooming Furnitures has grown from a small workshop to a beacon of excellence in furniture restoration. Our team of skilled artisans combines time-honored techniques with modern innovations to deliver results that not only restore but often surpass the original beauty of each piece.
            </p> */}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Clock, title: "Timeless Expertise", description: "Over 10 years of dedicated restoration experience" },
            { icon: Wrench, title: "Meticulous Craftsmanship", description: "Attention to detail in every restoration project" },
            { icon: Leaf, title: "Eco-Friendly Practices", description: "Committed to sustainable restoration methods" },
            { icon: Heart, title: "Passion-Driven", description: "Love for preserving furniture heritage" }
          ].map((item, index) => (
            <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md text-center">
              <item.icon className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-dark-wood">{item.title}</h3>
              <p className="text-forest-green">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-golden-center p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-serif text-dark-wood mb-4">Our Mission</h2>
          <p className="text-lg text-forest-green leading-relaxed">
            Blooming Furniture is on a mission to preserve the soul of furniture, one piece at a time. We believe that every scratch, dent, and worn edge tells a story. Our goal is not just to restore furniture to its former glory, but to ensure that these stories continue to be told for generations to come.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <ServiceArea />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-dark-wood mb-4">Ready to give your furniture a new lease on life?</p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-forest-green text-white-daisy rounded-full text-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;