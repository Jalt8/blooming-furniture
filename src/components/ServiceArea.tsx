// components/ServiceArea.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home } from 'lucide-react';

const serviceAreas = [
  { name: 'Langebaan', isMain: true },
  { name: 'Saldanha', distance: '27 km' },
  { name: 'Vredenburg', distance: '32 km' },
  { name: 'Hopefield', distance: '40 km' },
  { name: 'Paternoster', distance: '45 km' },
  { name: 'St Helena Bay', distance: '55 km' },
  { name: 'Velddrif', distance: '60 km' },
  { name: 'Yzerfontein', distance: '65 km' },
  { name: 'Darling', distance: '70 km' },
  { name: 'Moorreesburg', distance: '85 km' },
  { name: 'Malmesbury', distance: '110 km' },
];

const ServiceArea: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white-daisy p-8 rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-serif text-dark-wood mb-6 text-center">Our Service Areas</h2>
      <p className="text-lg text-forest-green mb-8 text-center">
        Blooming Furniture proudly serves Langebaan and the surrounding areas:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {serviceAreas.map((area, index) => (
          <motion.div
            key={area.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`p-3 rounded-lg text-center flex flex-col items-center ${
              area.isMain ? 'bg-forest-green text-white-daisy col-span-full' : 'bg-golden-center'
            }`}
          >
            {area.isMain ? (
              <Home className="w-6 h-6 mb-1" />
            ) : (
              <MapPin className="w-5 h-5 text-forest-green mb-1" />
            )}
            <h3 className={`text-sm font-semibold ${area.isMain ? 'text-white-daisy' : 'text-dark-wood'}`}>
              {area.name}
            </h3>
            {area.distance && (
              <p className="text-xs text-forest-green">
                {area.distance} from Langebaan
              </p>
            )}
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 text-center text-forest-green italic"
      >
        Don't see your town listed? Contact us - we may still be able to serve you!
      </motion.p>
    </motion.div>
  );
};

export default ServiceArea;