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
              Full Stack Developer
            </h3>

            <p>
              Currently interned at Aspol Media, migrating legacy PHP systems to Node.js. Built Resumix - a portfolio builder that converts resumes to websites with 70% accuracy. Solo-built Second Brain - a knowledge management app used by 20+ real users.
            </p>

            <p>
              Pursuing MCA at Gita Autonomous College. When I'm not coding, I'm exploring new technologies or debugging something interesting.
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