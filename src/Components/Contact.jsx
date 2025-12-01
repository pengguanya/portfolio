import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = ({ theme, siteProps }) => {
  const isLight = theme === "light";

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

  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "4.5rem",
      width: "100%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: "600",
      color: "var(--text-title)",
    },
    input: {
      width: "100%",
      padding: "0.6rem",
      borderRadius: "8px",
      border: "1px solid var(--border-color)",
      backgroundColor: "var(--bg-card)",
      color: "var(--text-primary)",
      fontSize: "0.95rem",
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "0.6rem",
      borderRadius: "8px",
      border: "1px solid var(--border-color)",
      backgroundColor: "var(--bg-card)",
      color: "var(--text-primary)",
      fontSize: "0.95rem",
      minHeight: "120px",
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "8px",
    },
    socialSection: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    socialTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      color: "var(--text-title)",
      marginTop: "-0.25rem",
      paddingTop: 0,
    },
    socialCard: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1.5rem",
      borderRadius: "12px",
      border: "1px solid var(--border-color)",
      backgroundColor: "var(--bg-card)",
      textDecoration: "none",
      transition: "transform 0.2s, border-color 0.2s",
      cursor: "pointer",
    },
    icon: {
      fontSize: "1.5rem",
      color: "var(--text-title)",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
    },
    cardTitle: {
      fontWeight: "600",
      color: "var(--text-title)",
      marginBottom: "0.25rem",
    },
    cardHandle: {
      color: "var(--text-primary)",
      fontSize: "0.9rem",
    },
    error: {
      color: "#ef4444",
      fontSize: "0.875rem",
      marginTop: "0.25rem",
    },
  };

  return (
    <section style={styles.section} className="page-section" id="contact">
      <div className="page-header contact-header">
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </div>

      <div style={styles.grid}>
        {/* Contact Form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              style={styles.input}
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>
          <div>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your.email@example.com"
              style={styles.input}
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          <div>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              style={styles.textarea}
              className="contact-input"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span style={styles.error}>{errors.message}</span>}
          </div>
          <button type="submit" style={styles.button} className={`btn btn-primary contact-button ${submitError ? "error" : ""}`}>
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div style={styles.socialSection}>
          <h2 style={styles.socialTitle}>Connect with me</h2>
          
          {siteProps.gitHub && (
            <a href={`https://github.com/${siteProps.gitHub}`} target="_blank" rel="noopener noreferrer" style={styles.socialCard} className="social-card">
              <FaGithub style={styles.icon} />
              <div style={styles.cardContent}>
                <span style={styles.cardTitle}>GitHub</span>
                <span style={styles.cardHandle}>@{siteProps.gitHub}</span>
              </div>
            </a>
          )}

          {siteProps.linkedIn && (
            <a href={`https://linkedin.com/in/${siteProps.linkedIn}`} target="_blank" rel="noopener noreferrer" style={styles.socialCard} className="social-card">
              <FaLinkedin style={styles.icon} />
              <div style={styles.cardContent}>
                <span style={styles.cardTitle}>LinkedIn</span>
                <span style={styles.cardHandle}>{siteProps.name}</span>
              </div>
            </a>
          )}

          {siteProps.twitter && (
            <a href={`https://twitter.com/${siteProps.twitter}`} target="_blank" rel="noopener noreferrer" style={styles.socialCard} className="social-card">
              <FaTwitter style={styles.icon} />
              <div style={styles.cardContent}>
                <span style={styles.cardTitle}>Twitter</span>
                <span style={styles.cardHandle}>@{siteProps.twitter}</span>
              </div>
            </a>
          )}

          {siteProps.email && (
            <a href={`mailto:${siteProps.email}`} style={styles.socialCard} className="social-card">
              <FaEnvelope style={styles.icon} />
              <div style={styles.cardContent}>
                <span style={styles.cardTitle}>Email</span>
                <span style={styles.cardHandle}>{siteProps.email}</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
