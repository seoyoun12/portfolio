import React from "react";
import img from "../../img/project/popeyes.png";

function Pepoyes() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">파파이스 리뉴얼</p>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            피그마로 디자인하고, JAVASCRIPT로 애니메이션 효과를 적용한 개인
            포트폴리오 페이지입니다.
          </p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>React</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>Figma</p>
          </div>
          <div className="btns">
            <p className="btn figma">figmas</p>
          </div>
        </div>
        <div className="img_box">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Pepoyes;
