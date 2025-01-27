import './PengurusHome.css';
import { pengurus } from '../../constants/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PengurusHome = () => {
  const pengurusRef = useRef(null);
  const isInView = useInView(pengurusRef, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <div className="pengurus-home">
      <div className="title">
        <motion.h1
          className="h1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PENGURUS BEM FMIKOM
        </motion.h1>
        <motion.p
          className="p"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pengurus BEM FMIKOM terdiri dari BPH dan beberapa Departement yang
          memiliki tugas dan tanggung jawab masing-masing
        </motion.p>
      </div>
      <div className="pengurus-home_content" ref={pengurusRef}>
        <AnimatePresence>
          <motion.div
            className="departement-container"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {pengurus.map((el) => (
              <motion.div
                key={el.id}
                className="departement"
                variants={itemVariants}
              >
                <motion.img
                  src={el.icon}
                  alt={el.icon}
                  className="icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <div className="text">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {el.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {el.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PengurusHome;
