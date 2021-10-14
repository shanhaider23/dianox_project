import React from "react";
import "../../styles/map.css";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";

function Map() {
  return (
    <div className="map-bottom">
      <div className="map-social">
        <div className="map-social-heading">
          <p className="map-social-text">
            Join our community for Health Education{" "}
          </p>
        </div>
        <div className="map-social-icon">
          <div className="map-social-facebook">
            <h1 className="facebook-number">66000</h1>
            <a className="facebook-link" href="http://facebook.com">
              <img
                src={Facebook}
                className="facebook-icon"
                alt="Facebook Icon"
              ></img>
            </a>
          </div>
          <div className="map-social-tweter">
            <h1 className="tweter-number">1000</h1>
            <a className="facebook-link" href="http://twitter.com">
              <img
                src={Twitter}
                className="facebook-icon"
                alt="Facebook Icon"
              ></img>
            </a>
          </div>
          <div className="map-social-linkedin">
            <h1 className="linkedin-number">7000</h1>
            <a className="facebook-link" href="http://linkedin.com">
              <img
                src={Linkedin}
                className="facebook-icon"
                alt="Facebook Icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="map-address">
        <iframe
          title="Map Address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.4689322047593!2d12.546874615762768!3d55.71560238054336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253d2063264f1%3A0xdcfcafcdfc1c94af!2sDianox!5e0!3m2!1sen!2sdk!4v1633635595214!5m2!1sen!2sdk"
          width="1600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
