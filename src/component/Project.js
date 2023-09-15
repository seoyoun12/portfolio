import React, { useState } from "react";
import "../css/project.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Pf from "./sub/Pf.js";
import Pepoyes from "./sub/Pepoyes";
import Mbti from "./sub/Mbti";

function Project() {
  const [hidden, setHidden] = useState(false);
  function btn_click(e) {
    setHidden((prevHidden) => !prevHidden);
  }

  return (
    <>
      <main id="main">
        <div id="project_main">
          <button className="list_btn" onClick={btn_click}>
            {hidden ? "Close" : "List"}
          </button>
          <div className={`list ${hidden ? "list_visible" : ""}`}>
            <h4>LIST</h4>
            <p className="subtitle">홈페이지</p>
            <NavLink to="/project/" className="pj_title" onClick={btn_click}>
              포트폴리오
            </NavLink>
            <NavLink to="Popeyes" className="pj_title" onClick={btn_click}>
              파파이스 리뉴얼
            </NavLink>
            <p className="subtitle">미니 프로젝트</p>
            <NavLink to="mbti" className="pj_title" onClick={btn_click}>
              MBTI 심리테스트
            </NavLink>
          </div>
          <div className={`sub_box ${hidden ? "visible" : ""}`}>
            <Routes path="project">
              <Route path="/" element={<Pf />} />
              <Route path="Popeyes" element={<Pepoyes />} />
              <Route path="mbti" element={<Mbti />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
