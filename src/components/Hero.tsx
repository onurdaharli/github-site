import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import CVDownload from './CVDownload';
import PersonalInfoModal from './PersonalInfoModal';

const Hero = () => {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden pt-24 lg:pt-28">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10 pb-20 lg:pb-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-lg opacity-30" />
              <img
                src="/assets/1730375902348.jpeg"
                alt="Onur Daharlı"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary-400/20"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Onur Daharlı
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 font-light">
              Consultant IT Business Analyst
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            <div className="glass-card p-4">
              <div className="flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-primary-400">10+</div>
              <div className="text-xs text-dark-400 uppercase tracking-wide">Yıl Deneyim</div>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center justify-center mb-2">
                <GraduationCap className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-primary-400">2</div>
              <div className="text-xs text-dark-400 uppercase tracking-wide">Üniversite</div>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-primary-400">7</div>
              <div className="text-xs text-dark-400 uppercase tracking-wide">Sertifika</div>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-xl font-bold text-primary-400">Ataşehir İstanbul</div>
              <div className="text-xs text-dark-400 uppercase tracking-wide">Konum</div>
            </div>
          </motion.div>

          {/* Brief Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <p className="text-lg text-dark-300 leading-relaxed max-w-3xl mx-auto">
              Bankacılık, Sigortacılık, Telekomünikasyon sektörlerinde, toplam 10+ yıllık IT Business Analyst deneyimi ile
              süreç iyileştirmesi, sistem entegrasyonu ve dijital dönüşüm projelerinde uzmanım.
            </p>
          </motion.div>

          {/* CV Download and Actions */}
          <CVDownload onContactClick={() => setIsPersonalInfoOpen(true)} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-dark-700 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary-500 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Personal Info Modal */}
      <PersonalInfoModal
        isOpen={isPersonalInfoOpen}
        onClose={() => setIsPersonalInfoOpen(false)}
        onContactClick={scrollToContact}
      />
    </section>
  );
};

export default Hero;
