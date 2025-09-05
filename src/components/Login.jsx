import react from "react";

import "./Login.style.css";

import linkedInLogo from "../images/login-logo.svg";
import JoinHeader from "./join-component/join-component";
import SignIn from "./sign-in-component/sign-in.component";

const LoginPage = (props) => {
  return (
    <div className="container">
      <nav className="nav-body">
        <a href="/">
          <img src={linkedInLogo} alt="LinkedIn" />
        </a>
        <div className="header-sign">
          <JoinHeader />
          <SignIn />
        </div>
      </nav>
    </div>
  );
};

export default LoginPage;
