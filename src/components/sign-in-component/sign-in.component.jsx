import React from "react";
import { Link } from "react-router-dom";

import "./sign-in.style.css";

const SignIn = (props) => (
  <div className="sign-in">
    <Link className="sign-link" to="/">
      {props.children}
    </Link>
  </div>
);

export default SignIn;
