import React, { useState } from "react";
import Signin from "./SignIn/signin";

import SignUp from "./SignUp";

const Login = ({ handleClose, setUser }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin setSignIn={setSignIn} handleClose={handleClose} />
      ) : (
        <SignUp setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
