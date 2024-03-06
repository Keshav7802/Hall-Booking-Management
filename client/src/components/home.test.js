import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('renders main heading', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    const mainHeading = screen.getByText('HALL BOOKING');
    expect(mainHeading).toBeInTheDocument();
  });

  test('renders link to check availability of halls', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    const link = screen.getByText('Click here');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/calendar');
  });

  test('renders list of halls available for booking', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    const hallsList = screen.getByTestId('hallsList');
    expect(hallsList).toBeInTheDocument();
    expect(screen.getByText('Drawing Hall 48')).toBeInTheDocument();
    expect(screen.getByText('Drawing Hall 49')).toBeInTheDocument();
    expect(screen.getByText('Vivekanandha Auditorium')).toBeInTheDocument();
    expect(screen.getByText('Lecture Hall No. 82')).toBeInTheDocument();
    expect(screen.getByText('Lecture Hall No. 83')).toBeInTheDocument();
    expect(screen.getByText('Lecture Hall No. 84')).toBeInTheDocument();
    expect(screen.getByText('Lecture Hall No. 13')).toBeInTheDocument();
    expect(screen.getByText('Srinivasa Ramanujan Seminar Hall')).toBeInTheDocument();
  });

  test('renders steps to book a hall', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByText('STEPS TO BOOK A HALL')).toBeInTheDocument();
    expect(screen.getByText('Check the Calendar for the Hall availability on specific dates')).toBeInTheDocument();
    expect(screen.getByText('Click "Add new request" and fill in the form and submit')).toBeInTheDocument();
    expect(screen.getByText('You will receive an email upon submitting this form and an email after the request is approved')).toBeInTheDocument();
    expect(screen.getByText('Meanwhile, the status of your record can be tracked from your dashboard')).toBeInTheDocument();
    expect(screen.getByText('The Hall requests will be approved next working day before forenoon')).toBeInTheDocument();
  });
});
