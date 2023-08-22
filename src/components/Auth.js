import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  }
  return (
    <div className="container">
      {!index ? <Login /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "Don't have an account? SignUp here " : "Already have an acount?"}
      </p>
    </div>
  )
}

export default Auth;