import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Subscribe from '../../../src/components/auth/Subscribe';

describe('Subscribe Component', () => {
  const renderWithRouter = () => {
    return render(
      <MemoryRouter>
        <Subscribe />
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByText('Create Your Account')).toBeInTheDocument();
    expect(screen.getByText('Join our health monitoring platform today')).toBeInTheDocument();
  });

  it('displays subscription form fields', () => {
    renderWithRouter();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Plan')).toBeInTheDocument();
  });

  it('updates form fields on input', () => {
    renderWithRouter();
    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const planSelect = screen.getByLabelText('Select Plan');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    fireEvent.change(planSelect, { target: { value: 'Pro' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(passwordInput).toHaveValue('password123');
    expect(confirmPasswordInput).toHaveValue('password123');
    expect(planSelect).toHaveValue('Pro');
  });

  it('requires all fields to be filled', () => {
    renderWithRouter();
    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const planSelect = screen.getByLabelText('Select Plan');

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(passwordInput).toBeRequired();
    expect(confirmPasswordInput).toBeRequired();
    expect(planSelect).toBeRequired();
  });

  it('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    renderWithRouter();
    
    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const planSelect = screen.getByLabelText('Select Plan');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
    fireEvent.change(planSelect, { target: { value: 'Pro' } });
    
    fireEvent.click(screen.getByText('Create Account'));
    
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      plan: 'Pro'
    });
  });

  it('displays sign in section', () => {
    renderWithRouter();
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    expect(screen.getByText('Sign in to access your health dashboard')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('has correct plan options', () => {
    renderWithRouter();
    const planSelect = screen.getByLabelText('Select Plan');
    expect(planSelect).toHaveValue('Basic'); // Default value
    expect(planSelect).toHaveTextContent('Basic Plan');
    expect(planSelect).toHaveTextContent('Pro Plan');
    expect(planSelect).toHaveTextContent('Enterprise Plan');
  });
}); 