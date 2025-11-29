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

  const media = [
    { type: 'image', src: '/assets/img-05.jpg' },
    { type: 'image', src: '/assets/img-12.jpg' },
    { type: 'image', src: '/assets/img-01.jpg' },
    { type: 'image', src: '/assets/img-02.jpg' },
    { type: 'image', src: '/assets/img-03.jpg' },
    { type: 'image', src: '/assets/img-04.jpg' },
    { type: 'image', src: '/assets/img-06.jpg' },
    { type: 'image', src: '/assets/img-07.jpg' },
    { type: 'image', src: '/assets/img-08.jpg' },
    { type: 'image', src: '/assets/img-09.jpg' },
    { type: 'image', src: '/assets/img-10.jpg' },
    { type: 'image', src: '/assets/img-11.jpg' },
    { type: 'image', src: '/assets/img-13.jpg' },
    { type: 'image', src: '/assets/img-14.jpg' },
    { type: 'image', src: '/assets/img-15.jpg' },
    { type: 'image', src: '/assets/img-16.jpg' },
    { type: 'image', src: '/assets/img-17.jpg' },
    { type: 'image', src: '/assets/img-18.jpg' },
    { type: 'image', src: '/assets/img-19.jpg' },
    { type: 'image', src: '/assets/img-20.jpg' },
    { type: 'image', src: '/assets/img-21.jpg' },
    { type: 'image', src: '/assets/img-22.jpg' },
    { type: 'image', src: '/assets/img-23.jpg' },
    { type: 'image', src: '/assets/img-24.jpg' },
    { type: 'image', src: '/assets/img-25.jpg' },
    { type: 'image', src: '/assets/img-26.jpg' },
    { type: 'image', src: '/assets/img-27.jpg' },
    { type: 'image', src: '/assets/img-28.jpg' },
    { type: 'image', src: '/assets/img-29.jpg' },
    { type: 'image', src: '/assets/img-30.jpg' },
    { type: 'image', src: '/assets/img-31.jpg' },
    { type: 'image', src: '/assets/img-32.jpg' },
    { type: 'video', src: '/assets/vid-01.mp4' },
    { type: 'video', src: '/assets/vid-02.mp4' },
    { type: 'video', src: '/assets/vid-03.mp4' },
    { type: 'video', src: '/assets/vid-04.mp4', aspectRatio: 'landscape' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [media.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
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
                className={`relative ${media[currentIndex].aspectRatio === 'landscape' ? 'aspect-[3/2]' : 'aspect-video'} overflow-hidden rounded-xl`}
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
                    {media[currentIndex].type === 'image' ? (
                      <img
                        src={media[currentIndex].src}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <video
                        src={media[currentIndex].src}
                        controls
                        className="w-full h-full object-contain"
                        onPlay={() => setIsPaused(true)}
                        onPause={() => setIsPaused(false)}
                        onEnded={() => setIsPaused(false)}
                      />
                    )}
                    
                    {/* Expand Button */}
                    <button
                      onClick={() => openModal(currentIndex)}
                      className="absolute top-4 right-4 p-2 bg-dark-950/50 backdrop-blur-md rounded-lg text-dark-200 hover:text-primary-400 transition-colors"
                      aria-label={media[currentIndex].type === 'image' ? "Resmi büyüt" : "Videoyu büyüt"}
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
                  {media.map((item, index) => (
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
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                          preload="metadata"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 to-transparent" />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-2 bg-dark-950/50 backdrop-blur-md rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
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
              {media[modalImageIndex].type === 'image' ? (
                <img
                  src={media[modalImageIndex].src}
                  alt={`Gallery image ${modalImageIndex + 1}`}
                  className={`${media[modalImageIndex].aspectRatio === 'landscape' ? 'max-w-[90vw] max-h-[60vh]' : 'max-w-[90vw] max-h-[90vh]'} object-contain rounded-lg`}
                />
              ) : (
                <video
                  src={media[modalImageIndex].src}
                  controls
                  className={`${media[modalImageIndex].aspectRatio === 'landscape' ? 'max-w-[90vw] max-h-[60vh]' : 'max-w-[90vw] max-h-[90vh]'} object-contain rounded-lg`}
                />
              )}
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
