import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.lux-btn') || 
        target.closest('.nav-links span') ||
        target.closest('.pub-row') ||
        target.closest('.about-actions a')
      ) {
        setCursorType('hover');
      } else if (target.closest('.hero-image-wrapper') || target.closest('.proj-row')) {
        setCursorType('view');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`custom-cursor ${cursorType}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {cursorType === 'view' && <span className="cursor-text">View</span>}
      </motion.div>
    </>
  );
};

export default CustomCursor;
