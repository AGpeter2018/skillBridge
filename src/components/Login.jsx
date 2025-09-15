import "./Login.style.css";
import { connect } from "react-redux";
import { signInApi } from "../actions";
import { Navigate } from "react-router-dom";

import linkedInLogo from "../images/login-logo.svg";
import JoinHeader from "./join-component/join-component";
import SignIn from "./sign-in-component/sign-in.component";
import SectionComponent from "./section-component/section.component";

const LoginPage = (props) => {
  return (
    <div className="container">
      {props.user && <Navigate to="/home" replace />}
      <nav className="nav-body">
        <a href="/">
          <img src={linkedInLogo} alt="LinkedIn" />
        </a>
        <div className="header-sign">
          <JoinHeader className="join-link" to="/join">
            Join now
          </JoinHeader>
          <SignIn>Sign In</SignIn>
        </div>
      </nav>
      <SectionComponent />
    </div>
  );
};

// const mapStateProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   signIn: () => dispatch(signInApi()),
// });

export default LoginPage;
