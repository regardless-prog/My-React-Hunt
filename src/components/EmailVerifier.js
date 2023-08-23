import React, { useState } from 'react';
import "./emailVerifier.style.css";
import Navigation from './Navigation';


const EmailVerifier = () => {
  const [email, setEmail] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerifyEmail = async () => {
    try {
      // Your email verification logic here (e.g., using an API or regex)
      // For demonstration purposes, let's assume a simple format check
      
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (isEmailValid) {
        setVerificationResult('Valid Email');
      } else {
        setVerificationResult('Invalid Email');
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
