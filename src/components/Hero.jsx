import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  // 3 HD Photos
  const [cards, setCards] = useState([
    { id: 3, src: '/showmick_5.jpg', title: 'Machine Learning Research', rot: 4, scale: 0.9 },
    { id: 2, src: '/showmick_3.jpg', title: 'Computer Science & Engineering', rot: -3, scale: 0.95 },
    { id: 1, src: '/showmick_2.jpg', title: 'Venture Builder & Developer', rot: 0, scale: 1 }
  ]);

  // Handle throwing a card off the deck
  const handleDragEnd = (event, info, id) => {
    // If dragged past threshold, remove and cycle to bottom of the stack
    if (Math.abs(info.offset.x) > 120) {
      setCards((prev) => {
        const index = prev.findIndex(card => card.id === id);
        const cardToMove = prev[index];
        const newArray = prev.filter(card => card.id !== id);
        // Randomize rotation slightly for organic stack feel
        const randomRot = Math.floor(Math.random() * 8) - 4;
        return [...newArray, { ...cardToMove, rot: randomRot }];
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const wordRevealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  // Top card title for caption
  const topCardTitle = cards[0]?.title || 'Portrait Showcase';

  return (
    <section className="hero" id="hero">
      <div className="hero-glow"></div>
      
      <div className="hero-split-grid">
        <motion.div 
          className="hero-content-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-kicker" variants={fadeUpVariants}>
            Research · Engineering · Ventures
          </motion.div>
          
          <h1 className="hero-title">
            <div className="title-row-mask">
              <motion.div variants={wordRevealVariants}>
                <span className="serif">Md</span> Imrul Hasan
              </motion.div>
            </div>
            <div className="title-row-mask">
              <motion.div variants={wordRevealVariants}>
                Showmick<span className="serif">.</span>
              </motion.div>
            </div>
          </h1>

          <motion.p className="hero-subtitle" variants={fadeUpVariants}>
            Building intelligent systems that solve real-world problems. From publishing machine learning research to engineering full-stack platforms, I transform innovative ideas into impactful products.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUpVariants}>
            <a href="#about" className="lux-btn">About Me</a>
          </motion.div>
        </motion.div>

        {/* Tactile Drag-to-Throw Card Deck */}
        <motion.div 
          className="hero-image-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <div className="hero-deck-wrapper">
            <div className="deck-container">
              {cards.map((card, index) => {
                const isTop = index === 0;
                return (
                  <motion.div
                    key={card.id}
                    className={`deck-card ${isTop ? 'draggable-card' : 'stacked-card'}`}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => handleDragEnd(e, info, card.id)}
                    animate={{
                      rotate: card.rot,
                      scale: isTop ? 1 : 0.9 + (3 - index) * 0.03,
                      y: isTop ? 0 : (3 - index) * 8,
                      zIndex: 3 - index
                    }}
                    whileDrag={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="deck-image-wrap">
                      <img src={card.src} alt={card.title} className="deck-img" />
                      <div className="deck-overlay"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tactile Navigation Guide */}
            <div className="deck-caption-wrap">
              <span className="deck-instructions">Drag card left / right to swap</span>
              <span className="deck-title-text">{topCardTitle}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
