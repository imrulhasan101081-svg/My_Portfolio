import React, { useState, useEffect } from 'react';
import CustomCursor from './CustomCursor';
import Magnetic from './Magnetic';
import './Layout.css';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (window.lenisInstance && typeof window.lenisInstance.scrollTo === 'function') {
      window.lenisInstance.scrollTo(`#${id}`, { duration: 1.5 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="layout-wrapper">
      <div className="noise-overlay" />
      <CustomCursor />
      
      <header className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
        <div 
          className="nav-brand" 
          onClick={() => (window.lenisInstance && typeof window.lenisInstance.scrollTo === 'function') ? window.lenisInstance.scrollTo(0, { duration: 1.5 }) : window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Showmick.
        </div>
        <div className="nav-links">
          <Magnetic><span onClick={() => scrollTo('about')}>About</span></Magnetic>
          <Magnetic><span onClick={() => scrollTo('education')}>Foundation</span></Magnetic>
          <Magnetic><span onClick={() => scrollTo('research')}>Research</span></Magnetic>
          <Magnetic><span onClick={() => scrollTo('skills')}>Capability</span></Magnetic>
          <Magnetic><span onClick={() => scrollTo('projects')}>Ventures</span></Magnetic>
          <Magnetic><span onClick={() => scrollTo('contact')}>Contact</span></Magnetic>
        </div>
      </header>
      
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
