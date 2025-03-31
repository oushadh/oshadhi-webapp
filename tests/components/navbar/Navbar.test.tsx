import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../../src/components/navbar/Navbar';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      {component}
    </MemoryRouter>
  );
};

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Oshadhi')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Plans')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('opens login dropdown when clicking login button', () => {
    renderWithRouter(<Navbar />);
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
    expect(screen.getByText('Create Account')).toBeInTheDocument();
  });

  it('closes login dropdown when clicking outside', () => {
    renderWithRouter(<Navbar />);
    
    // Open dropdown
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    // Click outside
    fireEvent.mouseDown(document.body);
    
    // Check if dropdown is closed
    expect(screen.queryByPlaceholderText('Email')).not.toBeInTheDocument();
  });

  it('closes login dropdown when pressing escape key', () => {
    renderWithRouter(<Navbar />);
    
    // Open dropdown
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    // Press escape key
    fireEvent.keyDown(document, { key: 'Escape' });
    
    // Check if dropdown is closed
    expect(screen.queryByPlaceholderText('Email')).not.toBeInTheDocument();
  });

  it('closes login dropdown when clicking a link', () => {
    renderWithRouter(<Navbar />);
    
    // Open dropdown
    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);
    
    // Click create account link
    const createAccountLink = screen.getByText('Create Account');
    fireEvent.click(createAccountLink);
    
    // Check if dropdown is closed
    expect(screen.queryByPlaceholderText('Email')).not.toBeInTheDocument();
  });

  it('marks active link correctly', () => {
    renderWithRouter(<Navbar />);
    
    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveClass('active');
  });
}); 