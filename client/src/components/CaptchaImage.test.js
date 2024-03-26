// CaptchaImage.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CaptchaImage from './CaptchaImage';

describe('CaptchaImage', () => {
  it('renders an image with correct alt text', async () => {
    // Mock the captcha URL
    const captchaUrl = 'https://example.com/captcha-image.png';
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ imageUrl: captchaUrl }),
    });

    // Render the component
    render(<CaptchaImage />);

    // Wait for the image to be loaded
    await waitFor(() => {
      // Find the image element
      const captchaImage = screen.getByAltText('Captcha');
      // Assert that the image source is equal to the captcha URL
      expect(captchaImage).toBeInTheDocument();
      expect(captchaImage).toHaveAttribute('src', captchaUrl);
    });
  });

  it('logs an error if fetching captcha fails', async () => {
    // Mock the failed fetch response
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
    });

    // Mock console.error
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Render the component
    render(<CaptchaImage />);

    // Wait for the error to be logged
    await waitFor(() => {
      // Assert that console.error is called
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});
