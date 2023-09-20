import React from "react";
import img from "./../../img/project/tetris.jpg";

function Tetris() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">테트리스 게임</p>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            어릴적부터 좋아하던 테트리스 게임을 만들어보았습니다.
            <br />
            유튜브 강의를 보고 제작하였으나, 게임 시작부분이나 스코어 부분이
            부족하다고 생각되어 추가하게되었습니다.
          </p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>HTML</p>
            <p>Javascript</p>
            <p>CSS</p>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                window.open("https://github.com/seoyoun12/tetris_game");
              }}
              className="btn github"
            >
              github
            </button>
            <button
              onClick={() => {
                window.open("https://seoyoun12.github.io/tetris_game/");
              }}
              className="btn link"
            >
              LINK
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
