import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.styles.css";
import { useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleDomain = () => {
    navigate("/domain");
  };
  const handleEmailFinder = () => [navigate("/email")];

  const handleAuthor = () => {
    navigate("/author");
  };

  const handleVerifier = () => {
    navigate("/verifier");
  };


 

  return (
    <div>
      <div className="navbar">
        <div id="menu" onClick={() => setShow(true)}></div>
        <div className="banner">
          <h2>verification</h2>
        </div>
      </div>

       {show &&<  div id="phone-menu-wrapper">
            <div id="close" onClick={() => {
                setShow(false)
            }}></div>
        <Link to="/domain">
          domain
        </Link>

        <Link to="/email">
          email finder
        </Link>

        <Link to="">
          author finder
        </Link>

        <Link to="">
          email verifier
        </Link>
        <Link to="/">logout</Link>
        </div>}


        <div id="buttons-wrapper">
          <button onClick={handleDomain} className="domain-button">
            domain
          </button>

          <button onClick={handleEmailFinder} className="email-finder-button">
            email finder
          </button>

          <button onClick={handleAuthor} className="author-finder-button">
            author finder
          </button>

          <button onClick={handleVerifier} className="email-verifier-button">
            email verifier
          </button>
        </div>

        <button className="logout">
            logout
        </button>
      
    </div>
  );
};

export default Navigation;
