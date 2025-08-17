import React from 'react';
import { SiTypescript,SiMongodb,SiExpress } from 'react-icons/si';
import { BiKey } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';


import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
   FaGithub,
  FaPython
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
  // Frontend
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },

  // Backend
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },

  // Database
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },

  // Tools
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },

  //Security
  { name: 'JWT', icon: BiKey, color: '#EDBA27' }, 
  { name: 'bcrypt', icon: RiLockPasswordLine, color: '#3C3C3C' },
];


  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <skill.icon 
              className="skill-icon" 
              style={{ color: skill.color }}
            />
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 