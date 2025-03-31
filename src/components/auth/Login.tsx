import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login here
    console.log('Login submitted:', formData);
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to access your health dashboard</p>
        </div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
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
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="button button-primary">
              Sign In
            </button>
          </form>
          <div className="login-info">
            <h2>New to OSHADHI?</h2>
            <p>Create an account to start monitoring your health</p>
            <Link to="/subscribe" className="button button-secondary">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 