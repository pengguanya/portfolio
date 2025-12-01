import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = ({ siteProps }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, message } = formData;

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!message || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 500);
      return;
    }

    const { name, email, message } = formData;
    
    if (!siteProps.email) {
      alert("Configuration error: No email address set.");
      return;
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteProps.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Contact from ${name}`
        })
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 500);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 500);
    }
  };

  return (
    <section className="contact-section page-section" id="contact">
      <div className="page-header contact-header">
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-name">Name</label>
            <input
              type="text"
              name="name"
              id="contact-name"
              autoComplete="name"
              placeholder="Your name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="contact-error">{errors.name}</span>}
          </div>
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-email">Email</label>
            <input
              type="email"
              name="email"
              id="contact-email"
              autoComplete="email"
              placeholder="your.email@example.com"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="contact-error">{errors.email}</span>}
          </div>
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">Message</label>
            <textarea
              name="message"
              id="contact-message"
              placeholder="Your message..."
              className="contact-input contact-textarea"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="contact-error">{errors.message}</span>}
          </div>
          <button type="submit" className={`btn btn-primary contact-button contact-submit ${submitError ? "error" : ""}`}>
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="contact-social">
          <h2 className="contact-social__title">Connect with me</h2>
          
          {siteProps.gitHub && (
            <a href={`https://github.com/${siteProps.gitHub}`} target="_blank" rel="noopener noreferrer" className="social-card contact-social__card">
              <FaGithub className="contact-social__icon" />
              <div className="contact-social__content">
                <span className="contact-social__name">GitHub</span>
                <span className="contact-social__handle">@{siteProps.gitHub}</span>
              </div>
            </a>
          )}

          {siteProps.linkedIn && (
            <a href={`https://linkedin.com/in/${siteProps.linkedIn}`} target="_blank" rel="noopener noreferrer" className="social-card contact-social__card">
              <FaLinkedin className="contact-social__icon" />
              <div className="contact-social__content">
                <span className="contact-social__name">LinkedIn</span>
                <span className="contact-social__handle">{siteProps.name}</span>
              </div>
            </a>
          )}

          {siteProps.twitter && (
            <a href={`https://twitter.com/${siteProps.twitter}`} target="_blank" rel="noopener noreferrer" className="social-card contact-social__card">
              <FaTwitter className="contact-social__icon" />
              <div className="contact-social__content">
                <span className="contact-social__name">Twitter</span>
                <span className="contact-social__handle">@{siteProps.twitter}</span>
              </div>
            </a>
          )}

          {siteProps.email && (
            <a href={`mailto:${siteProps.email}`} className="social-card contact-social__card">
              <FaEnvelope className="contact-social__icon" />
              <div className="contact-social__content">
                <span className="contact-social__name">Email</span>
                <span className="contact-social__handle">{siteProps.email}</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
