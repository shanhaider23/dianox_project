import React from "react";
import "../styles/shopbutton.css";

import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="sign-up">
      <button className="btnn">Shop</button>
    </Link>
  );
}

export default Button;
