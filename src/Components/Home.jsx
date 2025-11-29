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
    <section id="home" className="min-height home-section">
      <div className="home-photo-wrapper">
        <img src={image} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      <h1 className="home-title">
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
      
      <p className="home-description">
        {title}
      </p>
      
      <div className="home-buttons">
        <button onClick={() => setActiveSection("portfolio")} className="btn btn-primary home-btn">
          View My Work 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <button onClick={() => setActiveSection("contact")} className="btn btn-secondary home-btn">
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
