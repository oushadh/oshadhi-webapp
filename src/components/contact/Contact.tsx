import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    // Show success message or redirect
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact">
      <div className="background-container">
        <div className="contact-blob"></div>
        <div className="contact-blob"></div>
        <div className="contact-blob"></div>
      </div>
      
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have questions? We're here to help you on your health monitoring journey.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Support Information</h2>
            <div className="info-item">
              <h3>Email Support</h3>
              <p>support@oshadhi.com</p>
            </div>
            <div className="info-item">
              <h3>Phone Support</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            </div>
            <div className="info-item">
              <h3>Emergency Support</h3>
              <p>24/7 for critical issues</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="account">Account Management</option>
                    <option value="feature">Feature Request</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="submit-button" aria-label="Send Message">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 