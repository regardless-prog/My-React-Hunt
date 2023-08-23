import React, { useState } from 'react';
import axios from 'axios';
import "./emailfinder.styles.css";
import Navigation from './Navigation';

const EmailFinder = () => {
  const [domain, setDomain] = useState('');
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFindEmails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.hunter.io/v2/domain-search?domain=${domain}&api_key=677670009087857e9511ce73d029d1129af6b8a3`);
      const data = response.data;

      if (data.data.emails) {
        setEmails(data.data.emails);
      } else {
        setEmails([]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error finding emails:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navigation/>
      <input
        type="text"
        className="email-style"
        placeholder="Enter domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button onClick={handleFindEmails} disabled={loading} className="email-button">
        {loading ? 'Searching...' : 'Find Emails'}
      </button>
      <div className="email-list">
        <h2>Emails Found:</h2>
        <form id="findform">
        <ul>
          {emails.map((email, i) => (
            <li key={i}>{email.value}</li>
          ))}
        </ul>
        </form>
      </div>
    </div>
  );
};

export default EmailFinder;
