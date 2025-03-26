import React from 'react'
import bank from './../images/bank-image.jpeg';
import social from './../images/social-image.jpeg';
import machine from './../images/machine-image.jpeg';
import x from './../images/x-image.jpeg';
import attendance from './../images/attendance.png';
import heartrate from './../images/Heart-rate-monitor.jpg';
import food_delivery from './../images/food-delivery.jpg';
import huffman from './../images/huffmanimage.png'
import './project.css';
import ScrollAnimation from './ScrollAnimation';
import Contact from './Contact';

const Projects = () => {
  return (
    <div>
       <ScrollAnimation />
      <section id='projects'>
        <h1 className='projects-aligncenter'>Projects</h1>
      </section>
    <div className='projectdiv'>
    <ul className='nav-l'>
    <li>
      <a href='https://x-clone-gssj.onrender.com' target='_blank' rel='noopener noreferrer'>
        <img className='bank' src={x} alt='X (Twitter)Clone '/>
        &nbsp;Twitter Clone(click here)
      </a>
      <p>Tech Stack: React.js, Node.js, Express.js, MongoDB, Cloudinary</p>
    </li> 
    <li>
      <a href='https://github.com/Kishorevijay07/X-twitter--Clone' target='_blank' rel='noopener noreferrer'>
        <img className='attendance' src={attendance} alt='Attendance '/>
        &nbsp;Attendace Management For College(Ongoing)
      </a>
      <p>Tech Stack: React.js, Node.js, Express.js, MongoDB, Cloudinary</p>
    </li> 
    <li>
      <a href='https://github.com/Kishorevijay07/SocialMedia-Post-' target='_blank' rel='noopener noreferrer'>
        <img className='social' src={social} alt='Social media project'/>
        &nbsp;Social Media Post Site
      </a>
      <p>Tech Stack : React.js</p>
    </li> 
    <li>
      <a href='https://github.com/Kishorevijay07/Book-selling-prediction-Machine-learning' target='_blank' rel='noopener noreferrer'>
        <img className='machine' src={food_delivery} alt='Machine learning' />
        &nbsp;Food Delivery Time Prediction (ML)
      </a>
      <p>Tech : Python
</p>
    </li>
   
    <li>
      <a href='https://github.com/Kishorevijay07/Book-selling-prediction-Machine-learning' target='_blank' rel='noopener noreferrer'>
        <img className='machine' src={machine} alt='Machine learning' />
        &nbsp;Best selling Book Prediction (ML)
      </a>
    </li>
    <li>
      <a href='https://github.com/Kishorevijay07/Book-selling-prediction-Machine-learning' target='_blank' rel='noopener noreferrer'>
        <img className='machine' src={huffman} alt='huffman' />
        &nbsp;Huffman Encoding and Decoding
      </a>
      <p>Tech : Python
</p>
    </li>
    <li>
      <a href='https://github.com/Kishorevijay07/Heart-Rate-Monitor' target='_blank' rel='noopener noreferrer'>
        <img className='machine' src={heartrate} alt='Heart Rate Monitor' />
        &nbsp;Heart Rate Monitor(Backend)
      </a>
      <p>Tech Stack : Express , MySQL</p>
    </li>
  </ul>

  </div>
  
  </div>
  )
}

export default Projects