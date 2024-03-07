import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer text correctly', () => {
    render(<Footer />);
    const systemText = screen.getByText('Campus Hall Booking System');
    const teamText = screen.getByText('Developed by Team 1');
    expect(systemText).toBeInTheDocument();
    expect(teamText).toBeInTheDocument();
  });

  test('applies correct background color', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveStyle('background-color: #151515');
  });

  test('applies correct padding', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveStyle('padding: 1rem');
  });

  test('applies correct text color', () => {
    render(<Footer />);
    const systemText = screen.getByText('Campus Hall Booking System');
    const teamText = screen.getByText('Developed by Team 1');
    expect(systemText).toHaveStyle('color: white');
    expect(teamText).toHaveStyle('color: white');
  });
});
