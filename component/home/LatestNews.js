import React from "react";
import Article from "../../assets/Content.png";
import Union from "../../assets/union.png";
import Fund from "../../assets/fund.png";
import Vector from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";

function LatestNews() {
  return (
    <div className="bottom-main-new">
      <div className="bottom-container">
        <div className="news-container">
          <div className="news-heading-main">
            <h3 className="news-heading"> LATEST NEWS</h3>
          </div>
          <img src={Article} className="news-img" alt="Latest News"></img>
          <div className="news-botton">
            <button type="button" class="btn btn-news">
              More News
            </button>
          </div>
        </div>
      </div>
      <div className="trusted-container">
        <div className="trusted-container-main">
          <h3 className="trusted-heading"> TRUSTED BY</h3>
        </div>
        <div className="trusted-container-union">
          <img src={Union} className="trusted-container-unionimg" alt="Union" />
          <img src={Fund} className="trusted-container-fundimg" alt="Fund" />
        </div>
        <div className="vector-container">
          <div className="trusted-container-vector-1">
            <img
              src={Vector}
              className="trusted-container-vector"
              alt="Vector"
            />
          </div>
          <div className="trusted-container-vector-2">
            <img
              src={Vector2}
              className="trusted-container-vector"
              alt="Vector"
            />
          </div>
          <div className="trusted-container-vector-3">
            <img
              src={Vector3}
              className="trusted-container-vector"
              alt="Vector"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
