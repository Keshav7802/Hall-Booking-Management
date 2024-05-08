// Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import logo from '../assets/iitlogo.jpg';

describe('Header', () => {
  it('renders logo and text correctly', () => {
    render(<Header />);
    
    
    const logoElement = screen.getByAltText('');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', logo);

    
    const instituteText = screen.getByText('Indian Institute of Technology Ropar');
    expect(instituteText).toBeInTheDocument();

    
    const bookingText = screen.getByText('Campus Hall Booking');
    expect(bookingText).toBeInTheDocument();
  });
});
