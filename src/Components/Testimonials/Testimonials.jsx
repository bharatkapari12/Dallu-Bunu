import React, { useRef } from 'react';
import './Testimonials.css';
import nextIcon from '../../Assets/next-icon.png';
import backIcon from '../../Assets/back-icon.png';
import user1 from '../../Assets/user-1.jpg';
import user2 from '../../Assets/user-4.jpeg';
import user3 from '../../Assets/user-3.jpeg';
import user4 from '../../Assets/User-2.jpeg';

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) { // Adjusted to account for 4 slides
      tx -= 25; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  // Testimonial data (you can customize this further)
  const testimonials = [
    {
      id: 1,
      name: 'Simran Pun',
      location: 'Maitidevi, Nepal',
      text: "DreamWeavers gave me the guidance and confidence I needed to pursue my studies abroad. Their support has been invaluable.",
      image: user1,
    },
    {
      id: 2,
      name: 'Madan Pandaya',
      location: 'London, UK',
      text: "With DreamWeavers, the process of securing employment overseas was smooth and efficient. I couldn't have done it without their help.",
      image: user2, 
    },
    {
      id: 3,
      name: 'Alex Khanal',
      location: 'Toronto, Canada',
      text: "DreamWeavers' expert advice made all the difference in helping me navigate the challenges of studying in a foreign country.",
      image: user3, 
    },
    {
      id: 4,
      name: 'Pushpa Basnet',
      location: 'Madrid, Spain',
      text: "Thanks to DreamWeavers, I was able to secure a job abroad with ease. Their service is truly exceptional.",
      image: user4,
    },    
  ];

  return (
    <div className="testimonials" id='testimonials'>
      <img src={nextIcon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={backIcon} alt="Back" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="slide-item"> 
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial.image} alt={testimonial.name} className="user-img" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Testimonials;