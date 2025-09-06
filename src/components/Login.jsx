import "./Login.style.css";

import linkedInLogo from "../images/login-logo.svg";
import JoinHeader from "./join-component/join-component";
import SignIn from "./sign-in-component/sign-in.component";
import SectionComponent from "./section-component/section.component";

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
      <SectionComponent />
    </div>
  );
};

export default LoginPage;
