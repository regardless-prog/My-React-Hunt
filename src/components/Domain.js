import React from "react";
import Navigation from "./Navigation";
import { useState } from "react";
import axios from "axios";
import "./domain.styles.css";

const Domain = () => {
  const [email, setEmail] = useState();
  const [emails, setEmails] = useState([]);

  const handleClick = () => {
    getDomain();
  };

  const getDomain = async () => {
    try {
      const data = await axios.get(
        `https://api.hunter.io/v2/domain-search?domain=${email}&api_key=ff389661c63ab90742cfe61e1f82343073b8893e`
      );
      if (data) {
        setEmails(data.data.data.emails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navigation />
      <input
        type="text"
        className="domain-input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter a domain name to launch the search. For example, google.com"
      />
      <button onClick={handleClick} className="domain-button">
        find email address
      </button>

      {/* <p>{email}</p> */}

      <div className="domain-info-container">
        {
          // emails &&
          emails.map((email, i) => (
            <div key={i} className="info-Container">
              <div className="info-wrapper">
                <div className="info-title">
                  {email.first_name || " "} {email.last_name || " "}
                </div>
                <div className="info-position">{email.position}</div>
                <div className="info-email">{email.value}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Domain;
