import React from "react";
import SpotL from "../../assets/spot-l.png";
import SpotR from "../../assets/spot-r.png";
import DotW from "../../assets/dot-white.png";
import DotB from "../../assets/dot-blue.png";
import "../../styles/contact.css";

function FAQ() {
  return (
    <div className="faq-big">
      <div className="faq-section">
        <div className="faq-heading">
          <p className="faq-heading-text"> Frequently asked questions.</p>
        </div>
        <div className="faq-question">
          <div className="faq-question-1">
            <div className="faq-section-1-1">
              <div className="faq-subheading-1-1">
                <div className="faq-subheading-medium-1">
                  <p className="faq-subtext-1-1">How does it work ?</p>
                </div>
                <img src={DotB} className="dot-icon-b" alt="Dot Icon"></img>
                <div className="faq-subtext-medium-1">
                  <p className="faq-subtext-1-1-3">
                    Once your order is complete, your test kit will be shipped
                    from our warehouse to you. After you provide a saliva
                    sample, you simply resend the test kit (postage is pre-paid)
                    to our laboratory where we analyze the sample and send your
                    results.{" "}
                  </p>
                </div>
                <img src={DotW} className="dot-icon-w" alt="Dot Icon"></img>
              </div>
            </div>
            <div className="faq-section-1-2">
              <div className="faq-subheading-medium-2">
                <p className="faq-subtext-1-2">
                  How long is the testing process ?
                </p>
              </div>
              <img src={DotB} className="dot-icon-b" alt="Dot Icon"></img>
              <div className="faq-subtext-medium-2">
                <p className="faq-subtext-1-2-3">
                  The entire process from ordering the test to receiving your
                  results takes 2-4 weeks. 1-2 weeks to send the test kit to you
                  and then back to our laboratory. Plus 1-2 weeks to analyze the
                  sample.
                </p>
              </div>
              <img src={DotW} className="dot-icon-w" alt="Dot Icon"></img>
            </div>
          </div>
          <div className="faq-question-2">
            <div className="faq-section-2-1">
              <div className="faq-subheading">
                <div className="faq-subheading-medium-3">
                  <p className="faq-subtext-2-1">
                    How reliable are the results ?
                  </p>
                </div>
                <img src={DotB} className="dot-icon-b" alt="Dot Icon"></img>
                <div className="faq-subtext-medium-3">
                  <p className="faq-subtext-2-1-3">
                    Our platform meets the regulatory criteria for scientific
                    and clinical validation, and we analyze all samples in
                    certified laboratories.
                  </p>
                </div>
                <img src={DotW} className="dot-icon-w-2" alt="Dot Icon"></img>
              </div>
            </div>
            <div className="faq-section-2-2">
              <div className="faq-subheading-medium-4">
                <p className="faq-subtext-2-2">Can I buy a test as a gift ?</p>
              </div>
              <img src={DotB} className="dot-icon-b" alt="Dot Icon"></img>
              <div className="faq-subtext-medium-4">
                <p className="faq-subtext-2-2-3">
                  Dianox tests are great gifts for friends and family members.
                  Our tests are easy to use, and most people can provide enough
                  spit (½ teaspoon) for us to analyze.
                </p>
              </div>
              <img src={DotW} className="dot-icon-w-2" alt="Dot Icon"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-icon-1">
        <img src={SpotL} className="faq-icon" alt="Drop Icon"></img>
      </div>
      <div className="faq-icon-2">
        {" "}
        <img src={SpotR} className="faq-icon" alt="Drop Icon"></img>
      </div>
    </div>
  );
}

export default FAQ;
