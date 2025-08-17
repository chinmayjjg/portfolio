import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  const floatingIcons = [
    { icon: FaCode, delay: 0, x: -50, y: -30 },
    { icon: FaRocket, delay: 0.5, x: 50, y: -20 },
    { icon: FaLightbulb, delay: 1, x: -30, y: 40 },
    { icon: FaCode, delay: 1.5, x: 40, y: 30 },
  ];

  return (
    <section className="hero">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0.8],
            x: [0, item.x, 0],
            y: [0, item.y, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.icon size={24} />
        </motion.div>
      ))}

      {/* Animated Background Elements */}
      <motion.div
        className="hero-bg-element bg-element-1"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="hero-bg-element bg-element-2"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="hero-content">
        {/* Animated Text with Typewriter Effect */}
        <motion.div
          className="hero-title-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="highlight-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              Chinmay
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          className="hero-subtitle-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              Full Stack Developer
            </motion.span>
            {" "}&{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Learning web 3.0
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          Crafting digital experiences with code, creativity, and innovation
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 2.8 }}
            >
              Get In Touch
            </motion.span>
            <motion.span
              className="cta-arrow"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 3 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 