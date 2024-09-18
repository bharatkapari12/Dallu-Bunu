import React, { useState } from 'react';
import './Form.css';

const Education = () => {
  const [formData, setFormData] = useState({
    full_name: '',  // Match backend field name
    email: '',
    course_interested: '',  // Match backend field name
    ielts_score: '',
    toefl_score: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-education/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // formData should match the fields expected by the backend
      });

      if (response.ok) {
        alert('Form Submitted Successfully');
      } else {
        const data = await response.json();
        console.error('Invalid Data:', data);
        alert(data.message || 'Invalid Data');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="form-container">
      <h2>Education Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            id="full_name"
            name="full_name"  // Match backend field name
            value={formData.full_name}
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
          <label htmlFor="course_interested">Course Interested In:</label>
          <input
            type="text"
            id="course_interested"
            name="course_interested"  // Match backend field name
            value={formData.course_interested}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ielts_score">IELTS Score:</label>
          <input
            type="number"
            id="ielts_score"
            name="ielts_score"
            value={formData.ielts_score}
            onChange={handleChange}
            min="0"
            max="9"
            step="0.5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="toefl_score">TOEFL Score:</label>
          <input
            type="number"
            id="toefl_score"
            name="toefl_score"
            value={formData.toefl_score}
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