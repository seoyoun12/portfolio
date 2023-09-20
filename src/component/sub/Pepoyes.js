import React from "react";
import img from "../../img/project/popeyes.png";

function Pepoyes() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">파파이스 메인페이지 리뉴얼</p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>HTML</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>Figma</p>
          </div>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            파파이스 메인페이지를 재디자인하여 제작해 보았습니다. 기존
            홈페이지는 첫 화면에서 정보전달이 부족하다고 판단하였습니다.
            <br />
            동종업계 타사 홈페이지를 참고하여 페이지 방문목적이 무엇일지 생각해
            보니 메뉴에 관한 궁금증이 가장 크다고 생각하여 가장 많이 찾는 메뉴를
            먼저 보이게 하였습니다.
            <br />
            현재 웹만 구현되어 있고, 앞으로 더 개발하여 모바일 버전도 개발할
            예정입니다.
          </p>

          <div className="btns">
            <button
              onClick={() => {
                window.open(
                  "https://www.figma.com/file/fZ0ZzkkxlQ6aw73gs9aqlq/Untitled?type=design&mode=design&t=SUJdSxg67i8HMsWo-1"
                );
              }}
              className="btn figma"
            >
              figma
            </button>
            <button
              onClick={() => {
                window.open("https://github.com/seoyoun12/popeyes");
              }}
              className="btn github"
            >
              github
            </button>
            <button
              onClick={() => {
                window.open("https://seoyoun12.github.io/popeyes/");
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

export default Pepoyes;
