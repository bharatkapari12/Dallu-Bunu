import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '', // Or use 'email' if you prefer 
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Login data:', formData);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="form-container"> 
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input
              type="text"
              id="username" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="auth-link">
          Don't have an account?{' '}
          <Link to="/signup">Sign up here</Link>
        </p>
      </div> 
    </div>
  );
};

export default Login;