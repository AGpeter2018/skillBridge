import React from "react";

import "./custom-button.style.css";

const CustomButton = ({ children, signInWithGoogle, ...otherProps }) => {
  return (
    <button className="submitBtn" {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButton;
