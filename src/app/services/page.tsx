'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Paintbrush, Scissors, RefreshCw, Truck, Plus, Heart } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  details: string[];
}

const services: Service[] = [
  {
    title: "Furniture Repairs",
    description: "Repair and renew old sentimental pieces, preserving memories and extending the life of your cherished furniture.",
    icon: Hammer,
    image: "image_51_bvmlja",
    details: [
      "Structural repairs",
      "Joint reinforcement",
      "Hardware replacement",
      "Minor touch-ups"
    ]
  },
  {
    title: "Strip, Sand, Re-Polish",
    description: "Restore your furniture to its natural beauty with our meticulous stripping, sanding, and re-polishing service.",
    icon: Paintbrush,
    image: "image_49_jp17pg",
    details: [
      "Natural or wood stain options",
      "Custom sheen from matt to glass",
      "Protective finishing",
      "Color matching available"
    ]
  },
  {
    title: "Re-deco",
    description: "Transform your furniture with high-quality chalk paint in your choice of color and sheen.",
    icon: Heart,
    image: "image_50_k5iloh",
    details: [
      "Wide variety of colors",
      "Custom color mixing",
      "Distressed and antique finishes",
      "Protective top coats"
    ]
  },
  {
    title: "Re-riempie",
    description: "Revitalize your seating with our re-riempie service, replacing old seats with new leather strips.",
    icon: Scissors,
    image: "image_52_l5tpqv",
    details: [
      "Traditional weaving techniques",
      "High-quality leather strips",
      "Custom patterns available",
      "Suitable for various chair styles"
    ]
  },
  {
    title: "Re-design",
    description: "Give your furniture a complete makeover, combining any or all of our services for a stunning transformation.",
    icon: RefreshCw,
    image: "image_37_bqxkog",
    details: [
      "Comprehensive redesign",
      "Combine multiple services",
      "Custom paint effects",
      "Structural modifications"
    ]
  },
  {
    title: "Collection and Delivery",
    description: "Convenient pickup and drop-off service available for a nominal fee, depending on your area.",
    icon: Truck,
    image: "image_53_ifr8ep",
    details: [
      "Safe transportation",
      "Flexible scheduling",
      "Area-based pricing",
      "Careful handling of your furniture"
    ]
  }
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white-daisy rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative aspect-[4/3] w-full">
        <CldImage
          width="500"
          height="375"
          src={`BloomingFurniture/${service.image.replace(/^\//, '').replace(/\.(jpeg|jpg|png|webp)$/, '')}`}
          alt={service.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-wood bg-opacity-40 flex items-center justify-center">
          <service.icon className="w-16 h-16 text-white-daisy" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-dark-wood mb-2">{service.title}</h3>
        <p className="text-forest-green mb-4">{service.description}</p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-golden-center hover:text-dark-wood transition-colors"
        >
          {isExpanded ? "Hide Details" : "Show Details"}
          <Plus className={`ml-2 transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2"
            >
              {service.details.map((detail, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-forest-green"
                >
                  <div className="w-2 h-2 bg-golden-center rounded-full mr-2" />
                  {detail}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-daisy-cream min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-serif text-dark-wood text-center mb-8"
        >
          Our Restoration Services
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-forest-green mb-12 max-w-3xl mx-auto"
        >
          At Blooming Furniture, we specialize in breathing new life into your cherished pieces. From minor repairs to complete makeovers, our expert craftsmen are dedicated to preserving the beauty and memories of your furniture.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-golden-center rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-serif text-dark-wood mb-6 text-center">Why Choose Blooming Furniture?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Hammer, title: "Expert Craftsmanship", description: "Our skilled artisans bring years of experience to every project." },
              { icon: Paintbrush, title: "Customization", description: "We offer a wide range of finishes and techniques to suit your style." },
              { icon: RefreshCw, title: "Complete Transformation", description: "From subtle touch-ups to dramatic makeovers, we do it all." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-dark-wood">{item.title}</h3>
                <p className="text-forest-green">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-serif text-dark-wood mb-4">Ready to Restore Your Treasures?</h2>
          <p className="text-xl text-forest-green mb-8">Contact us today for a consultation and bring your beloved furniture back to life.</p>
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

export default ServicesPage;