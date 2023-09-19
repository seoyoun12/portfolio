import React from "react";
import img from "./../../img/project/mbti.png";

function Tetris() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">테트리스 클론코딩</p>
          <h4 className="title">Overview</h4>
          <p className="pje_text"></p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>HTML</p>
            <p>Javascript</p>
            <p>CSS</p>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                window.open("https://github.com/seoyoun12/mbti_test");
              }}
              className="btn github"
            >
              github
            </button>
          </div>
        </div>
        <div className="img_box">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Tetris;
