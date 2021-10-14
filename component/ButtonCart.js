import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.png";

function ButtonCart() {
  return (
    <div>
      <Link to="sign-up">
        <button className="btn-cart">
          <img src={Cart} alt="Cart"></img>
        </button>
      </Link>
    </div>
  );
}

export default ButtonCart;
