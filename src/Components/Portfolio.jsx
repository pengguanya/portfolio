/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */



/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a modularized component where project data is separated from layout.
 */

import React, { useState } from "react";
import { resolveImage } from "../utils/imageHelper";

import clinicalAgentsImg from "url:../images/projects/clinical-agents.jpg";
import deepClinicalImg from "url:../images/projects/deep-clinical-v2.jpg";
import proteinImg from "url:../images/projects/protein-v2.jpg";
import crmPackImg from "url:../images/projects/crmpack-v2.jpg";
import semanticSearchImg from "url:../images/projects/semantic-search.jpg";
import labAutomationImg from "url:../images/projects/lab-automation.jpg";

/**
 * Project Data
 * Add, remove, or modify projects here.
 */
const projectList = [
  {
    title: "Clinical Agent Teams",
    description: "A specialized multi-agent AI system designed for Clinical Study Design, Clinical Data Management, and Statistical Analysis. It utilizes coordinated teams of AI agents to automate and enhance complex workflows.",
    tags: ["Python", "CrewAI", "LangGraph", "LLM", "Multi-agent Systems"],
    url: null,
    sourceUrl: "https://github.com/pengguanya/clinical-agent-team",
    category: ["AI/ML", "Research"],
    image: clinicalAgentsImg
  },
  {
    title: "DeepClinicalInsights",
    description: "A comprehensive deep learning pipeline designed to improve clinical site performance by integrating and analyzing diverse operational data (CTMS, PDMS, RAVE) to predict site performance.",
    tags: ["Deep Learning", "PyTorch", "Clinical Operations", "Predictive Modeling"],
    url: null,
    sourceUrl: "https://github.com/pengguanya/DeepClinicalInsights",
    category: ["AI/ML", "Data"],
    image: deepClinicalImg
  },
  {
    title: "PD-1/Nivolumab Deep Learning",
    description: "An end-to-end pipeline for pretraining a Transformer-based model on protein sequences with a focus on PD-1 (UniProt ID: Q15116) for biologic drug discovery.",
    tags: ["Transformers", "PyTorch", "Protein Engineering", "Drug Discovery"],
    url: null,
    sourceUrl: "https://github.com/pengguanya/pd1_nivolumab",
    category: ["AI/ML", "Research"],
    image: proteinImg
  },
  {
    title: "crmPack",
    description: "An R package implementing a wide range of model-based dose escalation designs (CRM, dual-endpoint) with a focus on Bayesian inference for clinical trials.",
    tags: ["R", "Bayesian Statistics", "Clinical Trials", "Dose Escalation"],
    url: null,
    sourceUrl: "https://github.com/openpharma/crmPack",
    category: ["Data", "Research", "Open Source"],
    image: crmPackImg
  },
  {
    title: "Semantic Knowledge Retrieval",
    description: "An AI-inspired framework for semantic knowledge retrieval, leveraging advanced NLP techniques to extract and organize information from unstructured text.",
    tags: ["AI", "Semantic Search", "NLP", "Kaggle"],
    url: "https://www.kaggle.com/code/phasersharp/ai-inspired-semantic-knowledge-retrieval-framework",
    sourceUrl: null,
    buttonText: "View Project",
    category: ["AI/ML", "Data"],
    image: semanticSearchImg
  },
  {
    title: "Computer Vision and AI for Local Lab Ranges Automation",
    description: "Developing a semi-automatic solution to centralize lab data using OCR, Generative AI, and Large Language Models (LLMs). This solution digitizes documents, processes data, and maps lab ranges to study ranges, creating a centralized database for over 3300+ labs globally.",
    tags: ["Clinical Data Science", "Research", "Presentation"],
    url: "https://phuse.s3.eu-central-1.amazonaws.com/Archive/2025/CSS/EU/Utrecht/POS_PP12.pdf",
    sourceUrl: null,
    buttonText: "View Poster",
    category: ["AI/ML"],
    image: labAutomationImg
  }
];

const filters = ["All", "AI/ML", "Data", "Research", "Open Source"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projectList 
    : projectList.filter(project => project.category.includes(activeFilter));

  // Helper to generate a placeholder background if no image exists
  const getPlaceholderStyle = (title) => {
    const colors = ["#4E567E", "#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"];
    const index = title.length % colors.length;
    return {
      background: `linear-gradient(135deg, ${colors[index]} 0%, ${colors[(index + 2) % colors.length]} 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold"
    };
  };

  return (
    <section className="portfolio-section page-section" id="portfolio">
      <div className="page-header portfolio-header">
        <h1>Portfolio</h1>
        <p>A selection of my recent projects, showcasing my expertise in AI/ML, data visualization, and research.</p>
      </div>

      <div className="filter-container">
        {filters.map(filter => (
          <button 
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container" style={!project.image ? getPlaceholderStyle(project.title) : {}}>
              {project.image ? (
                <img src={resolveImage(project.image)} alt={project.title} className="project-image" />
              ) : (
                <span>{project.title.charAt(0)}</span>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    {project.buttonText || (project.sourceUrl ? "View Project" : "View Document")}
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


