/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/photo_gpeng.png";

const imageAltText = "Photo of G.Peng";

const Home = ({ name, title, setActiveSection, theme }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [`Hi, I'm ${name}`, `Hola, soy ${name}`, `Olá, eu sou ${name}`];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, toRotate, typingSpeed]);

  return (
    <section id="home" className="min-height" style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      textAlign: "center",
      background: theme === 'light' 
        ? "radial-gradient(circle at 50% 40%, rgba(220, 230, 255, 0.8) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at 50% 60%, rgba(220, 255, 240, 0.5) 0%, rgba(255, 255, 255, 0) 60%)" 
        : "radial-gradient(circle at 50% 40%, rgba(40, 40, 60, 0.8) 0%, rgba(26, 26, 26, 0) 60%)",
      paddingTop: "2rem"
    }}>
      <div style={{ 
        width: "320px", 
        height: "320px", 
        borderRadius: "50%", 
        overflow: "hidden", 
        marginBottom: "2rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        border: "none" // Removed border to match screenshot closer
      }}>
        <img src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      <h1 style={{ 
        fontFamily: "Montserrat, sans-serif", 
        fontSize: "5rem", 
        fontWeight: "800", 
        color: theme === 'light' ? "#1a1a1a" : "#f0f0f0", 
        margin: "0.5rem 0",
        letterSpacing: "-0.02em",
        lineHeight: "1.1"
      }}>
        {text}<span className="cursor" style={{ fontWeight: "100", color: theme === 'light' ? "#1a1a1a" : "#f0f0f0" }}>|</span>
      </h1>
      
      <p style={{ 
        maxWidth: "700px", 
        margin: "1.5rem 0 2.5rem", 
        fontSize: "1.35rem", 
        color: theme === 'light' ? "#555" : "#ccc",
        lineHeight: "1.6",
        fontWeight: "400"
      }}>
        {title}
      </p>
      
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <button onClick={() => setActiveSection("portfolio")} className="btn btn-primary" style={{ 
          fontSize: "1rem", 
          padding: "0.8rem 2rem", 
          borderRadius: "8px", 
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          View My Work <span style={{ fontSize: "1.2rem" }}>&rarr;</span>
        </button>
        <button onClick={() => window.location.href = "mailto:guanya.peng24@gmail.com"} className="btn btn-secondary" style={{ 
          fontSize: "1rem", 
          padding: "0.8rem 2rem", 
          borderRadius: "8px", 
          fontWeight: "600",
          background: theme === 'light' ? "white" : "transparent",
          color: theme === 'light' ? "#1a1a1a" : "#f0f0f0",
          border: theme === 'light' ? "1px solid #e5e7eb" : "1px solid #444"
        }}>
          Get in Touch
        </button>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
