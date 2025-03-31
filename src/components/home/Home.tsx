import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  {
    title: 'Vital Signs Tracking',
    description: 'Monitor blood pressure, heart rate, temperature, and oxygen levels with precision.',
    icon: '❤️'
  },
  {
    title: 'Health Analytics',
    description: 'Get detailed insights and trends from your health data with advanced analytics.',
    icon: '📊'
  },
  {
    title: 'Preventive Care',
    description: 'Receive personalized recommendations and early warning alerts for better health outcomes.',
    icon: '🛡️'
  }
];

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Health, Your Way</h1>
              <h2>Personalized Health Monitoring Platform</h2>
              <p className="hero-description">
                Experience the power of personalized health monitoring with <span className="company-name">Oshadhi</span>. Our advanced platform combines cutting-edge technology with ancient wisdom to help you achieve optimal health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3>Monitor</h3>
              <p>Track your vital signs and health metrics in real-time with our advanced monitoring system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Prevent</h3>
              <p>Early detection and preventive care to maintain optimal health and prevent potential issues.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                  <path d="M12 16h.01" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
              </div>
              <h3>Identify</h3>
              <p>Comprehensive health screening to identify potential health concerns early.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2>What Our Users Say</h2>
            <p>Real experiences from real people</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Oshadhi has revolutionized my health journey. The blend of modern technology with Ayurvedic principles has helped me achieve better balance in my life."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>Arjun Sharma</h4>
                  <p>Premium User</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "As someone who values both traditional wisdom and modern healthcare, Oshadhi's approach to health monitoring perfectly aligns with my lifestyle."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>Priya Iyer</h4>
                  <p>Basic Plan User</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The personalized health insights from Oshadhi have helped me maintain better harmony between my body and mind. It's like having a personal Ayurvedic guide."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>Rahul Verma</h4>
                  <p>Premium User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Get Started?</h2>
              <p>Join thousands of satisfied customers who have already made the switch.</p>
            </div>
            <div className="cta-button">
              <Link to="/plans" className="button button-secondary">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 