'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

// Types
type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
};

const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Victorian Dresser Revival",
      description: "Restored a 19th-century Victorian dresser to its former glory.",
      images: ["/image_2.jpeg", "/image_3.jpeg"],
      category: "Antique"
    },
    {
      id: 2,
      title: "Mid-Century Modern Chair Reimagined",
      description: "Breathed new life into a classic mid-century modern chair design.",
      images: ["/image_4.jpeg", "/image_5.jpeg"],
      category: "Modern"
    },
    {
      id: 3,
      title: "Rustic Dining Table Transformation",
      description: "Transformed a worn-out dining table into a stunning rustic centerpiece.",
      images: ["/image_6.jpeg", "/image_7.jpeg"],
      category: "Rustic"
    },
    {
      id: 4,
      title: "Art Deco Cabinet Restoration",
      description: "Meticulously restored an Art Deco cabinet to its original splendor.",
      images: ["/image_8.jpeg", "/image_9.jpeg"],
      category: "Art Deco"
    },
    {
      id: 5,
      title: "Vintage Rocking Chair Renewal",
      description: "Renewed a cherished vintage rocking chair with care and precision.",
      images: ["/image_10.jpeg", "/image_11.jpeg"],
      category: "Vintage"
    },
];

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  const filteredItems = filter && filter !== 'All'
    ? portfolioItems.filter(item => item.category === filter)
    : portfolioItems;

  return (
    <div className="min-h-screen bg-white-daisy py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-dark-wood text-center mb-12">Our Restoration Portfolio</h1>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === (filter || 'All')
                    ? 'bg-forest-green text-white-daisy'
                    : 'bg-golden-center text-dark-wood hover:bg-daisy-cream'
                }`}
                onClick={() => setFilter(category === 'All' ? null : category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  images={item.images}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <p className="text-center text-dark-wood mt-12">No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;