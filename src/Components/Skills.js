import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div>
      <div className='coding-skills-div'>
        <ul className='skills-ul'>
      
            <h2>Web Development</h2>
            <ul>
              <li className='react-css'>React Js</li>
              <li className='node-css'>Node Js</li>
              <li className='express-css'>Express Js</li>
              <li className='mongo-css'>Mongo DB</li>
              <li className='html-css'>HTML</li>
              <li className='css-css'>CSS</li>
            </ul>
          
        </ul>
      </div>
 
      <div className='coding-skills-div'>
        <h1>Coding Skills</h1>
        <ul>
          <li>Python</li>
          <li>C(Intermediate)</li>
          <li>Java(Beginner)</li>
        </ul>
      </div>
      <div className='coding-skills-div'>
        <h1>Other Skills</h1>
        <ul>
          <li><a href='https://leetcode.com/u/kishorevijay978/'>Problem Solving(leetcode,Hackerrank)</a> </li>
          <li>DSA</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
