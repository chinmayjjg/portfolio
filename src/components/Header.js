import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import useSound from '../hooks/useSound';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playHover = useSound('/sounds/hover.mp3', 0.2);
  const playClick = useSound('/sounds/click.mp3', 0.5);

  const scrollToSection = (sectionId) => {
    playClick();
    setIsOpen(false); // Close menu on click
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    playClick();
    setIsOpen(!isOpen);
  };

  // Swinging animation for icons
  const swingAnimation = {
    rest: { rotate: 0 },
    hover: {
      rotate: [0, 15, -10, 5, 0],
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <nav className="nav">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={playHover}
          onClick={playClick}
          style={{ zIndex: 1001 }}
        >
          CHINXX
        </motion.div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu} style={{
          display: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          color: 'white',
          zIndex: 1001
        }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-nav">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              onMouseEnter={playHover}
            >
              <a href={`#${item.toLowerCase()}`} onClick={() => scrollToSection(item.toLowerCase())}>
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                background: 'rgba(5, 5, 5, 0.95)',
                borderBottom: '2px solid var(--spidey-red)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                zIndex: 1000
              }}
            >
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    color: 'white',
                    fontFamily: 'var(--comic-font)',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    letterSpacing: '2px'
                  }}
                >
                  {item.toUpperCase()}
                </a>
              ))}

              <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                {[
                  { icon: FaGithub, link: 'https://github.com/chinmayjjg' },
                  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/chinmay-pradhan-476954242/' },
                  { icon: FaTwitter, link: 'https://x.com/chinmaypr4dhan' }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5rem' }}>
                    <social.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Socials */}
        <div className="desktop-socials" style={{ display: 'flex', gap: '1rem' }}>
          <motion.a
            href="https://github.com/chinmayjjg"
            target="_blank"
            rel="noopener noreferrer"
            variants={swingAnimation}
            initial="rest"
            whileHover="hover"
            onMouseEnter={playHover}
            onClick={playClick}
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/chinmay-pradhan-476954242/"
            target="_blank"
            rel="noopener noreferrer"
            variants={swingAnimation}
            initial="rest"
            whileHover="hover"
            onMouseEnter={playHover}
            onClick={playClick}
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/chinmaypr4dhan"
            target="_blank"
            rel="noopener noreferrer"
            variants={swingAnimation}
            initial="rest"
            whileHover="hover"
            onMouseEnter={playHover}
            onClick={playClick}
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            <FaTwitter />
          </motion.a>
        </div>
      </nav>

      {/* Mobile Styles Injection */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-socials { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;