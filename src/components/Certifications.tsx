import { motion } from 'framer-motion';
import { Award, Calendar, Building } from 'lucide-react';

type CertificationItem = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

const Certifications = () => {
  const certifications: CertificationItem[] = [
    {
      id: 'cro-strategies',
      title: 'Conversion Rate Optimization (CRO) Strategies in Digital Marketing',
      issuer: 'Aegon Nederland',
      date: 'Mar 2020',
      description: 'Dijital pazarlamada dönüşüm oranı optimizasyon stratejileri'
    },
    {
      id: 'customer-journey',
      title: 'Customer Journey Service Design',
      issuer: 'Aegon Nederland',
      date: 'Kas 2019',
      description: 'Müşteri yolculuğu hizmet tasarımı metodolojileri'
    },
    {
      id: 'google-analytics',
      title: 'Google Analytics',
      issuer: 'Google',
      date: 'Ağu 2019',
      description: 'Web analizi ve veri odaklı karar verme'
    },
    {
      id: 'cbap',
      title: 'Temel İş & Sistem Analizi Eğitimi (CBAP)',
      issuer: 'BT Akademi',
      date: 'Mar 2019',
      description: 'Business analysis temelleri ve CBAP hazırlık'
    },
    {
      id: 'unix-linux',
      title: 'Unix/Linux Temelleri',
      issuer: 'Türk Telekom',
      date: 'Tem 2018',
      description: 'Unix/Linux sistem yönetimi ve komut satırı'
    },
    {
      id: 'itil',
      title: 'ITIL Eğitimi Katılım Belgesi',
      issuer: 'Türk Telekom',
      date: 'Mar 2018',
      description: 'ITIL framework ve IT service management'
    },
    {
      id: 'microsoft-summer',
      title: 'Microsoft Yaz Okulu Stajı',
      issuer: 'Microsoft',
      date: 'Tem 2012',
      description: 'Microsoft yazılım geliştirme staj programı'
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wider">
            Sertifikalar
          </p>
          <h2 className="section-title text-xl lg:text-2xl mb-4">
            Profesyonel Gelişim ve Yetkinlikler
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-flow absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-dark-800/80" />

            <div className="space-y-8">
              {certifications.map((cert, index) => (
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
                        <Award className="w-5 h-5 text-primary-400" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-dark-400 mb-1">
                          {cert.date}
                        </p>
                        <h3 className="text-lg font-bold text-dark-50 mb-1">{cert.title}</h3>
                        <p className="text-primary-400 font-semibold">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.description && (
                      <p className="text-dark-300 leading-relaxed">{cert.description}</p>
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

export default Certifications;
