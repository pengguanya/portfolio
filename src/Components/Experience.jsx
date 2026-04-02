/**
 * Experience component
 *
 * Displays professional experience in a vertical timeline format.
 */

import React from "react";

import rocheLogo from "url:../images/companies/roche.svg";
import biotronikLogo from "url:../images/companies/biotronik.svg";
import sakkLogo from "url:../images/companies/sakk.jpeg";
import uzhLogo from "url:../images/companies/uzh.svg";

const experiences = [
  {
    id: 1,
    date: "01/2022 - Present",
    title: "Senior Data Scientist",
    company: "Roche",
    logo: rocheLogo,
    location: "Basel, Switzerland",
    description: "Leading cross-functional initiatives at the intersection of AI, Engineering, and Statistics to transform clinical data operations.",
    achievements: [
      "AI & Machine Learning: Architected and deployed foundational models (LLMs, Transformers) and self-supervised learning pipelines for multi-modal clinical data.",
      "MLOps & DevOps: Designed scalable, automated ML pipelines using Kubeflow, GitLab CI/CD, and AWS, ensuring robust production deployment.",
      "Software Architecture: Developed open-source, end-to-end deep learning frameworks and RAG applications, driving innovation in drug discovery.",
      "Statistical Science: Applied advanced multivariate statistical modeling to optimize clinical trial efficiency and synthesis processes."
    ]
  },
  {
    id: 2,
    date: "09/2020 - 12/2021",
    title: "Data Scientist",
    company: "Roche",
    logo: rocheLogo,
    location: "Basel, Switzerland",
    description: "Bridging the gap between Data Engineering and Data Science to enhance clinical trial resilience.",
    achievements: [
      "Data Engineering: Engineered complex, heterogeneous data integration pipelines combining imaging and clinical records for predictive analytics.",
      "Predictive Modeling: Deployed hybrid machine learning models (BERT + Random Forest) for causal inference and operational risk prediction.",
      "Open Source Development: Maintained and enhanced Bayesian statistical packages (crmPack), supporting the broader scientific community."
    ]
  },
  {
    id: 3,
    date: "02/2019 - 08/2020",
    title: "Clinical Programming Analyst",
    company: "Roche",
    logo: rocheLogo,
    location: "Basel, Switzerland",
    description: "Delivering data visualization solutions and software tools to support clinical analysis.",
    achievements: [
      "Full-Stack Data Apps: Created interactive R-Shiny applications for real-time data quality review and trend analysis.",
      "Tooling & Automation: Developed custom R packages and NLP tools to streamline study data analysis workflows."
    ]
  },
  {
    id: 4,
    date: "07/2016 - 01/2019",
    title: "Statistical Programming Analyst",
    company: "Biotronik AG",
    logo: biotronikLogo,
    location: "Bülach, Switzerland",
    description: "Applying statistical rigor and machine learning to medical device safety data.",
    achievements: [
      "Statistical Analysis: Conducted safety data analysis for cardiovascular trials using robust statistical methodologies.",
      "Machine Learning: Pioneered the application of XGBoost and supervised learning for safety signal detection.",
      "Data Visualization: Created comprehensive R-based toolkits for predictive modeling and visual reporting."
    ]
  },
  {
    id: 5,
    date: "2015 - 2016",
    title: "Statistician Trainee",
    company: "Swiss Group for Clinical Cancer Research (SAKK)",
    logo: sakkLogo,
    location: "Bern, Switzerland",
    description: "Ensuring data integrity and statistical validity for oncology clinical trials through automated pipelines.",
    achievements: [
      "Data Engineering & Automation: Developed integrated R-based pipelines for automated data validation and cleaning, ensuring high-quality data for Phase III oncology trials.",
      "Statistical Modeling: Validated efficacy endpoints and performed survival analysis using Cox Proportional Hazards models and Kaplan-Meier estimates in SAS and R."
    ]
  },
  {
    id: 6,
    date: "11/2010 - 12/2014",
    title: "PhD Research – Computational Structural Biology",
    company: "Paul Scherrer Institut / University of Zürich",
    logo: uzhLogo,
    location: "Switzerland",
    description: "Pioneering computational research in structural biology using advanced algorithms.",
    achievements: [
      "Algorithm Design: Developed novel computational methodologies integrating Bayesian inference with physical modeling.",
      "Scientific Computing: Achieved high-accuracy 3D structure predictions for RNA/Protein complexes through intensive simulation."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section page-section" id="experience">
      <div className="page-header experience-header">
        <h1>Experience</h1>
        <p>A timeline of my professional journey and key achievements.</p>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-marker">
              {exp.logo ? (
                <img src={exp.logo} alt={`${exp.company} logo`} className="timeline-logo-img" />
              ) : (
                <svg className="timeline-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              )}
            </div>
            <div className="timeline-content">
              <div className="timeline-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {exp.date}
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company} • {exp.location}</div>
              <p className="timeline-desc">{exp.description}</p>
              
              <ul className="timeline-achievements">
                {exp.achievements.map((achievement, index) => {
                  const parts = achievement.split(": ");
                  if (parts.length > 1) {
                    return (
                      <li key={index}>
                        <strong>{parts[0]}:</strong> {parts.slice(1).join(": ")}
                      </li>
                    );
                  }
                  return <li key={index}>{achievement}</li>;
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
