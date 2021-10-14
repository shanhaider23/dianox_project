import React from "react";
import "../../styles/wave.css";
import Wave99 from "../../assets/wave99.png";
import Wave100 from "../../assets/wave100.png";
import Wave101 from "../../assets/wave101.png";

function Wave() {
  return (
    <div className="wave-container">
      <img src={Wave99} className="wave-99" alt="Wave"></img>
      <img src={Wave100} className="wave-100" alt="Wave"></img>
      <img src={Wave101} className="wave-101" alt="Wave"></img>
    </div>
  );
}

export default Wave;
