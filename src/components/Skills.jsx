import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { cat: "Programming", items: ["Python", "Java", "JavaScript"] },
    { cat: "Web Development", items: ["MERN Stack", "MongoDB & Express.js", "React & Node.js"] },
    { cat: "Machine Learning", items: ["CNNs & Transformers", "BiGRUs & GATs", "Federated Learning"] },
    { cat: "Leadership & ops", items: ["Team & budget management", "Public relations", "Cross-functional coordination"] },
    { cat: "Design & branding", items: ["Brand identity development", "Logo & visual systems", "Premium positioning strategy"] },
    { cat: "Languages", items: ["Bangla — native", "English — advanced", "Hindi"] }
  ];

  return (
    <section id="skills" className="skills-sec">
      <motion.h2 
        className="section-heading text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="serif">Capability</span>
      </motion.h2>

      <div className="skills-wrap">
        {skillsData.map((group, i) => (
          <motion.div 
            className="skill-cell" 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="skill-cat">{group.cat}</h3>
            <ul className="skill-list">
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
