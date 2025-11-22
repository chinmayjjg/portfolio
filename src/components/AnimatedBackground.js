import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring physics for parallax
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate distance from center for parallax
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      setMousePosition({ x: clientX, y: clientY });
      cursorX.set(-moveX); // Invert for depth effect
      cursorY.set(-moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Generate random web lines
  const webLines = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    width: Math.random() * 200 + 100,
    rotation: Math.random() * 360,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="animated-background">
      {/* Drifting Web Threads */}
      {webLines.map((line) => (
        <motion.div
          key={line.id}
          style={{
            position: 'absolute',
            left: `${line.x}%`,
            top: `${line.y}%`,
            width: `${line.width}px`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            x: springX,
            y: springY,
          }}
          animate={{
            rotate: [line.rotation, line.rotation + 360],
            y: [0, -50, 0],
          }}
          transition={{
            rotate: {
              duration: line.duration * 2,
              repeat: Infinity,
              ease: "linear"
            },
            y: {
              duration: line.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}

      {/* Subtle floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: 'rgba(237, 29, 36, 0.3)',
            x: springX,
            y: springY,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;