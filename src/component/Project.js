import React from "react";
import '../css/project.css';
import {BrowserRouter as Router, Routes,Route,NavLink } from 'react-router-dom';
import Pf from "./sub/Pf.js";
import Pepoyes from "./sub/Pepoyes";


function Project(){

  return(
    <>
      <main id="main">
        <div id="project_main">
          <div className="list">
            <h4>LIST</h4>
            <p className="subtitle">홈페이지</p>
            <NavLink to="*" className="pj_title " >포트폴리오</NavLink>
            <NavLink to="Popeyes" className="pj_title" >파파이스 리뉴얼</NavLink>
            <p className="subtitle">미니 프로젝트</p>
            <NavLink to="/Mbti" className="pj_title">MBTI 심리테스트</NavLink>
          </div>
          <Routes path="project">
            <Route path="*" element={<Pf />} />
            <Route path="Popeyes" element={<Pepoyes />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default Project;