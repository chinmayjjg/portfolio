import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="about-content">
          <div className="about-text">
            <h3>Passionate Developer</h3>
            <p>
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. With a strong foundation 
              in both front-end and back-end development, I enjoy bringing ideas to life 
              through clean, efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying up-to-date with the latest 
              industry trends and best practices.
            </p>
          </div>
          <div className="about-text">
            <h3>What I Do</h3>
            <p>
              I specialize in building modern web applications using React, Node.js, and 
              various other cutting-edge technologies. My approach combines technical 
              expertise with creative problem-solving to deliver solutions that not only 
              meet requirements but exceed expectations.
            </p>
            <p>
              From concept to deployment, I handle every aspect of the development process, 
              ensuring that each project is built with scalability, performance, and 
              maintainability in mind.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 