import React from "react";
import Navigation from "./Navigation";
import { useState } from 'react';
import axios  from 'axios';
import "./emailVerifier.style.css";

const EmailVerifier = () => {
  const [email, setEmail] = useState(); 
  const [emails, setEmails] = useState([]);

  const handleClick = () => {
     getVerifier()
  }

  const getVerifier = async () => {
      try{
          const data = await axios.get(`https://api.hunter.io/v2/Verifier-search?Verifier=${email}&api_key=ff389661c63ab90742cfe61e1f82343073b8893e`);
          if (data){
              setEmails(data.data.data.emails);
              console.log(data.data.data.emails);

          }
      } catch(error){
          console.log(error)
      }
  }

  return (
    <div className="emailVerify">
      <Navigation />
         <input type="text" className="verifier-input"  placeholder="Enter an email address to verify its validity"/>
      <button onClick={handleClick} className="verifier-button">
        verify
        </button>
    </div>
  );
};

export default EmailVerifier;
