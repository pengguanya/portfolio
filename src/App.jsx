/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { defaultSectionId, enabledSectionIds, getSectionById } from "./config/sections";

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
  const [activeSection, setActiveSectionState] = React.useState(defaultSectionId);
  const [theme, setTheme] = React.useState("light");

  const setActiveSection = React.useCallback(
    (sectionId) => {
      const selected = getSectionById(sectionId);
      const fallbackId = enabledSectionIds[0] || defaultSectionId;
      setActiveSectionState(selected?.enabled ? sectionId : fallbackId);
    },
    []
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const renderContent = () => {
    const section = getSectionById(activeSection);
    const fallbackSection = enabledSectionIds.length ? getSectionById(enabledSectionIds[0]) : getSectionById(defaultSectionId);
    const targetSection = section?.enabled ? section : fallbackSection;

    if (!targetSection?.enabled || typeof targetSection.render !== "function") {
      return null;
    }

    return targetSection.render({
      siteProps,
      setActiveSection,
      theme,
    });
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
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
        routes={enabledSectionIds}
      />
      <div key={activeSection} className="animate-in">
        {renderContent()}
      </div>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} theme={theme} />
    </div>
  );
};

export default App;
