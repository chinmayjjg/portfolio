import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Second Brain',
      description: 'A productivity web app that allows users to store, organize, retrieve, and share notes and ideas, acting like an extension of their own mind. Features include note creation, categorization, search, cloud storage, and knowledge sharing.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
      githubLink: 'https://github.com/chinmayjjg/second-brain',
      image: '/images/second-brain.png' // Add your image path here
    },
    {
      title: 'AI Ticket Management System',
      description: 'A full-stack ticket management platform with AI-powered categorization, priority detection, and smart agent assignment. Built with TypeScript, Express, MongoDB, and React for real-time dashboards and role-based access.',
      technologies: ['TypeScript', 'React', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      githubLink: 'https://github.com/chinmayjjg/ai-ticket-management',
      image: '/images/ai-ticket-management.png'
    },
    {
      title: 'Weather app',
      description: 'A responsive weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI animations.',
      technologies: ['React', 'CSS3', ' Open Weather API'],
      githubLink: 'https://github.com/chinmayjjg/weather-',
      image: '/images/weather-app.png'
    },
    {
      title: 'DevLink',
      description: 'A developer link-sharing platform that allows users to create customizable profiles with their important links, projects, and social media.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/chinmayjjg/devlink',
      image: '/images/devlink.png'
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
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
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