import React from "react";
import ContactForm from "./contactForm/contactForm";
import SocialBtns from "../socialBtns/socialBtns";
import "@/components/contactSection/contactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="section-header">
        <h1>Contact</h1>
      </div>
      <div className="container">
        <ContactForm />
        <div className="contact-info">
          <span className="info-span">
            <h1>Email</h1>
            <h2>architgupta.rke@gmail.com</h2>
          </span>
          <span className="info-span">
            <h1>Address</h1>
            <h2>Sector 21B, Faridabad</h2>
            <h2>India</h2>
          </span>
          <span className="info-span">
            <SocialBtns />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
