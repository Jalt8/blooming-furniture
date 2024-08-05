import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';

const showcaseItems = [
  {
    id: 1,
    title: "Elegant Wooden Chair Restoration",
    description: "Bringing new life to this classic design while preserving its timeless features.",
    before: "/image_40.jpeg",
    after: "/image_40.jpeg",
    details: "Our team carefully restored the wood, reupholstered the seat, and refinished the piece to enhance its natural beauty.",
  },
  {
    id: 2,
    title: "Vintage Dresser Transformation",
    description: "Restoring charm and functionality to this beautiful piece of furniture.",
    before: "/image_40.jpeg",
    after: "/image_40.jpeg",
    details: "We repaired damaged drawers, refinished the wood to its original luster, and replaced missing hardware with period-appropriate pieces.",
  },
  {
    id: 3,
    title: "Antique Table Revival",
    description: "Breathing new life into this exquisite antique table.",
    before: "/image_40.jpeg",
    after: "/image_40.jpeg",
    details: "Our artisans meticulously repaired the intricate inlays, restored the wood finish, and reinforced the structure for longevity.",
  },
];

const ShowcaseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showDetails, setShowDetails] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? showcaseItems.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
    setIsAutoPlaying(false);
  };

  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-white-daisy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-dark-wood">Transformation Showcase</h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl bg-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src={showcaseItems[currentIndex].before} 
                alt={`Before: ${showcaseItems[currentIndex].title}`}
                layout="fill" 
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = '/image_40.jpeg';
                }}
              />
            </div>
            <div 
              className="absolute top-0 right-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image 
                src={showcaseItems[currentIndex].after} 
                alt={`After: ${showcaseItems[currentIndex].title}`}
                layout="fill" 
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = '/img/placeholder.jpg';
                }}
              />
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={handleSliderChange}
              className="absolute top-1/2 left-0 right-0 z-10 w-full cursor-pointer"
              style={{ WebkitAppearance: 'none', background: 'transparent' }}
            />
            <div className="absolute top-4 left-4 bg-dark-wood bg-opacity-75 text-white-daisy px-3 py-1 rounded">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-forest-green bg-opacity-75 text-white-daisy px-3 py-1 rounded">
              After
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-dark-wood mb-2">{showcaseItems[currentIndex].title}</h3>
                <p className="text-forest-green mb-4">{showcaseItems[currentIndex].description}</p>
                {showDetails && (
                  <p className="text-dark-wood mb-6">{showcaseItems[currentIndex].details}</p>
                )}
              </motion.div>
            </AnimatePresence>
            
            <button 
              onClick={handleDetailsToggle}
              className="mb-6 text-golden-center hover:text-forest-green transition-colors duration-300 flex items-center justify-center mx-auto"
            >
              <Info size={18} className="mr-2" />
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            
            <div className="flex justify-center items-center space-x-4 mb-8">
              <button 
                onClick={handlePrev} 
                className="p-2 rounded-full bg-golden-center text-dark-wood hover:bg-forest-green hover:text-white-daisy transition-colors duration-300"
                aria-label="Previous item"
              >
                <ChevronLeft size={24} />
              </button>
              <span className="text-dark-wood font-semibold">{currentIndex + 1} / {showcaseItems.length}</span>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-golden-center text-dark-wood hover:bg-forest-green hover:text-white-daisy transition-colors duration-300"
                aria-label="Next item"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="inline-block bg-forest-green text-white-daisy px-6 py-3 rounded-full font-semibold hover:bg-dark-wood transition-colors duration-300">
                Request a Free Quote
              </Link>
              <Link href="/services" className="inline-block bg-golden-center text-dark-wood px-6 py-3 rounded-full font-semibold hover:bg-forest-green hover:text-white-daisy transition-colors duration-300">
                Learn About Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/portfolio" className="text-forest-green hover:text-dark-wood font-semibold text-lg inline-flex items-center">
            Explore Our Full Portfolio <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;