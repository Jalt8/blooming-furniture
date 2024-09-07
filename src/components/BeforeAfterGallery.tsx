'use client'

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  { before: "kvreig", after: "d7mc0v", description: "Vintage Dining Table Revival" },
  { before: "download_2_lascnc", after: "download_3_dyzvy5", description: "Antique Armchair Restoration" },
  { before: "download_1_w6ork4", after: "download_f7h2zd", description: "Classic Dresser Transformation" },
];

const BeforeAfterGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comparePosition, setComparePosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSlideChange = (direction: 'next' | 'prev') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex === transformations.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? transformations.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleCompareMove = useCallback((clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    setComparePosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleCompareMove(e.clientX, e.currentTarget);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const element = document.getElementById('compare-container');
      if (element) {
        handleCompareMove(e.clientX, element as HTMLDivElement);
      }
    }
  }, [isDragging, handleCompareMove]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        id="compare-container"
        className="relative w-full overflow-hidden shadow-2xl cursor-ew-resize"
        onMouseDown={handleMouseDown}
        style={{ paddingBottom: '75%' }} // Adjust this value based on your image aspect ratio
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <CldImage
              src={`BloomingFurniture/${transformations[currentIndex].after}`}
              alt={`After ${transformations[currentIndex].description}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - comparePosition}% 0 0)` }}
        >
          <CldImage
            src={`BloomingFurniture/${transformations[currentIndex].before}`}
            alt={`Before ${transformations[currentIndex].description}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div 
          className="absolute inset-y-0 w-1 bg-white z-10"
          style={{ left: `${comparePosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-gray-800" />
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
          <p className="text-center text-lg font-semibold">{transformations[currentIndex].description}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleSlideChange('prev')}
          className="bg-golden-center text-dark-wood p-2 rounded-full hover:bg-opacity-80 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleSlideChange('next')}
          className="bg-golden-center text-dark-wood p-2 rounded-full hover:bg-opacity-80 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;