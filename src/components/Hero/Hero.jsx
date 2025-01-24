import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.95 },
  };

  const textVariants = {
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '2px',
      transition: { type: 'spring', stiffness: 80, delay: 0.3 },
    },
    hidden: {
      opacity: 0,
      y: 50,
      letterSpacing: '0px',
    },
  };

  const imageVariants = {
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2 } },
    hidden: { scale: 1.1, opacity: 0 },
  };

  return (
    <div className="hero_container" ref={ref}>
      <motion.div
        className="hero_content"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.img
          src="/bg-1.jpeg"
          alt="background-1"
          className="hero_image"
          variants={imageVariants}
        />

        <motion.div
          className="content_text"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h1>
            BEM FMIKOM <br />
            UNUGHA <br />
            PERIODE 2024/2025
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
