// Footer.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders text correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Campus Hall Booking System')).toBeInTheDocument();
    expect(screen.getByText('Developed by Team 1')).toBeInTheDocument();
  });

  it('renders with correct styling', () => {
    render(<Footer />);
    const footer = screen.getByRole('navigation');
    expect(footer).toHaveClass('navbar', 'navbar-dark', 'bg-dark', 'fixed-bottom');
  });
});
