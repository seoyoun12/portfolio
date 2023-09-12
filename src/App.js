import "./css/style.css";
import "./css/default.css";
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Skill from "./component/Skill";
import Main from "./component/Main";
import Project from "./component/Project";
import About from "./component/About";

function App() {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  const mouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXY({ x: mouseX, y: mouseY });
  };

  function btn_click() {
    setHidden((prevHidden) => !prevHidden);
  }

  return (
    <>
      <div onMouseMove={mouse}>
        <header id="header">
          <h1 className="logo">SeoYoun</h1>
          <button className="menu_btn" onClick={btn_click}>
            {hidden ? "CLOSE" : "MENU"}
          </button>
          <nav className={`gnb ${hidden ? "visible" : ""}`}>
            <NavLink to="/" className="gnb_btn" onClick={btn_click}>
              MAIN
            </NavLink>
            <NavLink to="/about" className="gnb_btn" onClick={btn_click}>
              ABOUT
            </NavLink>
            <NavLink to="/skill" className="gnb_btn" onClick={btn_click}>
              SKILL
            </NavLink>
            <NavLink to="/project" className="gnb_btn" onClick={btn_click}>
              PROJECT
            </NavLink>
          </nav>
          <div
            className="pointer"
            style={{
              transform: `translate(${xy.x}px, ${xy.y}px)`,
            }}
          ></div>
        </header>
        <div className={` ${hidden ? "visible" : ""}`}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project/*" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
