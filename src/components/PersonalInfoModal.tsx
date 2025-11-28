import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Shield, User, Car, Flag } from 'lucide-react';

interface PersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const PersonalInfoModal = ({ isOpen, onClose, onContactClick }: PersonalInfoModalProps) => {
  const handleContactClick = () => {
    onClose();
    onContactClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-xl p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-dark-50">Kişisel Bilgilerim</h3>
              <button
                onClick={onClose}
                className="p-2 glass-card-hover rounded-lg text-dark-300 hover:text-primary-400 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Personal Info Grid */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 glass-card-hover rounded-lg">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-50 mb-1">Doğum Tarihi</h4>
                  <p className="text-dark-300">1991</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card-hover rounded-lg">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-50 mb-1">Askerlik Durumu</h4>
                  <p className="text-dark-300">Yapıldı (2015)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card-hover rounded-lg">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <User className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-50 mb-1">Cinsiyet</h4>
                  <p className="text-dark-300">Erkek</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card-hover rounded-lg">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Car className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-50 mb-1">Ehliyet</h4>
                  <p className="text-dark-300">B Sınıfı</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card-hover rounded-lg">
                <div className="p-2 bg-primary-500/10 rounded-lg">
                  <Flag className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-50 mb-1">Vatandaşlık</h4>
                  <p className="text-dark-300">Türkiye Cumhuriyeti</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleContactClick}
                className="flex-1 btn-primary"
              >
                Bana Ulaş
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-dark-800 text-dark-200 font-semibold rounded-xl border border-dark-700 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
              >
                Kapat
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PersonalInfoModal;
