import React from "react";
import { NavLink } from "react-router-dom";

import "./join.style.css";

const JoinHeader = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `${className} ${isActive ? "active" : ""}`}
  >
    {children}
  </NavLink>
);

export default JoinHeader;
