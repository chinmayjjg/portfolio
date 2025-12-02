import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
    alert('Message sent! (Demo)');
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              Send Message <FaPaperPlane size={14} />
            </button>
          </form>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Or connect with me on social media
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '1.5rem' }}>
              <a href="https://github.com/chinmayjjg" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chinmay-pradhan-476954242/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <FaLinkedin />
              </a>
              <a href="https://x.com/chinmaypr4dhan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;