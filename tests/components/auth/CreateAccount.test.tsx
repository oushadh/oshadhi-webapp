import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateAccount from '../../../src/components/auth/CreateAccount';

describe('Create Account Component', () => {
  const renderWithRouter = () => {
    return render(
      <MemoryRouter>
        <CreateAccount />
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'Create Account' })).toBeInTheDocument();
    expect(screen.getByText('Join Oshadhi and start your health journey today')).toBeInTheDocument();
  });

  it('displays all form fields', () => {
    renderWithRouter();
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
  });

  it('updates form fields on input', () => {
    renderWithRouter();
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    expect(firstNameInput).toHaveValue('John');
    expect(lastNameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(passwordInput).toHaveValue('password123');
    expect(confirmPasswordInput).toHaveValue('password123');
  });

  it('requires all fields to be filled', () => {
    renderWithRouter();
    
    const submitButton = screen.getByRole('button', { name: 'Create Account' });
    fireEvent.click(submitButton);

    // Check that all inputs are marked as required
    expect(screen.getByPlaceholderText('First Name')).toBeRequired();
    expect(screen.getByPlaceholderText('Last Name')).toBeRequired();
    expect(screen.getByPlaceholderText('Email')).toBeRequired();
    expect(screen.getByPlaceholderText('Password')).toBeRequired();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeRequired();
  });

  it('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    renderWithRouter();
    
    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: 'Create Account' });
    fireEvent.click(submitButton);

    // Check that form data was logged
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      confirmPassword: 'password123'
    });
  });

  it('has sign in link', () => {
    renderWithRouter();
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    const signInLink = screen.getByText('Sign In');
    expect(signInLink).toBeInTheDocument();
    expect(signInLink.closest('a')).toHaveAttribute('href', '/login');
  });

  it('validates email format', () => {
    renderWithRouter();
    const emailInput = screen.getByPlaceholderText('Email');
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(emailInput).toHaveValue('invalid-email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });
}); 