import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (2).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (10).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.26 (1).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.32.21.jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.28.47.jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.29.55.jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.29.39.jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.26 (2).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.26.jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (1).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (3).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (4).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (5).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (6).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (7).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (8).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (9).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (11).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (12).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (13).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (14).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (15).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (16).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (17).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (18).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27 (19).jpeg',
    '/assets/WhatsApp Image 2025-11-28 at 22.14.27.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Swipe detection functions
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
    
    setIsPaused(false);
  };

  return (
    <>
      <section id="gallery" className="py-20 lg:py-32 bg-dark-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Hayatımdan Kesitler
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Main Slider */}
            <div className="relative glass-card p-2 rounded-2xl">
              <div 
                className="relative aspect-video overflow-hidden rounded-xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={images[currentIndex]}
                      alt={`Gallery image ${currentIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Expand Button */}
                    <button
                      onClick={() => openModal(currentIndex)}
                      className="absolute top-4 right-4 p-2 bg-dark-950/50 backdrop-blur-md rounded-lg text-dark-200 hover:text-primary-400 transition-colors"
                      aria-label="Resmi büyüt"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-dark-950/50 backdrop-blur-md rounded-lg text-dark-200 hover:text-primary-400 transition-colors"
                aria-label="Önceki resim"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-dark-950/50 backdrop-blur-md rounded-lg text-dark-200 hover:text-primary-400 transition-colors"
                aria-label="Sonraki resim"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6">
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-3 min-w-max px-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                        index === currentIndex
                          ? 'border-primary-400 scale-105 shadow-lg shadow-primary-400/25'
                          : 'border-dark-700 hover:border-dark-600'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 to-transparent" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <p className="text-dark-400 text-sm">
                  Yan tarafı kaydırarak tüm resimleri görüntüleyin
                </p>
              </div>
            </div>

            </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-xl p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-none max-h-none w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[modalImageIndex]}
                alt={`Gallery image ${modalImageIndex + 1}`}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-dark-950/50 backdrop-blur-md rounded-lg text-dark-200 hover:text-primary-400 transition-colors"
                aria-label="Kapat"
              >
                <ChevronRight className="w-6 h-6 rotate-90" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageSlider;
