import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../../src/components/auth/Login';

describe('Login Component', () => {
  const renderWithRouter = () => {
    return render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByText('Sign in to access your health dashboard')).toBeInTheDocument();
  });

  it('displays all form fields', () => {
    renderWithRouter();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('updates form fields on input', () => {
    renderWithRouter();
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('requires all fields to be filled', () => {
    renderWithRouter();
    const submitButton = screen.getByText('Sign In');
    fireEvent.click(submitButton);

    expect(screen.getByLabelText('Email Address')).toBeRequired();
    expect(screen.getByLabelText('Password')).toBeRequired();
  });

  it('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    renderWithRouter();
    
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByText('Sign In');
    fireEvent.click(submitButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Login submitted:', {
      email: 'test@example.com',
      password: 'password123'
    });
  });

  it('has forgot password link', () => {
    renderWithRouter();
    const forgotPasswordLink = screen.getByText('Forgot Password?');
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink.closest('a')).toHaveAttribute('href', '/forgot-password');
  });

  it('has create account link', () => {
    renderWithRouter();
    const createAccountLink = screen.getByText('Create Account');
    expect(createAccountLink).toBeInTheDocument();
    expect(createAccountLink.closest('a')).toHaveAttribute('href', '/subscribe');
  });

  it('has remember me checkbox', () => {
    renderWithRouter();
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
  });
}); 