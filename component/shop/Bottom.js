import React from "react";

import Vector1 from "../../assets/Vector99.png";
import Vector2 from "../../assets/Vector100.png";
import Vector3 from "../../assets/Vector101.png";

function Bottom() {
  return (
    <div className="section-bottom">
      <div className="section-video">
        <div className="section-bottom-youtube">
          <p className="section-bottom-youtube-heading">How to use our test?</p>
          <p className="section-bottom-youtube-heading-1">
            LEARN WITH OUR INSTRUCTION VIDEO
          </p>
        </div>
        <div className="section-bottom-description">
          <iframe
            title="Instrucktion"
            width="250"
            height="155"
            src="https://www.youtube.com/embed/KDr6n-JXl-s"
          ></iframe>
        </div>
      </div>
      <div className="section-bottom-vector">
        <img src={Vector1} className="bottom-vector-1" alt="Design"></img>
        <img src={Vector2} className="bottom-vector-2" alt="Design"></img>
        <img src={Vector3} className="bottom-vector-3" alt="Design"></img>
      </div>
    </div>
  );
}

export default Bottom;
//<img src={Video} className="bottom-video" alt="Video"></img>
//<button type="button" class="btn btn-watch">   Watch        </button>
