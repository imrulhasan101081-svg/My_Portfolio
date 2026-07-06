import React from 'react';
import { motion } from 'framer-motion';
import './Research.css';

const Research = () => {
  const publications = [
    {
      year: "2026",
      title: "Real-Time Confidence Detection through Facial Expressions and Hand Gestures",
      venue: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/document/11276931"
    },
    {
      year: "2026",
      title: "Advancing Exchange Rate Forecasting: Leveraging Machine Learning and AI for Enhanced Accuracy in Global Financial Markets",
      venue: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/document/11276934/"
    },
    {
      year: "2025",
      title: "Exploring the Convergence of HCI and Evolving Technologies in Information Systems",
      venue: "arXiv · Accepted in CITIC 2025",
      link: "https://arxiv.org/abs/2506.08549"
    }
  ];

  const thesisPhases = [
    {
      num: "I",
      name: "Topology-Aware Dual-Stream Encoder",
      desc: "Designed a fused 1D-CNN and temporal Transformer encoder connected via graph attention over the substation network graph, coupled with a physics-consistency residual to catch stealthy false-data-injection cyberattacks."
    },
    {
      num: "II",
      name: "Prototype-Memory Open-Set Head",
      desc: "Built a few-shot adaptation network where novel zero-day attack families are clustered and registered from as few as k=5 operator-confirmed labels, bypassing full retraining and catastrophic forgetting."
    },
    {
      num: "III",
      name: "Federated Detection Deployment",
      desc: "Architected a family-incremental streaming evaluation protocol with federated averaging across substation clients, providing privacy-preserving, localized collaborative detection across smart grid nodes."
    }
  ];

  const invitations = [
    {
      conf: "FLICS 2026",
      name: "The 2nd International Conference on Federated Learning and Intelligent Computing Systems",
      location: "Valencia, Spain",
      date: "June 9–12, 2026",
      detail: "Technically co-sponsored by IEEE Spain Section. Invited to contribute valuable research in federated and intelligent computing systems."
    },
    {
      conf: "HAXD 2026",
      name: "The 2nd International Conference on Human-AI Interaction & Experience Design",
      location: "Valencia, Spain",
      date: "June 9–12, 2026",
      detail: "IEEE technically co-sponsored event focusing on collaborative AI systems, human-in-the-loop ML workflows, and UX designs."
    }
  ];

  return (
    <section id="research" className="research-sec">
      <div className="research-grid">
        <motion.div 
          className="research-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-heading">
            <span className="serif">Research</span> & Thesis
          </h2>
          <h3 className="research-proj-title">PROTEUS: A Continual, Open-Set Hybrid Model for Detecting Zero-Day Attacks in Smart Grids</h3>
          <div className="thesis-defenses">
            <span>Proposal Defense (P1): 10/10</span>
            <span>Progress Defense (P2): 8/10</span>
          </div>
          <p className="lux-body">
            Undergraduate thesis at <strong className="highlight-brac">BRAC University's</strong> CSE department. Protects distributed smart-grid infrastructure against coordinated cyber-physical attacks using deep sequence models, graph attention layers, and prototype learning.
          </p>
          <div className="lux-tags">
            <span>1D-CNN</span>
            <span>Transformer</span>
            <span>BiGRU</span>
            <span>Graph Attention</span>
            <span>Federated Learning</span>
          </div>

          <div className="research-links">
            <a href="https://scholar.google.com/citations?user=lkSmAvYAAAAJ&hl=en" target="_blank" rel="noopener" className="lux-link">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Md-Showmick" target="_blank" rel="noopener" className="lux-link" style={{ marginLeft: "2rem" }}>ResearchGate</a>
          </div>
        </motion.div>

        <div className="research-phases">
          {thesisPhases.map((phase, index) => (
            <motion.div 
              className="lux-phase" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="lux-phase-num">{phase.num}</div>
              <div className="lux-phase-content">
                <h3>{phase.name}</h3>
                <p>{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Conference Invitations Section */}
      <motion.div 
        className="invitations-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginTop: "10rem" }}
      >
        <h2 className="section-heading" style={{ fontSize: "2.5rem", marginBottom: "4rem" }}>
          Conference <span className="serif">Invitations</span>
        </h2>
        <div className="invitations-grid">
          {invitations.map((inv, idx) => (
            <div className="invite-card" key={idx}>
              <div className="invite-header">
                <span className="invite-badge">{inv.conf}</span>
                <span className="invite-loc">{inv.location} · {inv.date}</span>
              </div>
              <h3 className="invite-title">{inv.name}</h3>
              <p className="invite-detail">{inv.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="pub-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="section-heading" style={{ fontSize: "2.5rem", marginTop: "10rem", marginBottom: "4rem" }}>
          Published <span className="serif">Work</span>
        </h2>
        
        <div className="pub-list">
          {publications.map((pub, i) => (
            <a href={pub.link} target="_blank" rel="noopener" className="pub-row" key={i}>
              <div className="pub-year">{pub.year}</div>
              <div className="pub-info">
                <h4>{pub.title}</h4>
                <span>{pub.venue}</span>
              </div>
              <div className="pub-action">Read Paper ↗</div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Research;
