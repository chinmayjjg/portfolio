import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Full Stack Developer
            </h3>

            <p>
              I build practical web applications with the MERN stack, with a focus on clean interfaces, reliable APIs, and thoughtful user experiences. I enjoy turning complex ideas into useful products.
            </p>

            <p>
              Pursuing MCA at Gita Autonomous College. When I'm not coding, I'm exploring new technologies or debugging something interesting.
            </p>

            <div className="about-stats">
              <div>
                <h4>10+</h4>
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
