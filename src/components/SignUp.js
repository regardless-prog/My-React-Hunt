import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import styled from "styled-components";


const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  const sizes = {
    mobileS: "280px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px",
  };

  const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };


  const Form = styled.form`
   @media ${device.mobileS}{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
      max-width: 80%; 
      height: 10vh;
      gap: 6px;
   }
  `;

  return (
    <>
      <div className="banner">
        <h2> Register </h2>
      </div>

      <div className="signup-image"></div>
      <div className="signup-form">
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} className="signup-input"/>
          <input placeholder="Name" type="name" ref={nameRef} className="signup-input"/>
          <input placeholder="Password" type="password" ref={psdRef} className="signup-input"/>
          <button type="submit" className="signup-button">Register</button>
        </form>
      </div>
    </>

  );
};
export default Signup;
