import React from "react";
import "../../styles/team.css";
import Flower from "../../assets/flower.png";
import Circle from "../../assets/circle.png";
import World from "../../assets/world.png";
import Man from "../../assets/man.png";

function Ensure() {
  return (
    <div className="team-section">
      <div className="header-section">
        <div className="header-section-left">
          <h3 className="header-section-heading">
            Ensure<br></br> healthy lives and promote well-being<br></br> at all
            ages
          </h3>
        </div>
        <div className="header-section-right">
          <div className="header-section-text-up">
            Everyone in the Dianox team joined to make an impact on global
            health. Due to the increasing uncertainty in the world, we will face
            even more complex challenges in diagnostics in the future. In order
            to address these challenges, we rely on creativity and humble
            curiosity to link scientific developments with real-world
            applications. We are driven by our purpose of providing access to
            diagnostic testing to those left in the dark.
          </div>
          <div className="header-section-text-down">
            We use ethically sourced materials, meaning there is no animal
            testing in our laboratories. Unlike the majority of conventional
            diagnostic companies that rely on materials grown on horses,
            rabbits, and other cute animals. Transitioning away from animal
            testing is central to achieving a more humane society, and it allows
            us to address sustainability in diagnostics.
          </div>
        </div>
      </div>
      <div className="value-section">
        <div className="value-section-up">
          <div className="team-section1">
            <div className="team-section4-11">
              <img
                src={Man}
                className="team-section4-1"
                alt="Flower-icon"
              ></img>
              <p className="team-section41">People</p>
            </div>
          </div>
          <div className="team-section2">
            <div className="team-section4-11">
              <img
                src={World}
                className="team-section4-1"
                alt="Flower-icon"
              ></img>
              <p className="team-section42">Impact</p>
            </div>
          </div>
        </div>
        <div className="value-section-down">
          <div className="team-section3">
            <div className="team-section4-11">
              <img
                src={Circle}
                className="team-section4-1"
                alt="Flower-icon"
              ></img>
              <p className="team-section43">Purpose</p>
            </div>
          </div>
          <div className="team-section4">
            <div className="team-section4-11">
              <img
                src={Flower}
                className="team-section4-1"
                alt="Flower-icon"
              ></img>
              <p className="team-section44">Sustainability</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourteam-section">
        <div className="member-section">
          <div className="image-section">
            <div className="image-section-1"></div>
            <div className="image-section-2"></div>
            <div className="image-section-3"></div>
          </div>
          <div className="linkedin-section"></div>
        </div>
        <div className="service-section">
          <div className="service-section-left"></div>
          <div className="service-section-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Ensure;
