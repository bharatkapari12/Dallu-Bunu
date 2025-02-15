import React from 'react';
import './contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/submit-contact/', {  // Updated URL
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          phone_number: formData.get('phone'),  // Updated field to match backend
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult('An error occurred while submitting the form.');
    }
  };

  return (
    <section className="contact" id='contact'>
      <div className="contact-col top-col">
        <h3>
          Get in Touch{' '}
          <FaEnvelope style={{ marginLeft: '10px', fontSize: '29px' }} />
        </h3>
        <p>
          Have questions? Want to learn more about our Dream Weavers Recommendation Systems? 
          We're here to help!
        </p>

        <div className="contact-row"> 
          <FaEnvelope className="contact-icon" /> 
          <p>dreamweavers@gmail.com</p>
        </div>

        <div className="contact-row"> 
          <FaPhoneAlt className="contact-icon" /> 
          <p>+977 98000000000</p>
        </div>

        <div className="contact-row"> 
          <FaMapMarkerAlt className="contact-icon" /> 
          <p>123 Maitidevi, Kathmandu, Nepal</p>
        </div>

      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Phone Number"
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn dark-btn">
            Submit now <FaArrowRight style={{ marginLeft: '10px' }} />
          </button>
        </form>
        {result && <p className="form-result">{result}</p>} 
      </div>
    </section>
  );
};

export default Contact;