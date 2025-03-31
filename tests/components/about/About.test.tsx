import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../../../src/components/about/About';

describe('About Component', () => {
  const renderWithRouter = () => {
    return render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'About Oshadhi' })).toBeInTheDocument();
  });

  it('displays company description', () => {
    renderWithRouter();
    expect(screen.getByText(/At Oshadhi, we believe/)).toBeInTheDocument();
  });

  it('displays team section', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument();
    expect(screen.getByText('Krish Gogineni')).toBeInTheDocument();
    expect(screen.getByText('Sai')).toBeInTheDocument();
    expect(screen.getByText('Shrian Gogineni')).toBeInTheDocument();
  });

  it('displays values section', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'Our Values' })).toBeInTheDocument();
    expect(screen.getByText('Quality')).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Integrity')).toBeInTheDocument();
  });

  it('displays contact link', () => {
    renderWithRouter();
    const contactLink = screen.getByRole('link', { name: 'Contact Us' });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
}); 