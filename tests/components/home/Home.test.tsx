import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../../src/components/home/Home';

const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

describe('Home Component', () => {
  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByText('Your Health, Your Way')).toBeInTheDocument();
    expect(screen.getByText('Personalized Health Monitoring Platform')).toBeInTheDocument();
  });

  it('displays hero section content', () => {
    renderWithRouter();
    expect(screen.getByText(/Experience the power of personalized health monitoring/)).toBeInTheDocument();
    expect(screen.getByText('Oshadhi')).toBeInTheDocument();
  });

  it('displays all feature cards', () => {
    renderWithRouter();
    expect(screen.getByText('Monitor')).toBeInTheDocument();
    expect(screen.getByText('Prevent')).toBeInTheDocument();
    expect(screen.getByText('Identify')).toBeInTheDocument();
  });

  it('displays feature descriptions', () => {
    renderWithRouter();
    expect(screen.getByText(/Track your vital signs and health metrics in real-time/)).toBeInTheDocument();
    expect(screen.getByText(/Early detection and preventive care/)).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive health screening/)).toBeInTheDocument();
  });

  it('displays testimonials section', () => {
    renderWithRouter();
    expect(screen.getByText('What Our Users Say')).toBeInTheDocument();
    expect(screen.getByText('Real experiences from real people')).toBeInTheDocument();
    expect(screen.getByText('Arjun Sharma')).toBeInTheDocument();
    expect(screen.getByText('Priya Iyer')).toBeInTheDocument();
  });

  it('displays testimonial content', () => {
    renderWithRouter();
    expect(screen.getByText(/Oshadhi has revolutionized my health journey/)).toBeInTheDocument();
    expect(screen.getByText(/As someone who values both traditional wisdom/)).toBeInTheDocument();
  });
}); 