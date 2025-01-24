import './PengurusHome.css';
import { pengurus } from '../../constants/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PengurusHome = () => {
  const pengurusRef = useRef(null);
  const isInView = useInView(pengurusRef, { once: true });

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
    hidden: {},
  };

  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="pengurus-home">
      <div className="title">
        <h1>PENGURUS BEM FMIKOM</h1>
        <p>
          Pengurus BEM FMIKOM terdiri dari BPH dan beberapa Departement yang
          memiliki tugas dan tanggung jawab masing-masing
        </p>
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
                <img src={el.icon} alt={el.icon} className="icon" />
                <div className="text">
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
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
