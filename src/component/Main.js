import React from "react";
import "../css/main.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
      <main id="main">
        <div className="text_wrap">
          <div className="change_text">
            <ul>
              <li>Passionate</li>
              <li>Challenging</li>
              <li>Hardworking</li>
              <li>dreaming</li>
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
