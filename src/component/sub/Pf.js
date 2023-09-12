import React from "react";
import img from "../../img/project/pf.png"

function Pf(){
  return(
    <>
      <div className="container">
        <div className="box">
          <p className="pje_name">포트폴리오</p>
          <h4 className="title">Overview</h4>
          <p className="pje_text">피그마로 디자인하고,
            JAVASCRIPT로 애니메이션 효과를 적용한
            개인 포트폴리오 페이지입니다.</p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
          <h4 className="title">Check</h4>
          <div className="ch_box">
            <p>하나</p>
            <p>둘</p>
            <p>셋</p>
          </div>
          <div className="btns">
            <a href="#" className="figma">figma</a>
          </div>
        </div>
        <div className="img_box">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  )
}

export default Pf;