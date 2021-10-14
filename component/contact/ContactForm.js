import React from "react";
import "../../styles/contactform.css";
import Email from "../../assets/contact.png";

function ContactForm() {
  return (
    <div className="contact-form-section">
      <div className="contact-form-left">
        <h1 className="contact-form-title"> Contact us</h1>
        <form className="contact-form-main">
          <div className="contact-form-label">
            <label for="exampleFormControlInput1">Email address</label>
          </div>
          <input
            type="email"
            class="form-control email-form"
            id="exampleFormControlInput1"
            placeholder="Email Address"
          ></input>
          <div className="contact-form-topic">
            <label for="exampleFormControlInput1">Topic</label>
          </div>
          <div className="form-control-option">
            <select class="form-control form-control-option1">
              <option>-Select a Topic-</option>
              <option>Default select</option>
              <option>Default select</option>
            </select>
          </div>
          <div className="contact-form-mesage">
            <label for="exampleFormControlInput1">Message</label>
          </div>
          <input
            type="email"
            class="form-control form-control-message"
            id="exampleFormControlInput1"
            placeholder="Type your message here..."
          ></input>
          <button type="button" class="btn btn-form">
            Send
          </button>
        </form>
      </div>
      <div className="contact-form-right">
        {" "}
        <img src={Email} className="email-icon" alt="Email Icon"></img>
      </div>
    </div>
  );
}

export default ContactForm;
