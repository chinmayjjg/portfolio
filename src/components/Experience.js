import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays } from 'lucide-react';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <motion.article
          className="experience-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="experience-icon" aria-hidden="true">
            <BriefcaseBusiness size={22} />
          </div>
          <div className="experience-content">
            <div className="experience-heading">
              <div>
                <p className="experience-company">Aspol Media</p>
                <h3>Software Engineer Intern</h3>
              </div>
              <span className="experience-period"><CalendarDays size={15} />sept 2025-feb 2026</span>
            </div>
            <p>
              Contributing to the modernization of legacy PHP systems by helping migrate features to Node.js and building maintainable full-stack solutions.
            </p>
            <ul className="experience-highlights">
              <li>Support the transition from legacy PHP code to Node.js services.</li>
              <li>Collaborate on scalable application features and API integrations.</li>
              <li>Apply modern JavaScript practices to improve maintainability.</li>
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;
