import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./ButtonShop";
import ButtonCart from "./ButtonCart";
import ButtonLang from "./ButtonLang";
import "../styles/navbar.css";

function Navibar() {
  return (
    <header className="navbar">
      <div className="navbar-leftside">
        <div className="menu-icon">
          <i className="fas fa-bars" />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/" className="navbar-logo">
              <img src={Logo} alt="Logo"></img>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/shop" className="nav-links">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Diseasewiki" className="nav-links">
              Diseasewiki
            </NavLink>
          </li>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About us
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="/technology">
                  Our Technology
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/team">
                  Our Team
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/news">
                  News
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      <div className="navbar-rightside">
        <NavLink exact to="/shop" className="nav-links">
          Log in
        </NavLink>
        <ButtonCart />
        <Button />
        <ButtonLang />
      </div>
    </header>
  );
}

export default Navibar;
