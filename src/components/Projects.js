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
      description: "Resumix is a full-stack web application that transforms a traditional resume into a modern, customizable portfolio website within minutes. Users can upload their resume in PDF format, and the platform automatically extracts, structures, and organizes the information into a professional portfolio that can be edited, personalized, and shared through a unique public URL The application leverages AI-powered content classification and resume parsing to identify key sections such as personal information, education, work experience, projects, technical skills, certifications, and achievements. Users can review and modify the extracted content through an intuitive dashboard before publishing their portfolio ",
      tags:['TypeScript', 'Next', 'Node.js', 'MongoDB'],
      liveLink:'https://resumix-six.vercel.app/',
      githubLink:'https://github.com/chinmayjjg/Resumix',
      fallbackSrc: '/images/resumix.png'
    },
    {
      title: 'Second Brain',
      description: 'Second Brain is a full-stack knowledge management application designed to help users capture, organize, and retrieve valuable information from across the web in a centralized workspace. Inspired by the concept of a "digital second brain," the platform enables users to save links, articles, videos, and notes, transforming scattered information into a structured and searchable knowledge repository.The application provides a secure and intuitive environment where users can manage their learning resources, ideas, and references efficiently. With support for content categorization, tagging, and metadata extraction, users can quickly find and revisit important information whenever needed.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      liveLink: 'https://second-brain-client-7tbj.vercel.app/login',
      githubLink: 'https://github.com/chinmayjjg/second-brain',
      fallbackSrc: '/images/second-brain.png'
    },
    {
      title: 'AI Ticket System',
      description: 'AI Ticket Management System is a full-stack support ticketing platform that leverages Artificial Intelligence to automate ticket categorization, prioritization, and assignment. The system streamlines customer support workflows by intelligently analyzing incoming tickets and routing them to the most suitable moderators or support agents, reducing manual effort and improving response times.The platform uses AI to understand ticket content, determine urgency levels, generate contextual insights, and assist support teams in resolving issues more efficiently. It also incorporates role-based access control, secure authentication, and event-driven background processing to ensure scalability and reliability. Similar AI-powered ticketing systems use automated categorization, priority assignment, skill-based routing, and AI-generated assistance for moderators.',
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
