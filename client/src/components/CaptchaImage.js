// CaptchaImage.js

import React, { useState, useEffect } from 'react';

const CaptchaImage = () => {
  const [captchaUrl, setCaptchaUrl] = useState('');

  useEffect(() => {
    // Fetch the captcha image from the server
    fetchCaptcha();
  }, []);

  const fetchCaptcha = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/captcha');
      if (response.ok) {
        // If the response is successful, set the captcha URL
        const captchaData = await response.json();
        setCaptchaUrl(captchaData.imageUrl);
      } else {
        console.error('Failed to fetch captcha');
      }
    } catch (error) {
      console.error('Error fetching captcha:', error);
    }
  };

  return (
    <div className="captcha-image">
      <img src={captchaUrl} alt="Captcha" />
    </div>
  );
};

export default CaptchaImage;
