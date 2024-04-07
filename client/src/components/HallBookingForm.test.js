import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserContext from '../components/UserContext';
import HallBookingForm from './HallBookingForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


jest.mock('react-toastify', () => ({
    ...jest.requireActual('react-toastify'),
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    },
  }));


describe('HallBookingForm component', () => {
  const mockUserContext = {
    userName: 'TestUser',
  };

  test('renders form fields', () => {
    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <HallBookingForm />
        </UserContext.Provider>
      </Router>
    );

    expect(screen.getByText('EVENT NAME :')).toBeInTheDocument();
    expect(screen.getByText('Event TYPE :')).toBeInTheDocument();
    expect(screen.getByText('DEPARTMENT :')).toBeInTheDocument();
    expect(screen.getByText('HALL FOR BOOKING :')).toBeInTheDocument();
    expect(screen.getByText('AFFILIATED CLUB :')).toBeInTheDocument();
    expect(screen.getByText('TIME FROM :')).toBeInTheDocument();
    expect(screen.getByText('TIME TO :')).toBeInTheDocument();
  });

  test('submits form with correct data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ok: true }),
      })
    );

    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <HallBookingForm />
        </UserContext.Provider>
      </Router>
    );

    fireEvent.change(screen.getByLabelText('EVENT NAME :'), {
      target: { value: 'Test Event' },
    });
    fireEvent.change(screen.getByLabelText('Event TYPE :'), {
      target: { value: 'Test Type' },
    });
    fireEvent.change(screen.getByLabelText('DEPARTMENT :'), {
      target: { value: 'Computer Science' },
    });
    fireEvent.change(screen.getByLabelText('HALL FOR BOOKING :'), {
      target: { value: 'Auditorium' },
    });
    fireEvent.change(screen.getByLabelText('AFFILIATED CLUB :'), {
      target: { value: 'Arturo' },
    });
    fireEvent.change(screen.getByLabelText('REASON :'), {
      target: { value: 'Test Reason' },
    });
    fireEvent.change(screen.getByLabelText('TIME FROM :'), {
        target: { value: '2024-04-01T09:00' },
      });
      fireEvent.change(screen.getByLabelText('TIME TO :'), {
        target: { value: '2024-04-01T17:00' },
      });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName: 'Test Event',
        eventType: 'Test Type',
        clubName: 'Computer Science',
        eventPurpose: 'Test Reason',
        startDateTime: '2024-04-01T09:00', // Convert Date object to string
        endDateTime: '2024-04-01T17:00' , // Convert Date object to string
        
      }),
    });

    expect(toast.success).toHaveBeenCalledWith('Form Submitted Successfully');
  });


  test('displays error toast when form submission fails', async () => {
    // Mocking fetch to simulate a failed form submission
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
 
    // Render the component
    render(
        <Router>
          <UserContext.Provider value={mockUserContext}>
            <HallBookingForm />
          </UserContext.Provider>
        </Router>
      );

    // Fire form submission
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    // Wait for the form submission to be processed
    await waitFor(() => {
      // Check if error toast is displayed
      expect(global.fetch).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith('Form not submitted');
    });
  });

  test('displays error toast when form submission returns unsuccessful response', async () => {
    // Mocking fetch to simulate an unsuccessful form submission response
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Submission failed' }),
    });

    render(
        <Router>
          <UserContext.Provider value={mockUserContext}>
            <HallBookingForm />
          </UserContext.Provider>
        </Router>
      );

    // Fire form submission
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    // Wait for the form submission to be processed
    await waitFor(() => {
      // Check if error toast is displayed
      expect(global.fetch).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith('Submission failed');
    });
  });
});
