import React from "react";
import "../../styles/diagnostics.css";
import Design1 from "../../assets/Group1.png";
import Design2 from "../../assets/Group2.png";
import Design3 from "../../assets/Group3.png";
import Design4 from "../../assets/Group4.png";
import Tube from "../../assets/tube.png";
import Equli from "../../assets/equli.png";
import Scope from "../../assets/scope.png";
import Bond from "../../assets/bond.png";
import Chart from "../../assets/chart.png";
import Benzene from "../../assets/benzene.png";

function Diagnostics() {
  return (
    <div className="diagnostics-section">
      <div className="diagnostics-main-heading">
        <div className="diagnostics-main-section">
          <p className="diagnostics-main-medium">
            Own your health<br></br> with cutting-edge diagnostics
          </p>
          <img src={Design4} className="diagnostics-icon-1" alt="Design"></img>
          <img src={Design3} className="diagnostics-icon-2" alt="Design"></img>
          <img src={Design2} className="diagnostics-icon-3" alt="Design"></img>
          <img src={Design1} className="diagnostics-icon-4" alt="Design"></img>
        </div>
      </div>
      <div className="diagnostics-main-container">
        <div className="diagnostics-main-1">
          <div className="diagnostics-main-image-1">
            <img src={Tube} className="tube-icon-1" alt="Design"></img>
          </div>
          <div className="diagnostics-main-text-1">
            <p className="diagnostics-main-text-tube">
              One sample. A universe of insights.
            </p>
            <p className="diagnostics-main-text-small-tube">
              What if it was possible to get a full range of tests with a single
              saliva sample? <br></br>Our laboratory can accurately analyze
              saliva for a number of health conditions. One sample is all we
              need to perform the tests.<br></br> Get tested in the comfort of
              your own home.
            </p>
            <button type="button" class="btn btn-tube">
              Order now
            </button>
          </div>
        </div>
        <div className="diagnostics-main-2">
          <div className="diagnostics-main-image-2">
            <img src={Equli} className="equli-icon-2" alt="Design"></img>
          </div>
          <div className="diagnostics-main-text-2">
            <p className="diagnostics-main-text-equli">
              How saliva can unlock your health secrets.
            </p>
            <p className="diagnostics-main-text-small-equli">
              Your body contains biomarkers for a number of health conditions,
              ranging from infectious and chronic diseases to vitamin
              deficiencies and hormone levels. Biomarkers are molecules that
              indicate a normal or abnormal process taking place in your body.
              We test your saliva for such biomarkers using the latest science.
            </p>
          </div>
        </div>
        <div className="diagnostics-main-3">
          <div className="diagnostics-main-image-3">
            <img src={Scope} className="scope-icon-3" alt="Design"></img>
          </div>
          <div className="diagnostics-main-text-3">
            <p className="diagnostics-main-text-scope">Our testing process.</p>
            <p className="diagnostics-main-text-small-scope">
              Saliva testing has been trusted for almost 200 years as bronchitis
              patients were tested as early as 1836. Our home sample collection
              method is clinically validated to meet the standards for accurate
              testing. We use passive drool collection to facilitate a large
              sample, which lets us test for many biomarkers.
            </p>
          </div>
        </div>
        <div className="diagnostics-main-4">
          <div className="diagnostics-main-left">
            <p className="diagnostics-main-left-heading">
              Future is self-diagnosis
            </p>
            <div className="diagnostics-main-left-text">
              <p className="diagnostics-main-left-text-4">
                Our technology frees you from having to go to the doctor for
                time-consuming tests to manage your health.
              </p>
              <p className="diagnostics-main-left-text-1">
                We put the power of accurate diagnosis in your hands. The
                world’s first broad range diagnostic saliva test.
              </p>
              <p className="diagnostics-main-left-text-2">
                As our test is designed for self-use, we send you a saliva
                collection kit for providing your sample. You simply return the
                kit to us with prepaid shipping. This allows you to get tested
                to impact your life for the better.
              </p>
              <p className="diagnostics-main-left-text-3">
                We analyze the DNA in your saliva to look for specific
                biomarkers and create a health report based on our findings.
              </p>
            </div>
          </div>
          <div className="diagnostics-main-right">
            <div className="diagnostics-main-right-1">
              <img
                src={Bond}
                className="diagnostics-main-right-1-image"
                alt="Design"
              ></img>
              <div className="diagnostics-main-right-text-1">
                <p className="diagnostics-main-right-text-1-lg">
                  Screen many biomarkers
                </p>
                <p className="diagnostics-main-right-text-1-sm">
                  A single saliva sample lets us to test pathogens, vitamins and
                  hormones.
                </p>
              </div>
            </div>
            <div className="diagnostics-main-right-2">
              <img
                src={Chart}
                className="diagnostics-main-right-1-image"
                alt="Design"
              ></img>
              <div className="diagnostics-main-right-text-2">
                <p className="diagnostics-main-right-text-2-lg">
                  Intuitive results
                </p>
                <p className="diagnostics-main-right-text-2-sm">
                  User friendly results that allow you to get a clear picture of
                  your health journey.
                </p>
              </div>
            </div>
            <div className="diagnostics-main-right-3">
              <img
                src={Benzene}
                className="diagnostics-main-right-1-image"
                alt="Design"
              ></img>
              <div className="diagnostics-main-right-text-3">
                <p className="diagnostics-main-right-text-3-lg">
                  Gain actionable insights
                </p>
                <p className="diagnostics-main-right-text-3-sm">
                  Understand how each piece of the puzzle fits together to
                  impact your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnostics;
