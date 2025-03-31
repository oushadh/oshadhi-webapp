import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscribe.css';

const Subscribe: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan: 'Basic'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    navigate('/dashboard'); // Redirect to dashboard after successful signup
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe-header">
          <h1>Create Your Account</h1>
          <p>Join our health monitoring platform today</p>
        </div>
        <div className="subscribe-form-container">
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="plan">Select Plan</label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                required
              >
                <option value="Basic">Basic Plan</option>
                <option value="Pro">Pro Plan</option>
                <option value="Enterprise">Enterprise Plan</option>
              </select>
            </div>
            <button type="submit" className="button button-primary">
              Create Account
            </button>
          </form>
          <div className="subscribe-info">
            <h2>Already have an account?</h2>
            <p>Sign in to access your health dashboard</p>
            <button onClick={() => navigate('/login')} className="button button-secondary">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe; 