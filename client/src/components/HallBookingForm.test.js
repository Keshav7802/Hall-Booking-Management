import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional matchers
import { BrowserRouter as Router } from 'react-router-dom';
import HallBookingForm from './HallBookingForm';
import  UserContext  from '../components/UserContext'; // Import UserContext if it's exported from 'UserContext.js'
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    },
  }));

  
describe('HallBookingForm', () => {
  // Mock UserContext value for logged-in user
  const mockUserContextValue = { userName: 'testUser' };

  const mockDate = new Date(2024, 4, 3, 4, 36, 41); // May 3, 2024 04:36:41 GMT+0530

  // Mock fetch function for successful form submission
  global.fetch = jest.fn().mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValueOnce({}),
  });

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock function calls before each test
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate); // Mock Date object
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocked functions after each test
  });




  test('renders the form correctly', () => {
    render(
      <Router>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBookingForm />
        </UserContext.Provider>
      </Router>
    );

    // Check if the form elements are rendered
    expect(screen.getByLabelText('EVENT NAME :')).toBeInTheDocument();
    expect(screen.getByLabelText('Event TYPE :')).toBeInTheDocument();
    // Add similar assertions for other form elements
  });

  test('submits the form correctly', async () => {
    render(
      <Router>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBookingForm />
        </UserContext.Provider>
      </Router>
    );

    // Mock user inputs
    fireEvent.change(screen.getByLabelText('EVENT NAME :'), { target: { value: 'Test Event' } });
    fireEvent.change(screen.getByLabelText('Event TYPE :'), { target: { value: 'Test Type' } });
    // Add similar fireEvent calls for other inputs

    // Trigger form submission
    fireEvent.click(screen.getByText('Submit'));

    // Wait for form submission
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`${process.env.REACT_APP_API}/booking/createBooking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName: 'Test Event',
          eventType: 'Test Type',
          hallName: '',
          departmentBlock: '',
          clubName: '',
          eventPurpose: '',
          startDateTime: mockDate.toISOString(), // Convert Date object to ISO string
          endDateTime: mockDate.toISOString(), // Convert Date object to ISO string
          bookingStatus: 'Pending',
          bookingDateTime: mockDate.toISOString(), // Convert Date object to ISO string
        }),
      });
      
       });
  });

  test('handles error during form submission', async () => {
    
 // Mock fetch to simulate a failed form submission
 global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network error'));

 // Render the component
 render(
   <Router>
     <UserContext.Provider value={mockUserContextValue}>
       <HallBookingForm />
     </UserContext.Provider>
   </Router>
 );

 // Trigger form submission
 fireEvent.click(screen.getByText('Submit'));

 // Wait for error message
 await waitFor(() => {
   // Assert that toast.error is called with the correct message
   expect(toast.error).toHaveBeenCalledWith('Form not submitted');

   // Assert that the window location is not changed
   expect(window.location.pathname).not.toBe('/Status');
 });
});


  test('displays login message if user is not logged in', () => {
    render(
      <Router>
        <UserContext.Provider value={{}}>
          <HallBookingForm />
        </UserContext.Provider>
      </Router>
    );

    // Check if the login message is displayed
    expect(screen.getByText('User Not Logged In, Please Login First!!!')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
