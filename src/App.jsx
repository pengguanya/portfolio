/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Guanya Peng",
  title: "A passionate developer crafting data-driven solutions to solve real-world challenges.",
  email: "guanya.peng24@gmail.com",
  gitHub: "pengguanya",
  instagram: "",
  linkedIn: "guanyapeng",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Home name={siteProps.name} title={siteProps.title} setActiveSection={setActiveSection} theme={theme} />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <Home name={siteProps.name} title={siteProps.title} setActiveSection={setActiveSection} theme={theme} />;
    }
  };

  return (
    <div id="main">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
      {renderContent()}
      <div className="social-icons-container">
        {siteProps.gitHub && (
          <a href={`https://github.com/${siteProps.gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="social-icon" />
          </a>
        )}
        {siteProps.linkedIn && (
          <a href={`https://www.linkedin.com/in/${siteProps.linkedIn}`} target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </a>
        )}
        {siteProps.twitter && (
          <a href={`https://twitter.com/${siteProps.twitter}`} target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="Twitter" className="social-icon" />
          </a>
        )}
        {siteProps.email && (
          <a href={`mailto:${siteProps.email}`}>
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" className="social-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default App;
