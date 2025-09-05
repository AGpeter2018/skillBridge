import React from "react";
import { Link } from "react-router-dom";

import "./sign-in.style.css";

const SignIn = () => (
  <div className="sign-in">
    <Link className="sign-link" to="/">
      Sign In
    </Link>
  </div>
);

export default SignIn;
