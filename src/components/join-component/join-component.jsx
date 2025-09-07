import React from "react";
import { Link } from "react-router-dom";

import "./join.style.css";

const JoinHeader = ({ to, children, className }) => (
  <div className={`join-header ${className || ""}`}>
    <Link to={to}>{children}</Link>
  </div>
);

export default JoinHeader;
