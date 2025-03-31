import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset request here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="forgot-password">
      <div className="container">
        <div className="forgot-password-header">
          <h1>Reset Your Password</h1>
          <p>Enter your email address and we'll send you instructions to reset your password</p>
        </div>
        <div className="forgot-password-form-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="forgot-password-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="button button-primary">
                Send Reset Instructions
              </button>
            </form>
          ) : (
            <div className="success-message">
              <h2>Check Your Email</h2>
              <p>We've sent password reset instructions to your email address.</p>
              <p>Please check your inbox and follow the instructions to reset your password.</p>
              <Link to="/login" className="button button-secondary">
                Return to Login
              </Link>
            </div>
          )}
          <div className="forgot-password-info">
            <h2>Need Help?</h2>
            <p>If you don't receive the email within a few minutes, please check your spam folder.</p>
            <p>For additional support, contact our customer service team.</p>
            <Link to="/contact" className="button button-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 