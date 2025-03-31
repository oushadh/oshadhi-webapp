import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from '../../../src/components/auth/ForgotPassword';

const renderWithRouter = (initialEntry = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <ForgotPassword />
    </MemoryRouter>
  );
};

describe('ForgotPassword Component', () => {
  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByText('Reset Your Password')).toBeInTheDocument();
    expect(screen.getByText('Enter your email address and we\'ll send you instructions to reset your password')).toBeInTheDocument();
  });

  it('displays email input field', () => {
    renderWithRouter();
    const emailInput = screen.getByLabelText('Email Address');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toBeRequired();
  });

  it('updates email field on input', () => {
    renderWithRouter();
    const emailInput = screen.getByLabelText('Email Address');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('requires email field to be filled', () => {
    renderWithRouter();
    const submitButton = screen.getByText('Send Reset Instructions');
    fireEvent.click(submitButton);
    const emailInput = screen.getByLabelText('Email Address');
    expect(emailInput).toBeInvalid();
  });

  it('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    renderWithRouter();
    
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByText('Send Reset Instructions');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith('Password reset requested for:', 'test@example.com');
    consoleSpy.mockRestore();
  });

  it('has contact support section', () => {
    renderWithRouter();
    expect(screen.getByText('Need Help?')).toBeInTheDocument();
    expect(screen.getByText('If you don\'t receive the email within a few minutes, please check your spam folder.')).toBeInTheDocument();
    expect(screen.getByText('For additional support, contact our customer service team.')).toBeInTheDocument();
    
    const contactButton = screen.getByText('Contact Support');
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest('a')).toHaveAttribute('href', '/contact');
  });
}); 