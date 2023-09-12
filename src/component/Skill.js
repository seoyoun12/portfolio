import React from "react";
import '../css/skill.css'

function Skill(){

  return(
    <>
      <main id="main">
        <h4 className="skill_title">Front-end</h4>
        <div className="container">
          <div className="content_box html">
            <p className="title">HTML 5</p>
            <p>웹 접근성, 표준성을 준수하며
              시멘틱 태그를 이용해
              마크업 할 수 있습니다. </p>
          </div>
          <div className="content_box css">
            <p className="title">CSS</p>
            <p>태그를 적절히 이용하여
              반응형 웹을 제작할 수 있습니다. </p>
          </div>
          <div className="content_box js">
            <p className="title">Javascript</p>
            <p>문법을 이해하고 읽을 수 있으며,
              상황에 맞게 작성할 수 있고,
              간단한 게임을 제작 할 수 있습니다.</p>
          </div>
          <div className="content_box bootstrap">
            <p className="title">Bootstrap</p>
            <p>bootstrap을 이용하여
              그리드를 사용할 수 있고,
              반응형 디자인을 할 수 있습니다. </p>
          </div>
          <div className="content_box react">
            <p className="title">React</p>
            <p>React의 구조를 이해하고
              있으며, 여러가지 Hook을
              사용할 수 있습니다. </p>
          </div>
          <div className="content_box jquery">
            <p className="title">Jquery</p>
            <p>React의 구조를 이해하고
              있으며, 여러가지 Hook을
              사용할 수 있습니다. </p>
          </div>
        </div>
        <h4 className="skill_title">using-tool</h4>
        <div className="container">
          <div className="content_box figma">
            <p className="title">Figma</p>
            <p>컴포넌트 등 유용한 기능을 적절히
              사용가능합니다.</p>
          </div>
          <div className="content_box photoshop">
            <p className="title">Photoshop</p>
            <p >마스크,레이어 등을 이용하여
              다양한 그래픽 요소를
              제작할 수 있습니다.</p>
          </div>
          <div className="content_box illustrator ">
            <p className="title">Illustrator </p>
            <p>펜툴을 이용하여
              간단한 작업이 가능합니다. </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Skill;