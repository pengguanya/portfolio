import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = ({ theme, siteProps }) => {
  const isLight = theme === "light";

  const styles = {
    section: {
      padding: "8rem 2rem",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "960px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "4rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "1rem",
      color: isLight ? "#1f2937" : "#f0f0f0",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: isLight ? "#6b7280" : "#9ca3af",
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
      color: isLight ? "#1f2937" : "#f0f0f0",
    },
    input: {
      width: "100%",
      padding: "0.6rem",
      borderRadius: "8px",
      border: isLight ? "1px solid #e5e7eb" : "1px solid #333",
      backgroundColor: isLight ? "#fff" : "#09090b",
      color: isLight ? "#1f2937" : "#f0f0f0",
      fontSize: "0.95rem",
      outline: "none",
      transition: "border-color 0.2s",
    },
    textarea: {
      width: "100%",
      padding: "0.6rem",
      borderRadius: "8px",
      border: isLight ? "1px solid #e5e7eb" : "1px solid #333",
      backgroundColor: isLight ? "#fff" : "#09090b",
      color: isLight ? "#1f2937" : "#f0f0f0",
      fontSize: "0.95rem",
      minHeight: "120px",
      resize: "vertical",
      outline: "none",
    },
    button: {
      padding: "1rem 2rem",
      backgroundColor: isLight ? "#1a1a1a" : "#f0f0f0",
      color: isLight ? "#fff" : "#1a1a1a",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "opacity 0.2s",
      width: "100%",
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
      color: isLight ? "#1f2937" : "#f0f0f0",
      marginTop: "-0.25rem",
      paddingTop: 0,
    },
    socialCard: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1.5rem",
      borderRadius: "12px",
      border: isLight ? "1px solid #e5e7eb" : "1px solid #333",
      backgroundColor: isLight ? "#fff" : "#09090b",
      textDecoration: "none",
      transition: "transform 0.2s, border-color 0.2s",
      cursor: "pointer",
    },
    icon: {
      fontSize: "1.5rem",
      color: isLight ? "#1f2937" : "#f0f0f0",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
    },
    cardTitle: {
      fontWeight: "600",
      color: isLight ? "#1f2937" : "#f0f0f0",
      marginBottom: "0.25rem",
    },
    cardHandle: {
      color: isLight ? "#6b7280" : "#9ca3af",
      fontSize: "0.9rem",
    },
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.header}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div style={styles.grid}>
        {/* Contact Form */}
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              style={styles.input}
              className="contact-input"
            />
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
            />
          </div>
          <div>
            <label style={styles.label}>Message</label>
            <textarea
              placeholder="Your message..."
              style={styles.textarea}
              className="contact-input"
            />
          </div>
          <button type="submit" style={styles.button}>
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
