import React from "react";
import { Link } from "react-router-dom";

import "./join.style.css";

const JoinHeader = () => (
  <div className="join-header">
    <Link className="join-link" to="/">
      Join now
    </Link>
  </div>
);

export default JoinHeader;
