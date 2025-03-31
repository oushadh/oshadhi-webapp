import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    title: 'Quality',
    description: 'We strive for excellence in everything we do.',
    icon: '🎯'
  },
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.',
    icon: '💡'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency.',
    icon: '🤝'
  }
];

const team = [
  {
    name: 'Krish Gogineni',
    role: 'Head of Development',
    image: 'https://via.placeholder.com/150?text=KG'
  },
  {
    name: 'Sai',
    role: 'Head of Operations',
    image: 'https://via.placeholder.com/150?text=S'
  },
  {
    name: 'Shrian Gogineni',
    role: 'Head of Design',
    image: 'https://via.placeholder.com/150?text=SG'
  }
];

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>About Oshadhi</h1>
          <p className="about-subtitle">Empowering Health Through Technology</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>At Oshadhi, we believe in the power of personalized health monitoring to transform lives. Our platform combines cutting-edge technology with ancient wisdom to provide a comprehensive approach to health and wellness.</p>
            </div>
            
            <div className="about-section">
              <h2>Our Commitment</h2>
              <p>We are committed to making health monitoring accessible, intuitive, and effective for everyone. Our team of experts works tirelessly to ensure that our platform meets the highest standards of accuracy and reliability.</p>
            </div>
            
            <div className="about-section">
              <h2>Our Values</h2>
              <div className="values-grid">
                {values.map((value) => (
                  <div key={value.title} className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-section">
              <h2>Our Team</h2>
              <div className="team-grid">
                {team.map((member) => (
                  <div key={member.name} className="team-card">
                    <div className="team-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-cta">
              <Link to="/contact" className="contact-link">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 