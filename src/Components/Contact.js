import React from 'react';
import './Contact.css';
import instagram from './../instagram-image.jpeg';
import linkedin from './../linkedin.png';
import git from './../git-image.png';


const Contact = () => {
  return (
    <div className="contact-container">
      <section id='contact' className='smooth-section'>
      <h1 className="contact-title">Education  &  connect with me </h1>
      </section>
      <div className="contact-wrapper">

        {/* Left Section - Form */}
        <div className="contact-form">
  <div className="education">
    <h2 className="info-location"><a href='https://www.annauniv.edu/'>MSc Information Technology, Anna University</a></h2>
    <p>📍 Chennai, Tamil Nadu, IN</p>
  </div>
  
  <div className="education">
    <h2 className="info-location"><a href='https://vmhssbargur.com/'>Higher Secondary, Vailankanni Hr Sec School</a></h2>
    <p>📍 Krishnagiri, Tamil Nadu, IN</p>
  </div>
  
  <div className="contact-email">
  <h2 className="info-location"><a>SSLC,St.Antony's Higher Secondary school</a></h2>
  <p>📍 Krishnagiri, Tamil Nadu, IN</p>
  </div>
</div>


        {/* Right Section - Info */}
        <div className="contact-info">
          <h2 className="info-title">Follow me</h2>
          <p className="info-text">
            Follow me on social media accounts
          </p>
          <p className="info-location">📍 Chennai, Tamil Nadu IN</p>
          <p className="info-phone">📞 ##########</p>
          <p className="info-email"><a href="mailto:example@example.com">✉️ kishorevijay978@gmail.com</a></p>
          <div className="social-icons">
                     <a href='https://www.instagram.com/kishore_s07/' target='_blank' rel='noopener noreferrer'>
                       <img className='icon' src={instagram} alt='inta logo' />
                     </a>
                     <a href='https://www.linkedin.com/in/kishore-selvaraj-3a957a338/' target='_blank' rel='noopener noreferrer'>
                       <img className='icon' src={linkedin} alt='inta logo' />
                     </a>
                     <a href='https://github.com/Kishorevijay07' target='_blank' rel='noopener noreferrer'>
                       <img className='icon' src={git} alt='inta logo' />
                     </a>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
    