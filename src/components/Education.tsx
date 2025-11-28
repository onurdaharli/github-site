import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

type EducationItem = {
  id: string;
  period: string;
  degree: string;
  school: string;
  location?: string;
  description: string;
  grade?: string;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: 'izmirekonomi-bs',
      period: 'Eyl 2009 - Haz 2014',
      degree: 'Lisans Derecesi, Bilgisayar Mühendisliği (50% Burslu)',
      school: 'İzmir Ekonomi Üniversitesi',
      location: 'İzmir, Turkey',
      description: 'Bilgisayar mühendisliği alanında lisans eğitimi, 50% burslu program.',
      grade: 'Not: 3.17 / 4',
    },
    {
      id: 'okan-mba',
      period: 'Eyl 2016 - Tem 2017',
      degree: 'Master of Business Administration - MBA, İşletme ve Yönetim, Genel',
      school: 'Okan Üniversitesi',
      location: 'Istanbul, Turkey',
      description: 'İşletme ve yönetim alanında yüksek lisans eğitimi.',
      grade: 'Not: 3.55 / 4',
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-32 bg-dark-900/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wider">
            Eğitim
          </p>
          <h2 className="section-title text-xl lg:text-2xl mb-4">
            Teknik Temeli Güçlendiren Yolculuk
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-flow absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-dark-800/80" />

            <div className="space-y-8">
              {educationItems.map((item, index) => (
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
                        <GraduationCap className="w-5 h-5 text-primary-400" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-dark-400 mb-1">
                          {item.period}
                          {item.grade && <span className="ml-2 text-primary-400">· {item.grade}</span>}
                        </p>
                        <h3 className="text-lg font-bold text-dark-50 mb-1">{item.school}</h3>
                        <p className="text-primary-400 font-semibold">{item.degree}</p>
                      </div>
                    </div>
                    <p className="text-dark-400">{item.description}</p>
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

export default Education;
