import React from 'react';
import { motion } from 'framer-motion';
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si';
import { TextHoverEffect } from './ui/text-hover-effect';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-name-background" aria-hidden="true">
        <TextHoverEffect text="CHINMAY" duration={0.35} />
      </div>
      <div className="container hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-title"
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          Full-Stack MERN Developer who builds fast and ships clean. I turn ideas into scalable web applications with MongoDB, Express, React, and Node.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="tech-stack"
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', fontSize: '2rem', color: 'var(--text-secondary)' }}
        >
          <SiTypescript />
          <SiReact />
          <SiNextdotjs />
          <SiNodedotjs />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="cta-group"
        >
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="CHINMAY PRADHAN FULLSTACKDEV.pdf" className="btn btn-secondary">Download Resume</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
