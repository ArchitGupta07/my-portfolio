import React from "react";
import ContactForm from "./contactForm/contactForm";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <ContactForm />
        <div className="contact-info"></div>
      </div>
    </section>
  );
};

export default ContactSection;
