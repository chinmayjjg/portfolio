import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  // Generate floating shapes
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10
  }));

  return (
    <div className="animated-background">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="gradient-orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="gradient-orb orb-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      <motion.div
        className="gradient-orb orb-3"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />

      {/* Animated Wave */}
      <motion.div
        className="animated-wave"
        animate={{
          x: [0, -100, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Lines */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`line-${i}`}
          className="floating-line"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            width: `${100 + i * 20}px`,
            height: `${2 + i}px`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scaleX: [1, 1.2, 1]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 