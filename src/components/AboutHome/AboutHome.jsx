import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const AboutHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const containerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      className="about-container"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>APA ITU BEM FMIKOM?</motion.h1>
      <div className="about-content">
        <motion.img
          src="/src/assets/about-bem.JPG"
          alt="WOYY"
          variants={itemVariants}
        />
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            Badan Eksekutif Mahasiswa Fakultas Matematika dan Ilmu Komputer (BEM
            FMIKOM) merupakan organisasi kemahasiswaan tertinggi di tingkat
            fakultas Matematika dan Ilmu Komputer. BEM FMIKOM ini didirikan pada
            tanggal 2 November 2018. BEM FMIKOM berada di bawah naungan
            Universitas Nahdlatul Ulama Al Ghazali Cilacap. BEM FMIKOM bersifat
            demokratis, aspiratif, solutif, edukatif, dan Pergerakan. <br />
            <br /> BEM FMIKOM hadir untuk menjembatani kebutuhan mahasiswa dalam
            meningkatkan kompetensi akademik dan non-akademik, sekaligus
            membangun karakter yang unggul dan adaptif terhadap perkembangan
            teknologi di era digital. Melalui program-program kerja yang
            variatif, BEM FMIKOM turut mendorong mahasiswa untuk tidak hanya
            menjadi insan akademis yang berprestasi, tetapi mencetak kader-kader
            pemimpin yang berintegritas tinggi.
          </p>
          <Link to="/tentang" className="link-about">
            Lihat Selengkapnya
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutHome;
