import React from "react";
import { auth, createUserProfileDocument } from "../../firebase";

import FormInput from "../form-input-component/form-input.component";
import CustomButton from "../custom-button-component/custom-button.component";
import { ReactComponent as Logo } from "../../images/crown.svg";
import "./sign-up.style.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Pleas, confirm password");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUp-container">
        <Logo className="logo" />
        <h2>I do not have an account</h2>
        <h3>Sign up with your email and password</h3>
        <div className="form-body">
          <form className="form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              label="Display Name"
              required
              handleChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              label="Email"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              label="Password"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              label="Confirm Password"
              handleChange={this.handleChange}
              required
            />
            <CustomButton>Sign Up</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
