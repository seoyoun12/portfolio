import React, { useState, useEffect } from "react";
import "../css/main.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Main() {
  const texts = ["Passionate", "Challenging", "Hardworking", "Dreaming"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main id="main">
        <div className="text_wrap">
          <div className="change_text">
            <ul>
              {texts.map((text, index) => (
                <li
                  key={index}
                  style={{ display: index === currentIndex ? "block" : "none" }}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <h2>
            FRONT-END
            <br />
            DEVELOPER
            <br />
            <span>portfolio</span>
          </h2>
        </div>
        <Link to="/project" className="go_btn">
          GO PROJECT
        </Link>
      </main>
    </>
  );
}

export default Main;
