import React from 'react';
import { motion } from 'framer-motion';
import ExpandableProjectCards from './expandable-card-demo-standard';

const getLivePreview = (liveLink) =>
  liveLink
    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(liveLink)}?w=1200`
    : null;

const Projects = () => {
  const projects = [
    {
      title:'Resumix',
      description: 'Modern portfolio builder',
      tags:['TypeScript', 'Next', 'Node.js', 'MongoDB'],
      liveLink:'https://resumix-six.vercel.app/',
      githubLink:'https://github.com/chinmayjjg/Resumix',
      fallbackSrc: '/images/resumix.png'
    },
    {
      title: 'Second Brain',
      description: 'Productivity app for your mind.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
      githubLink: 'https://github.com/chinmayjjg/second-brain',
      fallbackSrc: '/images/second-brain.png'
    },
    {
      title: 'AI Ticket System',
      description: 'Smart support with AI agents.',
      tags: ['TypeScript', 'React', 'Express', 'AI'],
      liveLink:'https://ai-ticket-management.vercel.app/',
      githubLink: 'https://github.com/chinmayjjg/ai-ticket-management',
      fallbackSrc: '/images/ai-ticket-management.png'
    },
    {
      title: 'Weather App',
      description: 'Forecasts with style.',
      tags: ['React', 'API', 'CSS'],
      liveLink: null,
      githubLink: 'https://github.com/chinmayjjg/weather-',
      fallbackSrc: '/images/weather-app.png'
    },
    
  ].map((project) => ({
    ...project,
    src: getLivePreview(project.liveLink) || project.fallbackSrc,
  }));

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <ExpandableProjectCards projects={projects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
