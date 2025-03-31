import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App Component', () => {
  const renderApp = (initialEntry = '/') => {
    return render(
      <App RouterComponent={(props) => (
        <MemoryRouter initialEntries={[initialEntry]} {...props} />
      )} />
    );
  };

  it('renders navigation', () => {
    renderApp();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders home page by default', () => {
    renderApp();
    expect(screen.getByText('Your Health, Your Way')).toBeInTheDocument();
  });

  it('renders about page', () => {
    renderApp('/about');
    expect(screen.getByText('About Oshadhi')).toBeInTheDocument();
  });

  it('renders contact page', () => {
    renderApp('/contact');
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders plans page', () => {
    renderApp('/plans');
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
  });
});
