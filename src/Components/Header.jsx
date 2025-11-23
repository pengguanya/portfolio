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
    fontWeight: "600",
    color: theme === "light" ? "#1a1a1a" : "#f0f0f0",
    textDecoration: "none",
    fontSize: "1.1rem",
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 3rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
        background: theme === "light" ? "rgba(255,255,255,0.9)" : "rgba(26,26,26,0.9)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ fontWeight: "800", fontSize: "1.2rem", color: theme === "light" ? "#1a1a1a" : "#f0f0f0" }}>
        Guanya Peng
      </div>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a onClick={() => setActiveSection("home")} style={{...linkStyle, opacity: activeSection === "home" ? 1 : 0.7}}>Home</a>
        <a onClick={() => setActiveSection("about")} style={{...linkStyle, opacity: activeSection === "about" ? 1 : 0.7}}>About</a>
        <a onClick={() => setActiveSection("portfolio")} style={{...linkStyle, opacity: activeSection === "portfolio" ? 1 : 0.7}}>Portfolio</a>
        
        <button onClick={toggleTheme} className="theme-toggle" style={{ color: theme === "light" ? "#1a1a1a" : "#f0f0f0" }}>
          {theme === "light" ? (
            <svg viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24"><path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" /></svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
