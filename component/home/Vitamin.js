import React from "react";
import Vita from "../../assets/vitamin.png";
import Inject from "../../assets/injection.png";
import Tab from "../../assets/tablet.png";
import Sci from "../../assets/science.png";
import Back from "../../assets/bacteria.png";

function Vitamin() {
  return (
    <div className="container-water">
      <div className="container-vitamin">
        <div className="container-vitamin-text">
          <div className="container-vitamin-heading">
            <h1 className="vitamin-heading">
              Take control of your health<span className="full-stop">.</span>
            </h1>
          </div>
          <div className="vitamin-heading-box">
            <div className="vitamin-heading-list-1">
              <h6>
                <li className="vitamin-heading-list">Hormone levels</li>
              </h6>
              <p className="vitamin-heading-medium">
                Estrogen, Testosterone and many more
              </p>
            </div>
            <div className="vitamin-heading-list-2">
              <h6>
                <li className="vitamin-heading-list">Vitamin deficiencies </li>
              </h6>
              <p className="vitamin-heading-medium">B, D and other vitamins</p>
            </div>
          </div>
          <button type="button" class="btn btn-vitamin btn-light">
            Learn More
          </button>
        </div>
        <div className="container-vitamin-pic">
          <img src={Vita} alt="Vitamin-Logo"></img>
        </div>
      </div>

      <div className="container-injection">
        <div className="container-injection-text">
          <div className="container-injection-heading">
            <h2 className="injection-heading">
              {" "}
              One saliva sample <br />
              changes everything<span className="full-stop">.</span>
            </h2>
          </div>
          <div className="injection-heading-box">
            <p className="injection-heading-medium">
              There is no need for invasive blood tests to explore your health.
            </p>
            <div className="injection-heading-list-01">
              <li className="injection-heading-list">
                {" "}
                No endless waiting for doctor’s appointments
              </li>

              <li className="injection-heading-list">
                Order online to receive a home test
              </li>
              <li className="injection-heading-list">
                Access your results in the comfort of your home
              </li>
            </div>
          </div>
          <button type="button" class="btn btn-injection">
            Shop test
          </button>
        </div>
        <div className="container-injection-pic">
          <img src={Inject} alt="Injection-Logo"></img>
        </div>
      </div>

      <div className="container-tablet">
        <div className="container-tablet-text">
          <div className="container-tablet-heading">
            <h2 className="tablet-heading">
              {" "}
              Benefits of early screening<span className="full-stop">.</span>
            </h2>
          </div>
          <div className="tablet-heading-medium">
            <p className="tablet-heading-medium-2">
              Lack of access to testing prevents people from leading healthy
              lives.
            </p>

            <p className="tablet-heading-medium-2">
              Getting actionable insights on your health allows you to impact
              your <br /> life for the better. Improved insights. Improved
              health. Improved you.
            </p>
          </div>
          <button type="button" class="btn btn-tablet">
            Get tested
          </button>
        </div>
        <div className="containe-tablet-pic">
          <img src={Tab} alt="Tablet-Logo"></img>
        </div>
      </div>

      <div className="container-science">
        <div className="container-science-text">
          <div className="container-science-heading">
            <h1 className="science-heading">
              {" "}
              Backed by science<span className="full-stop">.</span>
            </h1>
          </div>
          <div className="science-heading-medium">
            <p className="science-heading-medium-1">
              Our diagnostic platform uses cutting-edge biotechnology that meet
              <br />
              rigorous standards for testing accuracy.
            </p>

            <p className="science-heading-medium-1">
              Get to know your personal health intimately and how you can
              <br />
              improve it by using an evidence-driven approach.
            </p>
          </div>
          <button type="button" class="btn btn-science">
            Our technology
          </button>
        </div>
        <div className="science-pic">
          <img src={Sci} alt="Science-Logo"></img>
        </div>
      </div>

      <div className="container-bacteria">
        <div className="container-bacteria-text">
          <div className="container-bacteria-heading">
            <h1 className="bacteria-heading">
              A few drops is all we need<span className="full-stop">.</span>
            </h1>
          </div>
          <div className="bacteria-heading-medium">
            <p className="bacteria-heading-medium-1">
              Our laboratories are certified and provide early insight into
              detection of
              <br /> a broad range of medical conditions. This leads to a faster
              diagnosis to <br />
              support better treatment. Our test results paired with lifestyle
              changes
              <br /> can reduce your risk of developing problems later.
              <br />
              rigorous standards for testing accuracy.
            </p>
          </div>
        </div>
        <div className="bacteria-pic">
          <img src={Back} alt="Bacteria-Logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Vitamin;
