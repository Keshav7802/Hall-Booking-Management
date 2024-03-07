import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import logo from '../assets/iitlogo.jpg'; // Importing the logo image

describe('Header Component', () => {
  test('renders header text correctly', () => {
    render(<Header />);
    const headerText = screen.getByText('Indian Institute of Technology Ropar');
    expect(headerText).toBeInTheDocument();
  });

  test('renders logo correctly', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Indian Institute of Technology Ropar logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', logo); // Using the imported logo
  });

  test('renders campus hall booking text correctly', () => {
    render(<Header />);
    const bookingText = screen.getByText('Campus Hall Booking');
    expect(bookingText).toBeInTheDocument();
  });
});
