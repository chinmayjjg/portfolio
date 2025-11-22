import React from 'react';
import { motion } from 'framer-motion';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';
import { BiKey } from 'react-icons/bi';

import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPython
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JS', icon: FaJs, color: '#F7DF1E' },
    { name: 'TS', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#fff' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Mongo', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#fff' },
    { name: 'JWT', icon: BiKey, color: '#EDBA27' },
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">SUIT UPGRADES</h2>

      {/* HUD Container */}
      <div className="hud-container" style={{
        border: '2px solid var(--spidey-blue)',
        padding: '2rem',
        position: 'relative',
        background: 'rgba(0, 20, 40, 0.5)',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        {/* HUD Decorative Corners */}
        <div style={{ position: 'absolute', top: -2, left: -2, width: 20, height: 20, borderTop: '4px solid var(--spidey-red)', borderLeft: '4px solid var(--spidey-red)' }} />
        <div style={{ position: 'absolute', top: -2, right: -2, width: 20, height: 20, borderTop: '4px solid var(--spidey-red)', borderRight: '4px solid var(--spidey-red)' }} />
        <div style={{ position: 'absolute', bottom: -2, left: -2, width: 20, height: 20, borderBottom: '4px solid var(--spidey-red)', borderLeft: '4px solid var(--spidey-red)' }} />
        <div style={{ position: 'absolute', bottom: -2, right: -2, width: 20, height: 20, borderBottom: '4px solid var(--spidey-red)', borderRight: '4px solid var(--spidey-red)' }} />

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <div style={{ fontSize: '2.5rem', color: skill.color, marginBottom: '0.5rem' }}>
                <skill.icon />
              </div>
              <h4 style={{ fontFamily: 'var(--tech-font)', fontSize: '0.8rem' }}>{skill.name}</h4>
              <div style={{
                height: '2px',
                width: '100%',
                background: 'var(--spidey-blue)',
                marginTop: '0.5rem',
                opacity: 0.5
              }} />
            </motion.div>
          ))}
        </div>

        <div style={{
          textAlign: 'right',
          marginTop: '1rem',
          fontFamily: 'var(--tech-font)',
          color: 'var(--spidey-blue)',
          fontSize: '0.8rem'
        }}>
          SYSTEM STATUS: OPTIMAL
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hud-container { padding: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;