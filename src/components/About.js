import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const photos = [
    { src: '/images/photo1.png', rotate: -3, caption: 'ORIGIN STORY' },
    { src: '/images/photo2.png', rotate: 2, caption: 'DAILY LIFE' },
    { src: '/images/photo3.png', rotate: -2, caption: 'SECRET ID' }
  ];

  return (
    <section className="section" id="about">
      <h2 className="section-title" data-text="BEHIND THE MASK">BEHIND THE MASK</h2>
      <motion.div
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          alignItems: 'center'
        }}
      >
        {/* Comic Strip Photos */}
        <div className="comic-strip" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          width: '100%',
          padding: '0 1rem'
        }}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1, rotate: photo.rotate }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              className="comic-photo"
              style={{
                position: 'relative',
                width: '250px',
                height: '300px',
                border: '4px solid white',
                boxShadow: '10px 10px 0 var(--spidey-blue)',
                background: '#fff',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              {/* Caption Label */}
              <div style={{
                position: 'absolute',
                top: -15,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--spidey-yellow)',
                color: 'black',
                padding: '0.3rem 0.8rem',
                fontFamily: 'var(--comic-font)',
                fontSize: '1rem',
                border: '2px solid black',
                zIndex: 10,
                whiteSpace: 'nowrap',
                boxShadow: '3px 3px 0 black'
              }}>
                {photo.caption}
              </div>

              <div style={{ width: '100%', height: '100%', overflow: 'hidden', border: '2px solid black' }}>
                <img
                  src={photo.src}
                  alt={`Chinmay ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.1) sepia(0.2)'
                  }}
                />
              </div>

              {/* Halftone overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '3px 3px',
                pointerEvents: 'none'
              }} />
            </motion.div>
          ))}
        </div>

        {/* Text Content */}
        <div className="about-text-container" style={{
          maxWidth: '800px',
          width: '100%',
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          padding: '0 1rem'
        }}>
          <div className="about-text">
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '1rem',
              color: 'var(--spidey-red)',
              textShadow: '2px 2px 0 black'
            }}>
              PASSIONATE DEVELOPER
            </h3>
            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              lineHeight: '1.8',
              fontFamily: 'var(--tech-font)',
              background: 'rgba(0,0,0,0.5)',
              padding: '1rem',
              borderLeft: '4px solid var(--spidey-red)'
            }}>
              I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-centered digital experiences. With a strong foundation
              in both front-end and back-end development, I enjoy bringing ideas to life
              through clean, efficient code.
            </p>
          </div>

          <div className="about-text">
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '1rem',
              color: 'var(--spidey-blue)',
              textShadow: '2px 2px 0 black'
            }}>
              WHAT I DO
            </h3>
            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              lineHeight: '1.8',
              fontFamily: 'var(--tech-font)',
              background: 'rgba(0,0,0,0.5)',
              padding: '1rem',
              borderLeft: '4px solid var(--spidey-blue)'
            }}>
              I specialize in building modern web applications using React, Node.js, and
              various other cutting-edge technologies. My approach combines technical
              expertise with creative problem-solving to deliver solutions that not only
              meet requirements but exceed expectations.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;