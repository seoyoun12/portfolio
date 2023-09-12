import React from "react";
import img from "../../img/project/pf.png";

function Pf() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">포트폴리오</p>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            피그마로 디자인하고, React를 이용해 제작한 반응형 개인 포트폴리오
            페이지입니다.
            <br />
            Javascript로 제작하였었으나, react 공부를 위해 react로 다시 제작하게
            되었습니다.
            <br />
            제작하는 과정에서 중첩 라우팅을 적용해보고 오류를 해결해나가는
            과정에서 react router에 대해서 더 배우게 되었습니다.
            <br />
            계속 업데이트할 예정입니다.
          </p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>React</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>Figma</p>
          </div>
          <div className="btns">
            <div className="btn figma">figmas</div>
          </div>
        </div>
        <div className="img_box">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Pf;
