import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Modal from './Modal';
import { CldImage } from 'next-cloudinary';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  category: string;
  projectUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, images, category, projectUrl }) => {
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
          <CldImage 
            width="400"
            height="224"
            src={`BloomingFurniture/${images[currentImageIndex].replace(/^\//, '').replace(/\.(jpeg|jpg|png|webp)$/, '')}`}
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
          <div className="flex items-center justify-between">
            <span className="inline-block bg-golden-center text-dark-wood px-3 py-1 rounded-full text-sm">{category}</span>
            {projectUrl && (
              <Link
                href={projectUrl}
                className="inline-flex items-center text-forest-green hover:text-dark-wood transition-colors text-sm font-semibold"
              >
                View Details <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            )}
          </div>
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