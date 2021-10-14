import React from "react";
import "../../styles/ourteam.css";
import CEO from "../../assets/ceo.png";
import CTO from "../../assets/cto.png";
import Manager from "../../assets/manager.png";
import Quote from "../../assets/quotes.png";
import ServiceL from "../../assets/service1.png";
import ServiceR from "../../assets/service2.png";

function OurTeam() {
  return (
    <div className="ourteam-container">
      <div className="ourteam-section">
        <div className="ourteam-main">
          <div className="member-1-section">
            <div className="member-1-section-heading">
              <p className="member-1-section-text">
                We want you in the driver’s seat of your own health journey.
                Nobody cares about your health like you.
              </p>
              <p className="member-1-section-text2">
                HURAM KONJEN, Chief Executive Officer
              </p>
            </div>

            <img src={CEO} className="member-section-image1" alt="Design"></img>
            <img
              src={Quote}
              className="member-section-image"
              alt="Design"
            ></img>
          </div>
          <div className="member-2-section">
            <img
              src={Quote}
              className="member-section-image2-1"
              alt="Design"
            ></img>
            <div className="member-2-section-heading">
              <p className="member-2-section-text">
                Our test lets you access to your own health data. There is no
                other product like this on the market.{" "}
              </p>
              <p className="member-2-section-text2">
                CHRISTIAN CODE, Chief Technology Officer
              </p>
            </div>
            <img src={CTO} className="member-section-image2" alt="Design"></img>
          </div>
          <div className="member-3-section">
            <div className="member-3-section-heading">
              <p className="member-3-section-text">
                We are much more than a diagnostics company. Our purpose is
                helping people improve their lives.
              </p>
              <p className="member-3-section-text2">
                ILINA IVANOVA, Community Manager
              </p>
            </div>
            <img
              src={Quote}
              className="member-section-image3-1"
              alt="Design"
            ></img>
            <img
              src={Manager}
              className="member-section-image3"
              alt="Design"
            ></img>
          </div>
        </div>
        <div className="ourteam-button">
          <button className="btn btn-section">See our team on Linkedin</button>
        </div>
      </div>
      <div className="service-section">
        <div className="ourteam-section-bottom-right">
          <img
            src={ServiceR}
            className="ourteam-section-bottom-imagel"
            alt="Design"
          ></img>
          <div className="ourteam-section-11">
            <p className="service-main-heading-1">Community Building.</p>
            <p className="service-main-heading-2">
              Dianox shares educational information about health and disease
              prevention through social media channels.
            </p>
          </div>
        </div>
        <div className="ourteam-section-bottom-left">
          <img
            src={ServiceL}
            className="ourteam-section-bottom-imagel"
            alt="Design"
          ></img>
          <div className="ourteam-section-22">
            <p className="service-main-heading-1">Research & Development.</p>
            <p className="service-main-heading-2">
              We work with talented scientists from all over the world and
              capture insights from breakthrough biotechnologies to develop
              diagnostics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
