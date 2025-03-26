import React, { useEffect } from 'react';
import './skills.css';

const ScrollAnimationofskills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const skillsSections = document.querySelectorAll('.coding-skills-div');

      skillsSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;  // Component doesn't render anything directly
};

export default ScrollAnimationofskills;
