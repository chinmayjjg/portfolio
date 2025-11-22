import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import useSound from '../hooks/useSound';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const playClick = useSound('/sounds/click.mp3', 0.5);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick();
    emailjs.send('service_ngyjsb2', 'template_xxfsdxj', formData, 'Sb65SNTB-eeIDhnBN')
      .then(() => {
        alert('Headline: Message Received!');
        setFormData({ name: '', email: '', message: '' });
      }, () => alert('Error: Connection Jammed!'));
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/chinmayjjg' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/chinmay-pradhan-476954242/' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/chinmaypr4dhan' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:pradhanchinmay510@gmail.com' }
  ];

  return (
    <section className="section" id="contact">
      <h2 className="section-title">THE DAILY BUGLE</h2>

      <div className="contact-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem' }}>
        {/* Newspaper Form */}
        <motion.div
          className="contact-form"
          initial={{ rotate: -5, opacity: 0 }}
          whileInView={{ rotate: -1, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <h3 style={{
            fontFamily: 'var(--comic-font)',
            fontSize: '2rem',
            borderBottom: '3px solid black',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            SEND US THE SCOOP!
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="YOUR NAME" />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="YOUR EMAIL" />
            </div>
            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="YOUR STORY..."></textarea>
            </div>
            <button type="submit" className="cta-button" style={{ width: '100%', fontSize: '1.2rem' }}>
              SUBMIT TO EDITOR <FaPaperPlane />
            </button>
          </form>
        </motion.div>

        {/* Socials Column */}
        <div className="socials-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontFamily: 'var(--comic-font)', fontSize: '2rem', color: 'white', textShadow: '2px 2px 0 var(--spidey-red)' }}>
            FOLLOW THE WEB
          </h3>
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--spidey-red)',
                color: 'white',
                padding: '1rem 2rem',
                textDecoration: 'none',
                fontFamily: 'var(--comic-font)',
                fontSize: '1.2rem',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '5px 5px 0 black'
              }}
              whileHover={{ x: 5, boxShadow: '2px 2px 0 black' }}
              onClick={playClick}
            >
              <social.icon /> {social.name.toUpperCase()}
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-container { gap: 2rem; }
          .socials-column { width: 100%; }
          .socials-column a { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Contact;