import React, { Component } from "react";
import TopMenu from "../Component/TopMenu";
import Footer from "../Component/Footer";
import image from "../Component/image/images.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <TopMenu name="더보기" />
        <div className="main about">
          <div className="borderBotton">
            <div className="profile ">
              <div className="profileImage">
                <img src={image} className="image" alt="profile" />
              </div>
              <div className="name">
                <div>
                  <div className="userName">진우</div>
                  <div className="email">hjw3012@naver.com</div>
                </div>
              </div>
              <div className="music centerT">
                <span>10</span>
              </div>
              <div className="music centerT">
                <span>MY</span>
              </div>
            </div>
          </div>
          {/*카카오페이*/}
          <div className="kakaoPay">
            <div className="left">
              <div className="pay">
                <i className="fas fa-comment"></i>
                <span>pay</span>
              </div>
              <span className="money">0원</span>
            </div>
            <div className="right">
              <span className="rightFirst">송금</span>
              <span className="rightEnd">결제</span>
            </div>
          </div>
          {/*아이콘들*/}
          <ul className="aboutIcon">
            <li className="iconList">
              <div>
                <i className="fas fa-gift"></i>
                <span className="iconName">선물하기</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="far fa-smile"></i>
                <span className="iconName">이모티콘</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-gamepad"></i>
                <span className="iconName">게임</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fab fa-medium-m"></i>
                <span className="iconName">메이커스</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fab fa-fly"></i>
                <span className="iconName">프렌즈샵</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-store"></i>
                <span className="iconName">쇼핑하기</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-tshirt"></i>
                <span className="iconName">스타일</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-utensils"></i>
                <span className="iconName">주문하기</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-ticket-alt"></i>
                <span className="iconName">멜론티켓</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-file"></i>
                <span className="iconName">페이지</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-gift"></i>
                <span className="iconName">멜론</span>
              </div>
            </li>
            <li className="iconList">
              <div>
                <i className="fas fa-file"></i>
                <span className="iconName">전체서비스</span>
              </div>
            </li>
          </ul>
          <div className="making">
            <div className="makeContent">
              <i className="vertical fas fa-envelope"></i>
              메일<span className="vertical">만들기</span>
            </div>
            <div className="makeContent">
              <i className="vertical fas fa-calendar-check"></i>
              캘린더<span className="vertical ">일정 만들기</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
