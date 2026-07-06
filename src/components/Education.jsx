import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="edu-sec">
      <div className="edu-grid">
        <motion.div 
          className="edu-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading"><span className="serif">Foundation</span></h2>
          
          <div className="edu-list">
            <div className="edu-item">
              <div className="edu-year">2022 — Present</div>
              <div className="edu-details">
                <h3>BRAC University</h3>
                <p className="edu-inst-name">B.Sc. in Computer Science and Engineering — in progress</p>
                <span className="edu-tag">Thesis · PROTEUS</span>
              </div>
            </div>
            
            <div className="edu-item">
              <div className="edu-year">2020 · HSC</div>
              <div className="edu-details">
                <h3>New Govt. Degree College</h3>
                <p className="edu-inst-name">Science · Rajshahi Division · GPA 5.00 / 5.00</p>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-year">2018 · SSC</div>
              <div className="edu-details">
                <h3>Rajshahi Collegiate School</h3>
                <p className="edu-inst-name">Science · Rajshahi Division · GPA 5.00 / 5.00</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Extracurriculars Column */}
        <motion.div 
          className="edu-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading">Engagement & <span className="serif">Affiliations</span></h2>
          
          <div className="edu-list">
            <div className="edu-item">
              <div className="edu-year">2024 — Present</div>
              <div className="edu-details">
                <h3>BRAC University Film Club</h3>
                <p className="edu-inst-name">Senior Executive</p>
                <span className="edu-desc-text">Promoted to Senior Executive in 2025 following active contribution to major events.</span>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-year">2017 — 2018</div>
              <div className="edu-details">
                <h3>Theatre Performance</h3>
                <p className="edu-inst-name">Performer</p>
                <span className="edu-desc-text">Performed in division productions. Secured Runner-Up at the Divisional level in 2017.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
