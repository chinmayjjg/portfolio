import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaSpider, FaFileDownload } from 'react-icons/fa';
import useSound from '../hooks/useSound';

const Hero = () => {
  const playGlitch = useSound('/sounds/glitch.mp3', 0.3);
  const playClick = useSound('/sounds/click.mp3', 0.5);

  useEffect(() => {
    // Play glitch sound on mount (user interaction usually required first, so this might be blocked until click)
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Dynamic Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 3 + 1}rem`,
              color: i % 2 === 0 ? 'var(--spidey-red)' : 'var(--spidey-blue)',
              opacity: 0.2,
              filter: 'blur(2px)'
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 3 === 0 ? <FaSpider /> : i % 3 === 1 ? <FaCode /> : '🕸️'}
          </motion.div>
        ))}
      </div>

      <div className="hero-content" style={{ zIndex: 2, width: '100%', padding: '0 1rem' }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          onAnimationComplete={() => playGlitch()}
        >
          <h2 style={{
            fontFamily: 'var(--tech-font)',
            color: 'var(--spidey-yellow)',
            marginBottom: '1rem',
            letterSpacing: '4px',
            fontSize: 'clamp(1rem, 4vw, 1.5rem)'
          }}>
            SYSTEM_ONLINE
          </h2>

          <h1
            className="hero-title glitch-text"
            data-text="CHINMAY PRADHAN"
            onMouseEnter={playGlitch}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)', // Responsive font size
              lineHeight: 1.1
            }}
          >
            CHINMAY PRADHAN
          </h1>

          <motion.div
            style={{
              background: 'var(--spidey-red)',
              color: 'white',
              display: 'inline-block',
              padding: '0.2rem 1rem',
              transform: 'skew(-10deg)',
              marginBottom: '2rem',
              fontFamily: 'var(--comic-font)',
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            FULL-STACK DEVELOPER
          </motion.div>

          <p style={{
            fontFamily: 'var(--tech-font)',
            maxWidth: 'clamp(260px, 60%, 600px)',
            margin: '0 auto 3rem',
            lineHeight: '1.6',
            background: 'rgba(0,0,0,0.7)',
            padding: '1rem',
            border: '1px solid var(--spidey-blue)',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            &gt; Initializing web protocols...<br />
            &gt; Loading creative modules...<br />
            &gt; Ready to swing into action.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="#projects"
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClick}
              onMouseEnter={playGlitch}
            >
              EXPLORE UNIVERSE
            </motion.a>

            <motion.a
              href="/chinmay_pradhan_mca.pdf"
              download
              className="cta-button"
              style={{
                background: 'var(--spidey-blue)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={playClick}
              onMouseEnter={playGlitch}
            >
              DOWNLOAD DATA <FaFileDownload />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;