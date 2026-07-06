import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const blurRevealVariants = {
    hidden: { opacity: 0, filter: "blur(6px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="about" className="about-sec">
      <div className="about-intro-grid">
        <motion.div 
          className="about-title-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurRevealVariants}
        >
          <h2 className="section-heading">
            Working at the intersection of <span className="serif">research</span>, software engineering, and <span className="serif">entrepreneurship</span>.
          </h2>
        </motion.div>

        <motion.div 
          className="about-copy-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={blurRevealVariants}>
            I am a final-year Computer Science & Engineering student at <strong className="highlight-brac">BRAC University</strong>, passionate about Artificial Intelligence, Machine Learning, Cybersecurity, and Software Engineering.
          </motion.p>
          <motion.p variants={blurRevealVariants}>
            My research focuses on continual learning and open-set intrusion detection for smart grid cybersecurity, where I'm developing intelligent AI models capable of detecting previously unseen cyberattacks. Alongside my undergraduate thesis, I've authored and contributed to multiple research publications in machine learning and intelligent systems.
          </motion.p>
          <motion.p variants={blurRevealVariants}>
            Recognizing these contributions, I have been **invited to contribute my research to prestigious international conferences**, including **FLICS 2026** (The 2nd International Conference on Federated Learning and Intelligent Computing Systems) and **HAXD 2026** (The 2nd International Conference on Human-AI Interaction & Experience Design) in **Valencia, Spain**.
          </motion.p>
          <motion.p variants={blurRevealVariants}>
            Beyond research, I'm dedicated to building products that create real impact. As the Head Developer of <strong>AZO</strong>, I lead the development of a multi-venture digital platform, while also founding <strong>GROWMICK Agency</strong>, helping businesses leverage AI and modern web technologies to accelerate growth.
          </motion.p>
          
          <motion.div className="about-actions" variants={blurRevealVariants}>
            <a href="/Showmick_CV.docx" download className="lux-link" style={{ marginRight: "2rem" }}>Download CV (.docx)</a>
            <a href="mailto:imrulhasan101081@gmail.com" className="lux-link">Get in Touch</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
