import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

type CareerItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  highlights?: string[];
};

const Career = () => {
  const careerItems: CareerItem[] = [
    {
      id: 'vakifbank',
      period: 'Tem 2023 - Halen',
      title: 'Consultant IT Business Analyst',
      organization: 'VakıfBank',
      location: 'Atasehir, Istanbul, Turkey · Hibrit',
      description: 'Pazarlama Yönetimi Uygulama Geliştirme Müdürlüğü - Fiyatlama ekibinde; Temel Bankacılık Masrafları, Mevduat-Faiz ,Kredi Kartları, Ek Hesap (KMH) domainlerinde kariyerime devam etmekteyim.',
      highlights: [
        'Fiyatlama ekibinde temel bankacılık masrafları, mevduat-faiz, kredi kartları ve KMH domainlerinde çalışıyorum.',
        'IT Business Analyst olarak süreç iyileştirmeleri ve sistem entegrasyonları gerçekleştiriyorum.',
        'Kullanıcı ihtiyaçlarını analiz ederek çözümler geliştiriyorum.',
      ],
    },
    {
      id: 'viennalife',
      period: 'Şub 2019 - Tem 2023',
      title: 'Business Development Manager',
      organization: 'Viennalife',
      location: 'Kadikoy, Istanbul, Turkey · Hibrit',
      description: 'Sigorta ürünleri üzerine, baştan sonra Pure-Online (E-Sales) satış, Dijital Pazarlama , Çağrı Merkezi , A/B Testing , Conversion Rate Optimization (CRO) , Google Analytics , B2B şirketler arası anlaşmalar ve API entegrasyonlarının kurulması üzerine İş Analisti olarak çalışmalar gerçekleştirdim. Sonrasında aldığım terfi ile Departman Müdürü olarak aynı bölümde görevime devam ettim. Farklı bir domain üzerine deneyim kazanmak ve kendime yeni bilgiler katma düşüncesiyle işten ayrıldım.',
      highlights: [
        'Pure-Online satış sistemleri ve dijital pazarlama stratejilerini yönetiyorum.',
        'A/B testing, CRO ve Google Analytics ile performans optimizasyonu yapıyorum.',
        'Çağrı merkezi süreçlerini ve B2B API entegrasyonlarını geliştiriyorum.',
        'Departman Müdürü olarak ekip liderliği ve stratejik planlama sorumluluğum var.',
      ],
    },
    {
      id: 'turk-telekom',
      period: 'Haz 2016 - Şub 2019',
      title: 'IT Business Analyst',
      organization: 'Turk Telekom',
      location: 'Umraniye, Istanbul, Turkey · Ofisten',
      description: 'Kurumsal Bulk SMS & OTP SMS, MMS , Mobil Fatura Tahsilat Sistemleri, MNP Numara Taşıma platformlarında çalışmalar gerçekleştirdim. Hollanda menşei global bir şirket olan "Aegon" dan gelen teklif üzerine , yurtdışı imkanları sebebiyle işten ayrıldım. (Hissedar devri nedeniyle yeni adıyla Avusturya menşei Viennalife)',
      highlights: [
        'Bulk SMS ve OTP SMS sistemlerinin analiz ve geliştirilmesi',
        'Mobil fatura tahsilat sistemlerinin optimizasyonu',
        'MNP numara taşıma platformu süreç yönetimi',
      ],
    },
    {
      id: 'tff',
      period: 'Şub 2016 - Haz 2016',
      title: 'Software Engineer',
      organization: 'Türkiye Futbol Federasyonu',
      location: 'Beykoz, Istanbul, Turkey · Ofisten',
      description: 'Riva\'da IT Departmanında Tff.org Mobil uygulaması üzerine "Javascript ve Ionic Framework" dilleri üzerine çalıştım. Kariyer planlamamda üst seviyelere çıkabilmek adına önümün daha açık olduğunu düşünmem sebebiyle Türk Telekom firmasından gelen iş teklifi üzerine işten ayrıldım.',
      highlights: [
        'TFF mobil uygulaması geliştirme',
        'Javascript ve Ionic Framework kullanımı',
        'IT departmanında yazılım geliştirme',
      ],
    },
    {
      id: 'softtech',
      period: 'Ağu 2015 - Şub 2016',
      title: 'Software Engineer',
      organization: 'Softtech',
      location: 'Sariyer, Istanbul, Turkey · Ofisten',
      description: 'Askerlik vazifemi yerine getirdikten hemen sonra, Uluslararası Bankacılık Departmanında Kredi Kartı Yazılımları üzerine "Cobol" yazılım diliyle çalıştım. Türkiye Futbol Federasyonu\'ndan gelen iş fırsatı ve benim için farklı ve heyecanlı bir deneyim olacağını düşünmem sebebiyle işten ayrıldım.',
      highlights: [
        'Kredi kartı yazılımları geliştirme',
        'Cobol programlama dili',
        'Uluslararası Bankacılık Departmanı',
      ],
    },
  ];

  return (
    <section id="career" className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wider">
            Kariyer Yolculuğu
          </p>
          <h2 className="section-title text-xl lg:text-2xl mb-4">
            Profesyonel Deneyimlerim
          </h2>
          <p className="section-subtitle">
            Farklı sektörlerde edindiğim iş deneyimi ve uzmanlık alanlarım
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-flow absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-dark-800/80" />

            <div className="space-y-8">
              {careerItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2">
                    <motion.div 
                      className="timeline-dot w-3 h-3 rounded-full bg-primary-500/70 ring-4 ring-dark-950"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      whileHover={{
                        scale: 1.5,
                        backgroundColor: "rgb(20 184 166)",
                        boxShadow: "0 0 20px rgba(20, 184, 166, 0.6)",
                      }}
                    />
                  </div>

                  <motion.div 
                    className="glass-card-hover p-6"
                    whileHover={{
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div 
                        className="p-2 bg-primary-500/10 rounded-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Briefcase className="w-5 h-5 text-primary-400" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-dark-400 mb-1">
                          {item.period}
                        </p>
                        <h3 className="text-lg font-bold text-dark-50 mb-1">{item.organization}</h3>
                        <p className="text-primary-400 font-semibold">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-dark-400 mb-3">{item.location}</p>
                    <p className="text-dark-300 leading-relaxed mb-4">{item.description}</p>
                    
                    {item.highlights && (
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-dark-300">
                            <span className="text-primary-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
