import React from 'react';
import './About.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="background-container">
        <div className="about-background">
          <div className="about-blob" />
          <div className="about-blob" />
          <div className="about-blob" />
        </div>
      </div>
      <div className="container">
        <div className="about-header">
          <h1>About Oshadhi</h1>
          <p className="about-subtitle">Empowering Health Through Technology</p>
        </div>
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Oshadhi, we believe in making health monitoring accessible and reliable for everyone. 
              Our mission is to empower individuals with the tools they need to take control of their health 
              through personalized monitoring and data-driven insights.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Commitment</h2>
            <p>
              We are committed to providing innovative solutions that bridge the gap between traditional 
              healthcare and modern technology. Our platform is designed to be intuitive, secure, and 
              effective in helping users maintain their well-being.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <FavoriteIcon className="value-icon" />
                <h3>Compassion</h3>
                <p>We care deeply about the well-being of our users and strive to make a positive impact on their lives.</p>
              </div>
              <div className="value-card">
                <GroupIcon className="value-icon" />
                <h3>Community</h3>
                <p>We believe in the power of community and work to create a supportive environment for all users.</p>
              </div>
              <div className="value-card">
                <LightbulbIcon className="value-icon" />
                <h3>Innovation</h3>
                <p>We continuously push the boundaries of what's possible in health technology.</p>
              </div>
            </div>
          </div>
          <div className="about-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image">
                  <img src="/images/team/krishnaiah.jpg" alt="Krishnaiah Gogineni - Founder & CEO" />
                </div>
                <h3>Krishnaiah Gogineni</h3>
                <p className="team-role">Founder & CEO</p>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/images/team/sai.jpg" alt="Sai Sohan Gogineni - Head of Product" />
                </div>
                <h3>Sai Sohan Gogineni</h3>
                <p className="team-role">Head of Product</p>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/images/team/member3.jpg" alt="Team Member" />
                </div>
                <h3>Shrihan Gogineni</h3>
                <p className="team-role">Lead Developer</p>
              </div>
            </div>
          </div>
          <div className="about-cta">
            <a href="/contact" className="contact-link">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 