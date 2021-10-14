import React from "react";
import Drop from "../../assets/drop.png";
import Virus from "../../assets/virus.png";
import Heart from "../../assets/heart.png";
import Micro from "../../assets/micro.png";
function Water() {
  return (
    <div className="water-main">
      <div className="water-drop">
        <div className="water-drop-icon">
          <img src={Drop} alt="Drop-icon"></img>
        </div>
        <div className="water-drop-heading">
          <h5 className="water-drop-first"> Non-invasive</h5>
        </div>
        <div className="water-drop-heading-lite">
          <h5 className="water-drop-second"> Simple saliva based test</h5>
        </div>
      </div>
      <div className="water-virus">
        <div className="water-virus-icon">
          <img src={Virus} alt="Virus-icon"></img>
        </div>
        <div className="water-virus-heading">
          <h3 className="water-virus-first"> Avoid illness</h3>
        </div>
        <div className="water-virus-heading-lite">
          <h5 className="water-virus-second">
            Test yourself for vital health factors
          </h5>
        </div>
      </div>
      <div className="water-heart">
        <div className="water-heart-icon">
          <img src={Heart} alt="Heart-icon"></img>
        </div>
        <div className="water-heart-heading">
          <h3 className="water-heart-first"> Health</h3>
        </div>
        <div className="water-heart-heading-lite">
          <h5 className="water-heart-second">
            {" "}
            Improve your health with actionable insights
          </h5>
        </div>
      </div>
      <div className="water-micro">
        <div className="water-micro-icon">
          <img src={Micro} alt="Micro-icon"></img>
        </div>
        <div className="water-micro-heading">
          <h3 className="water-micro-first"> Next-gen diagnostics</h3>
        </div>
        <div className="water-micro-heading-lite">
          <h5 className="water-micro-second">
            {" "}
            Take charge of your health journey
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Water;
