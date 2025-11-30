/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../images/about-photo.jpg";

// Import tool icons
import vscodeIcon from "../images/tools/vscode.svg";
import vimIcon from "../images/tools/vim.svg";
import githubIcon from "../images/tools/github.svg";
import gitlabIcon from "../images/tools/gitlab.png";
import notionIcon from "../images/tools/notion.svg";
import openaiIcon from "../images/tools/openai_2025.svg";
import perplexityIcon from "../images/tools/perplexity_new.png";
import awsIcon from "../images/tools/aws.svg";
import boltIcon from "../images/tools/bolt.jpg";
import supabaseIcon from "../images/tools/supabase.png";
import replicateIcon from "../images/tools/replicate.jpg";
import huggingfaceIcon from "../images/tools/huggingface.svg";
import railwayIcon from "../images/tools/railway.png";
import langchainIcon from "../images/tools/langchain.png";
import n8nIcon from "../images/tools/n8n.png";

import Anthropic from "./Icons/Anthropic";

import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaGlobeAmericas,
  FaChartLine,
} from "react-icons/fa";

const description = [
  "I am a Senior Data Science Product Leader and Data Engineer with over 6 years of experience in building large-scale data pipelines and AI/ML products in regulated pharmaceutical environments. Currently based in Zurich, Switzerland, I specialize in bridging the gap between complex data and actionable insights through robust engineering and advanced analytics.",
  "My expertise spans the full data lifecycle, from designing Snowflake data models and ELT pipelines with PySpark and SQL to deploying automated MLOps workflows using Kubeflow and GitLab CI/CD on AWS. I have a strong track record of delivering FAIR-aligned datasets and secure, reusable pipelines that power analytics and GenAI applications.",
  "I am passionate about leveraging technology to solve real-world challenges, having led projects in AI-enhanced computer vision, agentic AI workflows, and discrete-event simulation for manufacturing optimization. I thrive in collaborative environments, partnering with SMEs and data scientists to drive innovation and operational excellence.",
  "With a background in Computational Biology and Physics, I bring a rigorous analytical approach to every project. Whether it's developing foundational models or optimizing clinical trial processes, I am dedicated to delivering high-quality, impactful solutions.",
];

const education = [
  {
    degree: "PhD",
    major: "Computational Biology",
    school: "University of Zürich",
    year: "2010 - 2014",
    detail: "Research in Computational Biology",
  },
  {
    degree: "MSc",
    major: "Materials Science",
    school: "Institut polytechnique de Grenoble",
    year: "2008 - 2010",
    detail: "Specialization in Materials Science",
  },
  {
    degree: "BSc",
    major: "Physics",
    school: "Harbin Institute of Technology",
    year: "2004 - 2008",
    detail: "Fundamental Physics",
  },
];

const certifications = [
  {
    name: "Data Engineering Professional Certificate",
    provider: "DeepLearning.AI",
    year: "2024",
  },
  {
    name: "MLOps Specialization",
    provider: "DeepLearning.AI",
    year: "2024",
  },
  {
    name: "Deep Learning Specialization",
    provider: "DeepLearning.AI",
    year: "2020",
  },
];

const skills = [
  {
    title: "ML/AI Engineering",
    icon: <FaCode size={36} />,
    items: ["Python", "R", "PySpark", "Kubeflow", "MLflow", "FastAPI"],
  },
  {
    title: "Statistical Modeling & Advanced Analytics",
    icon: <FaChartLine size={36} />,
    items: [
      "PyTorch",
      "GenAI (RAG, Agents)",
      "Computer Vision",
      "Bayesian Statistics",
      "Multivariate Modeling",
    ],
  },
  {
    title: "Data Engineering & DevOps",
    icon: <FaCogs size={36} />,
    items: ["Snowflake", "SQL", "GitLab CI/CD", "AWS", "Docker", "Data Modeling"],
  },
  {
    title: "Soft Skills",
    icon: <FaGlobeAmericas size={36} />,
    items: [
      "Strategic Leadership",
      "Impactful Communication",
      "Data-Driven Decision Making",
      "Technical Versatility",
      "Precision & Detail",
    ],
  },
];

const tools = [
  { name: "VS Code", icon: vscodeIcon },
  { name: "Vim", icon: vimIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "GitLab", icon: gitlabIcon },
  { name: "Notion", icon: notionIcon },
  { name: "OpenAI", icon: openaiIcon },
  { name: "Anthropic", icon: <Anthropic size={40} style={{ color: "#141413" }} /> },
  { name: "Perplexity", icon: perplexityIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Bolt.new", icon: boltIcon },
  { name: "Supabase", icon: supabaseIcon },
  { name: "Replicate", icon: replicateIcon },
  { name: "Hugging Face", icon: huggingfaceIcon },
  { name: "Railway", icon: railwayIcon },
  { name: "LangGraph", icon: langchainIcon },
  { name: "n8n.io", icon: n8nIcon },
];

const About = () => {
  return (
    <section className="padding" id="about">
      <div className="about-container">
        <div className="about-header">
          <img className="profile-image" src={image} alt="Guanya Peng" />
        </div>

        <div className="about-content">
          <h1>About Me</h1>
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="about-section about-education section-shell">
          <h2>Education</h2>
          <div className="section-content">
            <div className="grid-3">
              {education.map((edu, index) => (
                <div className="card" key={index}>
                  <h3>{edu.degree}</h3>
                  <p className="sub-text major">{edu.major}</p>
                  <p className="sub-text">{edu.school}</p>
                  <p className="date-text">{edu.year}</p>
                  <ul className="detail-list">
                    <li>{edu.detail}</li>
                  </ul>
                </div>
              ))}
            </div>

            {certifications.length > 0 && (
              <div className="card full-width about-certifications">
                <h3>Online Courses & Certifications</h3>
                <div className="cert-grid">
                  {certifications.map((cert, index) => (
                    <div className="cert-item" key={index}>
                      <h4>{cert.name}</h4>
                      <p>{cert.provider}</p>
                      <p className="date-text">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="about-section section-shell">
          <h2>Skills & Expertise</h2>
          <div className="section-content">
            <div className="grid-4">
              {skills.map((skill, index) => (
                <div className="card skill-card" key={index}>
                  <div className="icon-box">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <ul className="skill-list">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-section section-shell">
          <h2>My Favorite Tools</h2>
          <div className="section-content">
            <div className="card full-width gray-bg">
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div className="tool-item" key={index}>
                    <div className="tool-icon">
                      {typeof tool.icon === "string" ? (
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        tool.icon
                      )}
                    </div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
