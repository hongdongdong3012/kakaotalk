import React, { Component } from "react";
import image from "./image/images.jpg";
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
        image:
          "https://lh3.googleusercontent.com/proxy/RXsYMlTD4Tmj7s_lmKBPOMT2XT3uwIBfDyj9DoYA1m5qezynA4eL1a14Ivy3tHaYMcL0XQUzZ-3r0q6zaI59OcqiSPmPFiJ0vDzwYEK_MTaSo6KIClDjE3f5CIqe4NBqC9e25479MVVBb7dDBKh5M4TzsyZObaBf0PBF_bH40CNE8gr79oe9-NgxeU-TFK1JnJpA",
        music: "Popo-백예린"
      },
      {
        id: 1,
        name: "파랑 라이언",
        image:
          "https://lh3.googleusercontent.com/proxy/QXWgjCyJThD9b8G07_skZE6xthtj2BpAI7imdmelTCCdniOVRfn4kpX36563hF1gKlnjBvGgp3p4HhqZVCeYrGeHskJ2K9lJoQbEdaTyhc9m1CnHw4udsJKtb8gGyWdMW1jj34-YS3gW-jgJiDPcpwC1-L1izsYCsbKJxKWRYcefx06NsJU4Ct2ZXXxYigxnOCl5j0piIbjYshFuqrpy0C8-_zZx8NxH0HRnEYffQ_WJhalyeiEWBEOOWHacVgA3KivdEk0u6fbEjVCij1qrmTcko0JxXIyJnycfEHruvd1tllsBFiXSGgwy24CNRTIRTyIDWPewq2B61KtI1FIcC0-hrJi2vQDSt_MNSbnS-Y3FxfY_2n7PnxYGqGSIY4-OcT_rnhYZ_4gEUU9Opw",
        music: "Big-검정치마"
      },
      {
        id: 2,
        name: "윙크하는 튜브",
        image:
          "https://lh3.googleusercontent.com/proxy/EJ03fo770poc3FmSxQDGb7AZrISa2dR7j32z4OMb7duTVL4rpIV-49dS8_jGyjA7o6Nc4WM5GMKDNKZEExaozRAvaNc1JT_YzXJQ0LYysUmv21_s2mtQsaOYzHw41xLRciUodQzPGSPGiUev4Dt827ZSsNQmXZLInihxRWPKwyoRAA5pxRhItkMCKwvGCeJNz04RlvebEDJZ87-R5i-c-MHkl30",
        music: "하루에도 열두 번-윤건"
      },
      {
        id: 3,
        name: "어피치",
        image:
          "https://lh3.googleusercontent.com/proxy/tdo-n25PMrzt-EF77EuHwDvA5s4gVdujOvIyW-CVQetCzLEla5rUbJAmO-NOhX0VaZCqAR9cSxF1LJgMQxtGw4_CKiGjdE6h0oHcp-HNOACHb10SuMLgHqq6DxFkP4Gs3ft0JOGoxZpCj3zAZLFo1AOHTafTeM1D3iW1J96s60B3DEn6pZ4S6BREtA",
        music: "Who(feat.BTS)-Lauv"
      },
      {
        id: 4,
        name: "제이지",
        image:
          "https://lh3.googleusercontent.com/proxy/spjQarBv0n_bNeYyYFpDIs5s_rJ_dk0PoquW5jkPpIAkgpqVQoykcarjuopwNf3Bgueag2iKcseTs1Xl8St2fV8aWgp0vx2pFiaRadRzTSzZRCDuI7rjgpkgVC5uCd7mnxxSMqQyI3JOFb_vHpSB",
        music: "Loveship-폴킴,청하"
      },
      {
        id: 5,
        name: "네오",
        image: "https://biketago.com/img/kakao/cat_03.jpg",
        music: "All of Me-John Legend"
      },
      {
        id: 6,
        name: "귀여운 피치",
        image:
          "https://lh3.googleusercontent.com/proxy/c2tbYK-ZtCMmKDQT0pkfj-r17FmkEArZz57nqWyw63_Fh9x76R2qSIgEOdAtG0tL57zsmEyA3SRoCsHhNBe5b-YyQkuToxTkk3N0cbzqCYxtgkmKDLpcj_SN6jg8i7yAotIW4rBmm7XvWq7nsWco06WbOD4JAg",
        music: "하모니-제아,이영헌"
      },
      {
        id: 7,
        name: "잠옷입은 라이언",
        image:
          "https://post-phinf.pstatic.net/MjAxNzA1MTJfNzEg/MDAxNDk0NTkwMDkyOTcx.rF-fdjuL9L1XQUzTVzSPhg4rHyIeMBiM5HN5arQ2BD4g.osgE4lPUT7o2GVzsJpa1A2vnL85ti8JHvmbFECAEco0g.PNG/39.png?type=w1200",
        music: "아무노래-지코"
      },
      {
        id: 8,
        name: "아이언맨",
        image:
          "https://lh3.googleusercontent.com/proxy/ZfoDZVv4wvsgUXPZ5xu4B1LcL0gatryhfl3OQKgqS9dMLaKSLZ8pHmJum5S3ANKZHhMyolAIB_xeBcqL3utbL7aXNgMcOoRo9cGAXlRXt_51ZNSSCrbucUtE35fqeShL25JKzz6jLNaPQjpvAjKlXsuglW8Cd4ft",
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
          {/* <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div>
          <div className="profile">
            <div className="profileImage">
              <img src={image} className="image" alt="profile" />
            </div>
            <div className="name">진우</div>
            <div className="music">
              <span>작은별-AKMU(악동뮤지션)</span>
              &nbsp;<span className="triangle"></span>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Profile;
