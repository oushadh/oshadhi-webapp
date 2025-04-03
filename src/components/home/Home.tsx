import React, { useEffect, useRef } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Fixed Background with Blobs */}
      <div className="background-container">
        <div className="hero-background">
          <div className="hero-blob"></div>
          <div className="hero-blob"></div>
          <div className="hero-blob"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="content-container">
        {/* Hero Section */}
        <section className="hero" ref={heroRef}>
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">Your Health, Your Way. <span>Oshadhi.</span></h1>
              <h2 className="hero-subtitle">Personalized Health Monitoring Platform</h2>
              <p className="hero-description">
                Experience the power of personalized health monitoring with Oshadhi. Our advanced platform combines cutting-edge technology with ancient wisdom to help you achieve optimal health and wellness.
              </p>
              <div className="hero-cta">
                <Link to="/plans" className="cta-button primary">
                  Get Started
                </Link>
                <Link to="/about" className="cta-button secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <div className="features-header">
              <h2>Key Features</h2>
              <p className="features-subtitle">Everything you need for comprehensive health monitoring</p>
            </div>
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
      </div>
    </div>
  );
};

export default Home; 