import React from 'react';
import './skills.css';
import ScrollAnimationofskills from './ScrollAnimationofskills';

const Skills = () => {
  return (
    <div>
      <ScrollAnimationofskills />

      {/* Web Development Section */}
      <div className="coding-skills-div">
        <h2>Web Development</h2>
        <ul className="skills-ul">
          <li className="react-css">React Js</li>
          <li className="node-css">Node Js</li>
          <li className="express-css">Express Js</li>
          <li className="mongo-css">Mongo DB</li>
          <li className="mysql-css">MySQL</li>
          <li className="html-css">HTML</li>
          <li className="css-css">CSS</li>
        </ul>
      </div>

      {/* Coding Skills Section */}
      <div className="coding-skills-div">
        <h2>Coding Skills</h2>
        <ul className="skills-ul">
          <li>Python</li>
          <li>C (Intermediate)</li>
          <li>Java (Beginner)</li>
        </ul>
      </div>

      {/* Other Skills Section */}
      <div className="coding-skills-div">
        <h2>Other Skills</h2>
        <ul className="skills-ul">
          <li>
            <a href="https://leetcode.com/u/kishorevijay978/" target="_blank" rel="noopener noreferrer">
              Problem Solving (LeetCode, HackerRank)
            </a>
          </li>
          <li>DSA</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
