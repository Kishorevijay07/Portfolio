import React, { useEffect } from 'react';
import './project.css';

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const projectItems = document.querySelectorAll('.nav-l li');

      projectItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;  // Component doesn't render anything directly
};

export default ScrollAnimation;
