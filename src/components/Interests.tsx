import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Trees, 
  Music, 
  Film, 
  Plane, 
  Waves,
  Coffee,
  Gamepad2,
  Heart,
  Languages
} from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: Dumbbell,
      title: 'Vücut Geliştirme',
      description: 'Fitness, güç antrenmanı ve sağlıklı yaşam programları',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: Trees,
      title: 'Doğa Yürüyüşü',
      description: 'Doğada yürüyüş, trekking ve doğa ile iç içe aktiviteler',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: Music,
      title: 'Müzik',
      description: 'Farklı türlerde müzik dinleme ve enstrüman çalma',
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      icon: Film,
      title: 'Sinema',
      description: 'Film izleme, sinema kültürü ve farklı türler keşfetme',
      color: 'bg-orange-500/10 text-orange-400'
    },
    {
      icon: Plane,
      title: 'Seyahat',
      description: 'Yeni kültürler keşfetme ve farklı şehirler gezme',
      color: 'bg-cyan-500/10 text-cyan-400'
    },
    {
      icon: Waves,
      title: 'Yüzme',
      description: 'Yüzme sporu, su aktiviteleri ve sağlıklı yaşam',
      color: 'bg-cyan-500/10 text-cyan-400'
    },
    {
      icon: Coffee,
      title: 'Kahve Kültürü',
      description: 'Farklı kahve çeşitleri deneme ve kahve demleme teknikleri',
      color: 'bg-yellow-500/10 text-yellow-600'
    },
    {
      icon: Gamepad2,
      title: 'Oyun',
      description: 'Strateji oyunları ve problem çözme tabanlı dijital oyunlar',
      color: 'bg-indigo-500/10 text-indigo-400'
    }
  ];

  return (
    <section id="interests" className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wider">
            İlgi Alanları ve Hobiler
          </p>
          <h2 className="section-title text-xl lg:text-2xl mb-4">
            İş Dışındaki Sosyal Hayatım
          </h2>
          <p className="section-subtitle">
            Kişisel gelişimimi ve hayat kalitemi artıran ilgi alanlarım
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-xl ${interest.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <interest.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-50 mb-3">
                  {interest.title}
                </h3>
                <p className="text-dark-300 leading-relaxed text-sm">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Languages className="w-8 h-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-dark-50">
                Diller
              </h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 text-center"
            >
              <h4 className="text-xl font-bold text-dark-50 mb-2">İngilizce</h4>
              <p className="text-primary-400 font-medium">Profesyonel Çalışma Yetkinliği</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass-card p-6 text-center"
            >
              <h4 className="text-xl font-bold text-dark-50 mb-2">Almanca</h4>
              <p className="text-primary-400 font-medium">Sınırlı Çalışma Yetkinliği</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-dark-50">
                Hayat Felsefem
              </h3>
            </div>
            <p className="text-lg text-dark-200 italic leading-relaxed">
              "Sürekli öğrenmek, yeni şeyler keşfetmek ve hayatı dolu dolu yaşamak. 
              İş hayatında olduğu gibi kişisel hayatta da büyümeyi ve gelişmeyi hedefliyorum. 
              Her gün yeni bir şey öğrenmek, hayatı daha anlamlı kılıyor."
            </p>
            <div className="mt-6 text-primary-400 font-medium">
              - Onur Daharlı
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
