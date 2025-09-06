import React from "react";
import "./section.style.css";

import heroImage from "../../images/login-hero.svg";
// import GoogleImg from "../../images/google.svg";
import FormComponent from "../form-component/form.component";

const SectionComponent = (props) => {
  return (
    <div className="section-container">
      <h1>Welcome to your professional community</h1>
      <img src={heroImage} alt="Hero-Image" className="hero-img" />
      <div className="form-container">
        <FormComponent />
      </div>
    </div>
  );
};

export default SectionComponent;
