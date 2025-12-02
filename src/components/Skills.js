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
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#fff' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#fff' },
    { name: 'Auth', icon: BiKey, color: '#EDBA27' },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technologies</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;