import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useSound from '../hooks/useSound';

const Projects = () => {
  const playThwip = useSound('/sounds/thwip.mp3', 0.6);

  const projects = [
    {
      title: 'Second Brain',
      description: 'Productivity app for your mind.',
      tags: ['TS', 'React', 'Node', 'Mongo'],
      liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
      githubLink: 'https://github.com/chinmayjjg/second-brain',
      image: '/images/second-brain.png'
    },
    {
      title: 'AI Ticket System',
      description: 'Smart support with AI agents.',
      tags: ['TS', 'React', 'Express', 'AI'],
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
      tags: ['React', 'Node', 'Mongo'],
      liveLink: null,
      githubLink: 'https://github.com/chinmayjjg/devlink',
      image: '/images/devlink.png'
    }
  ];

  return (
    <section className="section" id="projects">
      <h2 className="section-title" data-text="WEB OF PROJECTS">WEB OF PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover="hover"
            onMouseEnter={playThwip}
          >
            <div className="project-image">
              {/* Comic "Thwip!" Overlay */}
              <motion.div
                variants={{
                  hover: { opacity: 1, scale: 1.2, rotate: -10 }
                }}
                initial={{ opacity: 0, scale: 0 }}
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  background: 'white',
                  color: 'black',
                  padding: '0.5rem 1rem',
                  fontFamily: 'var(--comic-font)',
                  fontSize: '2rem',
                  border: '3px solid black',
                  boxShadow: '5px 5px 0 var(--spidey-red)',
                  pointerEvents: 'none'
                }}
              >
                THWIP!
              </motion.div>

              {project.image ? (
                <div style={{
                  width: '100%', height: '100%',
                  background: `url(${project.image}) center/cover`,
                  filter: 'grayscale(100%) contrast(120%)'
                }} />
              ) : (
                <FaGithub size={50} color="white" />
              )}
            </div>

            <div className="project-content">
              <h3 style={{ color: 'var(--spidey-yellow)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: 'var(--tech-font)', fontSize: '0.9rem', marginBottom: '1rem', color: '#ccc' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.5rem',
                    border: '1px solid var(--spidey-blue)',
                    color: 'var(--spidey-blue)',
                    fontFamily: 'var(--tech-font)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                  <FaGithub /> CODE
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--spidey-red)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                    <FaExternalLinkAlt /> LIVE
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;