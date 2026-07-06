import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Contact.css';

const Contact = () => {
  const marqueeWords = Array(10).fill("RESEARCH · ENGINEERING · VENTURES · ").join("");

  return (
    <section id="contact" className="contact-sec">
      {/* Infinite Typography Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span className="marquee-text">{marqueeWords}</span>
          <span className="marquee-text" aria-hidden="true">{marqueeWords}</span>
        </div>
      </div>

      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="contact-huge">
          Let's build something worth<br />a second look.<br />
          <Magnetic>
            <a href="mailto:imrul.hasan.showmick@gmail.com" className="lux-email-btn">Say hello →</a>
          </Magnetic>
        </h2>
        
        <div className="contact-bottom">
          <div className="social-links-lux">
            <Magnetic><a href="https://www.linkedin.com/in/imrul-hasan-a8355722a/" target="_blank" rel="noopener"><span>LN</span> LinkedIn</a></Magnetic>
            <Magnetic><a href="https://github.com/imrulhasanshowmick-glitch" target="_blank" rel="noopener"><span>GH</span> GitHub</a></Magnetic>
            <Magnetic><a href="mailto:imrul.hasan.showmick@g.bracu.ac.bd"><span>Academic</span> imrul.hasan.showmick@g.bracu.ac.bd</a></Magnetic>
            <Magnetic><a href="mailto:imrul.hasan.showmick@gmail.com"><span>Queries</span> imrul.hasan.showmick@gmail.com</a></Magnetic>
            <Magnetic><a href="tel:+8801744585025"><span>Tel</span> Phone</a></Magnetic>
            <Magnetic><a href="https://www.instagram.com/_show.by.mick_/" target="_blank" rel="noopener"><span>IG</span> Instagram</a></Magnetic>
            <Magnetic><a href="https://scholar.google.com/citations?user=lkSmAvYAAAAJ&hl=en" target="_blank" rel="noopener"><span>Scholar</span> Scholar</a></Magnetic>
            <Magnetic><a href="https://www.researchgate.net/profile/Md-Showmick" target="_blank" rel="noopener"><span>RG</span> ResearchGate</a></Magnetic>
          </div>
        </div>
      </motion.div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Md Imrul Hasan Showmick</p>
        <p>Dhaka, Bangladesh</p>
      </footer>
    </section>
  );
};

export default Contact;
