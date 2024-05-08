import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // 
import HallBooking from '../components/HallBooking';
import SideNavigation from '../components/SideNavigation';
import UserContext from '../components/UserContext';

jest.mock('../../src/components/SideNavigation', () => () => <div data-testid="side-navigation" />);

describe('HallBooking Component', () => {
  // Define mock user context value
  const mockUserContextValue = {
    userName: 'testUser'
  };
  const mockUserContextValue1 = {
    userName: null
  }
  test('Renders hall details heading', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('HALL DETAILS')).toBeInTheDocument();
  });

  test('Renders Department sub-heading', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByLabelText('Department:')).toBeInTheDocument();
  });

  test('Renders search hall sub-heading', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByLabelText('Search Halls:')).toBeInTheDocument();
  });

  test('Renders available halls', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const halls = [
      { id: 1, name: 'Auditorium', department: 'Major', picture: 'audi.jpg' },
      { id: 2, name: 'CS-Lab', department: 'Computer Science', picture: 'cs_lab.jpg' },
      // Add more halls if needed
    ];

    halls.forEach(hall => {
      expect(screen.getByText(hall.name)).toBeInTheDocument();
    });
  });

  test('Dropdown selection filters halls', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText("Department:"), {
      target: { value: "Computer Science" },
    });

    // Check if only halls of the selected department are rendered
    expect(screen.getAllByText(/Computer Science/).length).toBeGreaterThan(0);
     // Check if 'Major' option is not selected
     const departmentDropdown = screen.getByLabelText("Department:");
     expect(departmentDropdown.value).not.toBe("Major");
  
  });
  
  test('Renders login message if user is not logged in', () => {
    // Render HallBooking component without providing user context
    render(
      <BrowserRouter>
      <UserContext.Provider value={mockUserContextValue1}>
        <HallBooking />
      </UserContext.Provider>
    </BrowserRouter>
    );
   // Assert that the login message is rendered
  expect(screen.getByText('User Not Logged In, Please Login First!!!')).toBeInTheDocument();

 
  });

  test('Clicking on "View Hall Details" button navigates to HallDetails page', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const HallButtons = screen.queryAllByRole('button', { name: 'View Hall Details' });

  // Get the last button from the array
  const lastHallButton = HallButtons[HallButtons.length - 1];

  // Simulate a user click on the last button
  fireEvent.click(lastHallButton);

  // Assert that clicking the button redirects to the correct route
  expect(window.location.pathname).toBe('/HallDetails/16');
  });

  test('Clicking on "Book Hall" button navigates to HallBookForm page', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
     // Get all buttons with the role "button" and name "Book Hall"
  const bookHallButtons = screen.queryAllByRole('button', { name: 'Book Hall' });

  // Get the last button from the array
  const lastBookHallButton = bookHallButtons[bookHallButtons.length - 1];

  // Simulate a user click on the last button
  fireEvent.click(lastBookHallButton);

  // Assert that clicking the button redirects to the correct route
  expect(window.location.pathname).toBe('/HallBookForm');
  });

  test('Filters halls based on search input', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    // Enter search input
    fireEvent.change(screen.getByLabelText('Search Halls:'), { target: { value: 'Auditorium' } });
    // Check if only halls matching search input are rendered
    expect(screen.getByText('Auditorium')).toBeInTheDocument();
    expect(screen.queryByText('CS-Lab')).toBeNull(); // Make sure other halls are not rendered
  });

  test('Displays "View Hall Details" button for each hall', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
  
    const viewDetailsButtons = screen.getAllByRole('button', { name: 'View Hall Details', selector: 'a[href="/HallDetails"] button' });


    expect(viewDetailsButtons).toHaveLength(16); // Ensure each hall has a "View Hall Details" button
  
   
  });
    

  test('Displays "Book Hall" button for each hall', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const viewDetailsButtons = screen.getAllByRole('button', { name: 'Book Hall', selector: 'a[href="/HallDetails"] button' });


    expect(viewDetailsButtons).toHaveLength(16); // Ensure each hall has a "View Hall Details" button
  
  });

  test('Clicking on "View Hall Details" navigates to /HallDetails', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const viewDetailsButton = screen.getAllByText('View Hall Details')[0]; // Assuming there's only one button with this text
    fireEvent.click(viewDetailsButton);

    expect(window.location.pathname).toBe('/HallDetails/1');
  });

  test('Clicking on "Book Hall" navigates to /HallBookForm', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );

    const bookHallButton = screen.getAllByText('Book Hall')[0]; // Assuming there's only one button with this text
    fireEvent.click(bookHallButton);

    expect(window.location.pathname).toBe('/HallBookForm');
  });

  test('Images are rendered correctly', () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <HallBooking />
        </UserContext.Provider>
      </BrowserRouter>
    );

    // Assuming all images have unique alt text corresponding to their names
    const images = screen.getAllByAltText((content, element) => {
      return element.tagName.toLowerCase() === 'img' && content !== '';
    });

    expect(images).toHaveLength(16); // Assuming there are 16 images in the component
  });
});
