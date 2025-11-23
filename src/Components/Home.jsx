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

const Home = ({ name, title }) => {
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
      background: "linear-gradient(to bottom, #f0f4f8, #ffffff)"
    }}>
      <div style={{ 
        width: "200px", 
        height: "200px", 
        borderRadius: "50%", 
        overflow: "hidden", 
        marginBottom: "2rem",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <img src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "3.5rem", color: "#1a1a1a", margin: "0" }}>
        {text}<span className="cursor">|</span>
      </h1>
      
      <p style={{ maxWidth: "600px", margin: "1.5rem 0", fontSize: "1.2rem", color: "#666" }}>
        {title}
      </p>
      
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="#portfolio" className="btn btn-primary">View My Work &rarr;</a>
        <a href="#footer" className="btn btn-secondary">Get in Touch</a>
      </div>
      
      <div style={{ position: "absolute", bottom: "3rem" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
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
