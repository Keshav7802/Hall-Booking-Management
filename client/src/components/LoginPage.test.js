import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserContext from '../components/UserContext';
import LoginPage from './LoginPage';
import { toast } from 'react-toastify';

// Mock the toast module and its error function
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe('LoginPage Component', () => {
  test('should render sign-up form-container', () => {
    const mockUserContext = { user: 'testUser' };
    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <LoginPage />
        </UserContext.Provider>
      </Router>
    );
    expect(screen.getByText('Registration')).toBeInTheDocument();
  });

  test('should render sign-in form-container', () => {
    const mockUserContext = { user: 'testUser' };
    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <LoginPage />
        </UserContext.Provider>
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument();
  });

  test('renders registration form with all required elements', () => {
    const mockUserContext = { user: 'testUser' };
    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <LoginPage />
        </UserContext.Provider>
      </Router>
    );
    expect(screen.getByText('Registration')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    const emailInputs = screen.queryAllByPlaceholderText('Email');
    expect(emailInputs).toHaveLength(2); 
    expect(emailInputs[0]).toBeInTheDocument();
    expect(emailInputs[1]).toBeInTheDocument();
    const passwordInputs = screen.queryAllByPlaceholderText('Password');
    expect(passwordInputs).toHaveLength(2); 
    expect(passwordInputs[0]).toBeInTheDocument();
    expect(passwordInputs[1]).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    const registerButtons = screen.getAllByRole('button', { name: 'Register' });
    registerButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test('renders login form with all required elements', () => {
    const mockUserContext = { user: 'testUser' };
    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <LoginPage />
        </UserContext.Provider>
      </Router>
    );
    expect(screen.getByText('Registration')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    const emailInputs = screen.queryAllByPlaceholderText('Email');
    expect(emailInputs).toHaveLength(2); 
    expect(emailInputs[0]).toBeInTheDocument();
    expect(emailInputs[1]).toBeInTheDocument();
    const passwordInputs = screen.queryAllByPlaceholderText('Password');
    expect(passwordInputs).toHaveLength(2); 
    expect(passwordInputs[0]).toBeInTheDocument();
    expect(passwordInputs[1]).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    const loginButtons = screen.getAllByRole('button', { name: 'Login' });
    loginButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });


  test('example test', () => {
    const mockUserContext = { user: 'testUser' };
 

  render(
    <Router>
      <UserContext.Provider value={mockUserContext}>
        <LoginPage />
      </UserContext.Provider>
    </Router>
  );
  const passwordInputs = screen.queryAllByPlaceholderText('Password');
  expect(passwordInputs.length).toBe(2);
  
  // Check if the closest '.tw-form-container' with class 'tw-sign-up' exists
  const signUpContainer = passwordInputs[0].closest('.tw-form-container.tw-sign-up');
  expect(signUpContainer).toBeTruthy(); // Check if the container exists

  // Similarly, check for the '.tw-form-container' with class 'tw-sign-in'
  const signInContainer = passwordInputs[1].closest('.tw-form-container.tw-sign-in');
  expect(signInContainer).toBeTruthy(); // Check if the container exists
 });

  test('register buttons belong to correct forms', () => {
    const mockUserContext = { user: 'testUser' };
 
  render(
    <Router>
      <UserContext.Provider value={mockUserContext}>
        <LoginPage />
      </UserContext.Provider>
    </Router>
  );
    const registerButtons = screen.getAllByRole('button', { name: 'Register' });
    expect(registerButtons.length).toBe(2);
    expect(registerButtons[0].closest('.tw-form-container.tw-sign-up')).toHaveClass('tw-form-container tw-sign-up');

    expect(registerButtons[1].closest('.tw-toggle-panel.tw-toggle-right')).toHaveClass('tw-toggle-panel tw-toggle-right');
  });

  test("Test for password match validation in HandleRegister", async () => {
    const mockUserContext = { user: 'testUser' };
  
    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <LoginPage />
        </UserContext.Provider>
      </Router>
    );
    const passwordInputs = screen.queryAllByPlaceholderText("Password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
    fireEvent.change(passwordInputs[0], { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "different" } });
    const registerButtons = screen.getAllByRole('button', { name: 'Register' });
    fireEvent.click(registerButtons[0]);
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Passwords do not match');
    });
  });

  test("Test for successful registration in HandleRegister", async () => {
    const mockUserContext = { user: 'testUser' };
    global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  );

  render(
    <Router>
      <UserContext.Provider value={mockUserContext}>
        <LoginPage />
      </UserContext.Provider>
    </Router>
  );
    const passwordInputs = screen.queryAllByPlaceholderText("Password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
    fireEvent.change(passwordInputs[0], { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
    const registerButtons = screen.getAllByRole('button', { name: 'Register' });
    fireEvent.click(registerButtons[0]);
    await waitFor(() => {
      expect(screen.queryByText("Passwords do not match")).not.toBeInTheDocument();
    });
  });

  test("Test for login with correct credentials in HandleLogin", async () => {
    const mockUserContext = { user: 'testUser' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(
      <Router>
        <UserContext.Provider value={mockUserContext}>
          <LoginPage />
        </UserContext.Provider>
      </Router>
    );
    const emailInputs = screen.queryAllByPlaceholderText("Email");
    const passwordInputs = screen.queryAllByPlaceholderText("Password");
    fireEvent.change(emailInputs[1], { target: { value: "test@example.com" } });
    fireEvent.change(passwordInputs[1], { target: { value: "password" } });
    const loginButtons = screen.getAllByRole('button', { name: 'Login' });
    fireEvent.click(loginButtons[0]);
    await waitFor(() => {
      expect(screen.queryByText("Incorrect email or password")).not.toBeInTheDocument();
    });
  });

  
});
