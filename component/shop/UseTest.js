import React from "react";
import Trolly from "../../assets/trolly.png";
import Saliva from "../../assets/saliva.png";
import Bar from "../../assets/bar.png";
import Arrow from "../../assets/arr.png";

function UseTest() {
  return (
    <div className="shop-use-test">
      <div className="shop-test-main">
        <p className="shop-test-heading">How to use our test ?</p>
      </div>
      <div className="shop-usetest-container">
        <div className="shop-test-1">
          <div className="shop-test-1-box">
            <img src={Trolly} className="shop-test-1-icon" alt="Test kit"></img>
          </div>
          <div className="shop-test-1-container">
            <p className="shop-test-1-heading">Order test online</p>
            <p className="shop-test-1-text">
              Receive your test kit within days.
            </p>
          </div>
        </div>
        <div className="shop-test-2">
          <div className="shop-test-2-box">
            <img src={Saliva} className="shop-test-2-icon" alt="Test kit"></img>
          </div>
          <div className="shop-test-2-container">
            <p className="shop-test-2-heading">Provide a saliva sample</p>
            <p className="shop-test-2-text">Follow instructions in the kit. </p>
          </div>
        </div>
        <div className="shop-test-3">
          <div className="shop-test-3-box">
            <img src={Arrow} className="shop-test-1-icon" alt="Test kit"></img>
          </div>
          <div className="shop-test-3-container">
            <p className="shop-test-3-heading">Return the package</p>
            <p className="shop-test-3-text">
              Drop the kit in the nearest mailbox.
            </p>
          </div>
        </div>
        <div className="shop-test-4">
          <div className="shop-test-4-box">
            <img src={Bar} className="shop-test-4-icon" alt="Test kit"></img>
          </div>
          <div className="shop-test-4-container">
            <p className="shop-test-4-heading">Check your results online</p>
            <p className="shop-test-4-text">Results are ready in 2-4 weeks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseTest;
