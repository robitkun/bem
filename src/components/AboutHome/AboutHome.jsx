import { motion, useInView } from 'framer-motion';
import aboutImage from '../../assets/about-bem.JPG';
import './About.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutHome = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, treshold: 1 });
  const containerVariants = {
    hidden: {},
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
  const imageVariants = {
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

  const tagVariants = {
    hidden: { scale: 0, opacity: 0 },
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

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <div className="about-container">
      <h1>APA ITU BEM FMIKOM?</h1>

      <motion.div
        className="about-content"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        custom={0}
      >
        <div className="content_img">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={imageVariants}
            custom={1}
          >
            <img src={aboutImage} alt="about" />
            <div className="shape"></div>
          </motion.div>
          <motion.div
            className="tag"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={tagVariants}
            custom={2}
          >
            <h3>
              2024 <br /> BEM FMIKOM
            </h3>
          </motion.div>
        </div>

        <motion.div
          className="content_text"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={3}
        >
          <p>
            Badan Eksekutif Mahasiswa Fakultas Matematika dan Ilmu Komputer (BEM
            FMIKOM) merupakan organisasi kemahasiswaan tertinggi di tingkat
            fakultas Matematika dan Ilmu Komputer. BEM FMIKOM ini didirikan pada
            tanggal 2 November 2018. BEM FMIKOM berada di bawah naungan
            Universitas Nahdlatul Ulama Al Ghazali Cilacap. BEM FMIKOM bersifat
            demokratis, aspiratif, solutif, edukatif, dan Pergerakan.
            <br /> <br /> BEM FMIKOM hadir untuk menjembatani kebutuhan
            mahasiswa dalam meningkatkan kompetensi akademik dan non-akademik,
            sekaligus membangun karakter yang unggul dan adaptif terhadap
            perkembangan teknologi di era digital. Melalui program-program kerja
            yang variatif, BEM FMIKOM turut mendorong mahasiswa untuk tidak
            hanya menjadi insan akademis yang berprestasi, tetapi mencetak
            kader-kader pemimpin yang berintegritas tinggi.
          </p>
          <motion.div className="cta_link">
            <Link className="link">Lihat Selengkapnya</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHome;
