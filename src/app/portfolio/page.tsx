'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the type for portfolio items
type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
};

// Dummy data for portfolio items
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Victorian Dresser Revival",
    description: "Restored a 19th-century Victorian dresser to its former glory.",
    beforeImage: "/image_1.jpeg",
    afterImage: "/image_2.jpeg",
    category: "Antique"
  },
  {
    id: 2,
    title: "Mid-Century Modern Chair Reimagined",
    description: "Breathed new life into a classic mid-century modern chair design.",
    beforeImage: "/image_3.jpeg",
    afterImage: "/image_4.jpeg",
    category: "Modern"
  },
  {
    id: 3,
    title: "Rustic Dining Table Transformation",
    description: "Transformed a worn-out dining table into a stunning rustic centerpiece.",
    beforeImage: "/image_5.jpeg",
    afterImage: "/image_6.jpeg",
    category: "Rustic"
  },
  {
    id: 4,
    title: "Art Deco Cabinet Restoration",
    description: "Meticulously restored an Art Deco cabinet to its original splendor.",
    beforeImage: "/image_7.jpeg",
    afterImage: "/image_8.jpeg",
    category: "Art Deco"
  },
  {
    id: 5,
    title: "Vintage Rocking Chair Renewal",
    description: "Renewed a cherished vintage rocking chair with care and precision.",
    beforeImage: "/image_9.jpeg",
    afterImage: "/image_10.jpeg",
    category: "Vintage"
  },
  // Add more items as needed
];

const PortfolioItem: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={item.afterImage}
        alt={item.title}
        width={400}
        height={300}
        layout="responsive"
        objectFit="cover"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-white text-sm">{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  const filteredItems = filter && filter !== 'All'
    ? portfolioItems.filter(item => item.category === filter)
    : portfolioItems;

  return (
    <div className="min-h-screen bg-daisy-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-dark-wood text-center mb-12">Our Restoration Portfolio</h1>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                category === (filter || 'All')
                  ? 'bg-forest-green text-white-daisy'
                  : 'bg-white-daisy text-dark-wood hover:bg-golden-center hover:text-dark-wood'
              }`}
              onClick={() => setFilter(category === 'All' ? null : category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-dark-wood mt-12">No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;