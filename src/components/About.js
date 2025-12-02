import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-images"
          >
            <div className="image-wrapper main-image">
              <img src="/images/photo1.png" alt="Profile 1" />
            </div>
            <div className="image-stack">
              <div className="image-wrapper">
                <img src="/images/photo2.png" alt="Profile 2" />
              </div>
              <div className="image-wrapper">
                <img src="/images/photo3.png" alt="Profile 3" />
              </div>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Passionate Full Stack Developer
            </h3>

            <p>
              I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-centered digital experiences. With a strong foundation
              in both front-end and back-end development, I enjoy bringing ideas to life
              through clean, efficient code.
            </p>

            <p>
              I specialize in building modern web applications using React, Node.js, and
              various other cutting-edge technologies. My approach combines technical
              expertise with creative problem-solving to deliver solutions that not only
              meet requirements but exceed expectations.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }}>2+</h4>
                <span style={{ color: 'var(--text-secondary)' }}>Years Experience</span>
              </div>
              <div>
                <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)' }}>10+</h4>
                <span style={{ color: 'var(--text-secondary)' }}>Projects Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;