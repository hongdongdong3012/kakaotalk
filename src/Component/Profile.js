import React, { Component } from "react";
import image from "./image/images.jpg";
import ironman from "./image/ironman.jpg";
import neo from "./image/네오.png";
import muz from "./image/무지1.jpg";
import pi1 from "./image/어피치1.png";
import pi2 from "./image/어피치2.png";
import wink from "./image/윙크튜브.png";
import lion from "./image/잠옷라이언.png";
import jaz from "./image/제이지.png";
import blueLion from "./image/파랑라이언.png";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.upDownButton = this.upDownButton.bind(this);
  }
  upDownButton() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const profiles = [
      {
        id: 0,
        name: "무지",
        image: muz,
        music: "Popo-백예린"
      },
      {
        id: 1,
        name: "파랑 라이언",
        image: blueLion,
        music: "Big-검정치마"
      },
      {
        id: 2,
        name: "윙크하는 튜브",
        image: wink,
        music: "하루에도 열두 번-윤건"
      },
      {
        id: 3,
        name: "어피치",
        image: pi1,
        music: "Who(feat.BTS)-Lauv"
      },
      {
        id: 4,
        name: "제이지",
        image: jaz,
        music: "Loveship-폴킴,청하"
      },
      {
        id: 5,
        name: "네오",
        image: neo,
        music: "All of Me-John Legend"
      },
      {
        id: 6,
        name: "귀여운 피치",
        image: pi2,
        music: "하모니-제아,이영헌"
      },
      {
        id: 7,
        name: "잠옷입은 라이언",
        image: lion,
        music: "아무노래-지코"
      },
      {
        id: 8,
        name: "아이언맨",
        image: ironman,
        music: "Tatto Together-Lauv"
      }
    ];

    const readProfiles = profiles.map(prof => (
      <div key={prof.id} className="friendProfile">
        <div className="profileImage">
          <img src={prof.image} className="image" alt="profile" />
        </div>
        <div className="name">{prof.name}</div>
        <div className="music">
          <span>{prof.music}</span>
          &nbsp;<span className="triangle"></span>
        </div>
      </div>
    ));

    return (
      <div className="main">
        {/*메인 프로필*/}
        <div className="borderBotton">
          <div className="profile ">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
        </div>
        {/*생일인 친구*/}
        <div className="borderBotton">
          <p className="smallMainText">
            생일인 친구
            <span className="upDownToggle">
              <i className="fas fa-angle-up" onClick={this.upDownButton}>
                {/* {this.state.isToggleOn ? "hide" : "show"} */}
              </i>
            </span>
          </p>
          <div className="profile toggleContent">
            <div className="profileImage profileImageCake">
              <i className="fas fa-birthday-cake"></i>
            </div>
            <div className="name">친구의 생일을 확인해보세요!</div>
            <div className="arrow">
              5<i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        {/*즐겨찾기*/}
        <div className="borderBotton">
          <p className="smallMainText">
            즐겨찾기
            <span className="upDownToggle">
              <i className="fas fa-angle-up"></i>
            </span>
          </p>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">튜브</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
        </div>
        {/*친구*/}
        <div className="borderBotton">
          <p className="smallMainText">
            친구 778
            <span className="upDownToggle">
              <i className="fas fa-angle-up"></i>
            </span>
          </p>
          <div>{readProfiles}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
