import React from "react";
import img from "./../../img/project/mbti.png";

function Mbti() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">MBTI 심리테스트</p>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            선택지에 따라 결과가 다르게 나오는 MBTI 심리테스트를 만들어봤습니다.
            <br />
            선택한 데이터에 따라 특정 값에 숫자를 더하는 형식으로 제일 높은값을
            가진 결과를 불러오는 방법으로 제작하였습니다.
            <br />
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

export default Mbti;
