import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
  
    {
   title: 'Second Brain',
   description: 'A productivity web app that allows users to store, organize, retrieve, and share notes and ideas, acting like an extension of their own mind. Features include note creation, categorization, search, cloud storage, and knowledge sharing.',
   technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
   liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
   githubLink: 'https://github.com/chinmayjjg/second-brain'
   },
    {
      title: 'Weather app',
      description: 'A responsive weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI animations.',
      technologies: ['React', 'CSS3', ' Open Weather API'],
      liveLink: 'https://github.com/chinmayjjg/weather-',
      githubLink: 'https://github.com/chinmayjjg/weather-'
    },
    

  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              {project.title.charAt(0)}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 