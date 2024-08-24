import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, images, currentIndex, onPrev, onNext }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    const currentModalRef = modalRef.current;

    if (isOpen && currentModalRef) {
      currentModalRef.focus();
      currentModalRef.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentModalRef) {
        currentModalRef.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          ref={modalRef}
          className="fixed inset-0 bg-dark-wood bg-opacity-90 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          tabIndex={0}
        >
          <motion.div 
            className="relative w-full h-full flex justify-center items-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white-daisy hover:text-golden-center transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            <button
              onClick={onPrev}
              className="absolute left-4 text-white-daisy hover:text-golden-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 text-white-daisy hover:text-golden-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>

            <CldImage
              width="800"
              height="600"
              src={`blooming-furniture/${images[currentIndex].replace(/^\//, '').replace(/\.(jpeg|jpg|png|webp)$/, '')}`}
              alt={`Modal image ${currentIndex + 1}`}
              className={`max-w-full max-h-[80vh] object-contain ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out'
              }}
            />

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-4 right-4 text-white-daisy hover:text-golden-center transition-colors"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
            </button>

            <div className="absolute bottom-4 left-4 text-white-daisy">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;