import React from "react";
import ContactForm from "../component/contact/ContactForm";
import FAQ from "../component/contact/FAQ";
import Map from "../component/contact/Map";
function Contact() {
  return (
    <div>
      <FAQ />
      <ContactForm />
      <Map />
    </div>
  );
}

export default Contact;
