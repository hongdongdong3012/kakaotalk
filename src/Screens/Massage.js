import React, { Component } from "react";
import "./Massage.css";

class Massage extends Component {
  render() {
    const profiles = [
      {
        id: 0,
        name: "무지",
        image:
          "https://lh3.googleusercontent.com/proxy/RXsYMlTD4Tmj7s_lmKBPOMT2XT3uwIBfDyj9DoYA1m5qezynA4eL1a14Ivy3tHaYMcL0XQUzZ-3r0q6zaI59OcqiSPmPFiJ0vDzwYEK_MTaSo6KIClDjE3f5CIqe4NBqC9e25479MVVBb7dDBKh5M4TzsyZObaBf0PBF_bH40CNE8gr79oe9-NgxeU-TFK1JnJpA",
        chat: "웅웅",
        date: "16:08"
      },
      {
        id: 1,
        name: "파랑 라이언",
        image:
          "https://lh3.googleusercontent.com/proxy/QXWgjCyJThD9b8G07_skZE6xthtj2BpAI7imdmelTCCdniOVRfn4kpX36563hF1gKlnjBvGgp3p4HhqZVCeYrGeHskJ2K9lJoQbEdaTyhc9m1CnHw4udsJKtb8gGyWdMW1jj34-YS3gW-jgJiDPcpwC1-L1izsYCsbKJxKWRYcefx06NsJU4Ct2ZXXxYigxnOCl5j0piIbjYshFuqrpy0C8-_zZx8NxH0HRnEYffQ_WJhalyeiEWBEOOWHacVgA3KivdEk0u6fbEjVCij1qrmTcko0JxXIyJnycfEHruvd1tllsBFiXSGgwy24CNRTIRTyIDWPewq2B61KtI1FIcC0-hrJi2vQDSt_MNSbnS-Y3FxfY_2n7PnxYGqGSIY4-OcT_rnhYZ_4gEUU9Opw",
        chat: "어제 밥 뭐먹었어?",
        date: "12:48"
      },
      {
        id: 2,
        name: "윙크하는 튜브",
        image:
          "https://lh3.googleusercontent.com/proxy/EJ03fo770poc3FmSxQDGb7AZrISa2dR7j32z4OMb7duTVL4rpIV-49dS8_jGyjA7o6Nc4WM5GMKDNKZEExaozRAvaNc1JT_YzXJQ0LYysUmv21_s2mtQsaOYzHw41xLRciUodQzPGSPGiUev4Dt827ZSsNQmXZLInihxRWPKwyoRAA5pxRhItkMCKwvGCeJNz04RlvebEDJZ87-R5i-c-MHkl30",
        chat: "알겠어!! 내일보자",
        date: "07:00"
      },
      {
        id: 3,
        name: "어피치",
        image:
          "https://lh3.googleusercontent.com/proxy/tdo-n25PMrzt-EF77EuHwDvA5s4gVdujOvIyW-CVQetCzLEla5rUbJAmO-NOhX0VaZCqAR9cSxF1LJgMQxtGw4_CKiGjdE6h0oHcp-HNOACHb10SuMLgHqq6DxFkP4Gs3ft0JOGoxZpCj3zAZLFo1AOHTafTeM1D3iW1J96s60B3DEn6pZ4S6BREtA",
        chat: "하 진짜 너무하더라..",
        date: "어제"
      },
      {
        id: 4,
        name: "제이지",
        image:
          "https://lh3.googleusercontent.com/proxy/spjQarBv0n_bNeYyYFpDIs5s_rJ_dk0PoquW5jkPpIAkgpqVQoykcarjuopwNf3Bgueag2iKcseTs1Xl8St2fV8aWgp0vx2pFiaRadRzTSzZRCDuI7rjgpkgVC5uCd7mnxxSMqQyI3JOFb_vHpSB",
        chat: "아싸 로또 1등됬어",
        date: "어제"
      },
      {
        id: 5,
        name: "네오",
        image: "https://biketago.com/img/kakao/cat_03.jpg",
        chat: "아 정말?",
        date: "어제"
      },
      {
        id: 6,
        name: "귀여운 피치",
        image:
          "https://lh3.googleusercontent.com/proxy/c2tbYK-ZtCMmKDQT0pkfj-r17FmkEArZz57nqWyw63_Fh9x76R2qSIgEOdAtG0tL57zsmEyA3SRoCsHhNBe5b-YyQkuToxTkk3N0cbzqCYxtgkmKDLpcj_SN6jg8i7yAotIW4rBmm7XvWq7nsWco06WbOD4JAg",
        chat: "웅웅",
        date: "3월7일"
      },
      {
        id: 7,
        name: "잠옷입은 라이언",
        image:
          "https://post-phinf.pstatic.net/MjAxNzA1MTJfNzEg/MDAxNDk0NTkwMDkyOTcx.rF-fdjuL9L1XQUzTVzSPhg4rHyIeMBiM5HN5arQ2BD4g.osgE4lPUT7o2GVzsJpa1A2vnL85ti8JHvmbFECAEco0g.PNG/39.png?type=w1200",
        chat: "그래그래",
        date: "3월7일"
      },
      {
        id: 8,
        name: "아이언맨",
        image:
          "https://lh3.googleusercontent.com/proxy/ZfoDZVv4wvsgUXPZ5xu4B1LcL0gatryhfl3OQKgqS9dMLaKSLZ8pHmJum5S3ANKZHhMyolAIB_xeBcqL3utbL7aXNgMcOoRo9cGAXlRXt_51ZNSSCrbucUtE35fqeShL25JKzz6jLNaPQjpvAjKlXsuglW8Cd4ft",
        chat: "좋다!! 그렇게 하자",
        date: "3월7일"
      },
      {
        id: 9,
        name: "무지",
        image:
          "https://lh3.googleusercontent.com/proxy/RXsYMlTD4Tmj7s_lmKBPOMT2XT3uwIBfDyj9DoYA1m5qezynA4eL1a14Ivy3tHaYMcL0XQUzZ-3r0q6zaI59OcqiSPmPFiJ0vDzwYEK_MTaSo6KIClDjE3f5CIqe4NBqC9e25479MVVBb7dDBKh5M4TzsyZObaBf0PBF_bH40CNE8gr79oe9-NgxeU-TFK1JnJpA",
        chat: "웅웅",
        date: "3월7일"
      },
      {
        id: 10,
        name: "파랑 라이언",
        image:
          "https://lh3.googleusercontent.com/proxy/QXWgjCyJThD9b8G07_skZE6xthtj2BpAI7imdmelTCCdniOVRfn4kpX36563hF1gKlnjBvGgp3p4HhqZVCeYrGeHskJ2K9lJoQbEdaTyhc9m1CnHw4udsJKtb8gGyWdMW1jj34-YS3gW-jgJiDPcpwC1-L1izsYCsbKJxKWRYcefx06NsJU4Ct2ZXXxYigxnOCl5j0piIbjYshFuqrpy0C8-_zZx8NxH0HRnEYffQ_WJhalyeiEWBEOOWHacVgA3KivdEk0u6fbEjVCij1qrmTcko0JxXIyJnycfEHruvd1tllsBFiXSGgwy24CNRTIRTyIDWPewq2B61KtI1FIcC0-hrJi2vQDSt_MNSbnS-Y3FxfY_2n7PnxYGqGSIY4-OcT_rnhYZ_4gEUU9Opw",
        chat: "어제 밥 뭐먹었어?",
        date: "3월8일"
      },
      {
        id: 11,
        name: "윙크하는 튜브",
        image:
          "https://lh3.googleusercontent.com/proxy/EJ03fo770poc3FmSxQDGb7AZrISa2dR7j32z4OMb7duTVL4rpIV-49dS8_jGyjA7o6Nc4WM5GMKDNKZEExaozRAvaNc1JT_YzXJQ0LYysUmv21_s2mtQsaOYzHw41xLRciUodQzPGSPGiUev4Dt827ZSsNQmXZLInihxRWPKwyoRAA5pxRhItkMCKwvGCeJNz04RlvebEDJZ87-R5i-c-MHkl30",
        chat: "알겠어!! 내일보자",
        date: "3월8일"
      },
      {
        id: 12,
        name: "어피치",
        image:
          "https://lh3.googleusercontent.com/proxy/tdo-n25PMrzt-EF77EuHwDvA5s4gVdujOvIyW-CVQetCzLEla5rUbJAmO-NOhX0VaZCqAR9cSxF1LJgMQxtGw4_CKiGjdE6h0oHcp-HNOACHb10SuMLgHqq6DxFkP4Gs3ft0JOGoxZpCj3zAZLFo1AOHTafTeM1D3iW1J96s60B3DEn6pZ4S6BREtA",
        chat: "하 진짜 너무하더라..",
        date: "3월8일"
      },
      {
        id: 13,
        name: "제이지",
        image:
          "https://lh3.googleusercontent.com/proxy/spjQarBv0n_bNeYyYFpDIs5s_rJ_dk0PoquW5jkPpIAkgpqVQoykcarjuopwNf3Bgueag2iKcseTs1Xl8St2fV8aWgp0vx2pFiaRadRzTSzZRCDuI7rjgpkgVC5uCd7mnxxSMqQyI3JOFb_vHpSB",
        chat: "아싸 로또 1등됬어",
        date: "3월8일"
      },
      {
        id: 14,
        name: "네오",
        image: "https://biketago.com/img/kakao/cat_03.jpg",
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
