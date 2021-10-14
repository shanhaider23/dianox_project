import React from "react";
import Laptop from "../../assets/laptop.png";
import Virus from "../../assets/viruss.png";
import "../../styles/shop.css";

function Privacy() {
  return (
    <div>
      <div className="privacy-contanier-main">
        <div className="privacy-text-section">
          <p className="privacy-text-heading">
            Your privacy matters<span className="full-stop">.</span>
          </p>
          <p className="privacy-text-main">
            Protecting your privacy is our first priority and your data is safe
            with us. Health insights will never come at the expense of your
            privacy. We keep your data encrypted and restricted to you. It is
            entirely up to you how much you want to know and if you want to
            share.
          </p>
        </div>
        <div className="privacy-image-section">
          <img src={Laptop} className="virus-image-main" alt="privacy"></img>
        </div>
      </div>
      <div className="virus-text-section">
        <p className="virus-text-heading">
          A new way to test<span className="full-stop">.</span>
        </p>
        <p className="virus-text-main">
          Unlike other commercial tests that rely on blood, our tests use
          saliva. Our test kit is designed for easy use and utillizes passive
          saliva collection to get a sample. Testing saliva provides a painless
          and non-invasive way to access health insights.
        </p>
        <button type="button" class="btn btn-virus">
          Our technology
        </button>
      </div>
      <div className="virus-image-section">
        <img src={Virus} className="virus-image-main" alt="privacy"></img>
      </div>
    </div>
  );
}

export default Privacy;
