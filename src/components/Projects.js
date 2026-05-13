import React from 'react';
import { motion } from 'framer-motion';
import { FocusCards } from './ui/focus-cards';

const Projects = () => {
  const projects = [
    {
      title:'Resumix',
      description: 'Modern portfolio builder',
      tags:['TypeScript', 'Next', 'Node.js', 'MongoDB'],
      liveLink:'https://resumix-six.vercel.app/',
      githubLink:'https://github.com/chinmayjjg/Resumix',
      src: '/images/resumix.png'
    },
    {
      title: 'Second Brain',
      description: 'Productivity app for your mind.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
      githubLink: 'https://github.com/chinmayjjg/second-brain',
      src: '/images/second-brain.png'
    },
    {
      title: 'AI Ticket System',
      description: 'Smart support with AI agents.',
      tags: ['TypeScript', 'React', 'Express', 'AI'],
      liveLink:'https://ai-ticket-management.vercel.app/',
      githubLink: 'https://github.com/chinmayjjg/ai-ticket-management',
      src: '/images/ai-ticket-management.png'
    },
    {
      title: 'Weather App',
      description: 'Forecasts with style.',
      tags: ['React', 'API', 'CSS'],
      liveLink: null,
      githubLink: 'https://github.com/chinmayjjg/weather-',
      src: '/images/weather-app.png'
    },
    
  ];

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
          <FocusCards cards={projects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
