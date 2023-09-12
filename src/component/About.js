import React from "react";
import "../css/about.css";

function About() {
  return (
    <>
      <main id="main">
        <div id="about_main">
          <div className="text_box">
            <p>안녕하세요.</p>
            <p>
              저는 <span>프론트앤드 개발자</span>를 꿈꾸는 구서윤입니다.
            </p>
            <p>
              우연히 접하게 된 <span>개발공부에 매력을 느끼고</span>
              개발자의 길을 걷게 되었습니다.
            </p>
            <p>
              문제에서 기회를 포착하고, 해결을 통한 <span>성취감</span>을
              좋아합니다.
            </p>
            <p>
              지금에 안주하지않고 끝없이 <span>발전</span>하려고 합니다.
            </p>
            <p>
              <span>프론트에서부터 시작해 풀스택</span>까지 달려나가고싶습니다.
            </p>
          </div>
          <div className="profile">
            <h4 className="profile_title">profile</h4>
            <div className="box">
              <p className="name">구서윤(Seoyoun Gu)</p>
              <p className="phone">010.9255.9525</p>
              <p className="birth">1997.12.12</p>
              <p className="email">znzl971212@naver.com</p>
            </div>
          </div>
          <div className="img_box">
            <img src="./../img/me_1.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
