import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuToggle from './MenuToggle';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navigasi } from '../../constants/utils';
const Navbar = () => {
  const [open, isOpen] = useState(false);
  const [active, isActive] = useState(null);
  const [visible, isVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      isVisible(scrollY <= 32);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav initial={false} animate={open ? 'open' : 'closed'}>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            nitial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.25,
              delay: 0.25,
              times: 0.25,
              ease: 'easeInOut',
            }}
            className="nav-1"
          >
            <Link className="email" to="mailto:bemfmikom@unugha.id">
              bemfmikom@unugha.id
            </Link>

            <h3 className="lang">
              <span>EN</span> | <span>ID</span>
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="nav-2"
        initial={{ boxShadow: 'none' }}
        animate={{
          boxShadow: !visible ? 'rgba(0, 0, 0, 0.35) 0px 3px 8px' : 'none',
        }}
        transition={{ duration: 0.25 }}
        layout
      >
        <Link to="/" className="logo">
          <img
            src="/logobemfmikom.png"
            alt="LogoBEMFMIKOM"
            width={60}
            height={60}
          />
          <div className="title">
            <h3 className="title-1">
              BADAN EKSEKUTIF <br />
              MAHASISWA
            </h3>
            <h3 className="title-2">
              FAKULTAS MATEMATIKA <br />
              DAN ILMU KOMPUTER
            </h3>
          </div>
        </Link>
        <div className="menu_container">
          {navigasi.map((el, index) => {
            return (
              <div
                key={index}
                className="menu"
                onMouseEnter={() => isActive(index)}
                onClick={() => isActive(index)}
                onMouseLeave={() => isActive(null)}
              >
                <Link to={el.href} className="menu_title">
                  {el.title}
                </Link>
                <span
                  className="underline"
                  style={{
                    transform: active === index ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </div>
            );
          })}
        </div>
        <MenuToggle toggle={() => isOpen(!open)} />
        <motion.div variants={sidebarVariants} layout className="bg">
          <div className="menu-container">
            {navigasi.map((el, index) => (
              <Link
                key={index}
                to={el.href}
                className="menu-item"
                onClick={() => isOpen(false)}
              >
                <p>{el.title}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
      {/* MOBILE */}
    </motion.nav>
  );
};
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(10px at calc(100% - 20px) 40px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default Navbar;
