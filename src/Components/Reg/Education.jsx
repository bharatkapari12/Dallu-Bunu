import React, { useState } from 'react';
import './Form.css';

const Education = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    courseInterested: '',
    ieltsScore: '',
    toeflScore: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Education Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Education Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseInterested">Course Interested In:</label>
          <input
            type="text"
            id="courseInterested"
            name="courseInterested"
            value={formData.courseInterested}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ieltsScore">IELTS Score:</label>
          <input
            type="number"
            id="ieltsScore"
            name="ieltsScore"
            value={formData.ieltsScore}
            onChange={handleChange}
            min="0"
            max="9"
            step="0.5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="toeflScore">TOEFL Score:</label>
          <input
            type="number"
            id="toeflScore"
            name="toeflScore"
            value={formData.toeflScore}
            onChange={handleChange}
            min="0"
            max="120"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Education;