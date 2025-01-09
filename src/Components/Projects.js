import React from 'react'
import bank from './../images/bank-image.jpeg';
import social from './../images/social-image.jpeg';
import machine from './../images/machine-image.jpeg';


const Projects = () => {

  return (
    <div>
      <section id='projects'>
        <h1 className='projects-aligncenter'>Projects</h1>
        </section>
    <div className='projectdiv'>
    <ul className='nav-l'>
    <li>
      <a href='https://github.com/Kishorevijay07/SocialMedia-Post-' target='_blank' rel='noopener noreferrer'>
        <img className='social' src={social} alt='Java project logo' />
        &nbsp;Social Media Post Site
      </a>
    </li> 
    <li>
      <a href='https://github.com/Kishorevijay07/Bank-Management-website' target='_blank' rel='noopener noreferrer'>
        <img className='bank' src={bank} alt='Bank project logo' />
        &nbsp;Basic Bank Website
      </a>
    </li>
    <li>
      <a href='https://github.com/Kishorevijay07/Book-selling-prediction-Machine-learning' target='_blank' rel='noopener noreferrer'>
        <img className='machine' src={machine} alt='Machine learning project logo' />
        &nbsp;Machine Learning Book Prediction
      </a>
    </li>
  </ul>

  </div>
  </div>
  )
}

export default Projects