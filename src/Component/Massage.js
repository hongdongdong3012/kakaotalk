import React, { Component } from "react";
import ironman from "./image/ironman.jpg";
import neo from "./image/네오.png";
import muz from "./image/무지1.jpg";
import pi1 from "./image/어피치1.png";
import pi2 from "./image/어피치2.png";
import wink from "./image/윙크튜브.png";
import lion from "./image/잠옷라이언.png";
import jaz from "./image/제이지.png";
import blueLion from "./image/파랑라이언.png";
import "./Massage.css";

class Massage extends Component {
  render() {
    const profiles = [
      {
        id: 0,
        name: "무지",
        image: muz,
        chat: "웅웅 내일보자",
        date: "21:22"
      },
      {
        id: 1,
        name: "파랑 라이언",
        image: blueLion,
        chat: "아싸 진짜로?",
        date: "20:19"
      },
      {
        id: 2,
        name: "윙크하는 튜브",
        image: wink,
        chat: "우리 알지?",
        date: "16:48"
      },
      {
        id: 3,
        name: "어피치",
        image: pi1,
        chat: "나 로또 1등됬는데?",
        date: "11:11"
      },
      {
        id: 4,
        name: "제이지",
        image: jaz,
        chat: "웅웅",
        date: "어제"
      },
      {
        id: 5,
        name: "네오",
        image: neo,
        chat: "그랬어? 힘들었겠구나",
        date: "어제"
      },
      {
        id: 6,
        name: "귀여운 피치",
        image: pi2,
        chat: "좋다 좋아~~~~~~~",
        date: "어제"
      },
      {
        id: 7,
        name: "잠옷입은 라이언",
        image: lion,
        chat: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
        date: "3월7일"
      },
      {
        id: 8,
        name: "아이언맨",
        image: ironman,
        chat: "웅웅",
        date: "3월7일"
      },
      {
        id: 9,
        name: "무지",
        image: muz,
        chat: "웅웅",
        date: "3월7일"
      },
      {
        id: 10,
        name: "파랑 라이언",
        image: blueLion,
        chat: "어제 밥 뭐먹었어?",
        date: "3월8일"
      },
      {
        id: 11,
        name: "윙크하는 튜브",
        image: wink,
        chat: "알겠어!! 내일보자",
        date: "3월8일"
      },
      {
        id: 12,
        name: "어피치",
        image: pi1,
        chat: "하 진짜 너무하더라..",
        date: "3월8일"
      },
      {
        id: 13,
        name: "제이지",
        image: jaz,
        chat: "아싸 로또 1등됬어",
        date: "3월8일"
      },
      {
        id: 14,
        name: "네오",
        image: neo,
        chat: "아 정말?",
        date: "3월9일"
      }
    ];

    const readProfiles = profiles.map(prof => (
      <div key={prof.id} className="friendProfile">
        <div className="profileImage">
          <img src={prof.image} className="image" alt="profile" />
        </div>
        <div className="name">
          <div>
            <div>{prof.name}</div>
            <div className="chat">{prof.chat}</div>
          </div>
        </div>
        <div className="date">{prof.date}</div>
      </div>
    ));

    return (
      <div className="main">
        <div>{readProfiles}</div>
      </div>
    );
  }
}

export default Massage;
