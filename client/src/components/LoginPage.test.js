import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
    test('should render form-container sign-up', () => {
       
        render(<LoginPage />);
      
        
        const signUpFormContainer = screen.getByText('Registration');
      
        
        expect(signUpFormContainer).toBeInTheDocument();
      });
    
      test('should render form-container sign-in', () => {
       
        render(<LoginPage />);
      
       
        const loginHeading = screen.getByText('Login', { selector: 'h1' });

        
        expect(loginHeading).toBeInTheDocument();
      });
   

      
    test('renders registration form with all required elements', () => {
    render(<LoginPage />);
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
    render(<LoginPage />);
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
    const registerButtons = screen.getAllByRole('button', { name: 'Login' });
    
    
    registerButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test("Test for rendering CaptchaImage", () => {
    const { getByAltText } = render(<LoginPage />);
    expect(getByAltText("Captcha")).toBeInTheDocument();
  });


   test('example test', () => {
        render(<LoginPage />);
      
       
        const passwordInputs = screen.queryAllByPlaceholderText('Password');
      
       
        expect(passwordInputs.length).toBe(2);
      
        expect(passwordInputs[0].closest('.form-container')).toHaveClass('sign-up'); 
       expect(passwordInputs[1].closest('.form-container')).toHaveClass('sign-in');
      });


      test('register buttons belong to correct forms', () => {
        render(<LoginPage />);
        
    
        const registerButtons = screen.getAllByRole('button', { name: 'Register' });
      
        
        expect(registerButtons.length).toBe(2);
      
        
        expect(registerButtons[0].closest('.form-container')).toHaveClass('sign-up');
      
        
        expect(registerButtons[1].closest('.toggle-panel')).toHaveClass('toggle-right');
      });


  test("Test for password match validation in HandleRegister", () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const passwordInputs = screen.queryAllByPlaceholderText("Password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
    fireEvent.change(passwordInputs[0], { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "different" } });
    const registerButtons = screen.getAllByRole('button', { name: 'Register' });
    fireEvent.click(registerButtons[0]);
     waitFor(() => {
        expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
      });
  });

  test("Test for successful registration in HandleRegister", () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const passwordInputs = screen.queryAllByPlaceholderText("Password")
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
    fireEvent.change(passwordInputs[0], { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
    const registerButtons = screen.getAllByRole('button', { name: 'Register' });
    fireEvent.click(registerButtons[0]);
    waitFor(() => {
        expect(screen.getByText("Passwords do not match")).not.toBeInTheDocument();
      });
  });

  test("Test for login with correct credentials in HandleLogin", async () => {
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInputs = screen.queryAllByPlaceholderText("Email");
    const passwordInputs = screen.queryAllByPlaceholderText("Password")
    fireEvent.change(emailInputs[1], { target: { value: "test@example.com" } });
    fireEvent.change(passwordInputs[1], { target: { value: "password" } });
    const loginButtons = screen.getAllByRole('button', { name: 'Login' });
    fireEvent.click(loginButtons[0]);
    waitFor(() => {
        expect(screen.getByText("Incorrect email or password")).not.toBeInTheDocument();
      });
  });

  test("Test for login with incorrect credentials in HandleLogin", async () => {
   
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const emailInputs = screen.queryAllByPlaceholderText("Email");
    const passwordInputs = screen.queryAllByPlaceholderText("Password")
    fireEvent.change(emailInputs[1], { target: { value: "test@example.c" } });
    fireEvent.change(passwordInputs[1], { target: { value: "password" } });
    const loginButtons = screen.getAllByRole('button', { name: 'Login' });
    fireEvent.click(loginButtons[0]);
    waitFor(() => {
        expect(screen.getByText("Incorrect email or password")).toBeInTheDocument();
      });
  });


});
