import React from 'react';
import { Link } from 'react-router-dom'; 
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  return (
    <section className='hero container' id='hero'>
      <div className="hero-text">
        <h1>Empower Your Global Journey</h1>
        <p>
          DreamWeavers is dedicated to guiding you toward success in education and employment abroad. 
          From admission to career placement, we help you navigate each step with confidence. Your global future begins here.
        </p>
        <Link to="/education" className='btn2'> 
          Education <img src={dark_arrow} alt="icon_login" />
        </Link>
        <Link to="/employment" className='btn2'> 
          Employment <img src={dark_arrow} alt="icon_login" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;