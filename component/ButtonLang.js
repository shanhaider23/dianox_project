import React from "react";
import { Link } from "react-router-dom";

import Arrow from "../assets/dropdown.png";

function ButtonLang() {
  return (
    <div>
      <Link to="sign-up">
        <button className="btn-lang">
          <div>
            <img src={Arrow} alt="arrow"></img>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default ButtonLang;
