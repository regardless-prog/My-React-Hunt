import React, { useState } from 'react';
import "./emailVerifier.style.css";
import Navigation from './Navigation';
import axios from 'axios'; // Import Axios here

const EmailVerifier = () => {
  const [email, setEmail] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  
  const apiKey = '677670009087857e9511ce73d029d1129af6b8a3'; // Replace with your Hunter API key
  const apiUrl = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`;

  const handleVerifyEmail = async () => {
    try {
      const response = await axios.get(apiUrl);

      if (response.data.data.status === 'valid') {
        setVerificationResult('Valid Email');
      } else if (response.data.data.status === 'invalid') {
        setVerificationResult('Invalid Email');
      } else {
        setVerificationResult('Email verification status is uncertain.');
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      setVerificationResult('Error');
    }
  };
  return (
    <div className="emailVerify">
      <Navigation/>
      <input
        type="email"
        className="verifier-input"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleVerifyEmail} className="verifier-input">Verify</button>
      {verificationResult && <p>Verification result: {verificationResult}</p>}
    </div>
  );
};

export default EmailVerifier;


