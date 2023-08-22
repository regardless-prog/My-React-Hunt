import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { forgotPassword } = useUserContext();
  const navigate = useNavigate();

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email)
        .then(() => {
          emailRef.current.value = "";
        })
        .then(() => navigate("/auth"))
        .catch((err) => {
          return <p>{err.message}</p>;
        });
    }
  };
  return (
    <>
      <div className="banner">
        <h2> Reset Password </h2>
      </div>

      <div className="reset-image">

      </div>

      <div className="reset-form">
        <input placeholder="Email" type="email" ref={emailRef} className="reset-input"/>
        <p className="reset-text">Enter your email address, and we will send you a new password?</p>
        <button type="submit" onClick={forgotPasswordHandler} className="reset-button">
          Reset
        </button>
      </div>
    </>
  );
};

export default ForgotPassword;
