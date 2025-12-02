import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            color: 'var(--accent-primary)',
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '2px',
            fontSize: '1rem',
            textTransform: 'uppercase'
          }}>
            Full Stack Developer
          </h2>

          <h1 className="hero-title">
            CHINMAY PRADHAN
          </h1>

          <p className="hero-subtitle">
            I build accessible, pixel-perfect, and performant web experiences.
            Specialized in building modern applications with the latest technologies.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            margin: '3rem 0',
            color: 'var(--text-secondary)',
            fontSize: '2rem'
          }}>
            <SiTypescript title="TypeScript" />
            <SiReact title="React" />
            <SiNextdotjs title="Next.js" />
            <SiNodedotjs title="Node.js" />
          </div>

          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="/chinmay_pradhan_mca.pdf" download className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Resume <FaFileDownload size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;