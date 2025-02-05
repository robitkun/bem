import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="hero_container">
      <div className="hero_content" ref={containerRef}>
        <div className="content_text">
          <motion.h2
            className="welcome"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textAnimation}
            custom={0}
          >
            WELCOME TO
          </motion.h2>
          <motion.h1
            className="org"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textAnimation}
            custom={1}
          >
            BEM FMIKOM 2024
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textAnimation}
            custom={2}
          >
            BEM FMIKOM hadir untuk menjembatani kebutuhan mahasiswa dalam
            meningkatkan kompetensi akademik dan non-akademik, sekaligus
            membangun karakter yang unggul dan adaptif terhadap perkembangan
            teknologi di era digital.
          </motion.p>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textAnimation}
            custom={3}
          >
            <Link className="cta" to="/tentang">
              Lihat Selengkapnya
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
