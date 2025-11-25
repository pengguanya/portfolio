/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const linkStyle = {
    cursor: "pointer",
    fontWeight: "500",
    color: theme === "light" ? "#6b7280" : "#9ca3af",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const activeStyle = {
    color: theme === "light" ? "#1f2937" : "#fff",
    fontWeight: "600"
  };

  const activeLineStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: theme === "light" ? "#1f2937" : "#fff",
    borderRadius: "2px"
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "0 4rem",
        height: "4rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
        background: theme === "light" ? "rgba(255,255,255,0.8)" : "rgba(5,5,5,0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: theme === "light" ? "1px solid #e5e7eb" : "1px solid #333"
      }}
    >
      <div style={{ fontWeight: "700", fontSize: "1.1rem", color: theme === "light" ? "#1f2937" : "#f0f0f0", justifySelf: "start" }}>
        Guanya Peng
      </div>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifySelf: "center", height: "100%" }}>
        {["home", "about", "experience", "portfolio", "articles", "contact"].map((section) => (
          <a 
            key={section}
            onClick={() => setActiveSection(section)} 
            style={{
              ...linkStyle, 
              ...(activeSection === section ? activeStyle : {})
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && <div style={activeLineStyle} />}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifySelf: "end" }}>
        <div style={{ width: "1px", height: "20px", background: theme === "light" ? "#ddd" : "#444", margin: "0 0.5rem" }}></div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.9rem", fontWeight: "600", color: theme === "light" ? "#1f2937" : "#f0f0f0" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          EN
        </div>

        <button onClick={toggleTheme} className="theme-toggle" style={{ color: theme === "light" ? "#1f2937" : "#f0f0f0", padding: 0 }}>
          {theme === "light" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
