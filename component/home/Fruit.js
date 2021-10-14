import React from "react";
import "../../styles/home.css";

function Fruit() {
  return (
    <div className="main-content">
      <div className="first-main-heading ">
        <h1 className="second-main">Protect your health</h1>
      </div>
      <div className="main-heading-medium">
        <h2 className="second-main-small">
          with actionable insights into your body.
        </h2>
      </div>
      <div className="main-heading-small">
        <h5 className="third-main-small">
          Our home test screens your saliva for a number of hormones and
          vitamins, <br />
          offering the most comprehensive health check on the market.
        </h5>
        <div className="btn-1">
          <button className="btn btn-order"> Order now</button>
        </div>
        <div className="btn-2">
          <button className="btn btn-more"> Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
