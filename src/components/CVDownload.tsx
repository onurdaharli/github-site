import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

interface CVDownloadProps {
  onContactClick: () => void;
}

const CVDownload = ({ onContactClick }: CVDownloadProps) => {
  const handleDownloadCV = () => {
    // CV dosyasını indirme işlemi
    window.open('/assets/Onur Daharlı.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
    >
      <motion.button
        onClick={handleDownloadCV}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
        <span>CV İndir</span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </motion.button>

      <motion.button
        onClick={onContactClick}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-dark-900 text-dark-200 font-semibold rounded-xl border-2 border-dark-700 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span>Kişisel Bilgilerim</span>
      </motion.button>
    </motion.div>
  );
};

export default CVDownload;
