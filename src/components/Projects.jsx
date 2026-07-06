import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const projects = [
    { 
      title: "PROTEUS", 
      desc: "Four-phase ML intrusion detection system for smart grid networks, combining CNNs, Transformers, BiGRUs, and Graph Attention Networks under federated learning.", 
      category: "Thesis · BRAC University",
      image: "/showmick_4.jpg" 
    },
    { 
      title: "AZO", 
      desc: "Multi-venture holding company spanning agriculture, real estate, fragrance, lighting, dining, and creative studio rental. Built the full-stack platform end-to-end using the MERN stack as Head Developer.", 
      category: "Partner & Head Developer",
      image: "/showmick_2.jpg" 
    },
    { 
      title: "GROWMICK Agency", 
      desc: "An AI-powered web design and digital marketing agency delivering AI-assisted web experiences and growth-focused marketing services.", 
      category: "Founder · March 2026",
      image: "/showmick_6.jpg" 
    },
    { 
      title: "Future Venture", 
      desc: "A new professional-field venture in planning stages.", 
      category: "Upcoming",
      image: "/showmick_1.jpg" 
    }
  ];

  // Mouse tracking parameters for the floating preview card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Offset slightly so it floats next to the cursor instead of directly underneath
    mouseX.set(clientX + 20);
    mouseY.set(clientY - 120);
  };

  return (
    <section id="projects" className="projects-sec" onMouseMove={handleMouseMove}>
      <motion.h2 
        className="section-heading text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Selected <span className="serif">Ventures</span>
      </motion.h2>

      <div className="proj-list">
        {projects.map((proj, i) => (
          <motion.div 
            className="proj-row"
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="proj-cat">{proj.category}</div>
            <h3 className="proj-title-lux">{proj.title}</h3>
            <p className="proj-desc-lux">{proj.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Floating Project Preview Card */}
      <motion.div
        className="floating-preview-card"
        style={{
          x: floatX,
          y: floatY,
          scale: hoveredIdx !== null ? 1 : 0,
          opacity: hoveredIdx !== null ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="preview-inner">
          {projects.map((proj, i) => (
            <img
              key={i}
              src={proj.image}
              alt={proj.title}
              className={`preview-img ${hoveredIdx === i ? 'active' : ''}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
