"use client";

import React, { useState } from "react";

import "@/components/contactSection/contactForm/contactForm.css";

const ContactForm: React.FC = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form data change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Basic form validation
  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    // if (!formData.name) errors.name = "Name is required";
    // if (!formData.email) errors.email = "Email is required";
    // if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    // If there are no errors, proceed with form submission (mock submission here)
    if (!errors.name && !errors.email && !errors.message) {
      setIsSubmitted(true);
      console.log("Form Submitted:", formData);
      // Add actual form submission logic (API call or email handling here)
    }
  };

  return (
    <section className="contact-form-section">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <div className="thank-you-message">Thank you for your message!</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Connect With Me</h1>
          <p>
            Feel free to reach out if you&apos;d like to learn more about me and
            my work or just want to say hi. I&apos;d love to connect and hear
            from you!
          </p>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? "error" : ""}
              placeholder="Enter your Name"
            />
            {formErrors.name && (
              <span className="error-text">{formErrors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? "error" : ""}
              placeholder="Enter Your Email Address"
            />
            {formErrors.email && (
              <span className="error-text">{formErrors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={formErrors.message ? "error" : ""}
              placeholder="Enter Your Message"
              rows={3}
            />
            {formErrors.message && (
              <span className="error-text">{formErrors.message}</span>
            )}
          </div>

          <div className="btn-holder">
            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
