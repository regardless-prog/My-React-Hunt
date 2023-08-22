import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "./login.styles.css";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    navigate("/forgot");
  };
  
  const handleLogin = () => {
    navigate("/domain");
  };

  return (
    <>
      <div className="banner">
        <h2> Login </h2>
      </div>

      <div className="login-image"></div>
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <input
            placeholder="Email"
            type="email"
            ref={emailRef}
            className="login-input"
          />
          <input
            placeholder="Password"
            type="password"
            ref={psdRef}
            className="login-input"
          />
          <button
            type="submit"
            className="login-button" onClick={handleLogin}
          >
            Login
          </button>
          <p onClick={forgotPasswordHandler} className="login-text">
            Forgot Password?
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
