import React from 'react'
import myphoto from './../images/Kishore-photo.jpg';
const Profile = () => {
  return (
    <div>

        <div className='header'>
        <h1 className='port'>PORTFOLIO</h1>
        <ul className='nav-links'>
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>

      <div className="profile-section">
        <img className='profile-pic' src={myphoto} alt='Description of the photo'/>
        <p className='aboutme'>
          Hello! I'm Kishore, a passionate software developer with a keen interest in building intuitive, user-friendly applications. I specialize in web development using React.js, SQL, and Python, and I enjoy solving complex problems through creative solutions. My goal is to constantly improve my skills and stay updated with the latest technologies. In my free time, I love working on personal projects and learning new programming languages.
        </p>
      </div>
    </div>
  )
}

export default Profile