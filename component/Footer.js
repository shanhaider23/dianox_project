import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer-container">
      <div className="footer-link-container">
        <div className="footer-container-left">
          <div className="list-footer">
            <NavLink exact to="/" className="footer-shop">
              HOME
            </NavLink>
            <NavLink exact to="/shop" className="footer-shop">
              SHOP
            </NavLink>
            <NavLink exact to="/diseasewiki" className="footer-shop">
              DISEASEWIKI
            </NavLink>
          </div>
        </div>
        <div className="footer-container-middle">
          <div className="list-middle-footer">
            <NavLink exact to="/technology" className="footer-shop">
              OUR TECHNOLOGY
            </NavLink>
            <NavLink exact to="/team" className="footer-shop">
              OUR TEAM
            </NavLink>
            <NavLink exact to="/news" className="footer-shop">
              NEWS
            </NavLink>
            <NavLink exact to="/contact" className="footer-shop">
              CONTACT
            </NavLink>
          </div>
        </div>
        <div className="footer-container-right">
          <div className="footer-right-heading">
            <h6> Get the lastest information on our products</h6>
          </div>
          <div className="footer-right-form">
            <div class="container-fluid">
              <input
                class="form-control-me-2"
                type="search"
                placeholder="Email Address"
                aria-label="Search"
              ></input>
            </div>
            <div>
              <button type="button" class="btn btn-signup">
                Sign up
              </button>
            </div>
          </div>
          <div className="icon-news">
            <a href="https://www.facebook.com/dianox" className="icon-facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/dianoxbio" className="icon-facebook">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/dianox/mycompany/"
              className="icon-facebook"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="lower-footer-up">
          <p>© 2021 Dianox </p>
          <div className="nav-list-footer">
            <li>
              {" "}
              <NavLink exact to="/termsofuse" className="nav-links-news">
                Term of use
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink exact to="/privacypolicy" className="nav-links-news">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/shop" className="nav-links-news">
                Cookie Policy
              </NavLink>
            </li>
          </div>
        </div>
        <div className="lower-footer-down">
          <p> Dianox ApS, Fruebjergvej 3, 2100 Copenhagen, Denmark</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
