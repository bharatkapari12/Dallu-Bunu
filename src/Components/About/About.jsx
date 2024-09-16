import React from 'react';
import './About.css';
import about_img from '../../Assets/666.jpeg';
import play_icon from '../../Assets/play-icon.png';

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>Why Choose Dreamweavers?</h3> {/* Title */}
        <h2>Effortless. Accurate. Secure.</h2> {/* Subtitle */}
        <p>
        We're dedicated to providing expert guidance and support to help you achieve your dreams of studying or working
        abroad.  
        </p>
        <p>
        Our experienced advisors will work closely with you to understand your goals and aspirations, creating a
        personalized roadmap for success.
        </p> 
      </div>
    </div>
  );
};

export default About;