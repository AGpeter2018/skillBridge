import React from "react";
import "./sign.style.css";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { ReactComponent as Logo } from "../../images/crown.svg";

import CustomButton from "../custom-button-component/custom-button.component";
import FormInput from "../form-input-component/form-input.component";

class SignIns extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-container">
        <Logo className="logo" />
        <div className="greetings">
          <h1>Welcome Back</h1>
        </div>
        <h2>I already have account</h2>
        <h3>Sign in with email and password</h3>
        <form className="formInput" onSubmit={this.handleSubmit}>
          <div className="form-input">
            <div>
              <FormInput
                type="email"
                name="email"
                value={email}
                handleChange={this.handleChange}
                label="email"
              />
            </div>
          </div>
          <div className="form-input">
            <div>
              <FormInput
                type="password"
                name="password"
                value={password}
                label="password"
                handleChange={this.handleChange}
              />
            </div>
          </div>
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
        <div className="link">
          Not having an account yet ? <Link to="/join">join here</Link>
        </div>
      </div>
    );
  }
}

export default SignIns;
