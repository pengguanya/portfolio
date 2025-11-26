/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import { getGreetings } from "../utils/greetings";

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
  const [typingSpeed, setTypingSpeed] = useState(100);

  const greetings = getGreetings(name);
  const toRotate = greetings.map(g => g.text);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

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
      paddingTop: "4rem",
      minHeight: "90vh"
    }}>
      <div style={{ 
        width: "300px", 
        height: "300px", 
        borderRadius: "50%", 
        overflow: "hidden", 
        marginBottom: "2rem",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        border: "none" // Removed border to match screenshot closer
      }}>
        <img src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
            <h1 style={{ 
        color: "var(--text-title)", 
        fontSize: "4rem", 
        fontWeight: "700", 
        letterSpacing: "-0.02em",
        lineHeight: "1.1"
      }}>
        {text}
        <span className="cursor" style={{ 
          display: "inline-block", 
          width: "6px", 
          height: "1.2em", 
          backgroundColor: "var(--text-title)", 
          marginLeft: "10px",
          verticalAlign: "middle",
          position: "relative",
          top: "-0.1em"
        }}></span>
      </h1>
      
      <p style={{ 
        maxWidth: "700px", 
        margin: "1.5rem 0 2.5rem", 
        fontSize: "1.35rem", 
        color: "var(--text-primary)",
        lineHeight: "1.6",
        fontWeight: "400"
      }}>
        {title}
      </p>
      
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <button onClick={() => setActiveSection("portfolio")} className="btn btn-primary" style={{ 
          fontSize: "1rem", 
          padding: "0.75rem",
          width: "11rem",
          borderRadius: "12px", 
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem"
        }}>
          View My Work 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button onClick={() => setActiveSection("contact")} className="btn btn-secondary" style={{ 
          fontSize: "1rem", 
          padding: "0.75rem",
          width: "10rem",
          borderRadius: "12px", 
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
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
