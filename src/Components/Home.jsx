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
      background: theme === 'light' ? "radial-gradient(circle at 50% 30%, #eef2ff 0%, #ffffff 70%)" : "radial-gradient(circle at 50% 30%, #2a2a2a 0%, #1a1a1a 70%)",
      paddingTop: "5rem" // Push content down slightly but keep it centered
    }}>
      <div style={{ 
        width: "280px", // Bigger circle
        height: "280px", 
        borderRadius: "50%", 
        overflow: "hidden", 
        marginBottom: "2.5rem",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        border: "4px solid white"
      }}>
        <img src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      <h1 style={{ 
        fontFamily: "Montserrat, sans-serif", 
        fontSize: "4.5rem", // Larger font
        fontWeight: "800", // Bolder
        color: theme === 'light' ? "#1a1a1a" : "#f0f0f0", 
        margin: "0",
        letterSpacing: "-0.02em"
      }}>
        {text}<span className="cursor">|</span>
      </h1>
      
      <p style={{ 
        maxWidth: "700px", 
        margin: "2rem 0", 
        fontSize: "1.5rem", 
        color: theme === 'light' ? "#4a4a4a" : "#ccc",
        lineHeight: "1.6"
      }}>
        {title}
      </p>
      
      <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
        <button onClick={() => setActiveSection("portfolio")} className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
          View My Work &rarr;
        </button>
        <button onClick={() => window.location.href = "mailto:guanya.peng24@gmail.com"} className="btn btn-secondary" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
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
