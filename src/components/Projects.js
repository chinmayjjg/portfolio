import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Second Brain',
      description: 'Productivity app for your mind.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
      githubLink: 'https://github.com/chinmayjjg/second-brain',
      image: '/images/second-brain.png'
    },
    {
      title: 'AI Ticket System',
      description: 'Smart support with AI agents.',
      tags: ['TypeScript', 'React', 'Express', 'AI'],
      liveLink: null,
      githubLink: 'https://github.com/chinmayjjg/ai-ticket-management',
      image: '/images/ai-ticket-management.png'
    },
    {
      title: 'Weather App',
      description: 'Forecasts with style.',
      tags: ['React', 'API', 'CSS'],
      liveLink: null,
      githubLink: 'https://github.com/chinmayjjg/weather-',
      image: '/images/weather-app.png'
    },
    {
      title: 'DevLink',
      description: 'Share your developer profile.',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveLink: null,
      githubLink: 'https://github.com/chinmayjjg/devlink',
      image: '/images/devlink.png'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222' }}>
                    <FaGithub size={50} color="#555" />
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--accent-primary)' }}>
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;