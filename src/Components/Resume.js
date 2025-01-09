import React from 'react';
import resumeFile from './../images/Kishore-resume.jpeg';
import './resume.css'; // Import the CSS file

const Resume = () => {
  return (
    <div>
      <h1 className='resume-header'>Resume</h1>
      <div  className="container">

      <p>
        A dedicated college student with strong problem-solving skills and a
        solid foundation in software development. Proficient in Python,
        React.js, SQL, and data structures. Experienced in creating a simple
        machine learning project focused on prediction, showcasing an
        aptitude for applying technical skills to real-world challenges.
      </p>
      <a href={resumeFile} download="My_Resume.pdf" className="download-button">
        Download Resume
      </a>
      </div>
    </div>
  );
};

export default Resume;
