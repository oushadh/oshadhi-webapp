import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Plans from '../../../src/components/plans/Plans';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
};

describe('Plans Component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Plans />);
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
  });

  it('displays all plan cards', () => {
    renderWithRouter(<Plans />);
    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
  });

  it('displays correct prices', () => {
    renderWithRouter(<Plans />);
    expect(screen.getByText('₹1,000')).toBeInTheDocument();
    expect(screen.getByText('₹5,000')).toBeInTheDocument();
    expect(screen.getByText('₹10,000')).toBeInTheDocument();
  });

  it('displays "Most Popular" badge on Premium plan', () => {
    renderWithRouter(<Plans />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('displays all features for each plan', () => {
    renderWithRouter(<Plans />);
    
    // Basic plan features
    expect(screen.getByText('Basic health monitoring')).toBeInTheDocument();
    expect(screen.getByText('Daily activity tracking')).toBeInTheDocument();
    
    // Premium plan features
    expect(screen.getByText('Advanced health monitoring')).toBeInTheDocument();
    expect(screen.getByText('Personal health coach')).toBeInTheDocument();
    
    // Enterprise plan features
    expect(screen.getByText('Comprehensive health monitoring')).toBeInTheDocument();
    expect(screen.getByText('Family health tracking')).toBeInTheDocument();
  });

  it('has correct button text for each plan', () => {
    renderWithRouter(<Plans />);
    expect(screen.getAllByText('Get Started')).toHaveLength(2);
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
  });

  it('links to create account page for Basic and Premium plans', () => {
    renderWithRouter(<Plans />);
    const getStartedButtons = screen.getAllByText('Get Started');
    
    getStartedButtons.forEach(button => {
      expect(button.closest('a')).toHaveAttribute('href', '/create-account');
    });
  });

  it('links to create account page for Enterprise plan', () => {
    renderWithRouter(<Plans />);
    const contactSalesButton = screen.getByText('Contact Sales');
    expect(contactSalesButton.closest('a')).toHaveAttribute('href', '/create-account');
  });
}); 