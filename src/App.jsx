/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Articles from "./Components/Articles";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
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

const routes = ["home", "about", "experience", "portfolio", "articles", "contact"];

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
      case "experience":
        return <Experience theme={theme} />;
      case "articles":
        return <Articles theme={theme} />;
      case "contact":
        return <Contact theme={theme} siteProps={siteProps} />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <Home name={siteProps.name} title={siteProps.title} setActiveSection={setActiveSection} theme={theme} />;
    }
  };

  const getBackground = () => {
    if (activeSection === "home") {
      return theme === 'light' 
        ? "radial-gradient(circle at 35% 30%, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0) 45%), radial-gradient(circle at 65% 30%, rgba(139, 92, 246, 0.15) 0%, rgba(255, 255, 255, 0) 45%), radial-gradient(circle at 50% 70%, rgba(16, 185, 129, 0.2) 0%, rgba(255, 255, 255, 0) 50%), var(--bg-primary)" 
        : "radial-gradient(circle at 50% 40%, rgba(76, 29, 149, 0.35) 0%, rgba(5, 5, 5, 0) 60%), radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.25) 0%, rgba(5, 5, 5, 0) 50%), radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.2) 0%, rgba(5, 5, 5, 0) 50%), var(--bg-primary)";
    }
    return "var(--bg-primary)";
  };

  return (
    <div id="main" style={{ background: getBackground(), minHeight: "100vh", transition: "background 0.3s ease" }}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} routes={routes} />
      <div key={activeSection} className="animate-in">
        {renderContent()}
      </div>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} theme={theme} />
    </div>
  );
};

export default App;
