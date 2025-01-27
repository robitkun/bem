import { motion, useInView } from 'framer-motion';
import aboutImage from './../../assets/about-bem.JPG';
import './About.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutHome = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, treshold: 1 });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const tagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.8,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
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
      >
        <div className="content_img">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={imageVariants}
          >
            <img src={aboutImage} alt="about" />
            <div className="shape"></div>
          </motion.div>
          <motion.div
            className="tag"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={tagVariants}
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
