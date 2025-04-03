import React from 'react';
import { Link } from 'react-router-dom';
import './Plans.css';

const Plans: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹1,000',
      period: 'per month',
      features: [
        'Basic health monitoring',
        'Daily activity tracking',
        'Weekly health reports',
        'Email support',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Premium',
      price: '₹5,000',
      period: 'per month',
      features: [
        'Advanced health monitoring',
        'Real-time activity tracking',
        'Daily health reports',
        'Priority email support',
        'Mobile app access',
        'Personal health coach',
        'Custom health plans'
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹10,000',
      period: 'per month',
      features: [
        'Comprehensive health monitoring',
        'Real-time activity tracking',
        'Hourly health reports',
        '24/7 priority support',
        'Mobile app access',
        'Dedicated health coach',
        'Custom health plans',
        'Family health tracking',
        'Advanced analytics'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="plans">
      {/* Fixed Background with Blobs */}
      <div className="background-container">
        <div className="plans-background">
          <div className="plans-blob"></div>
          <div className="plans-blob"></div>
          <div className="plans-blob"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="content-container">
        <div className="container">
          <div className="plans-header">
            <h1>Choose Your Plan</h1>
            <p className="plans-subtitle">Select the perfect plan for your <span className="company-name">Oshadhi</span> health monitoring needs</p>
          </div>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-card-content">
                  <h2>{plan.name}</h2>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <ul className="features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <Link 
                    to={plan.buttonText === 'Contact Sales' ? '/contact' : '/create-account'} 
                    className="button"
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans; 