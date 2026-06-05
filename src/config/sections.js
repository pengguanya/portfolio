import React from "react";

import About from "../Components/About";
import Articles from "../Components/Articles";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Home from "../Components/Home";
import Portfolio from "../Components/Portfolio";

/**
 * Section definitions drive navigation + rendering.
 * Flip `enabled` to false (e.g., for "experience") to hide the page everywhere.
 */
export const sections = [
  {
    id: "home",
    label: "Home",
    enabled: true,
    render: ({ siteProps, setActiveSection, theme }) => (
      <Home name={siteProps.name} title={siteProps.title} setActiveSection={setActiveSection} theme={theme} />
    ),
  },
  {
    id: "about",
    label: "About",
    enabled: true,
    render: () => <About />,
  },
  {
    id: "experience",
    label: "Experience",
    enabled: false,
    render: ({ theme }) => <Experience theme={theme} />,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    enabled: true,
    render: () => <Portfolio />,
  },
  {
    id: "articles",
    label: "Articles",
    enabled: true,
    render: ({ theme }) => <Articles theme={theme} />,
  },
  {
    id: "contact",
    label: "Contact",
    enabled: true,
    render: ({ siteProps, theme }) => <Contact theme={theme} siteProps={siteProps} />,
  },
];

const sectionMap = sections.reduce((acc, section) => {
  acc[section.id] = section;
  return acc;
}, {});

export const enabledSections = sections.filter((section) => section.enabled);

export const enabledSectionIds = enabledSections.map((section) => section.id);

const FALLBACK_SECTION = sections[0]?.id || "home";

export const defaultSectionId = enabledSectionIds[0] || FALLBACK_SECTION;

export const getSectionById = (sectionId) => sectionMap[sectionId];

export default sections;

