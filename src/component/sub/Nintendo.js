import React from "react";
import img from "../../img/project/nintendo.png";

function Nintendo() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">닌텐도 메인페이지 리뉴얼</p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>HTML</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>J-Query</p>
            <p>figma</p>
          </div>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            가장 처음 리뉴얼한 페이지입니다.
            <br />
            기존 닌텐도의 홈페이지는 각져있고 정적이라고 생각되어 조금 더 눈에
            띄고 활동적인 홈페이지를 제작하고 싶었습니다.
            <br />
            닌텐도의 주력상품인 스위치 모양의 배너를 제작하여 주력상품을 더
            많이알리고, 닌텐도 게임 속 캐릭터들의 소개페이지가 잘 만들어져
            있어서 그 부분도 알리고 싶었습니다.
            <br />
            처음 제작한 홈페이지라 난잡하고 부족한 점이 많다고 생각됩니다.
            실력이 더 발전하면 다시 한번 리뉴얼을 도전하고 싶은 홈페이지입니다.
          </p>

          <div className="btns">
            <button
              onClick={() => {
                window.open(
                  "https://www.figma.com/file/5scfGIOCoRCm7DVRWkQnH6/Untitled?type=design&node-id=0%3A1&mode=design&t=SUJdSxg67i8HMsWo-1"
                );
              }}
              className="btn figma"
            >
              figma
            </button>
            <button
              onClick={() => {
                window.open("https://github.com/seoyoun12/mario_redesign");
              }}
              className="btn github"
            >
              github
            </button>
            <button
              onClick={() => {
                window.open("https://seoyoun12.github.io/mario_redesign/");
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

export default Nintendo;
