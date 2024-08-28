'use client'

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { ArrowRight, Clock, Hammer, Star, Calendar, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comparePosition, setComparePosition] = useState(50);

  const transformations = [
    { before: "kvreig", after: "d7mc0v", description: "Church Kitchen Cabinet Refresh" },
    { before: "download_2_lascnc", after: "download_3_dyzvy5", description: "Vintage Display Cabinet Revival" },
    { before: "download_1_w6ork4", after: "download_f7h2zd", description: "Dutch-Inspired Antique Washstand Revival" },
  ];

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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    handleCompareMove(e.clientX, e.currentTarget);
  }, [handleCompareMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    handleCompareMove(e.touches[0].clientX, e.currentTarget);
  }, [handleCompareMove]);

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        className="relative w-full overflow-hidden shadow-2xl"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
            style={{ paddingBottom: '75%' }} // Adjust this value based on your image aspect ratio
          >
            <CldImage
              src={`BloomingFurniture/${transformations[currentIndex].after}`}
              alt={`After ${transformations[currentIndex].description}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        </AnimatePresence>
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - comparePosition}% 0 0)` }}
        >
          <div className="relative w-full h-full">
            <CldImage
              src={`BloomingFurniture/${transformations[currentIndex].before}`}
              alt={`Before ${transformations[currentIndex].description}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
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

const BookConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-consultation-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Google Analytics event tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'consultation_form_submission', {
            'event_category': 'Form',
            'event_label': 'Consultation Request'
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-daisy-cream">
      <header className="bg-forest-green text-white-daisy py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Restore Your Family Heirlooms to Their Former Glory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Book a Free, No-Obligation Consultation (Worth R500) and Get Expert Advice on Preserving Your Treasured Pieces
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#book-call" className="bg-golden-center text-dark-wood py-3 px-8 rounded-full font-semibold text-lg hover:bg-daisy-cream transition duration-300 inline-flex items-center">
              Claim Your Free Consultation <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </header>

      <section className="py-16 bg-white-daisy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-dark-wood text-center mb-12">Why 1000+ Clients Trust Blooming Furniture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "30+ Years of Expertise", description: "Unmatched restoration experience" },
              { icon: Hammer, title: "Bespoke Solutions", description: "Tailored approach for every unique piece" },
              { icon: Star, title: "100% Satisfaction Guarantee", description: "We're not happy until you're thrilled" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-golden-center p-6 rounded-lg shadow-md text-center"
              >
                <item.icon className="w-12 h-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-dark-wood">{item.title}</h3>
                <p className="text-forest-green">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <CldImage
                width="500"
                height="400"
                src="BloomingFurniture/Group_18_apbkmb"
                alt="Stunning Before and After Furniture Restoration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 text-white-daisy">
              <h2 className="text-3xl font-serif mb-6">Transform Your Furniture, Relive Your Memories</h2>
              <p className="text-lg mb-6">
                Our master craftsmen combine time-honored techniques with cutting-edge technology to breathe new life into your cherished pieces. See the magic for yourself:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Structural repairs that stand the test of time",
                  "Flawless refinishing & expert repainting",
                  "Premium upholstery renewal",
                  "Meticulous antique conservation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 text-golden-center" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="#book-call" className="bg-golden-center text-dark-wood py-3 px-8 rounded-full font-semibold text-lg hover:bg-daisy-cream transition duration-300 inline-flex items-center">
                Start Your Restoration Journey Now <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="book-call" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-dark-wood text-center mb-12">Claim Your Free Expert Consultation (Worth R500)</h2>
          <div className="max-w-2xl mx-auto bg-white-daisy p-8 rounded-lg shadow-lg">
            <p className="text-lg text-forest-green mb-6 text-center">
              Book your no-obligation call with our restoration experts today. We'll provide personalized advice and a custom restoration plan – all at no cost to you.
            </p>
            {!submitStatus ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md border border-golden-center focus:outline-none focus:ring-2 focus:ring-forest-green"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md border border-golden-center focus:outline-none focus:ring-2 focus:ring-forest-green"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 rounded-md border border-golden-center focus:outline-none focus:ring-2 focus:ring-forest-green"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your treasured furniture piece"
                  className="w-full px-4 py-2 rounded-md border border-golden-center focus:outline-none focus:ring-2 focus:ring-forest-green h-32"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-forest-green text-white-daisy py-3 px-4 rounded-full font-semibold text-lg hover:bg-dark-wood transition duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book My Free Expert Consultation'} <Calendar className="ml-2" />
                </button>
              </form>
            ) : (
              <div className="text-center text-forest-green">
                <h3 className="text-2xl font-semibold mb-4">
                  {submitStatus === 'success' ? 'Thank You!' : 'Oops!'}
                </h3>
                <p>
                  {submitStatus === 'success'
                    ? "We've received your request and will be in touch within 24 hours to schedule your free consultation."
                    : 'There was an error submitting your request. Please try again or contact us directly.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-golden-center text-dark-wood py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8">Don't Let Your Family's Legacy Fade Away</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every day that passes, your cherished furniture loses a bit of its former glory. Act now to preserve your family's history and create a legacy that lasts for generations.
          </p>
          <Link href="#book-call" className="bg-forest-green text-white-daisy py-3 px-8 rounded-full font-semibold text-lg hover:bg-dark-wood transition duration-300 inline-flex items-center">
            Save Your Heirlooms Today <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white-daisy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-dark-wood mb-8">What Our Delighted Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", quote: "Blooming Furniture brought my grandmother's rocking chair back to life. It's now the centerpiece of our living room!" },
              { name: "Michael T.", quote: "I was amazed at how they transformed our old dining table. It looks even better than when we first bought it 30 years ago." },
              { name: "Emma L.", quote: "Their attention to detail is unmatched. They restored a vintage dresser that's been in my family for generations. It's absolutely stunning now." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-daisy-cream p-6 rounded-lg shadow-md">
                <p className="text-forest-green mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-dark-wood">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-green py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-center text-white-daisy">See the Blooming Furniture Magic</h2>
          <BeforeAfterGallery />
          <div className="mt-12 text-center">
            <Link href="#book-call" className="bg-golden-center text-dark-wood py-3 px-8 rounded-full font-semibold text-lg hover:bg-daisy-cream transition duration-300 inline-flex items-center">
              Transform Your Furniture Now <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;