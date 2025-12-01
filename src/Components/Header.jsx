/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useEffect, useRef, useState } from "react";

const Header = ({ activeSection, setActiveSection, theme, toggleTheme, routes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const navHeight = isMenuOpen && navRef.current ? navRef.current.scrollHeight : 0;

    if (isMenuOpen) {
      root.classList.add("mobile-nav-open");
    } else {
      root.classList.remove("mobile-nav-open");
    }

    root.style.setProperty("--mobile-nav-height", `${navHeight}px`);

    return () => {
      root.classList.remove("mobile-nav-open");
      root.style.setProperty("--mobile-nav-height", "0px");
    };
  }, [isMenuOpen]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-brand">Guanya Peng</div>

      <button
        className={`mobile-menu-button ${isMenuOpen ? "open" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="mobile-menu-line" />
        <span className="mobile-menu-line" />
        <span className="mobile-menu-line" />
      </button>

      <nav ref={navRef} className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {routes.map((section) => {
          const isActive = activeSection === section;
          return (
            <button
              key={section}
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={() => handleSectionChange(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {isActive && <span className="nav-link-indicator" />}
            </button>
          );
        })}
      </nav>

      <div className="theme-controls">
        <div className="language-pill">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          EN
        </div>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme" style={{ color: "var(--icon-theme-toggle)" }}>
          {theme === "light" ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
