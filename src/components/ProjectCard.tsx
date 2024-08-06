import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from './Modal';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, images, category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
        <div className="relative">
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - Image ${currentImageIndex + 1}`} 
            className="w-full h-56 object-cover cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-wood bg-opacity-50 text-white-daisy p-1 rounded-full hover:bg-opacity-75 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-wood bg-opacity-50 text-white-daisy p-1 rounded-full hover:bg-opacity-75 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-dark-wood">{title}</h3>
          <p className="text-forest-green mb-4">{description}</p>
          <span className="inline-block bg-golden-center text-dark-wood px-3 py-1 rounded-full text-sm">{category}</span>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
};

export default ProjectCard;