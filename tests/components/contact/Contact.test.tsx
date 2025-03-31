import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../../../src/components/contact/Contact';

describe('Contact Component', () => {
  const renderWithRouter = () => {
    return render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderWithRouter();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('displays all form fields', () => {
    renderWithRouter();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('updates form fields on input', () => {
    renderWithRouter();
    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const subjectInput = screen.getByLabelText('Subject');
    const messageInput = screen.getByLabelText('Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'technical' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(subjectInput).toHaveValue('technical');
    expect(messageInput).toHaveValue('Test message');
  });

  it('requires all fields to be filled', () => {
    renderWithRouter();
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);

    expect(screen.getByLabelText('Full Name')).toBeRequired();
    expect(screen.getByLabelText('Email Address')).toBeRequired();
    expect(screen.getByLabelText('Subject')).toBeRequired();
    expect(screen.getByLabelText('Message')).toBeRequired();
  });

  it('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    renderWithRouter();
    
    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const subjectInput = screen.getByLabelText('Subject');
    const messageInput = screen.getByLabelText('Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'technical' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    fireEvent.click(screen.getByText('Send Message'));
    
    expect(consoleSpy).toHaveBeenCalledWith('Contact form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'technical',
      message: 'Test message'
    });
  });

  it('displays contact information', () => {
    renderWithRouter();
    expect(screen.getByText('Support Information')).toBeInTheDocument();
    expect(screen.getByText('Email Support')).toBeInTheDocument();
    expect(screen.getByText('Phone Support')).toBeInTheDocument();
    expect(screen.getByText('Business Hours')).toBeInTheDocument();
  });

  it('validates email format', () => {
    renderWithRouter();
    const emailInput = screen.getByLabelText('Email Address');
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(emailInput).toHaveValue('invalid-email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });
}); 