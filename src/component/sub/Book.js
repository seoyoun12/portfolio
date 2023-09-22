import React from "react";
import img from "./../../img/project/book.png";

function Book() {
  return (
    <>
      <div className="pj_container">
        <div className="box">
          <p className="pje_name">도서 검색 페이지</p>
          <h4 className="title">Skills</h4>
          <div className="skills">
            <p>HTML</p>
            <p>Javascript</p>
            <p>JQuery</p>
            <p>CSS</p>
            <p>KAKAO API</p>
          </div>
          <h4 className="title">Overview</h4>
          <p className="pje_text">
            KAKAO API를 이용해 도서검색 페이지를 만들어보았습니다.
            <br />
            디자인부터 모두 스스로 생각하고 개발하였습니다.
            <br />
            API를 다룬것이 처음이라 데이터의 구조를 확인하고 불러오는 것에대해
            미흡한점이 많지만, 새로운것을 배우게 되어 몹시 재미있게
            해결해나갔던것같습니다.
            <br />
            추후에 다른 API들도 확인해보고 다른 앱도 개발하고싶습니다.
          </p>
          <div className="btns">
            <button
              onClick={() => {
                window.open("https://github.com/seoyoun12/book_search");
              }}
              className="btn github"
            >
              github
            </button>
            <button
              onClick={() => {
                window.open("https://seoyoun12.github.io/book_search/");
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

export default Book;
