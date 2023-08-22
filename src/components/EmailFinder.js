import React from 'react';
import Navigation from './Navigation';
import { useState } from 'react';
import axios from 'axios';
import "./emailfinder.styles.css";

const EmailFinder = () => {

  const [firstname, setFirstname] =useState();
  const [lastname, setLastname] = useState();
  const [domain, setDomain] = useState();
  const [data, setData] = useState();

  const handleFind = () => {
    emailFinder()
  }

  const emailFinder = async () => {
    try{
      const data = await axios.get(`https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${firstname}&last_name=${lastname}&api_key=677670009087857e9511ce73d029d1129af6b8a3`)

      if (data) {
        setData(data.data.data);
        console.log(data.data.data.company);
      }
    } catch (err){
      console.log(err);
    }
  }

  return (
    <div>

<Navigation />
      <div className="mail">
        <form id="findForm">
          <input type="text" className="email-style" placeholder='first name' onChange={e => setFirstname(e.target.value)} />
          <input type="text" className="email-style" placeholder='last name' onChange={e => setLastname(e.target.value)} />
          <input type="text" className="email-style" placeholder='domain' onChange={e => setDomain(e.target.value)} />
          <button onClick={handleFind} className="email-button">
            find
          </button>
        </form>
      </div>
      {/* <div className="email-container">
           {
             email.map((email) => (

             ))
           }
         </div> */}
    </div>
  )
}

export default EmailFinder