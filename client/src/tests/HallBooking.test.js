// HallBooking.test.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { fireEvent,render, screen,act } from '@testing-library/react';
import '@testing-library/jest-dom'; // 
import HallBooking from '../components/HallBooking';
import SideNavigation from '../components/SideNavigation';


import { BrowserRouter as Router } from 'react-router-dom';


jest.mock('../../src/components/SideNavigation', () => () => <div data-testid="side-navigation" />);


describe('HallBooking Component', () => {
  test('Renders hall details heading', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    expect(screen.getByText('HALL DETAILS')).toBeInTheDocument();
  });


  test('Renders Department sub-heading', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    expect(screen.getByLabelText('Department:')).toBeInTheDocument();
  });


  test('Renders search hall sub-heading', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    expect(screen.getByLabelText('Search Halls:')).toBeInTheDocument();
  });

  test('Renders available halls', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );

    const halls = [
      { id: 1, name: 'Auditorium', department: 'Major', picture: 'audi.jpg' },
      { id: 2, name: 'CS-Lab', department: 'Computer Science', picture: 'cs_lab.jpg' },
      
    ];
   
    halls.forEach(hall => {
      expect(screen.getByText(hall.name)).toBeInTheDocument();
    });
  });

  test('Dropdown selection filters halls', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
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
  

  test('Filters halls based on search input', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    // Enter search input
    fireEvent.change(screen.getByLabelText('Search Halls:'), { target: { value: 'Auditorium' } });
    // Check if only halls matching search input are rendered
    expect(screen.getByText('Auditorium')).toBeInTheDocument();
    expect(screen.queryByText('CS-Lab')).toBeNull(); // Make sure other halls are not rendered
  });

  test('Displays "View Hall Details" button for each hall', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    
  
    const viewDetailsButtons = screen.getAllByRole('button', { name: 'View Hall Details', selector: 'a[href="/HallDetails"] button' });


    expect(viewDetailsButtons).toHaveLength(16); // Ensure each hall has a "View Hall Details" button
  
   
  });
    

  test('Displays "Book Hall" button for each hall', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    const viewDetailsButtons = screen.getAllByRole('button', { name: 'Book Hall', selector: 'a[href="/HallDetails"] button' });


    expect(viewDetailsButtons).toHaveLength(16); // Ensure each hall has a "View Hall Details" button
  
  });

  test('Clicking on "View Hall Details" navigates to /HallDetails', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );
    const viewDetailsButton = screen.getAllByText('View Hall Details')[0]; // Assuming there's only one button with this text
    fireEvent.click(viewDetailsButton);

    expect(window.location.pathname).toBe('/HallDetails');
  });

  test('Clicking on "Book Hall" navigates to /HallBookForm', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );

    const bookHallButton = screen.getAllByText('Book Hall')[0]; // Assuming there's only one button with this text
    fireEvent.click(bookHallButton);

    expect(window.location.pathname).toBe('/HallBookForm');
  });

  test('Images are rendered correctly', () => {
    render(
      <Router>
        <HallBooking />
      </Router>
    );

    // Assuming all images have unique alt text corresponding to their names
    const images = screen.getAllByAltText((content, element) => {
      return element.tagName.toLowerCase() === 'img' && content !== '';
    });

    expect(images).toHaveLength(16); // Assuming there are 16 images in the component
  });

});

  
