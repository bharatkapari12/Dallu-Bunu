import React, { useState } from 'react';
import './Form.css';

const Employment = () => {
  const [formData, setFormData] = useState({
    full_name: '',  // Match backend field name
    email: '',
    skills: '',
    country: '',
    job_title: '',  // Match backend field name
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Employment Form Data:', formData);

    try {
      const response = await fetch('http://localhost:8000/api/employment-inquiry/', { // Adjust URL to your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Form Submitted Successfully');
        setFormData({
          full_name: '',
          email: '',
          skills: '',
          country: '',
          job_title: '',
        });
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="form-container">
      <h2>Employment Inquiry</h2>
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
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="job_title">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"  // Match backend field name
            value={formData.job_title}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Employment;