import { useState } from 'react';
import './DepartementPage.css';
import { AnimatePresence, motion } from 'framer-motion';
const DepartementPage = () => {
  const [open, setOpen] = useState(false);
  const animate = {
    open: {
      rotate: 360,
      scale: 1.4,
    },
    closed: {
      rotate: [0, 180, 0],
      scale: 1,
    },
  };
  return (
    <div className="departement-page">
      <AnimatePresence>
        <motion.div
          variants={animate}
          style={{ width: 100, height: 100, background: 'orange' }}
          animate={open ? 'open' : 'closed'}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          exit={{ rotate: 360 }}
        />
      </AnimatePresence>
      <button onClick={() => setOpen((prev) => !prev)}>Klik</button>
    </div>
  );
};

export default DepartementPage;
